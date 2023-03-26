import Link from 'next/link'

import {
  ActionIcon,
  Avatar,
  Badge,
  createStyles,
  Flex,
  Group,
  Text
} from '@mantine/core'

import { IconEdit, IconTrash } from '@tabler/icons-react'

const useStyles = createStyles((theme) => ({
  dot: {
    height: '10px',
    width: '10px',
    backgroundColor: theme.colors.gray[5],
    borderRadius: '50%',
    display: 'inline-block'
  },

  iconsEditAndRemove: {
    color: theme.colors.gray[5]
  }
}))

interface TableRowPrefs {
  id: string
  customer: string
  customerEmail: string
  date: string
  status: string
  onClickDelete: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void
}

export function TableRow(props: TableRowPrefs) {
  const { classes } = useStyles()

  return (
    <tr>
      <td>
        <Text color="gray.5" weight="500">
          12FEV2022123012
        </Text>
      </td>
      <td>
        <Flex gap="md" align="center">
          <Avatar radius="xl" />
          <div>
            <Text color="gray.9" weight="500" size={15}>
              {props.customer}
            </Text>
            <Text color="gray.5" weight="500" size={13}>
              {props.customerEmail}
            </Text>
          </div>
        </Flex>
      </td>
      <td>
        <Flex gap="md" align="center">
          <Avatar radius="xl" />
          <div>
            <Text color="gray.9" weight="500" size={15}>
              Bruno Loepert
            </Text>
            <Text color="gray.5" weight="500" size={13}>
              bruno@viagem10.com
            </Text>
          </div>
        </Flex>
      </td>
      <td>
        <Text color="gray.5" weight="500">
          {props.date}
        </Text>
      </td>
      <td>
        <Text color="gray.5" weight="500">
          Accommodation, Ticket
        </Text>
      </td>
      <td>
        <Badge color="gray.7">
          <Flex align="center" gap="sm">
            <span className={classes.dot}></span>
            <Text>{props.status}</Text>
          </Flex>
        </Badge>
      </td>
      <td>
        <Group>
          <Link
            href={{
              pathname: '/admin/service-record',
              query: { bookingId: props.id }
            }}
          >
            <ActionIcon>
              <IconEdit className={classes.iconsEditAndRemove} />
            </ActionIcon>
          </Link>
          <ActionIcon onClick={props.onClickDelete}>
            <IconTrash className={classes.iconsEditAndRemove} />
          </ActionIcon>
        </Group>
      </td>
    </tr>
  )
}

export default TableRow
