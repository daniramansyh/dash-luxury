"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const orders = [
  { id: "ORD-001", customer: "John Doe", date: "2023-01-01", total: "$120.00", status: "Completed" },
  { id: "ORD-002", customer: "Jane Smith", date: "2023-01-02", total: "$85.50", status: "Processing" },
  { id: "ORD-003", customer: "Bob Johnson", date: "2023-01-03", total: "$210.00", status: "Shipped" },
  { id: "ORD-004", customer: "Alice Brown", date: "2023-01-04", total: "$45.00", status: "Pending" },
  { id: "ORD-005", customer: "Charlie Wilson", date: "2023-01-05", total: "$150.00", status: "Completed" },
]

export default function OrdersPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Orders</h1>
        <p className="text-muted-foreground">Manage and view your recent orders.</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Recent Orders</CardTitle>
          <CardDescription>A list of your recent orders.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell>{order.total}</TableCell>
                  <TableCell>
                    <Badge variant={order.status === "Completed" ? "default" : "secondary"}>
                      {order.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
