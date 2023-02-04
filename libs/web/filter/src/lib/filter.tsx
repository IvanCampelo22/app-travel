import { useState } from 'react'

import { Button, createStyles, Flex, Group, MultiSelect } from '@mantine/core'

import { DateRangePicker, DateRangePickerValue } from '@mantine/dates'

import { IconCalendar, IconSearch } from '@tabler/icons-react'

const useStyles = createStyles((theme) => ({
  multiSelect: {
    maxWidth: 500,
    width: 500
  }
}))

export function Filter() {
  const { classes } = useStyles()

  const [value, setValue] = useState<DateRangePickerValue>([
    new Date(2021, 11, 1),
    new Date(2021, 11, 5)
  ])

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
          value={value}
          onChange={setValue}
        />
        <Button variant="default" radius="md">
          Filter
        </Button>
      </Group>
    </Flex>
  )
}

export default Filter
