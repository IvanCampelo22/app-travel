import { useState } from 'react'

import {
  Button,
  Container,
  Divider,
  Flex,
  Group,
  Paper,
  Select
} from '@mantine/core'

import { DateRangePicker, DateRangePickerValue } from '@mantine/dates'

import { IconCalendar, IconPlus } from '@tabler/icons'

import { AdminLayout, Meta, NextPageWithLayout } from '@web/base-ui'

import { CustomerServiceResume } from '@web/customer-service-resume'
import { Header } from '@web/header'
import { RoomPrefs } from '@web/room-prefs'

const IndexPage: NextPageWithLayout = () => {
  const [value, setValue] = useState<DateRangePickerValue>([
    new Date(2021, 11, 1),
    new Date(2021, 11, 5)
  ])

  return (
    <Container fluid px={112} py={34}>
      <Header
        title="Novo Atendimento"
        subtitle="12FEV20022020003 - 12/12/2022"
        justify="space-between"
      >
        <Button variant="default">Voltar</Button>
      </Header>
      <Divider color="gray.3" mt={12} />
      <Flex mt={36} gap="lg">
        <div>
          <Paper withBorder p={20}>
            <Header
              title="Cliente"
              subtitle="Selecione um cliente ou adicione um"
              subHead={true}
              justify="space-between"
            />
            <Divider color="gray.3" mt={20} mb={30} />
            <Flex justify="space-between">
              <Select
                placeholder="Selecine o cliente"
                styles={(theme) => ({
                  root: {
                    maxWidth: '95%',
                    width: '95%',
                    marginRight: 5
                  }
                })}
                data={[{ value: 'one', label: 'Jay Jay Okocha' }]}
              />
              <Button variant="default">
                <IconPlus size={20} stroke={1.5} />
              </Button>
            </Flex>
          </Paper>
          <Paper withBorder mt={36} p={20}>
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
                data={[{ value: 'one', label: 'Hospedagem' }]}
              />
              <Group grow>
                <Select
                  placeholder="Selecione tipo hospedagem"
                  data={[{ value: 'one', label: 'Hotel' }]}
                />
                <Select
                  placeholder="Selecione a cidade"
                  data={[{ value: 'one', label: 'Nova York' }]}
                />
              </Group>
              <Group grow>
                <DateRangePicker
                  clearable={false}
                  icon={<IconCalendar size={20} />}
                  styles={(theme) => ({
                    input: {
                      fontWeight: 500,
                      minWidth: 225
                    }
                  })}
                  inputFormat="DD/MM/YYYY"
                  value={value}
                  onChange={setValue}
                />
                <Select
                  placeholder="Selecione o hotel"
                  data={[{ value: 'one', label: 'Hilton Garden' }]}
                />
              </Group>
              <Group grow>
                <Select
                  placeholder="Selecione tipo hospedagem"
                  data={[{ value: 'one', label: 'Hotel' }]}
                />
                <Select
                  placeholder="Selecione quantidade de quartos"
                  data={[{ value: 'one', label: 'Nova York' }]}
                />
              </Group>
              <RoomPrefs />
            </Flex>
          </Paper>
        </div>
        <Paper p={20} withBorder>
          <Flex gap="lg" direction="column">
            <CustomerServiceResume />
            <CustomerServiceResume />
            <CustomerServiceResume />
          </Flex>
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
    {page}
  </AdminLayout>
)

export default IndexPage
