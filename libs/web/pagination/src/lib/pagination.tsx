import { Button, Flex, Group, Text } from '@mantine/core'

export function Pagination() {
  return (
    <Flex justify="space-between" align="center">
      <Text weight="500" color="gray.7">
        Page 1 of 10
      </Text>
      <Group>
        <Button variant="default" radius="md">
          Previus
        </Button>
        <Button variant="default" radius="md">
          Next
        </Button>
      </Group>
    </Flex>
  )
}

export default Pagination
