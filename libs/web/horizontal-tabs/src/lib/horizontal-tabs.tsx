import { useState } from 'react'

import { createStyles, Tabs, Text } from '@mantine/core'

const useStyles = createStyles((theme) => ({
  tab: {
    color: theme.colors.gray[5],
    width: 50,
    marginRight: 20
  },

  tabActive: {
    color: `${theme.colors.blue[8]} !important`
  }
}))

const tabsMockdata = ['Listing', 'Budget', 'Sales']

export function HorizontalTabs() {
  const { classes, cx } = useStyles()

  const [activeTab, setActiveTab] = useState<string | null>('Listing')

  const tabs = tabsMockdata.map((tab: string) => (
    <Tabs.Tab
      value={tab}
      className={cx(classes.tab, { [classes.tabActive]: activeTab === tab })}
      key={tab}
    >
      <Text weight={500}>{tab}</Text>
    </Tabs.Tab>
  ))

  return (
    <Tabs color="blue.8" onTabChange={setActiveTab} defaultValue="Listing">
      <Tabs.List>{tabs}</Tabs.List>
    </Tabs>
  )
}

export default HorizontalTabs
