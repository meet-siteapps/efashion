import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

const ProductDetail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [selectedSize, setSelectedSize] = useState('')

  useEffect(() => {
    fetchProduct()
  }, [id])

  const fetchProduct = async () => {
    try {
      setLoading(true)
      const { data } = await axios.get(`/api/products/${id}`)
      setProduct(data.product)
      if (data.product.sizes?.length > 0) setSelectedSize(data.product.sizes[0])
    } catch (error) {
      console.error('Error fetching product:', error)
    } finally {
      setLoading(false)
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

Thank you!`

    const whatsappUrl = `https://wa.me/919327464610?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20" style={{ background: '#0A0A0A' }}>
        <div className="text-center">
          <div 
            className="w-16 h-16 border-4 rounded-full animate-spin mx-auto mb-4"
            style={{ borderColor: '#2563EB', borderTopColor: 'transparent' }}
          ></div>
          <p className="text-xl font-bold" style={{ color: '#3B82F6' }}>LOADING...</p>
        </div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20" style={{ background: '#0A0A0A' }}>
        <div className="text-center">
          <p className="text-xl mb-4 font-bold" style={{ color: '#EF4444' }}>PRODUCT NOT FOUND</p>
          <Link 
            to="/" 
            className="font-semibold transition-colors"
            style={{ color: '#2563EB' }}
            onMouseEnter={(e) => e.target.style.color = '#3B82F6'}
            onMouseLeave={(e) => e.target.style.color = '#2563EB'}
          >
            RETURN TO SHOP
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-24 pb-20" style={{ background: '#0A0A0A' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          to="/" 
          className="inline-flex items-center mb-8 font-semibold transition-all duration-300 group"
          style={{ color: '#A0A0A0' }}
          onMouseEnter={(e) => e.target.style.color = '#2563EB'}
          onMouseLeave={(e) => e.target.style.color = '#A0A0A0'}
        >
          <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          BACK TO COLLECTION
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="animate-fade-in">
            <div 
              className="relative rounded-2xl overflow-hidden aspect-[3/4] group transition-all duration-500"
              style={{
                background: '#111111',
                border: '2px solid rgba(37, 99, 235, 0.2)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(37, 99, 235, 0.6)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(37, 99, 235, 0.2)'}
            >
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              <div className="absolute top-6 right-6 flex flex-col gap-3">
                {product.featured && (
                  <span 
                    className="px-4 py-2 rounded-lg text-sm font-bold"
                    style={{ background: 'rgba(59, 130, 246, 0.9)', color: 'white' }}
                  >
                    ⭐ FEATURED
                  </span>
                )}
                <span 
                  className="px-4 py-2 rounded-lg text-sm font-bold uppercase"
                  style={{ background: 'rgba(37, 99, 235, 0.9)', color: 'white' }}
                >
                  {product.category}
                </span>
              </div>
            </div>
          </div>

          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ color: '#E5E5E5' }}>
              {product.name}
            </h1>
            
            <div className="text-5xl sm:text-6xl font-bold mb-8" style={{ color: '#2563EB' }}>
              ₹{product.price.toLocaleString()}
            </div>

            <p className="text-lg mb-10 leading-relaxed" style={{ color: '#A0A0A0' }}>
              {product.description}
            </p>

            <div 
              className="mb-8 p-6 rounded-xl"
              style={{
                background: 'rgba(17, 17, 17, 0.5)',
                backdropFilter: 'blur(4px)',
                border: '1px solid rgba(37, 99, 235, 0.2)'
              }}
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold uppercase tracking-wide text-sm" style={{ color: '#A0A0A0' }}>
                  Availability
                </span>
                <span 
                  className="font-bold text-lg"
                  style={{ color: product.stock > 0 ? '#10B981' : '#EF4444' }}
                >
                  {product.stock > 0 ? `${product.stock} IN STOCK` : 'SOLD OUT'}
                </span>
              </div>
            </div>

            {product.sizes && product.sizes.length > 0 && (
              <div className="mb-10">
                <h3 className="text-lg font-bold mb-4 uppercase tracking-wide" style={{ color: '#E5E5E5' }}>
                  Select Size
                </h3>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className="px-6 py-3 rounded-lg font-bold transition-all duration-300"
                      style={
                        selectedSize === size
                          ? {
                              background: '#2563EB',
                              color: 'white',
                              border: '2px solid #2563EB',
                              transform: 'scale(1.05)',
                              boxShadow: '0 10px 15px rgba(37, 99, 235, 0.3)'
                            }
                          : {
                              background: '#111111',
                              color: '#A0A0A0',
                              border: '2px solid rgba(37, 99, 235, 0.3)'
                            }
                      }
                      onMouseEnter={(e) => {
                        if (selectedSize !== size) {
                          e.target.style.borderColor = 'rgba(37, 99, 235, 0.6)'
                          e.target.style.color = '#E5E5E5'
                          e.target.style.transform = 'scale(1.05)'
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (selectedSize !== size) {
                          e.target.style.borderColor = 'rgba(37, 99, 235, 0.3)'
                          e.target.style.color = '#A0A0A0'
                          e.target.style.transform = 'scale(1)'
                        }
                      }}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <button
              onClick={handleWhatsAppOrder}
              disabled={product.stock === 0}
              className="w-full py-6 px-8 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-3"
              style={{
                background: product.stock === 0 ? '#374151' : '#2563EB',
                color: 'white',
                cursor: product.stock === 0 ? 'not-allowed' : 'pointer'
              }}
              onMouseEnter={(e) => {
                if (product.stock > 0) {
                  e.target.style.background = '#3B82F6'
                  e.target.style.transform = 'scale(1.02)'
                  e.target.style.boxShadow = '0 20px 40px rgba(37, 99, 235, 0.4)'
                }
              }}
              onMouseLeave={(e) => {
                if (product.stock > 0) {
                  e.target.style.background = '#2563EB'
                  e.target.style.transform = 'scale(1)'
                  e.target.style.boxShadow = 'none'
                }
              }}
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              <span className="uppercase tracking-wide">
                {product.stock === 0 ? 'SOLD OUT' : 'ORDER ON WHATSAPP'}
              </span>
            </button>

            <p className="text-sm text-center mt-5 font-medium" style={{ color: '#A0A0A0' }}>
              ⚡ Instant inquiry via WhatsApp • Fast response guaranteed
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
