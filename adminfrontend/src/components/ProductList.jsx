import ProductSkeleton from './ProductSkeleton'

const ProductList = ({ products, loading, onEdit, onDelete }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl sm:text-2xl font-bold" style={{ color: '#E5E5E5' }}>
          Products <span style={{ color: '#2563EB' }}>({products.length})</span>
        </h2>
      </div>
      
      {loading ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {[...Array(8)].map((_, index) => (
            <ProductSkeleton key={index} />
          ))}
        </div>
      ) : products.length === 0 ? (
        <div className="text-center py-20 rounded-xl border" style={{ background: '#1A1A1A', borderColor: 'rgba(160, 160, 160, 0.1)' }}>
          <svg className="w-16 h-16 mx-auto mb-4" style={{ color: '#A0A0A0' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
          </svg>
          <p className="text-lg" style={{ color: '#A0A0A0' }}>No products yet</p>
          <p className="text-sm mt-2" style={{ color: 'rgba(160, 160, 160, 0.6)' }}>Add your first product to get started</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {products.map((product) => (
            <div 
              key={product._id}
              className="rounded-xl overflow-hidden border transition-all duration-300 animate-slide-up flex flex-col"
              style={{ 
                background: '#1A1A1A',
                borderColor: 'rgba(160, 160, 160, 0.1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(37, 99, 235, 0.4)'
                e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(37, 99, 235, 0.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(160, 160, 160, 0.1)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Product Image */}
              <div className="relative aspect-[4/3] overflow-hidden group" style={{ background: '#111111' }}>
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {product.featured && (
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ background: '#2563EB', color: 'white' }}>
                      Featured
                    </span>
                  </div>
                )}
                <div className="absolute top-3 right-3">
                  <span className="backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium" style={{ background: 'rgba(10, 10, 10, 0.8)', color: '#E5E5E5' }}>
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col">
                <h3 className="text-base sm:text-lg font-bold mb-2 line-clamp-2 min-h-[3rem]" style={{ color: '#E5E5E5' }}>
                  {product.name}
                </h3>

                <p className="text-xs sm:text-sm mb-4 line-clamp-2 min-h-[2.5rem]" style={{ color: '#A0A0A0' }}>
                  {product.description}
                </p>

                <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                  <div>
                    <span className="text-xs" style={{ color: '#A0A0A0' }}>Price</span>
                    <p className="font-bold text-lg" style={{ color: '#2563EB' }}>₹{product.price.toLocaleString()}</p>
                  </div>
                  <div>
                    <span className="text-xs" style={{ color: '#A0A0A0' }}>Stock</span>
                    <p className="font-semibold" style={{ color: product.stock > 0 ? '#4ade80' : '#ef4444' }}>
                      {product.stock}
                    </p>
                  </div>
                </div>

                {/* Sizes */}
                <div className="mb-4 flex-1">
                  {product.sizes && product.sizes.length > 0 && (
                    <div>
                      <span className="text-xs" style={{ color: '#A0A0A0' }}>Sizes:</span>
                      <div className="flex flex-wrap gap-1.5 mt-1 min-h-[2rem]">
                        {product.sizes.map((size, idx) => (
                          <span key={idx} className="text-xs px-2 py-1 rounded border" style={{ background: '#111111', color: '#A0A0A0', borderColor: 'rgba(160, 160, 160, 0.2)' }}>
                            {size}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="flex gap-2 mt-auto">
                  <button
                    onClick={() => onEdit(product)}
                    className="flex-1 px-4 py-2.5 rounded-lg font-medium transition-all duration-300 text-sm"
                    style={{ background: '#2563EB', color: 'white' }}
                    onMouseEnter={(e) => {
                      e.target.style.background = '#3B82F6'
                      e.target.style.boxShadow = '0 10px 15px -3px rgba(37, 99, 235, 0.3)'
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = '#2563EB'
                      e.target.style.boxShadow = 'none'
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(product._id)}
                    className="flex-1 px-4 py-2.5 rounded-lg font-medium transition-all duration-300 text-sm"
                    style={{ background: '#dc2626', color: 'white' }}
                    onMouseEnter={(e) => {
                      e.target.style.background = '#b91c1c'
                      e.target.style.boxShadow = '0 10px 15px -3px rgba(220, 38, 38, 0.3)'
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = '#dc2626'
                      e.target.style.boxShadow = 'none'
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ProductList
