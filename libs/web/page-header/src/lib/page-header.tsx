import { Button, Flex, Group, Title } from '@mantine/core'

import { IconDownload, IconPlus } from '@tabler/icons'

export function PageHeader() {
  return (
    <Flex justify="space-between">
      <div>
        <Title order={1} size={30} color="gray.9" weight={500}>
          Customer Service
        </Title>
        <Title order={5} color="gray.5" weight={400}>
          View your trades and transactions.
        </Title>
      </div>
      <Group>
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
      </Group>
    </Flex>
  )
}

export default PageHeader
