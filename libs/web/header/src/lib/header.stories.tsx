import { Button } from '@mantine/core'

import { IconDownload, IconPlus } from '@tabler/icons'

import Header from './header'

export default {
  title: 'Header',
  component: Header
}

export const HeaderStorie = () => {
  return (
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
  )
}
