const ProductSkeleton = () => {
  return (
    <div className="bg-black-card rounded-xl overflow-hidden border border-grey-text/10 animate-pulse h-full flex flex-col">
      {/* Image Skeleton */}
      <div className="aspect-[3/4] bg-gradient-to-br from-grey-text/10 to-grey-text/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-electric/5 to-transparent animate-shimmer"></div>
      </div>
      
      {/* Content Skeleton */}
      <div className="p-4 sm:p-5 space-y-3 flex-1 flex flex-col">
        {/* Title */}
        <div className="h-5 bg-gradient-to-r from-grey-text/20 to-grey-text/10 rounded w-3/4 relative overflow-hidden min-h-[3rem] flex items-center">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-electric/10 to-transparent animate-shimmer"></div>
        </div>
        
        {/* Description */}
        <div className="space-y-2 min-h-[2.5rem]">
          <div className="h-3 bg-gradient-to-r from-grey-text/15 to-grey-text/8 rounded w-full relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-electric/10 to-transparent animate-shimmer"></div>
          </div>
          <div className="h-3 bg-gradient-to-r from-grey-text/15 to-grey-text/8 rounded w-2/3 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-electric/10 to-transparent animate-shimmer"></div>
          </div>
        </div>
        
        {/* Price and Stock */}
        <div className="flex justify-between items-center pt-2">
          <div className="h-6 bg-gradient-to-r from-blue-electric/20 to-blue-electric/10 rounded w-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-bright/20 to-transparent animate-shimmer"></div>
          </div>
          <div className="h-4 bg-gradient-to-r from-grey-text/15 to-grey-text/8 rounded w-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-electric/10 to-transparent animate-shimmer"></div>
          </div>
        </div>
        
        {/* Sizes */}
        <div className="flex gap-1.5 min-h-[2rem] flex-1 items-start">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-6 w-8 bg-gradient-to-r from-grey-text/15 to-grey-text/8 rounded relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-electric/10 to-transparent animate-shimmer"></div>
            </div>
          ))}
        </div>
        
        {/* Button */}
        <div className="h-10 bg-gradient-to-r from-blue-electric/30 to-blue-electric/20 rounded-lg relative overflow-hidden mt-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-bright/20 to-transparent animate-shimmer"></div>
        </div>
      </div>
    </div>
  )
}

export default ProductSkeleton
