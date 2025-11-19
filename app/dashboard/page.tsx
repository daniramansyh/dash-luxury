'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { DollarSign, ShoppingCart, TrendingUp, Users } from 'lucide-react'
import { SalesChart } from '@/components/sales-chart'
import { CategoryChart } from '@/components/category-chart'
import { RecentTransactions } from '@/components/recent-transactions'

const kpiData = [
  {
    title: 'Total Sales',
    value: '$45,231.89',
    change: '+20.1% from last month',
    icon: DollarSign,
  },
  {
    title: 'Total Orders',
    value: '2,350',
    change: '+15.3% from last month',
    icon: ShoppingCart,
  },
  {
    title: 'Conversion Rate',
    value: '3.24%',
    change: '+2.5% from last month',
    icon: TrendingUp,
  },
  {
    title: 'Active Customers',
    value: '1,234',
    change: '+12.8% from last month',
    icon: Users,
  },
]

export default function DashboardPage() {
  const router = useRouter()
  const [activeFilter, setActiveFilter] = useState('week')

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated')
    if (!isAuthenticated) {
      router.push('/login')
    }
  }, [router])

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's your overview.</p>
        </div>
        <div className="flex gap-2">
          <Button
            variant={activeFilter === 'today' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setActiveFilter('today')}
          >
            Today
          </Button>
          <Button
            variant={activeFilter === 'week' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setActiveFilter('week')}
          >
            Week
          </Button>
          <Button
            variant={activeFilter === 'month' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setActiveFilter('month')}
          >
            Month
          </Button>
          <Button
            variant={activeFilter === 'custom' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setActiveFilter('custom')}
          >
            Custom
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {kpiData.map((kpi) => (
          <Card key={kpi.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {kpi.title}
              </CardTitle>
              <kpi.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{kpi.value}</div>
              <p className="text-xs text-muted-foreground mt-1">{kpi.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <SalesChart />
        <CategoryChart />
      </div>

      <RecentTransactions />
    </div>
  )
}
