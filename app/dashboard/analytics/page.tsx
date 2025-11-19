"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SalesChart } from "@/components/sales-chart"
import { CategoryChart } from "@/components/category-chart"

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Analytics</h1>
        <p className="text-muted-foreground">Detailed analysis of your store's performance.</p>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2">
        <SalesChart />
        <CategoryChart />
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Traffic Source</CardTitle>
            <CardDescription>Where your customers are coming from</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Direct</span>
                <span className="font-bold">40%</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[40%]" />
              </div>
              
              <div className="flex justify-between text-sm mt-4">
                <span>Social Media</span>
                <span className="font-bold">35%</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[35%]" />
              </div>

              <div className="flex justify-between text-sm mt-4">
                <span>Organic Search</span>
                <span className="font-bold">25%</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[25%]" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Conversion Funnel</CardTitle>
            <CardDescription>User journey from visit to purchase</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-24 text-sm font-medium">Visitors</div>
                <div className="flex-1 h-8 bg-muted rounded-r-lg relative">
                  <div className="absolute inset-y-0 left-0 bg-blue-500 rounded-r-lg flex items-center px-2 text-white text-xs" style={{ width: '100%' }}>10,000</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-24 text-sm font-medium">Add to Cart</div>
                <div className="flex-1 h-8 bg-muted rounded-r-lg relative">
                  <div className="absolute inset-y-0 left-0 bg-blue-500 rounded-r-lg flex items-center px-2 text-white text-xs" style={{ width: '45%' }}>4,500</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-24 text-sm font-medium">Checkout</div>
                <div className="flex-1 h-8 bg-muted rounded-r-lg relative">
                  <div className="absolute inset-y-0 left-0 bg-blue-500 rounded-r-lg flex items-center px-2 text-white text-xs" style={{ width: '25%' }}>2,500</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-24 text-sm font-medium">Purchase</div>
                <div className="flex-1 h-8 bg-muted rounded-r-lg relative">
                  <div className="absolute inset-y-0 left-0 bg-blue-500 rounded-r-lg flex items-center px-2 text-white text-xs" style={{ width: '12%' }}>1,200</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
