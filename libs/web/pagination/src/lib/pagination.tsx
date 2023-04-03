import { Button, Flex, Group, Text } from '@mantine/core'

interface PaginationProps {
  onClickPrev?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  onClickNext?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export function Pagination(props: PaginationProps) {
  return (
    <Flex p="md" justify="space-between" align="center">
      <Text weight="500" color="gray.7">
        Page 1 of 10
      </Text>
      <Group>
        <Button variant="default" radius="md" onClick={props.onClickPrev}>
          Previus
        </Button>
        <Button variant="default" radius="md" onClick={props.onClickNext}>
          Next
        </Button>
      </Group>
    </Flex>
  )
}

export default Pagination
