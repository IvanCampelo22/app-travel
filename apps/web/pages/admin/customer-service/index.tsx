import {
  Box,
  Button,
  Container,
  Divider,
  Paper,
  Table,
  Title
} from '@mantine/core'

import { IconDownload, IconPlus } from '@tabler/icons-react'

import { Filter } from '@web/filter'
import { Header } from '@web/header'
import { HorizontalTabs } from '@web/horizontal-tabs'
import { Pagination } from '@web/pagination'
import { TableRow } from '@web/table-row'

import { AdminLayout, Meta, NextPageWithLayout } from '@web/base-ui'

const IndexPage: NextPageWithLayout = () => {
  return (
    <Container size="xl" py="md">
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
        <Button color="blue.8" radius="md" leftIcon={<IconPlus size={18} />}>
          Add
        </Button>
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
        <Table verticalSpacing="lg" horizontalSpacing={20}>
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
            <TableRow />
            <TableRow />
          </tbody>
        </Table>
        <Divider color="gray.3" />
        <Pagination p="md" />
      </Paper>
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
