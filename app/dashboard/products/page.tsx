'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { ProductsTable } from '@/components/products-table'
import { ProductDialog } from '@/components/product-dialog'

export type Product = {
  id: string
  name: string
  category: string
  price: number
  stock: number
  status: 'active' | 'inactive'
}

const initialProducts: Product[] = [
  {
    id: '1',
    name: 'Wireless Headphones',
    category: 'Electronics',
    price: 129.99,
    stock: 45,
    status: 'active',
  },
  {
    id: '2',
    name: 'Smart Watch',
    category: 'Electronics',
    price: 299.99,
    stock: 23,
    status: 'active',
  },
  {
    id: '3',
    name: 'Laptop Stand',
    category: 'Accessories',
    price: 49.99,
    stock: 67,
    status: 'active',
  },
  {
    id: '4',
    name: 'USB-C Cable',
    category: 'Accessories',
    price: 19.99,
    stock: 120,
    status: 'active',
  },
  {
    id: '5',
    name: 'Mechanical Keyboard',
    category: 'Electronics',
    price: 159.99,
    stock: 0,
    status: 'inactive',
  },
]

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>(initialProducts)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)

  const handleAddProduct = (product: Omit<Product, 'id'>) => {
    const newProduct = {
      ...product,
      id: Date.now().toString(),
    }
    setProducts([...products, newProduct])
    setIsDialogOpen(false)
  }

  const handleEditProduct = (product: Product) => {
    setProducts(products.map((p) => (p.id === product.id ? product : p)))
    setIsDialogOpen(false)
    setEditingProduct(null)
  }

  const handleDeleteProduct = (id: string) => {
    setProducts(products.filter((p) => p.id !== id))
  }

  const openEditDialog = (product: Product) => {
    setEditingProduct(product)
    setIsDialogOpen(true)
  }

  const openAddDialog = () => {
    setEditingProduct(null)
    setIsDialogOpen(true)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Products</h1>
          <p className="text-muted-foreground">Manage your product inventory</p>
        </div>
        <Button onClick={openAddDialog}>
          <Plus className="mr-2 h-4 w-4" />
          Add Product
        </Button>
      </div>

      <ProductsTable
        products={products}
        onEdit={openEditDialog}
        onDelete={handleDeleteProduct}
      />

      <ProductDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        product={editingProduct}
        onSave={editingProduct ? handleEditProduct : handleAddProduct}
      />
    </div>
  )
}
