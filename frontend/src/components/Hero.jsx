import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Hero = ({ products = [] }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center py-8 sm:py-6 lg:py-8 pt-24 sm:pt-20 lg:pt-8">
      {/* Enhanced Background with more animations */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>

      {/* Multiple Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/3 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-purple-500/4 rounded-full blur-2xl animate-float-reverse"></div>
        <div className="absolute top-3/4 left-1/6 w-48 h-48 bg-indigo-500/3 rounded-full blur-3xl animate-pulse-slow-delayed"></div>
        
        {/* Moving particles */}
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-blue-400/30 rounded-full animate-particle-1"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-purple-400/40 rounded-full animate-particle-2"></div>
        <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-indigo-400/35 rounded-full animate-particle-3"></div>
        
        {/* Subtle Grid Pattern with animation */}
        <div className="absolute inset-0 opacity-3">
          <div 
            className="absolute inset-0 animate-grid-shift" 
            style={{
              backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}
          ></div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-6 lg:gap-8 items-center min-h-[calc(100vh-6rem)] sm:min-h-[calc(100vh-5rem)] lg:min-h-[calc(100vh-4rem)]">
          
          {/* Text Content - Order 2 on mobile (below reel), Order 1 on desktop (left side) */}
          <div className={`text-center lg:text-left transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          } flex flex-col justify-center order-2 lg:order-1 py-4 lg:py-8`}>
            
            <div className="mb-2 sm:mb-3 lg:mb-6">
              <div className="inline-flex items-center px-2 py-1 sm:px-3 sm:py-1 rounded-full glass border border-blue-500/30 mb-2 sm:mb-3 lg:mb-6 animate-slideDown">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mr-1.5 sm:mr-2 animate-pulse"></span>
                <span className="text-blue-400 text-xs font-medium">New Collection 2026</span>
              </div>
            </div>

            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2 sm:mb-3 lg:mb-4 leading-tight animate-text-reveal">
              Fashion is the{' '}
              <span className="block text-blue-400 animate-glow-text">armor</span>
              <span className="block text-gray-300 animate-fade-in-up">to survive reality</span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-3 sm:mb-4 lg:mb-6 max-w-sm sm:max-w-md lg:max-w-lg mx-auto lg:mx-0 leading-relaxed animate-fade-in-delayed">
              Discover your unique style with our curated collection.
            </p>

            <div className="flex flex-col sm:flex-row gap-2 lg:gap-3 mb-3 sm:mb-4 lg:mb-6 animate-buttons-slide justify-center lg:justify-start">
              <a 
                href="#products"
                className="btn-primary group text-xs sm:text-sm py-2 px-4 sm:py-3 sm:px-6 lg:py-3 lg:px-6"
              >
                <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                Explore Collection
              </a>
              
              <a 
                href="https://wa.me/917990710774"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary group text-xs sm:text-sm py-2 px-4 sm:py-3 sm:px-6 lg:py-3 lg:px-6"
              >
                <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Contact Us
              </a>
            </div>
          </div>

          {/* Video Story Style Showcase - Order 1 on mobile (above text), Order 2 on desktop (right side) */}
          <div className={`relative transition-all duration-1000 delay-300 ease-out ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          } flex items-center justify-center order-1 lg:order-2 py-2 lg:py-8 mt-4 sm:mt-2 lg:mt-0`}>
            
            <div className="story-container">
              {/* Story Content with Video */}
              <div className="story-content">
                <div className="story-image-container">
                  <video
                    src="/clothes-video.mp4"
                    className="story-video"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                  <div className="story-gradient"></div>
                </div>

                {/* Story Info Overlay */}
                <div className="story-info">
                  <div className="story-header">
                    <div className="story-avatar">
                      <span className="text-white font-bold">SS</span>
                    </div>
                    <div className="story-meta">
                      <h3 className="story-title">Sam's Style</h3>
                      <p className="story-time">2h ago</p>
                    </div>
                  </div>

                  <div className="story-product-info">
                    <div className="product-badge">
                      <span className="category-tag">Fashion Collection</span>
                    </div>
                    <h4 className="product-name">Premium Clothing</h4>
                    <button className="story-cta">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero