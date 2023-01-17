import { Box } from '@mantine/core'

import { IStoreLayout } from './layout.type'

const AdminLayout: React.FC<IStoreLayout> = ({ meta, children }) => {
  return (
    <Box>
      {meta}
      {children}
    </Box>
  )
}

export { AdminLayout }
