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
        { value: 'four', label: '4 Anos' },
        { value: 'five', label: '5 Anos' },
        { value: 'six', label: '6 Anos' },
        { value: 'seven', label: '7 Anos' },
        { value: 'eight', label: '8 Anos' },
        { value: 'nine', label: '9 Anos' },
        { value: 'ten', label: '10 Anos' },
        { value: 'twelve', label: '12 Anos' },
        { value: 'thirteen', label: '13 Anos' },
        { value: 'fourteen', label: '14 Anos' },
        { value: 'fifteen', label: '15 Anos' },
        { value: 'sixteen', label: '16 Anos' },
        { value: 'seventeen', label: '17 Anos' }
      ]}
    />
  )
}

export default ChildeAge
