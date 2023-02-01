import {
  Badge,
  Flex,
  MantineStyleSystemProps,
  Paper,
  Select
} from '@mantine/core'

import { ChildeAge } from '@web/childe-age'
import { QuantityInput } from '@web/quantity-input'

interface RoomPrefs extends MantineStyleSystemProps {
  default?: string
}

export function RoomPrefs(props: RoomPrefs) {
  return (
    <Paper withBorder p={20} {...props}>
      <Badge
        px={10}
        py={13}
        styles={(theme) => ({
          root: {
            backgroundColor: theme.colors.gray[1],
            border: `1px solid ${theme.colors.gray[2]}`,
            textTransform: 'none'
          },

          inner: {
            color: theme.colors.blue[9],
            fontSize: 14
          }
        })}
      >
        <Badge
          styles={(theme) => ({
            root: {
              backgroundColor: 'white',
              border: `1px solid ${theme.colors.gray[2]}`,
              textTransform: 'none',
              marginRight: 10
            },

            inner: {
              color: theme.colors.blue[9],
              fontSize: 14
            }
          })}
        >
          Quarto 1
        </Badge>
        Suíte Presidencial
      </Badge>
      <Flex mt={30} justify="space-between" gap="lg">
        <Select
          label="Categoria do Quarto"
          description="Selecione o tipo de quarto desejado"
          placeholder="Quarto"
          styles={(theme) => ({
            root: {
              maxWidth: '70%',
              width: '70%'
            },
            label: {
              fontSize: 14,
              color: theme.colors.gray[7]
            },
            description: {
              fontSize: 16,
              color: theme.colors.gray[5]
            }
          })}
          data={[{ value: 'one', label: 'Suíte Master' }]}
        />
        <QuantityInput />
        <QuantityInput />
      </Flex>
      <Flex mt={24} justify="space-between" gap="lg">
        <ChildeAge />
        <ChildeAge />
        <ChildeAge />
        <ChildeAge />
        <ChildeAge />
        <ChildeAge />
        <ChildeAge />
      </Flex>
    </Paper>
  )
}

export default RoomPrefs
