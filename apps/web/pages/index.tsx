import { Box } from '@mantine/core'
import { Meta, NextPageWithLayout, StoreLayout } from '@web/base-ui'

const IndexPage: NextPageWithLayout = () => {
  return <Box sx={{ fontWeight: 400 }}>Test Page - Index</Box>
}

IndexPage.getLayout = (page) => (
  <StoreLayout
    meta={
      <Meta
        title="Viagem10 - Viagens, Resorts..."
        description="Viagem10 , o melhor para seus sonhos"
      />
    }
  >
    {page}
  </StoreLayout>
)

export default IndexPage
