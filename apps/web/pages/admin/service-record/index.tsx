import { useEffect, useState } from 'react'

import {
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  Flex,
  Grid,
  Group,
  NumberInput,
  Paper,
  Select,
  TextInput
} from '@mantine/core'

import { z } from 'zod'

import { useForm, zodResolver } from '@mantine/form'

import Link from 'next/link'

import {
  QueryClient,
  QueryClientProvider,
  useMutation,
  useQueries
} from '@tanstack/react-query'

import { DateRangePicker } from '@mantine/dates'
import { IconCalendar, IconPlus } from '@tabler/icons-react'

import { AdminLayout, Meta, NextPageWithLayout } from '@web/base-ui'
import { CustomerServiceResume } from '@web/customer-service-resume'
import { Header } from '@web/header'
import { RoomPrefs } from '@web/room-prefs'

const queryClient = new QueryClient()

const schemaProduct = z.object({
  data: z.object({
    products: z.object({
      createMany: z.object({
        data: z.array(
          z.object({
            category: z.string().min(1),
            accommodationType: z.string().min(1),
            toLocation: z.string().min(1),
            hotelName: z.string().min(1),
            hotelMealPlan: z.string().min(1)
          })
        )
      })
    })
  })
})

const schemaClient = z.object({
  data: z.object({
    tenantId: z.number().min(1),
    ownerId: z.number().min(1),
    category: z.string().min(1),
    name: z.string().min(2, { message: 'Name should have at least 2 letters' }),
    email: z.string().email({ message: 'Invalid email' }),
    phone: z.string()
  })
})

interface IBooking {
  data: {
    customerName: string
    customerEmail: string
    customerPhone: string
    products: {
      createMany: {
        data: {
          tenantId: number
          accountId: number
          ownerId: number
          category: string
          accommodationType: string
          toLocation: string
          startDate: Date
          endDate: Date
          hotelName: string
          hotelMealPlan: string
        }[];
      };
    };
  };
}

interface IClient {
  data: {
    tenantId: number
    ownerId: number
    category: string
    name: string
    email: string
    phone: string
  };
}

const IndexPage: NextPageWithLayout = () => {
  const API_URL = process.env.NEXT_PUBLIC_SERVER_URL

  const [opened, setOpened] = useState<boolean>(false)
  const [rooms, setRooms] = useState<any[]>([])

  const [newBooking, getClients, getBookingProducts] = useQueries({
    queries: [
      {
        queryKey: ['newBooking'],
        staleTime: Infinity,
        cacheTime: 0,
        refetchOnMount: 'always',
        queryFn: () =>
          fetch(`${API_URL}/bookings/new`)
            .then((res) => res.json())
            .catch(() => alert('Erro ao criar booking')),
      },

      {
        queryKey: ['getClients'],
        queryFn: () =>
          fetch(`${API_URL}/accounts`)
            .then((res) => res.json())
            .catch(() => alert('Erro ao buscar usuários')),
      },

      {
        queryKey: ['getBookingProducts'],
        queryFn: async () => {
          if (newBooking.isSuccess) {
            return fetch(`${API_URL}/bookingproducts/${newBooking.data.id}`)
              .then((res) => res.json())
              .catch(() => alert('Erro ao buscar produtos'));
          } else {
            return null
          }
        }
      }
    ],
  })

  useEffect(() => {
    if (getBookingProducts.data) {
      formProducts.setValues({
        data: getBookingProducts.data
      });
    }
  }, [getBookingProducts.data])

  const bookingUpdate = {
    data: {
      ...newBooking.data,
      products: {
        createMany: {
          data: []
        }
      }
    }
  }

  const clientCreate = {
    data: {
      tenantId: 1,
      ownerId: 1,
      category: 'Agency',
      name: '',
      email: '',
      phone: ''
    }
  }

  const clients = !getClients.isLoading ? getClients.data.map((client) => client.name) : []

  const formBooking = useForm<IBooking>({
    validate: zodResolver(schemaProduct),
    initialValues: bookingUpdate
  })

  const formClient = useForm<IClient>({
    validate: zodResolver(schemaClient),
    initialValues: clientCreate
  })

  const formProducts = useForm({
    initialValues: {
      data: [
        {
          tenantId: 1,
          accountId: 1,
          ownerId: 1,
          category: 'Accommodation',
          accommodationType: '',
          toLocation: '',
          startDate: '',
          endDate: '',
          hotelName: '',
          hotelMealPlan: ''
        }
      ]
    }
  })

  const selectClient = (name) => {
    const client = getClients.data.filter(client => client.name === name)

    formBooking.setFieldValue('data.customerName', client[0].name)
    formBooking.setFieldValue('data.customerEmail', client[0].email)
    formBooking.setFieldValue('data.customerPhone', client[0].phone)
  }

  const saveChanges = useMutation(() => {
    return fetch(`${API_URL}/bookings/${newBooking.data.id}`, {
      method: 'PATCH',
      body: JSON.stringify(formBooking.values.data),
      headers: { 'Content-type': 'application/json;charset=UTF-8' }
    })
      .then(() => {
        alert('Novo produto adicionado')
        getBookingProducts.refetch()
        updateProducts.mutate()
        formBooking.setFieldValue('data.products.createMany.data', []);
      })
      .catch(() => alert('Erro ao adicionar produto'))
  })

  const updateProducts = useMutation(() => {
    return fetch(`${API_URL}/bookingproducts`, {
      method: 'PATCH',
      body: JSON.stringify(formProducts.values.data),
      headers: { 'Content-type': 'application/json;charset=UTF-8' }
    })
      .then(() => {
        alert('Novo produto adicionado')
      })
      .catch(() => alert('Erro ao adicionar produto'))
  })

  const newClient = useMutation(() => {
    setOpened(false);
    return fetch(`${API_URL}/accounts`, {
      method: 'POST',
      body: JSON.stringify(formClient.values.data),
      headers: { 'Content-type': 'application/json;charset=UTF-8' }
    })
      .then(() => {
        alert('Novo cliente adicionado')
      })
      .catch(() => alert('Erro ao adicionar cliente'))
  })

  const formatDate = (dateString) => {
    const match = dateString.match(/^(\d{4})-(\d{2})-(\d{2}).*$/)
    const year = match[1]
    const month = match[2]
    const day = match[3]

    return `${year}/${month}/${day}`
  }

  const formatDateDayMonthYearTime = (dateString) => {
    const date = new Date(dateString);
    const year = date.getUTCFullYear();
    const month = date.toLocaleString('en-US', { month: 'short' }).toUpperCase();
    const day = String(date.getUTCDate()).padStart(2, '0');
    const hour = String(date.getUTCHours()).padStart(2, '0');
    const minute = String(date.getUTCMinutes()).padStart(2, '0');
    const second = String(date.getUTCSeconds()).padStart(2, '0');
    const formattedDateString = `${year}${month}${day}${hour}${minute}${second}`;

    return formattedDateString;
  };

  if (newBooking.isLoading) return <p>Loading...</p>

  return (
    <Container size="xl" py="md">
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        padding="xl"
        size="xl"
        position="right"
      >
        <Header
          subHead={true}
          title="Adicionar Cliente"
          subtitle="Preencha os dados do cliente"
        />
        <Box mt="md">
          <form
            onSubmit={formClient.onSubmit(() => {
              newClient.mutate()
            })}>
            <TextInput withAsterisk label="Nome"  {...formClient.getInputProps('data.name')} />
            <Group mt="md" grow>
              <TextInput label="Telefone" {...formClient.getInputProps('data.phone')} />
              <TextInput withAsterisk label="Email" {...formClient.getInputProps('data.email')} />
            </Group>
            <Group mt="md" position="right">
              <Button color="blue.9" type="submit">Adicionar</Button>
            </Group>
          </form>
        </Box>
      </Drawer>
      <Header
        title={'New Booking'}
        subtitle={`${formatDateDayMonthYearTime(newBooking.data?.createdAt)} - ${formatDate(newBooking.data?.createdAt)}`}
        justify="space-between"
      >
        <Link href="/admin/customer-service">
          <Button variant="default">Back</Button>
        </Link>
      </Header>
      <Divider color="gray.3" mt="sm" />
      <Grid mt={36} grow>
        <Grid.Col lg={7}>
          <form
            id="newProduct"
            onSubmit={formBooking.onSubmit(() => {
              saveChanges.mutate()
            })}
          >
            <Paper withBorder p="md">
              <Header
                title="Customer"
                subtitle="Select a customer or add one"
                subHead={true}
                justify="space-between"
              />
              <Divider color="gray.3" mt="lg" mb="lg" />
              <Flex justify="space-between" gap="sm">
                <Select
                  placeholder="Select the customer"
                  styles={(theme) => ({
                    root: {
                      maxWidth: '95%',
                      width: '95%'
                    },
                    error: {
                      display: 'none'
                    }
                  })}
                  data={clients}
                  onChange={(selectedOption) => {
                    selectClient(selectedOption)
                  }}
                />
                <Button variant="default" onClick={() => setOpened(true)}>
                  <IconPlus size={18} stroke={1.5} />
                </Button>
              </Flex>
            </Paper>
            <Paper withBorder mt={36} p="md">
              <Flex direction="column" gap="xl">
                <Header
                  title="Products"
                  subtitle="Add one or more products"
                  subHead={true}
                  justify="space-between"
                >
                  <Button color="blue.8"
                    onClick={() =>
                      formBooking.insertListItem('data.products.createMany.data', {
                        tenantId: 1,
                        accountId: 1,
                        ownerId: 1,
                        category: 'Accommodation',
                        accommodationType: '',
                        toLocation: '',
                        startDate: '',
                        endDate: '',
                        hotelName: '',
                        hotelMealPlan: ''
                      })
                    }>New product</Button>
                </Header>
                <Divider color="gray.3" />
                {formBooking.values.data.products.createMany.data.map((product, index) => {
                  return(
                    <Flex gap="xl" direction="column">
                      <Select
                        key={index}
                        placeholder="Selecione o produto"
                        styles={(theme) => ({
                          error: {
                            display: 'none'
                          }
                        })}
                        data={[{ value: 'Accommodation', label: 'Accommodation' }]}
                        {...formBooking.getInputProps(
                          `data.products.createMany.data.${index}.category`
                        )}
                      />
                      <Group grow>
                        <Select
                          placeholder="Select hosting type"
                          styles={(theme) => ({
                            error: {
                              display: 'none'
                            }
                          })}
                          data={[{ value: 'Hotel', label: 'Hotel' }]}
                          {...formBooking.getInputProps(
                            `data.products.createMany.data.${index}.accommodationType`
                          )}
                        />
                        <Select
                          placeholder="Select the city"
                          styles={(theme) => ({
                            error: {
                              display: 'none'
                            }
                          })}
                          data={[{ value: 'Nova York', label: 'Nova York' }]}
                          {...formBooking.getInputProps(
                            `data.products.createMany.data.${index}.toLocation`
                          )}
                        />
                      </Group>
                      <Group grow>
                        <DateRangePicker
                          clearable={false}
                          icon={<IconCalendar size={18} />}
                          inputFormat="DD/MM/YYYY"
                          placeholder="Departure and return date"
                          onChange={(e) => {
                            formBooking.setFieldValue(
                              `data.products.createMany.data.${index}.startDate`,
                              e[0]
                            )
                            formBooking.setFieldValue(
                              `data.products.createMany.data.${index}.endDate`,
                              e[1]
                            )
                          }}
                        />
                        <Select
                          placeholder="Select the hotel"
                          styles={(theme) => ({
                            error: {
                              display: 'none'
                            }
                          })}
                          data={[{ value: 'Hilton Garden', label: 'Hilton Garden' }]}
                          {...formBooking.getInputProps(
                            `data.products.createMany.data.${index}.hotelName`
                          )}
                        />
                      </Group>
                      <Group grow>
                        <Select
                          placeholder="Meal plan"
                          styles={(theme) => ({
                            error: {
                              display: 'none'
                            }
                          })}
                          data={[{ value: 'Half Board', label: 'Half Board' }]}
                          {...formBooking.getInputProps(
                            `data.products.createMany.data.${index}.hotelMealPlan`
                          )}
                        />
                        <NumberInput
                          min={1}
                          max={7}
                          placeholder="Quartos"
                          onChange={(e) =>
                            e > rooms.length
                              ? setRooms([...rooms, [e]])
                              : setRooms(rooms.slice(0, -1))
                          }
                        />
                      </Group>
                      {rooms.map((room, i) => {
                        return <RoomPrefs key={i} />
                      })}
                    </Flex>
                  )
                })}
                {getBookingProducts.data !== null && getBookingProducts.data ? getBookingProducts.data.map((bookingProduct, i) => {
                  return (
                    <Flex key={bookingProduct.id} gap="xl" mt="xl" direction="column">
                      <Select
                        placeholder="Selecione o produto"
                        styles={(theme) => ({
                          error: {
                            display: 'none'
                          }
                        })}
                        data={[{ value: 'Accommodation', label: 'Accommodation' }]}
                        {...formProducts.getInputProps(
                          `data.${i}.category`
                        )}
                      />
                      <Group grow>
                        <Select
                          placeholder="Select hosting type"
                          styles={(theme) => ({
                            error: {
                              display: 'none'
                            }
                          })}
                          data={[{ value: 'Hotel', label: 'Hotel' }]}
                          {...formProducts.getInputProps(
                            `data.${i}.accommodationType`
                          )}
                        />
                        <Select
                          placeholder="Select the city"
                          styles={(theme) => ({
                            error: {
                              display: 'none'
                            }
                          })}
                          data={[{ value: 'Nova York', label: 'Nova York' }]}
                          {...formProducts.getInputProps(
                            `data.${i}.toLocation`
                          )}
                        />
                      </Group>
                      <Group grow>
                        <DateRangePicker
                          clearable={false}
                          icon={<IconCalendar size={18} />}
                          inputFormat="DD/MM/YYYY"
                          placeholder="Departure and return date"
                          onChange={(e) => {
                            formProducts.setFieldValue(
                              `data.${i}.startDate`,
                              e[0]
                            )
                            formProducts.setFieldValue(
                              `data.${i}.endDate`,
                              e[1]
                            )
                          }}
                          defaultValue={[new Date(bookingProduct.startDate), new Date(bookingProduct.endDate)]}
                        />
                        <Select
                          placeholder="Select the hotel"
                          styles={(theme) => ({
                            error: {
                              display: 'none'
                            }
                          })}
                          data={[{ value: 'Hilton Garden', label: 'Hilton Garden' }]}
                          {...formProducts.getInputProps(
                            `data.${i}.hotelName`
                          )}
                        />
                      </Group>
                      <Group grow>
                        <Select
                          placeholder="Meal plan"
                          styles={(theme) => ({
                            error: {
                              display: 'none'
                            }
                          })}
                          data={[{ value: 'Half Board', label: 'Half Board' }]}
                          {...formProducts.getInputProps(
                            `data.${i}.hotelMealPlan`
                          )}
                        />
                        <NumberInput
                          min={1}
                          max={7}
                          placeholder="Quartos"
                          onChange={(e) =>
                            e > rooms.length
                              ? setRooms([...rooms, [e]])
                              : setRooms(rooms.slice(0, -1))
                          }
                        />
                      </Group>
                    </Flex>
                  )
                }) : null}
                <Group position="right" >
                  <Button color="blue.8" type="submit">
                    Save changes
                  </Button>
                </Group>
              </Flex>
            </Paper>
          </form>
        </Grid.Col>
        <Grid.Col lg={2}>
          <Paper withBorder>
            <Box p="md">
              <Header
                title="Resumo do Atendimento"
                subtitle="localizador #23ABC12"
                subHead={true}
              />
              <Divider color="gray.3" mb="md" mt="sm" />
              <Flex gap="lg" direction="column">
                <CustomerServiceResume />
                <CustomerServiceResume />
                <CustomerServiceResume />
              </Flex>
            </Box>
            <Divider color="gray.3" />
          </Paper>
        </Grid.Col>
      </Grid>
    </Container>
  )
}

IndexPage.getLayout = (page) => (
  <AdminLayout
    meta={
      <Meta
        title="Viagem10 - Viagens, Resorts..."
        description="Viagem10 , o melhor para seus sonhos"
      />
    }
  >
    <QueryClientProvider client={queryClient}>{page}</QueryClientProvider>
  </AdminLayout>
)

export default IndexPage
