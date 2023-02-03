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

export function TableRow() {
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
              Olivia Rhye
            </Text>
            <Text color="gray.5" weight="500" size={13}>
              olivia@untitledui.com
            </Text>
          </div>
        </Flex>
      </td>
      <td>
        <Flex gap="md" align="center">
          <Avatar radius="xl" />
          <div>
            <Text color="gray.9" weight="500" size={15}>
              Olivia Rhye
            </Text>
            <Text color="gray.5" weight="500" size={13}>
              olivia@untitledui.com
            </Text>
          </div>
        </Flex>
      </td>
      <td>
        <Text color="gray.5" weight="500">
          Jan 13, 2022
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
            <Text>WAITING PAYMENT</Text>
          </Flex>
        </Badge>
      </td>
      <td>
        <Group>
          <ActionIcon>
            <IconEdit className={classes.iconsEditAndRemove} />
          </ActionIcon>
          <ActionIcon>
            <IconTrash className={classes.iconsEditAndRemove} />
          </ActionIcon>
        </Group>
      </td>
    </tr>
  )
}

export default TableRow
