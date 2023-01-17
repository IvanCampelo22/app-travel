import { Box } from '@mantine/core'
import React from 'react'
import { IStoreLayout } from './layout.type'

const StoreLayout: React.FC<IStoreLayout> = ({ meta, children }) => {
  return (
    <Box
      sx={(theme) => ({
        width: '100%',
        height: '100%',
        backgroundColor: `${theme.colors.gray[0]}`
      })}
    >
      {meta}

      {children}
    </Box>
  )
}

export { StoreLayout }
