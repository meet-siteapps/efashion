import { useState, useEffect } from 'react'
import api from '../config/api'

const ProductForm = ({ product, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    category: 'Jackets',
    description: '',
    price: '',
    image: '',
    sizes: [],
    stock: '',
    featured: false
  })

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name || '',
        category: product.category || 'Jackets',
        description: product.description || '',
        price: product.price || '',
        image: product.image || '',
        sizes: product.sizes || [],
        stock: product.stock || '',
        featured: product.featured || false
      })
    }
  }, [product])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const toggleSize = (size) => {
    setFormData(prev => ({
      ...prev,
      sizes: prev.sizes.includes(size)
        ? prev.sizes.filter(s => s !== size)
        : [...prev.sizes, size]
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      if (product) {
        await api.put(`/api/products/${product._id}`, formData)
        alert('Product updated successfully!')
      } else {
        await api.post('/api/products', formData)
        alert('Product created successfully!')
      }
      onClose()
    } catch (error) {
      console.error('Error saving product:', error)
      alert('Failed to save product')
    }
  }

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL']

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center z-50 p-4 overflow-y-auto"
      style={{ 
        background: 'rgba(0, 0, 0, 0.95)',
        backdropFilter: 'blur(12px)'
      }}
    >
      <div 
        className="rounded-2xl max-w-2xl w-full my-8 max-h-[90vh] overflow-y-auto"
        style={{
          background: '#111111',
          border: '1px solid rgba(37, 99, 235, 0.3)'
        }}
      >
        <div 
          className="sticky top-0 p-6 z-10"
          style={{
            background: '#111111',
            borderBottom: '1px solid rgba(160, 160, 160, 0.1)'
          }}
        >
          <div className="flex justify-between items-center">
            <h2 
              className="text-2xl font-bold"
              style={{ color: '#E5E5E5' }}
            >
              {product ? 'Edit Product' : 'Add New Product'}
            </h2>
            <button
              onClick={onClose}
              className="transition-colors"
              style={{ color: '#A0A0A0' }}
              onMouseEnter={(e) => e.target.style.color = '#E5E5E5'}
              onMouseLeave={(e) => e.target.style.color = '#A0A0A0'}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Name */}
          <div>
            <label 
              className="block font-semibold mb-2"
              style={{ color: '#E5E5E5' }}
            >
              Product Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded-lg px-4 py-3 focus:outline-none transition-all"
              style={{
                background: '#0A0A0A',
                border: '1px solid rgba(160, 160, 160, 0.2)',
                color: '#E5E5E5'
              }}
              onFocus={(e) => e.target.style.borderColor = '#2563EB'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(160, 160, 160, 0.2)'}
              placeholder="e.g., Premium Leather Jacket"
            />
          </div>

          {/* Category */}
          <div>
            <label 
              className="block font-semibold mb-2"
              style={{ color: '#E5E5E5' }}
            >
              Category *
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full rounded-lg px-4 py-3 focus:outline-none transition-all"
              style={{
                background: '#0A0A0A',
                border: '1px solid rgba(160, 160, 160, 0.2)',
                color: '#E5E5E5'
              }}
              onFocus={(e) => e.target.style.borderColor = '#2563EB'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(160, 160, 160, 0.2)'}
            >
              <option value="Jackets">Jackets</option>
              <option value="Hoodies">Hoodies</option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label 
              className="block font-semibold mb-2"
              style={{ color: '#E5E5E5' }}
            >
              Description *
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows="4"
              className="w-full rounded-lg px-4 py-3 focus:outline-none transition-all resize-none"
              style={{
                background: '#0A0A0A',
                border: '1px solid rgba(160, 160, 160, 0.2)',
                color: '#E5E5E5'
              }}
              onFocus={(e) => e.target.style.borderColor = '#2563EB'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(160, 160, 160, 0.2)'}
              placeholder="Describe the product..."
            />
          </div>

          {/* Price & Stock */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label 
                className="block font-semibold mb-2"
                style={{ color: '#E5E5E5' }}
              >
                Price (₹) *
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
                min="0"
                className="w-full rounded-lg px-4 py-3 focus:outline-none transition-all"
                style={{
                  background: '#0A0A0A',
                  border: '1px solid rgba(160, 160, 160, 0.2)',
                  color: '#E5E5E5'
                }}
                onFocus={(e) => e.target.style.borderColor = '#2563EB'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(160, 160, 160, 0.2)'}
                placeholder="999"
              />
            </div>
            <div>
              <label 
                className="block font-semibold mb-2"
                style={{ color: '#E5E5E5' }}
              >
                Stock *
              </label>
              <input
                type="number"
                name="stock"
                value={formData.stock}
                onChange={handleChange}
                required
                min="0"
                className="w-full rounded-lg px-4 py-3 focus:outline-none transition-all"
                style={{
                  background: '#0A0A0A',
                  border: '1px solid rgba(160, 160, 160, 0.2)',
                  color: '#E5E5E5'
                }}
                onFocus={(e) => e.target.style.borderColor = '#2563EB'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(160, 160, 160, 0.2)'}
                placeholder="10"
              />
            </div>
          </div>

          {/* Image URL */}
          <div>
            <label 
              className="block font-semibold mb-2"
              style={{ color: '#E5E5E5' }}
            >
              Image URL *
            </label>
            <input
              type="url"
              name="image"
              value={formData.image}
              onChange={handleChange}
              required
              className="w-full rounded-lg px-4 py-3 focus:outline-none transition-all"
              style={{
                background: '#0A0A0A',
                border: '1px solid rgba(160, 160, 160, 0.2)',
                color: '#E5E5E5'
              }}
              onFocus={(e) => e.target.style.borderColor = '#2563EB'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(160, 160, 160, 0.2)'}
              placeholder="https://example.com/image.jpg"
            />
            {formData.image && (
              <div className="mt-3">
                <img 
                  src={formData.image} 
                  alt="Preview" 
                  className="w-32 h-32 object-cover rounded-lg"
                  style={{ border: '1px solid rgba(160, 160, 160, 0.2)' }}
                />
              </div>
            )}
          </div>

          {/* Sizes */}
          <div>
            <label 
              className="block font-semibold mb-2"
              style={{ color: '#E5E5E5' }}
            >
              Sizes
            </label>
            <div className="flex flex-wrap gap-2">
              {sizes.map(size => (
                <button
                  key={size}
                  type="button"
                  onClick={() => toggleSize(size)}
                  className="px-4 py-2 rounded-lg font-medium transition-all duration-300"
                  style={
                    formData.sizes.includes(size)
                      ? {
                          background: '#2563EB',
                          color: 'white',
                          boxShadow: '0 10px 15px -3px rgba(37, 99, 235, 0.3)'
                        }
                      : {
                          background: '#0A0A0A',
                          color: '#A0A0A0',
                          border: '1px solid rgba(160, 160, 160, 0.2)'
                        }
                  }
                  onMouseEnter={(e) => {
                    if (!formData.sizes.includes(size)) {
                      e.target.style.borderColor = 'rgba(37, 99, 235, 0.4)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!formData.sizes.includes(size)) {
                      e.target.style.borderColor = 'rgba(160, 160, 160, 0.2)'
                    }
                  }}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Featured */}
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              name="featured"
              checked={formData.featured}
              onChange={handleChange}
              className="w-5 h-5 rounded"
              style={{
                border: '1px solid rgba(160, 160, 160, 0.2)',
                accentColor: '#2563EB'
              }}
            />
            <label 
              className="font-semibold"
              style={{ color: '#E5E5E5' }}
            >
              Featured Product
            </label>
          </div>

          {/* Submit Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              className="flex-1 py-3 rounded-lg font-semibold transition-all duration-300"
              style={{
                background: '#2563EB',
                color: 'white'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#3B82F6'
                e.target.style.boxShadow = '0 10px 15px -3px rgba(37, 99, 235, 0.3)'
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#2563EB'
                e.target.style.boxShadow = 'none'
              }}
            >
              {product ? 'Update Product' : 'Create Product'}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 rounded-lg font-semibold transition-all duration-300"
              style={{
                background: '#0A0A0A',
                color: '#E5E5E5',
                border: '1px solid rgba(160, 160, 160, 0.2)'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(160, 160, 160, 0.2)'
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#0A0A0A'
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ProductForm
