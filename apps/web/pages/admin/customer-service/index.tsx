import { Box, Container, Divider, Paper, Table, Title } from '@mantine/core'

import { Filter } from '@viagem10-monorepo/web/filter'
import { HorizontalTabs } from '@viagem10-monorepo/web/horizontal-tabs'
import { PageHeader } from '@viagem10-monorepo/web/page-header'
import { Pagination } from '@web/pagination'
import { TableRow } from '@web/table-row'

import { AdminLayout, Meta, NextPageWithLayout } from '@web/base-ui'

const IndexPage: NextPageWithLayout = () => {
  return (
    <Container fluid p={20}>
      <PageHeader mt={10} justify="space-between" />
      <HorizontalTabs mt={60} mb={30} />
      <Filter />
      <Paper withBorder mt={20} shadow="lg">
        <Box p={20}>
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
        <Pagination p={20} />
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
