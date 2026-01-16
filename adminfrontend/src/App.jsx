import { useState, useEffect } from 'react'
import api from './config/api'
import ProductForm from './components/ProductForm'
import ProductList from './components/ProductList'

function App() {
  const [products, setProducts] = useState([])
  const [editingProduct, setEditingProduct] = useState(null)
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      const { data } = await api.get('/api/products')
      setProducts(data.products)
    } catch (error) {
      console.error('Error fetching products:', error)
    }
  }

  const handleEdit = (product) => {
    setEditingProduct(product)
    setShowForm(true)
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this product?')) return
    
    try {
      await api.delete(`/api/products/${id}`)
      fetchProducts()
      alert('Product deleted successfully!')
    } catch (error) {
      console.error('Error deleting product:', error)
      alert('Failed to delete product')
    }
  }

  const handleFormClose = () => {
    setShowForm(false)
    setEditingProduct(null)
    fetchProducts()
  }

  return (
    <div className="min-h-screen" style={{ background: '#0A0A0A' }}>
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur-lg" style={{ background: '#111111', borderBottom: '1px solid rgba(37, 99, 235, 0.2)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold" style={{ 
                background: 'linear-gradient(to right, #2563EB, #3B82F6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Admin Panel
              </h1>
              <p className="text-sm mt-1" style={{ color: '#A0A0A0' }}>Manage your products</p>
            </div>
            <button
              onClick={() => setShowForm(true)}
              className="w-full sm:w-auto px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
              style={{ 
                background: '#2563EB',
                color: 'white'
              }}
              onMouseEnter={(e) => e.target.style.background = '#3B82F6'}
              onMouseLeave={(e) => e.target.style.background = '#2563EB'}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              <span>Add Product</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <ProductList 
          products={products}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </main>

      {/* Product Form Modal */}
      {showForm && (
        <ProductForm
          product={editingProduct}
          onClose={handleFormClose}
        />
      )}
    </div>
  )
}

export default App
