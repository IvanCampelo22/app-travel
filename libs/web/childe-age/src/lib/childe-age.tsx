import { Select } from '@mantine/core'

export function ChildeAge() {
  return (
    <Select
      label="Menor 1"
      description="Informe a Idade"
      placeholder="Idade"
      styles={(theme) => ({
        label: {
          fontSize: 14,
          color: theme.colors.gray[7]
        },
        description: {
          fontSize: 16,
          color: theme.colors.gray[5]
        }
      })}
      data={[
        { value: 'one', label: '1 Ano' },
        { value: 'two', label: '2 Anos' },
        { value: 'three', label: '3 Anos' },
        { value: 'four', label: '4 Anos' }
      ]}
    />
  )
}

export default ChildeAge
