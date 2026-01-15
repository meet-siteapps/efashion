import { Link } from 'react-router-dom'
import JacketIcon from './JacketIcon'
import TShirtIcon from './TShirtIcon'

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product._id}`} className="block">
      <div className="group bg-black-card rounded-xl overflow-hidden border border-grey-text/10 hover:border-blue-electric/60 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-electric/20 animate-reveal relative">
        {/* Animated Icon Above Card */}
        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-24 h-24 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:-translate-y-2 z-10">
          {product.category === 'Jackets' ? <JacketIcon /> : <TShirtIcon />}
        </div>
        
        {/* Glow Effect on Hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-electric/0 via-blue-bright/0 to-blue-light/0 group-hover:from-blue-electric/5 group-hover:via-blue-bright/5 group-hover:to-blue-light/5 transition-all duration-500 pointer-events-none"></div>
        
        {/* Image Container with Zoom Effect */}
        <div className="relative overflow-hidden aspect-[3/4] bg-black-secondary">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Animated Overlay on Hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black-primary/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Floating Particles on Hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-blue-electric rounded-full animate-float"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${30 + i * 10}%`,
                  animationDelay: `${i * 0.2}s`,
                }}
              ></div>
            ))}
          </div>
          
          {/* Badges */}
          <div className="absolute top-3 right-3 flex flex-col gap-2">
            <span className="bg-blue-electric/90 backdrop-blur-sm text-white px-2 sm:px-3 py-1 rounded text-xs font-medium shadow-lg animate-slide-in">
              {product.category}
            </span>
            {product.featured && (
              <span className="bg-gradient-to-r from-blue-bright to-blue-light text-white px-2 sm:px-3 py-1 rounded text-xs font-semibold shadow-lg animate-pulse-glow">
                Featured
              </span>
            )}
          </div>
          
          {/* Out of Stock Overlay */}
          {product.stock === 0 && (
            <div className="absolute inset-0 bg-black-primary/70 backdrop-blur-sm flex items-center justify-center">
              <span className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold text-sm animate-pulse">
                Out of Stock
              </span>
            </div>
          )}
          
          {/* Quick View Hint with Animation */}
          <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
            <div className="bg-gradient-to-r from-blue-electric to-blue-bright backdrop-blur-sm text-white text-center py-2 rounded text-sm font-medium shadow-lg animate-glow">
              View Details →
            </div>
          </div>
        </div>
        
        {/* Product Info */}
        <div className="p-4 sm:p-5 relative">
          {/* Animated Border Top */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-electric to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <h3 className="text-base sm:text-lg font-semibold text-grey-light mb-2 group-hover:text-blue-bright transition-colors duration-300 line-clamp-2">
            {product.name}
          </h3>
          
          <p className="text-grey-text text-xs sm:text-sm mb-3 line-clamp-2">
            {product.description}
          </p>
          
          <div className="flex items-center justify-between mb-3">
            <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-electric to-blue-bright bg-clip-text text-transparent">
              ₹{product.price.toLocaleString()}
            </div>
            
            <div className="text-xs text-grey-text">
              {product.stock > 0 ? (
                <span className="text-green-400 flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  {product.stock} in stock
                </span>
              ) : (
                <span className="text-red-400">Sold out</span>
              )}
            </div>
          </div>
          
          {/* Sizes with Hover Effect */}
          {product.sizes && product.sizes.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {product.sizes.slice(0, 5).map((size, idx) => (
                <span 
                  key={idx} 
                  className="text-xs bg-black-secondary text-grey-text px-2 py-1 rounded border border-grey-text/20 group-hover:border-blue-electric/40 group-hover:text-blue-light transition-all duration-300 hover:scale-110"
                  style={{ transitionDelay: `${idx * 50}ms` }}
                >
                  {size}
                </span>
              ))}
              {product.sizes.length > 5 && (
                <span className="text-xs text-grey-text self-center">+{product.sizes.length - 5}</span>
              )}
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
