import Link from 'next/link'

import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Paper,
  ScrollArea,
  Table,
  Title
} from '@mantine/core'

import {
  QueryClient,
  QueryClientProvider,
  useMutation,
  useQuery
} from '@tanstack/react-query'

import { IconDownload, IconPlus } from '@tabler/icons-react'

import { Filter } from '@web/filter'
import { Header } from '@web/header'
import { HorizontalTabs } from '@web/horizontal-tabs'
import { Pagination } from '@web/pagination'
import { SideNavbar } from '@web/side-navbar'
import { TableRow } from '@web/table-row'

import { AdminLayout, Meta, NextPageWithLayout } from '@web/base-ui'

const queryClient = new QueryClient()

const IndexPage: NextPageWithLayout = () => {
  const API_URL = process.env.NEXT_PUBLIC_SERVER_URL

  const { data } = useQuery(['bookings'], () =>
    fetch(`${API_URL}/bookings`)
      .then((res) => res.json())
      .catch(() => alert('Erro ao buscar atendimentos'))
  )

  const deleteBooking = useMutation((bookingId) => {
    return fetch(`${API_URL}/bookings/${bookingId}`, {
      method: 'DELETE',
      headers: { 'Content-type': 'application/json;charset=UTF-8' }
    })
      .then(() => {
        alert('Atendimento deletado')
      })
      .catch(() => alert('Erro ao deletar atendimento'))
  })

  return (
    <Flex>
      <SideNavbar />
      <Container fluid py="md">
        <Header
          title="Customer Serivce"
          subtitle="View your trades and transactions."
          mt={10}
          justify="space-between"
        >
          <Button
            leftIcon={<IconDownload size={18} />}
            radius="md"
            variant="default"
          >
            Export
          </Button>
          <Link href="/admin/service-record">
            <Button
              color="blue.8"
              radius="md"
              leftIcon={<IconPlus size={18} />}
            >
              Add
            </Button>
          </Link>
        </Header>
        <HorizontalTabs mt={60} mb="xl" />
        <Filter />
        <Paper withBorder mt="lg" shadow="lg">
          <Box p="md">
            <Title order={4} color="gray.9">
              Listing
            </Title>
          </Box>
          <Divider color="gray.3" />
          <ScrollArea>
            <Table
              verticalSpacing="lg"
              horizontalSpacing={20}
              sx={{ minWidth: 1200 }}
            >
              <thead style={{ backgroundColor: '#F9FAFB' }}>
                <tr>
                  <th>ORDER</th>
                  <th>CUSTOMER</th>
                  <th>CREATED BY</th>
                  <th>ISSUE DATE</th>
                  <th>PRODUCTS</th>
                  <th>STATUS</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {data
                  ? data.map((row) => {
                      return (
                        <TableRow
                          key={row.id}
                          id={row.id}
                          customer={row.customerName}
                          customerEmail={row.customerEmail}
                          status={row.status.replace(/([A-Z])/g, ' $1')}
                          date={row.createdAt}
                          onClickDelete={() => deleteBooking.mutate(row.id)}
                        />
                      )
                    })
                  : null}
              </tbody>
            </Table>
          </ScrollArea>
          <Divider color="gray.3" />
          <Pagination p="md" />
        </Paper>
      </Container>
    </Flex>
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
