import {
  ActionIcon,
  Box,
  createStyles,
  Flex,
  NumberInput,
  NumberInputHandlers,
  Text
} from '@mantine/core'
import { IconMinus, IconPlus } from '@tabler/icons'
import { useRef, useState } from 'react'

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  control: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    border: `1px solid ${
      theme.colorScheme === 'dark' ? 'transparent' : theme.colors.gray[3]
    }`,
    color: theme.colors.blue[9],
    height: 38,

    '&:disabled': {
      borderColor:
        theme.colorScheme === 'dark' ? 'transparent' : theme.colors.gray[3],
      opacity: 0.8,
      backgroundColor: 'transparent'
    }
  },

  input: {
    textAlign: 'center',
    paddingRight: `${theme.spacing.sm}px !important`,
    paddingLeft: `${theme.spacing.sm}px !important`,
    height: 38,
    borderRadius: 5,
    maxWidth: 70,
    flex: 1,
    margin: '0px 5px 0px 5px'
  }
}))

interface QuantityInputProps {
  min?: number
  max?: number
}

export function QuantityInput({ min = 1, max = 10 }: QuantityInputProps) {
  const { classes } = useStyles()
  const handlers = useRef<NumberInputHandlers>(null)
  const [value, setValue] = useState<number | undefined>(1)

  return (
    <Flex direction="column" gap={0} align="start">
      <Box mb={0}>
        <Text color="gray.7" weight={500} size={14}>
          Adultos
        </Text>
        <Text size={16} color="gray.5" weight={400}>
          Acima de 18 anos
        </Text>
      </Box>
      <div className={classes.wrapper}>
        <ActionIcon<'button'>
          size={28}
          variant="default"
          onClick={() => handlers.current?.decrement()}
          disabled={value === min}
          className={classes.control}
          onMouseDown={(event) => event.preventDefault()}
        >
          <IconMinus size={16} stroke={1.5} />
        </ActionIcon>

        <NumberInput
          data-testid="input"
          variant="unstyled"
          min={min}
          max={max}
          handlersRef={handlers}
          value={value}
          onChange={setValue}
          classNames={{ input: classes.input }}
        />

        <ActionIcon<'button'>
          size={28}
          variant="default"
          onClick={() => handlers.current?.increment()}
          disabled={value === max}
          className={classes.control}
          onMouseDown={(event) => event.preventDefault()}
        >
          <IconPlus size={16} stroke={1.5} />
        </ActionIcon>
      </div>
    </Flex>
  )
}

export default QuantityInput
