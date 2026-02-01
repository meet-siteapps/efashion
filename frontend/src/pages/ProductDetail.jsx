import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import api from '../config/api'
import ProductCard from '../components/ProductCard'

const ProductDetail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [relatedProducts, setRelatedProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  useEffect(() => {
    fetchProduct()
    fetchRelatedProducts()
  }, [id])

  const fetchProduct = async () => {
    try {
      setLoading(true)
      const { data } = await api.get(`/api/products/${id}`)
      setProduct(data.product)
      if (data.product.sizes?.length > 0) setSelectedSize(data.product.sizes[0])
    } catch (error) {
      console.error('Error fetching product:', error)
    } finally {
      setLoading(false)
    }
  }

  const fetchRelatedProducts = async () => {
    try {
      const { data } = await api.get('/api/products')
      // Filter out current product and get 8 related products
      const related = data.products
        .filter(p => p._id !== id)
        .slice(0, 8)
      setRelatedProducts(related)
    } catch (error) {
      console.error('Error fetching related products:', error)
    }
  }

  const handleWhatsAppOrder = () => {
    if (!product) return

    const message = `🛍️ *PRODUCT INQUIRY*

📦 Product: ${product.name}
💰 Price: ₹${product.price.toLocaleString()}
📋 Category: ${product.category}

📝 Description:
${product.description}

${selectedSize ? `📏 Size: ${selectedSize}` : ''}

🖼️ Image: ${product.image}

Please provide:
✅ Availability
✅ Delivery details
✅ Payment options

Thank you!
Site : https://efashion-nine.vercel.app/`

    const whatsappUrl = `https://wa.me/917990710774?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-black-primary flex items-center justify-center pt-20">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-electric border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-blue-bright text-xl font-medium">Loading Product...</p>
        </div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-black-primary flex items-center justify-center pt-20">
        <div className="text-center">
          <div className="w-24 h-24 bg-red-500/10 rounded-full flex items-center justify-center mb-6">
            <svg className="w-12 h-12 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-grey-light mb-4">Product Not Found</h2>
          <p className="text-grey-text mb-8">The product you're looking for doesn't exist or has been removed.</p>
          <Link 
            to="/" 
            className="inline-flex items-center px-6 py-3 bg-blue-electric hover:bg-blue-bright rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Collection
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black-primary page-container">
      {/* Breadcrumb */}
      <div className="pt-24 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-grey-text hover:text-blue-electric transition-colors">Home</Link>
            <span className="text-grey-text">/</span>
            <span className="text-grey-light">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Section */}
      <div className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
            {/* Product Images */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-black-secondary group">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Badges */}
                <div className="absolute top-6 right-6 flex flex-col gap-3">
                  {product.featured && (
                    <span className="px-3 py-1.5 bg-gradient-to-r from-blue-electric to-blue-bright text-white text-sm font-semibold rounded-full shadow-lg">
                      ⭐ Featured
                    </span>
                  )}
                  <span className="px-3 py-1.5 bg-black-primary/80 backdrop-blur-sm text-grey-light text-sm font-medium rounded-full">
                    {product.category}
                  </span>
                </div>

                {/* Zoom Indicator */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-black-primary/80 backdrop-blur-sm text-grey-light px-3 py-2 rounded-lg text-sm flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                    Hover to zoom
                  </div>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-8">
              {/* Title & Price */}
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-grey-light mb-4 leading-tight">
                  {product.name}
                </h1>
                <div className="flex items-baseline gap-4">
                  <span className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-electric to-blue-bright bg-clip-text text-transparent">
                    ₹{product.price.toLocaleString()}
                  </span>
                  <span className="text-grey-text text-lg">MRP (Incl. of all taxes)</span>
                </div>
              </div>

              {/* Description */}
              <div className="bg-black-card/50 backdrop-blur-sm rounded-xl p-6 border border-grey-text/10">
                <h3 className="text-lg font-semibold text-grey-light mb-3">Product Details</h3>
                <p className="text-grey-text leading-relaxed">{product.description}</p>
              </div>

              {/* Stock Status */}
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${product.stock > 0 ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`}></div>
                <span className={`font-semibold ${product.stock > 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {product.stock > 0 ? `${product.stock} items in stock` : 'Out of stock'}
                </span>
              </div>

              {/* Size Selection */}
              {product.sizes && product.sizes.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-grey-light mb-4">Select Size</h3>
                  <div className="flex flex-wrap gap-3">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2.5 rounded-lg font-medium transition-all duration-300 border-2 ${
                          selectedSize === size
                            ? 'bg-blue-electric border-blue-electric text-white shadow-lg shadow-blue-electric/30'
                            : 'bg-black-secondary border-grey-text/20 text-grey-text hover:border-blue-electric/50 hover:text-grey-light'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="space-y-4">
                <button
                  onClick={handleWhatsAppOrder}
                  disabled={product.stock === 0}
                  className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 ${
                    product.stock === 0
                      ? 'bg-grey-text/20 text-grey-text cursor-not-allowed'
                      : 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white hover:scale-[1.02] hover:shadow-xl hover:shadow-green-600/30'
                  }`}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  {product.stock === 0 ? 'Out of Stock' : 'Order on WhatsApp'}
                </button>

                <div className="text-center text-sm text-grey-text">
                  <p className="flex items-center justify-center gap-2">
                    <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Instant response • Secure ordering • Fast delivery
                  </p>
                </div>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { icon: '🚚', title: 'Fast Delivery', desc: 'Quick shipping' },
                  { icon: '🔄', title: 'Easy Returns', desc: '30-day policy' },
                  { icon: '💬', title: 'WhatsApp Support', desc: '24/7 assistance' }
                ].map((feature, idx) => (
                  <div key={idx} className="text-center p-4 bg-black-card/30 rounded-lg border border-grey-text/10">
                    <div className="text-2xl mb-2">{feature.icon}</div>
                    <h4 className="font-semibold text-grey-light text-sm">{feature.title}</h4>
                    <p className="text-xs text-grey-text">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-grey-light mb-4">
                  You Might Also <span className="bg-gradient-to-r from-blue-electric to-blue-bright bg-clip-text text-transparent">Like</span>
                </h2>
                <p className="text-grey-text text-lg">Discover more premium pieces from our collection</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 sm:gap-6">
                {relatedProducts.map((relatedProduct, index) => (
                  <div key={relatedProduct._id} style={{ animationDelay: `${index * 0.1}s` }}>
                    <ProductCard product={relatedProduct} />
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <Link 
                  to="/"
                  className="inline-flex items-center px-8 py-3 bg-black-card hover:bg-black-secondary border border-blue-electric/30 hover:border-blue-electric/60 rounded-lg font-semibold text-grey-light hover:text-blue-bright transition-all duration-300 hover:scale-105"
                >
                  View All Products
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
