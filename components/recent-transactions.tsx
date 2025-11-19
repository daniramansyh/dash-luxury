import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'

const transactions = [
  {
    id: 'TRX-001',
    customer: 'John Doe',
    product: 'Wireless Headphones',
    amount: '$129.99',
    status: 'completed',
    date: '2024-01-15',
  },
  {
    id: 'TRX-002',
    customer: 'Jane Smith',
    product: 'Smart Watch',
    amount: '$299.99',
    status: 'completed',
    date: '2024-01-15',
  },
  {
    id: 'TRX-003',
    customer: 'Bob Johnson',
    product: 'Laptop Stand',
    amount: '$49.99',
    status: 'pending',
    date: '2024-01-14',
  },
  {
    id: 'TRX-004',
    customer: 'Alice Brown',
    product: 'USB-C Cable',
    amount: '$19.99',
    status: 'completed',
    date: '2024-01-14',
  },
  {
    id: 'TRX-005',
    customer: 'Charlie Wilson',
    product: 'Mechanical Keyboard',
    amount: '$159.99',
    status: 'cancelled',
    date: '2024-01-13',
  },
]

export function RecentTransactions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
        <CardDescription>Latest orders from your store</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Product</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell className="font-medium">{transaction.id}</TableCell>
                <TableCell>{transaction.customer}</TableCell>
                <TableCell>{transaction.product}</TableCell>
                <TableCell>{transaction.amount}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      transaction.status === 'completed'
                        ? 'default'
                        : transaction.status === 'pending'
                        ? 'secondary'
                        : 'destructive'
                    }
                  >
                    {transaction.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-muted-foreground">{transaction.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
