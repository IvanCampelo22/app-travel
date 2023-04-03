import { Button, createStyles, Flex, Group, MultiSelect } from '@mantine/core'

import { DateRangePicker, DateRangePickerValue } from '@mantine/dates'

import { IconCalendar, IconSearch } from '@tabler/icons-react'

const useStyles = createStyles((theme) => ({
  multiSelect: {
    maxWidth: 500,
    width: 500
  }
}))

interface FilterPrefs {
  dates: [Date | null, Date | null]
  onChangeDate?(value: DateRangePickerValue): void
  onClickFilter: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void
}

export function Filter(props: FilterPrefs) {
  const { classes } = useStyles()

  return (
    <Flex justify="space-between" wrap="wrap">
      <MultiSelect
        className={classes.multiSelect}
        radius="md"
        placeholder="Search"
        searchable
        icon={<IconSearch size={20} />}
        data={[
          'React',
          'Angular',
          'Svelte',
          'Vue',
          'Riot',
          'Next.js',
          'Blitz.js'
        ]}
      />
      <Group>
        <DateRangePicker
          clearable={false}
          icon={<IconCalendar size={20} />}
          styles={(theme) => ({
            input: {
              fontWeight: 500,
              minWidth: 225
            }
          })}
          radius="md"
          inputFormat="DD MMM, YYYY"
          value={props.dates}
          onChange={props.onChangeDate}
        />
        <Button variant="default" radius="md" onClick={props.onClickFilter}>
          Filter
        </Button>
      </Group>
    </Flex>
  )
}

export default Filter
