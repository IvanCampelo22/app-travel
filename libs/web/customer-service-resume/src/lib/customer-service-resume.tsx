import {
  Avatar,
  Badge,
  CloseButton,
  createStyles,
  Flex,
  Group,
  Paper,
  Text
} from '@mantine/core'

import { IconCoffee, IconHome, IconUsers } from '@tabler/icons'

//export interface CustomerServiceResumeProps { }

const useStyles = createStyles((theme) => ({
  iconDetails: {
    color: theme.colors.gray[6],
    width: '18px'
  }
}))

export function CustomerServiceResume() {
  const { classes } = useStyles()

  const avatar = (
    <Avatar radius="xl" alt="Country flag icon" size={19} mr={6} src="" />
  )

  return (
    <Paper p="md" withBorder>
      <Flex justify="space-between" align="center">
        <Text color="blue.8" weight="500" size="lg">
          Hotel
        </Text>
        <Badge bg="gray.2" color="gray.6" py={10} leftSection={avatar}>
          <Text size="xs" style={{ textTransform: 'none' }}>
            Melbourn, Australia
          </Text>
        </Badge>
        <CloseButton size="sm" radius="xl" variant="light" />
      </Flex>
      <div>
        <Text color="blue.8" weight="500" size="md">
          Hilton Garden
        </Text>
      </div>
      <div>
        <Text color="gray.6" weight="500" size="xs">
          12/10/2022 - 15/10/2022
        </Text>
      </div>
      <Flex mt={8} justify="space-between">
        <Group spacing="xs">
          <IconCoffee className={classes.iconDetails} />
          <Text mt={3} color="gray.6" weight="500" size="xs">
            Meia Pensão
          </Text>
        </Group>
        <Group spacing="xs">
          <IconHome className={classes.iconDetails} />
          <Text mt={3} color="gray.6" weight="500" size="xs">
            2 Quartos
          </Text>
        </Group>
        <Group spacing="xs">
          <IconUsers className={classes.iconDetails} />
          <Text mt={3} color="gray.6" weight="500" size="xs">
            5 Passageiros
          </Text>
        </Group>
      </Flex>
    </Paper>
  )
}

export default CustomerServiceResume
