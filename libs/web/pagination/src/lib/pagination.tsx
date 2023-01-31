import {
  Button,
  Flex,
  Group,
  MantineStyleSystemProps,
  Text
} from '@mantine/core'

interface PaginationProps extends MantineStyleSystemProps {
  default: string
}

export function Pagination(props: PaginationProps) {
  return (
    <Flex {...props} justify="space-between" align="center">
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
