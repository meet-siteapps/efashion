import { useState, useEffect } from 'react'
import api from '../config/api'
import ProductCard from '../components/ProductCard'
import ProductSkeleton from '../components/ProductSkeleton'
import AnimatedBackground from '../components/AnimatedBackground'

const Home = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState('All')

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      setLoading(true)
      const { data } = await api.get('/api/products')
      setProducts(data.products)
    } catch (error) {
      console.error('Error fetching products:', error)
    } finally {
      setLoading(false)
    }
  }

  const categories = ['All', 'Jackets', 'T-Shirts']
  
  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(p => p.category === selectedCategory)

  return (
    <div className="min-h-screen bg-black-primary relative overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Full-Screen Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
          {/* Animated Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-electric/10 via-transparent to-blue-bright/10 animate-gradient-shift bg-200%"></div>
          
          {/* Floating Elements */}
          <div className="absolute top-1/4 left-10 w-20 h-20 border-2 border-blue-electric/20 rounded-full animate-float"></div>
          <div className="absolute bottom-1/4 right-10 w-16 h-16 border-2 border-blue-bright/20 rounded-lg animate-float-slow"></div>
          
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            {/* Main Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in">
              <span className="block text-grey-light mb-2">Premium</span>
              <span className="block bg-gradient-to-r from-blue-electric via-blue-bright to-blue-light bg-clip-text text-transparent animate-gradient-shift bg-200%">
                Men's Fashion
              </span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-grey-text text-lg sm:text-xl md:text-2xl mb-10 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Discover curated collections of premium jackets and t-shirts. 
              <span className="text-grey-light block mt-2">Elevate your style.</span>
            </p>
            
            {/* CTA Buttons with Enhanced Glow */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <a 
                href="#products"
                className="group relative px-8 py-4 bg-blue-electric hover:bg-blue-bright rounded-lg font-semibold text-white transition-all duration-300 hover:shadow-2xl hover:shadow-blue-electric/60 hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10">Explore Collection</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-bright to-blue-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-gradient-shift bg-200%"></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 animate-pulse-glow"></div>
              </a>
              
              <a 
                href="https://wa.me/919327464610"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-transparent border-2 border-blue-electric hover:bg-blue-electric/10 rounded-lg font-semibold text-blue-electric hover:text-blue-bright transition-all duration-300 hover:border-blue-bright hover:shadow-lg hover:shadow-blue-electric/30"
              >
                Contact Us
              </a>
            </div>
            
            {/* Scroll Indicator with Animation */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
              <div className="flex flex-col items-center gap-2">
                <span className="text-grey-text text-sm">Scroll</span>
                <svg className="w-6 h-6 text-blue-electric animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Values Section with Animations */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-grey-text/10 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-electric/5 to-transparent"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: '✨', title: 'Premium Quality', desc: 'Handpicked materials and craftsmanship' },
                { icon: '🚀', title: 'Fast Delivery', desc: 'Quick and reliable shipping worldwide' },
                { icon: '🔄', title: 'Easy Returns', desc: '30-day hassle-free return policy' }
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className="text-center p-6 bg-black-card/50 backdrop-blur-sm rounded-xl border border-blue-electric/10 hover:border-blue-electric/30 transition-all duration-300 hover:scale-105 animate-reveal group"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="text-4xl mb-4 animate-float group-hover:scale-110 transition-transform">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-grey-light mb-2 group-hover:text-blue-bright transition-colors">{item.title}</h3>
                  <p className="text-grey-text">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl sm:text-5xl font-bold text-grey-light mb-4">
                Featured <span className="bg-gradient-to-r from-blue-electric to-blue-bright bg-clip-text text-transparent">Collection</span>
              </h2>
              <p className="text-grey-text text-lg max-w-2xl mx-auto">
                Explore our carefully curated selection of premium menswear
              </p>
            </div>

            {/* Category Filter with Enhanced Styling */}
            <div className="flex justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-blue-electric to-blue-bright text-white shadow-lg shadow-blue-electric/40 scale-105'
                      : 'bg-black-card text-grey-text hover:text-grey-light hover:bg-black-secondary border border-grey-text/20 hover:border-blue-electric/40'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Products Grid - 2 columns on mobile/tablet */}
            {loading ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {[...Array(8)].map((_, index) => (
                  <ProductSkeleton key={index} />
                ))}
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-grey-text text-xl">No products found</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {filteredProducts.map((product, index) => (
                  <div key={product._id} style={{ animationDelay: `${index * 0.05}s` }}>
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Newsletter CTA Section with Glow */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-grey-text/10 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-blue-electric/5 to-transparent"></div>
          <div className="max-w-4xl mx-auto text-center animate-reveal relative z-10">
            <div className="bg-gradient-to-br from-black-card to-black-secondary p-12 rounded-2xl border border-blue-electric/20 shadow-2xl shadow-blue-electric/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-electric/10 rounded-full blur-3xl animate-pulse-glow"></div>
              <h2 className="text-3xl sm:text-4xl font-bold text-grey-light mb-4 relative z-10">
                Stay Connected
              </h2>
              <p className="text-grey-text text-lg mb-8 relative z-10">
                Get instant updates on new arrivals and exclusive offers via WhatsApp
              </p>
              <a 
                href="https://wa.me/919327464610"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-green-600 hover:bg-green-700 px-8 py-4 rounded-lg text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-green-600/40 hover:shadow-2xl hover:shadow-green-600/60 relative z-10"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                <span>Connect on WhatsApp</span>
              </a>
            </div>
          </div>
        </section>

        {/* Minimal Footer */}
        <footer className="border-t border-grey-text/10 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="text-2xl font-bold mb-4">
              <span className="text-grey-light">MEN'S</span>
              <span className="bg-gradient-to-r from-blue-electric to-blue-bright bg-clip-text text-transparent ml-1">FASHION</span>
            </div>
            <p className="text-grey-text mb-6">Premium menswear for the modern gentleman</p>
            <div className="flex justify-center space-x-6 mb-6">
              <a href="https://wa.me/919327464610" className="text-grey-text hover:text-blue-electric transition-colors">
                WhatsApp
              </a>
              <span className="text-grey-text/30">|</span>
              <a href="#products" className="text-grey-text hover:text-blue-electric transition-colors">
                Shop
              </a>
            </div>
            <p className="text-grey-text/60 text-sm">
              © 2024 Men's Fashion. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Home