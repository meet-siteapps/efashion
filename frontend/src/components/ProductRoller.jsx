const ProductRoller = ({ products }) => {
  // Filter featured products or use first 6 products
  const featuredProducts = products.filter(p => p.featured).slice(0, 6)
  const displayProducts = featuredProducts.length > 0 ? featuredProducts : products.slice(0, 6)
  
  // Duplicate products for seamless infinite loop
  const rollerItems = [...displayProducts, ...displayProducts, ...displayProducts]

  return (
    <section className="py-8 overflow-hidden border-y border-grey-text/10 bg-gradient-to-r from-black-primary via-black-secondary to-black-primary relative">
      {/* Gradient Overlays for smooth fade */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black-primary to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black-primary to-transparent z-10 pointer-events-none"></div>
      
      {/* Roller Container */}
      <div className="flex items-center gap-8 animate-scroll-left">
        {rollerItems.map((product, index) => (
          <div
            key={`${product._id}-${index}`}
            className="flex-shrink-0 group"
          >
            <div className="flex items-center gap-4 px-6 py-4 bg-black-card/50 backdrop-blur-sm rounded-xl border border-blue-electric/20 hover:border-blue-electric/60 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-electric/20 min-w-[300px]">
              {/* Product Image */}
              <div className="w-16 h-16 rounded-lg overflow-hidden bg-black-secondary flex-shrink-0">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Product Info */}
              <div className="flex-1 min-w-0">
                <h4 className="text-grey-light font-semibold text-sm truncate group-hover:text-blue-bright transition-colors">
                  {product.name}
                </h4>
                <p className="text-grey-text text-xs truncate">{product.category}</p>
                <p className="text-blue-electric font-bold text-lg mt-1">
                  ₹{product.price.toLocaleString()}
                </p>
              </div>
              
              {/* Featured Badge */}
              {product.featured && (
                <div className="flex-shrink-0">
                  <span className="px-2 py-1 bg-gradient-to-r from-blue-electric to-blue-bright text-white text-xs font-semibold rounded">
                    ⭐
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProductRoller
