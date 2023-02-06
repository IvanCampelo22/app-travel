
import { QueryClient, QueryClientProvider, useMutation, useQuery } from 'react-query'

import { useForm, zodResolver } from '@mantine/form'

import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Group,
  Paper,
  Select
} from '@mantine/core'

import { DateRangePicker } from '@mantine/dates'

import { IconCalendar, IconPlus } from '@tabler/icons-react'

import { Prisma } from '@prisma/client'

import { BookingUpdateArgsSchema } from '@common/validation'

import { AdminLayout, Meta, NextPageWithLayout } from '@web/base-ui'

import { CustomerServiceResume } from '@web/customer-service-resume'
import { Header } from '@web/header'
import { RoomPrefs } from '@web/room-prefs'

const queryClient = new QueryClient()

const IndexPage: NextPageWithLayout = () => {

  const { data } = useQuery('newBooking', () =>
    fetch('http://localhost:3000/api/bookings/new')
      .then(res =>
        res.json()
      )
      .catch(() => alert('Erro ao criar booking')), {
    staleTime: Infinity
  }
  )

  const bookingUpdate: Prisma.BookingUpdateArgs = {
    ...data,
    data: {
      customerName: 'Rafael',
      products: {
        createMany: {
          data: [{
            tenantId: 1,
            accountId: 1,
            ownerId: 1,
            category: 'Accommodation',
            accommodationType: 'Hotel',
            toLocation: '',
            startDate: new Date(),
            endDate: new Date(),
            hotelName: '',
            hotelMealPlan: '',

          }]
        }
      }
    }
  }

  const form = useForm({
    validate: zodResolver(BookingUpdateArgsSchema),
    initialValues: bookingUpdate
  })

  const mutation = useMutation(() => {
    return fetch(`http://localhost:3000/api/bookings/${data.id}`, {
      method: 'PATCH',
      body: JSON.stringify(form.values),
      headers: { 'Content-type': 'application/json;charset=UTF-8' }
    })
      .then(() => { form.setValues(bookingUpdate); alert('Novo Produto Adicionado') })
      .catch(() => alert('Erro ao adicionar produto'))
  })

  return (
    <Container size="xl" py="md">
      <Header
        title="Novo Atendimento"
        subtitle="12FEV20022020003 - 12/12/2022"
        justify="space-between"
      >
        <Button variant="default">Voltar</Button>
      </Header>
      <Divider color="gray.3" mt="sm" />
      <Flex mt={36} gap="lg">
        <div>
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
                  }
                })}
                data={[{ value: 'Jay Jay Okocha', label: 'Jay Jay Okocha' }]}
                {...form.getInputProps('data.customerName')}
              />
              <Button variant="default">
                <IconPlus size={18} stroke={1.5} />
              </Button>
            </Flex>
          </Paper>
          <Paper withBorder mt={36} p="md">
            <Flex direction="column" gap="lg">
              <Header
                title="Produtos"
                subtitle="Adicione um ou mais produtos"
                subHead={true}
                justify="space-between"
              />
              <Divider color="gray.3" />
              <Select
                placeholder="Selecione o produto"
                data={[{ value: 'Accommodation', label: 'Hospedagem' }]}
                {...form.getInputProps('data.products.createMany.data.0.category')}
              />
              <Group grow>
                <Select
                  placeholder="Selecione tipo hospedagem"
                  data={[{ value: 'Hotel', label: 'Hotel' }]}
                  {...form.getInputProps('data.products.createMany.data.0.accommodationType')}
                />
                <Select
                  placeholder="Selecione a cidade"
                  data={[{ value: 'Nova York', label: 'Nova York' }]}
                  {...form.getInputProps('data.products.createMany.data.0.toLocation')}
                />
              </Group>
              <Group grow>
                <DateRangePicker
                  clearable={false}
                  icon={<IconCalendar size={18} />}
                  inputFormat="DD/MM/YYYY"
                  placeholder="Data de ida e volta"
                  onChange={(e) => { form.setFieldValue('data.products.createMany.data.0.startDate', e[0]); form.setFieldValue('data.products.createMany.data.0.endDate', e[1]) }}
                />
                <Select
                  placeholder="Selecione o hotel"
                  data={[{ value: 'Hilton Garden', label: 'Hilton Garden' }]}
                  {...form.getInputProps('data.products.createMany.data.0.hotelName')}
                />
              </Group>
              <Group grow>
                <Select
                  placeholder="Selecione tipo hospedagem"
                  data={[{ value: 'Meia Pensão', label: 'Meia pensão' }]}
                  {...form.getInputProps('data.products.createMany.data.0.hotelMealPlan')}
                />
                <Select
                  placeholder="Selecione quantidade de quartos"
                  data={[{ value: '', label: '1 Quarto' }]}
                />
              </Group>
              <RoomPrefs />
            </Flex>
          </Paper>
        </div>
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
          <Group position="right" p="md">
            <Button color="blue.8" onClick={() => { mutation.mutate() }}>
              Save changes
            </Button>
          </Group>
        </Paper>
      </Flex>
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
    <QueryClientProvider client={queryClient}>
      {page}
    </QueryClientProvider>
  </AdminLayout>
)

export default IndexPage
