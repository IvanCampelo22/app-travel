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
import { useState } from 'react'

const queryClient = new QueryClient()

const today = new Date()

const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1)
const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0)

const IndexPage: NextPageWithLayout = () => {
  const API_URL = process.env.NEXT_PUBLIC_SERVER_URL

  const [dates, setDates] = useState<[Date | null, Date | null]>([firstDayOfMonth, lastDayOfMonth]);
  const [page, setPage] = useState<number>(1);

  const getBookings = useQuery(['getBookings', page], {
    staleTime: Infinity,
    cacheTime: 0,
    refetchOnMount: 'always',
    queryFn: () => {
      return fetch(`${API_URL}/bookings/?start_date='${dates[0]}'&end_date='${dates[1]}'&page=${page}`)
        .then((res) => res.json())
        .catch(() => alert('Erro ao buscar atendimentos'))
    }
  })

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

  const formatDateMonthDayYear = (dateString) => {
    const date = new Date(dateString)
    const monthNames = [
      "Jan", "Feb", "Mar",
      "Apr", "May", "Jun", "Jul",
      "Aug", "Sep", "Oct",
      "Nov", "Dec"
    ]

    const day = date.getDate()
    const monthIndex = date.getMonth()
    const year = date.getFullYear()

    return `${monthNames[monthIndex]} ${day}, ${year}`
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

  if (getBookings.isLoading) return <p>Loading...</p>

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
        <Filter dates={dates} onChangeDate={setDates} onClickFilter={() => { getBookings.refetch() }} />
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
                {getBookings.data.bookings 
                  ? getBookings.data.bookings.filter((booking) => booking.isActive).map((booking) => {
                    return (
                      <TableRow
                        key={booking.id}
                        createdAt={formatDateDayMonthYearTime(booking.createdAt)}
                        id={booking.id}
                        customer={booking.customerName}
                        customerEmail={booking.customerEmail}
                        status={booking.status.replace(/([A-Z])/g, ' $1')}
                        date={formatDateMonthDayYear(booking.createdAt)}
                        onClickDelete={() => { deleteBooking.mutate(booking.id) }}
                      />
                    )
                  })
                  : null}
              </tbody>
            </Table>
          </ScrollArea>
          <Divider color="gray.3" />
          <Pagination onClickNext={() =>  page === getBookings.data.totalPages ? null : setPage(page + 1)} onClickPrev={() => { page > 1 ? setPage(page - 1) : null }} />
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
