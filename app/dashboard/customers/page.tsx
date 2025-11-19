"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const customers = [
  { id: 1, name: "John Doe", email: "john@example.com", spent: "$1,200.00", orders: 12 },
  { id: 2, name: "Jane Smith", email: "jane@example.com", spent: "$850.00", orders: 8 },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", spent: "$2,100.00", orders: 21 },
  { id: 4, name: "Alice Brown", email: "alice@example.com", spent: "$450.00", orders: 5 },
  { id: 5, name: "Charlie Wilson", email: "charlie@example.com", spent: "$1,500.00", orders: 15 },
]

export default function CustomersPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Customers</h1>
        <p className="text-muted-foreground">View and manage your customer base.</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>All Customers</CardTitle>
          <CardDescription>A list of all your customers.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Customer</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Total Spent</TableHead>
                <TableHead>Orders</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customers.map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={`/ceholder-svg-key-uqjzm.jpg?key=uqjzm&height=32&width=32`} alt={customer.name} />
                      <AvatarFallback>{customer.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    {customer.name}
                  </TableCell>
                  <TableCell>{customer.email}</TableCell>
                  <TableCell>{customer.spent}</TableCell>
                  <TableCell>{customer.orders}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
