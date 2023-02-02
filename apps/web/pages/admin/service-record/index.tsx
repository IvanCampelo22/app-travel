import { useState } from 'react'

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
                data={[{ value: 'one', label: 'Jay Jay Okocha' }]}
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
                  icon={<IconCalendar size={18} />}
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
                  data={[{ value: 'one', label: 'Meia pensão' }]}
                />
                <Select
                  placeholder="Selecione quantidade de quartos"
                  data={[{ value: 'one', label: '1 Quarto' }]}
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
            <Button color="blue.8">Save changes</Button>
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
    {page}
  </AdminLayout>
)

export default IndexPage
