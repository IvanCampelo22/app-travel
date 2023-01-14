import { Box } from '@mantine/core'
import { AdminLayout, Meta, NextPageWithLayout } from '@web/base-ui'

const IndexPage: NextPageWithLayout = () => {
  return <Box sx={{ fontWeight: 400 }}>Store Index Page</Box>
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
