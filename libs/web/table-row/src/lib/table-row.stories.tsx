import { Table } from '@mantine/core'

import TableRow from './table-row'

export default {
  title: 'Table Row',
  component: TableRow
}

export const TableRowStorie = () => {
  return (
    <Table>
      <thead>
        <tr>
          <th>ORDER</th>
          <th>CUSTOMER</th>
          <th>CREATED BY</th>
          <th>ISSUE DATE</th>
          <th>PRODUCTS</th>
          <th>STATUS</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <TableRow />
      </tbody>
    </Table>
  )
}
