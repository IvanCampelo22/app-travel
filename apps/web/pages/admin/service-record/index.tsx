import { useState } from 'react'

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
  useQuery
} from '@tanstack/react-query'

import { DateRangePicker } from '@mantine/dates'
import { IconCalendar, IconPlus } from '@tabler/icons-react'

import { AdminLayout, Meta, NextPageWithLayout } from '@web/base-ui'
import { CustomerServiceResume } from '@web/customer-service-resume'
import { Header } from '@web/header'
import { RoomPrefs } from '@web/room-prefs'

const queryClient = new QueryClient()

const schema = z.object({
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

const IndexPage: NextPageWithLayout = () => {
  const API_URL = process.env.NEXT_PUBLIC_SERVER_URL

  console.log(API_URL)

  const [opened, setOpened] = useState(false)
  const [rooms, setRooms] = useState<any[]>([])

  const { data } = useQuery(
    ['newBooking'],
    () =>
      fetch(`${API_URL}/bookings/new`)
        .then((res) => res.json())
        .catch(() => alert('Erro ao criar booking')),
    {
      staleTime: Infinity
    }
  )

  const bookingUpdate = {
    ...data,
    data: {
      products: {
        createMany: {
          data: [
            {
              tenantId: 1,
              accountId: 1,
              ownerId: 1,
              category: 'Accommodation',
              accommodationType: '',
              toLocation: '',
              startDate: new Date(),
              endDate: new Date(),
              hotelName: '',
              hotelMealPlan: ''
            }
          ]
        }
      }
    }
  }

  const form = useForm({
    validate: zodResolver(schema),
    initialValues: bookingUpdate
  })

  const mutation = useMutation(() => {
    return fetch(`${API_URL}/bookings/${data.id}`, {
      method: 'PATCH',
      body: JSON.stringify(form.values),
      headers: { 'Content-type': 'application/json;charset=UTF-8' }
    })
      .then(() => {
        alert('Novo Produto Adicionado')
      })
      .catch(() => alert('Erro ao adicionar produto'))
  })

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
          <TextInput label="Nome" />
          <Group mt="md" grow>
            <TextInput label="Telefone" />
            <TextInput label="Email" />
          </Group>
          <Group mt="md" position="right">
            <Button color="blue.9">Adicionar</Button>
          </Group>
        </Box>
      </Drawer>
      <Header
        title="Novo Atendimento"
        subtitle={`12FEV20022020003 - 12/12/2012`}
        justify="space-between"
      >
        <Link href="/admin/customer-service">
          <Button variant="default">Voltar</Button>
        </Link>
      </Header>
      <Divider color="gray.3" mt="sm" />
      <Grid mt={36} grow>
        <Grid.Col lg={7}>
          <form
            onSubmit={form.onSubmit(() => {
              mutation.mutate()
            })}
          >
            <Paper withBorder p="md">
              <Header
                title="Cliente"
                subtitle="Selecione um cliente ou adicione um"
                subHead={true}
                justify="space-between"
              />
              <Divider color="gray.3" mt="lg" mb="lg" />
              <Flex justify="space-between" gap="sm">
                <Select
                  placeholder="Selecine o cliente"
                  styles={(theme) => ({
                    root: {
                      maxWidth: '95%',
                      width: '95%'
                    },
                    error: {
                      display: 'none'
                    }
                  })}
                  data={[{ value: 'Jay Jay Okocha', label: 'Jay Jay Okocha' }]}
                  {...form.getInputProps('data.customerName')}
                />
                <Button variant="default" onClick={() => setOpened(true)}>
                  <IconPlus size={18} stroke={1.5} />
                </Button>
              </Flex>
            </Paper>
            <Paper withBorder mt={36} p="md">
              <Flex direction="column" gap="xl">
                <Header
                  title="Produtos"
                  subtitle="Adicione um ou mais produtos"
                  subHead={true}
                  justify="space-between"
                />
                <Divider color="gray.3" />
                <Select
                  placeholder="Selecione o produto"
                  styles={(theme) => ({
                    error: {
                      display: 'none'
                    }
                  })}
                  data={[{ value: 'Accommodation', label: 'Hospedagem' }]}
                  {...form.getInputProps(
                    'data.products.createMany.data.0.category'
                  )}
                />
                <Group grow>
                  <Select
                    placeholder="Selecione tipo hospedagem"
                    styles={(theme) => ({
                      error: {
                        display: 'none'
                      }
                    })}
                    data={[{ value: 'Hotel', label: 'Hotel' }]}
                    {...form.getInputProps(
                      'data.products.createMany.data.0.accommodationType'
                    )}
                  />
                  <Select
                    placeholder="Selecione a cidade"
                    styles={(theme) => ({
                      error: {
                        display: 'none'
                      }
                    })}
                    data={[{ value: 'Nova York', label: 'Nova York' }]}
                    {...form.getInputProps(
                      'data.products.createMany.data.0.toLocation'
                    )}
                  />
                </Group>
                <Group grow>
                  <DateRangePicker
                    clearable={false}
                    icon={<IconCalendar size={18} />}
                    inputFormat="DD/MM/YYYY"
                    placeholder="Data de ida e volta"
                    value={[new Date(), new Date()]}
                    onChange={(e) => {
                      form.setFieldValue(
                        'data.products.createMany.data.0.startDate',
                        e[0]
                      )
                      form.setFieldValue(
                        'data.products.createMany.data.0.endDate',
                        e[1]
                      )
                    }}
                  />
                  <Select
                    placeholder="Selecione o hotel"
                    styles={(theme) => ({
                      error: {
                        display: 'none'
                      }
                    })}
                    data={[{ value: 'Hilton Garden', label: 'Hilton Garden' }]}
                    {...form.getInputProps(
                      'data.products.createMany.data.0.hotelName'
                    )}
                  />
                </Group>
                <Group grow>
                  <Select
                    placeholder="Plano de alimentação"
                    styles={(theme) => ({
                      error: {
                        display: 'none'
                      }
                    })}
                    data={[{ value: 'Meia Pensão', label: 'Meia pensão' }]}
                    {...form.getInputProps(
                      'data.products.createMany.data.0.hotelMealPlan'
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
                <Group position="right">
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
