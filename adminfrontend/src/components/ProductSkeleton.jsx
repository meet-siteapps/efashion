const ProductSkeleton = () => {
  return (
    <div 
      className="rounded-xl overflow-hidden border animate-pulse flex flex-col"
      style={{ 
        background: '#1A1A1A',
        borderColor: 'rgba(160, 160, 160, 0.1)'
      }}
    >
      {/* Image Skeleton */}
      <div className="relative aspect-[4/3] overflow-hidden" style={{ background: '#111111' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
      </div>

      {/* Content Skeleton */}
      <div className="p-4 sm:p-5 space-y-3 flex-1 flex flex-col">
        {/* Title */}
        <div className="h-5 rounded w-3/4 relative overflow-hidden min-h-[3rem] flex items-center" style={{ background: 'rgba(160, 160, 160, 0.1)' }}>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
        </div>
        
        {/* Description */}
        <div className="space-y-2 min-h-[2.5rem]">
          <div className="h-3 rounded w-full relative overflow-hidden" style={{ background: 'rgba(160, 160, 160, 0.08)' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
          </div>
          <div className="h-3 rounded w-2/3 relative overflow-hidden" style={{ background: 'rgba(160, 160, 160, 0.08)' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
          </div>
        </div>
        
        {/* Price and Stock */}
        <div className="grid grid-cols-2 gap-3 pt-2">
          <div>
            <div className="h-3 rounded w-12 mb-2 relative overflow-hidden" style={{ background: 'rgba(160, 160, 160, 0.08)' }}>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
            </div>
            <div className="h-6 rounded w-16 relative overflow-hidden" style={{ background: 'rgba(37, 99, 235, 0.2)' }}>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
            </div>
          </div>
          <div>
            <div className="h-3 rounded w-12 mb-2 relative overflow-hidden" style={{ background: 'rgba(160, 160, 160, 0.08)' }}>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
            </div>
            <div className="h-6 rounded w-8 relative overflow-hidden" style={{ background: 'rgba(160, 160, 160, 0.1)' }}>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
            </div>
          </div>
        </div>
        
        {/* Sizes */}
        <div className="space-y-2 flex-1">
          <div className="h-3 rounded w-10 relative overflow-hidden" style={{ background: 'rgba(160, 160, 160, 0.08)' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
          </div>
          <div className="flex gap-1.5 min-h-[2rem]">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-6 w-8 rounded relative overflow-hidden" style={{ background: 'rgba(160, 160, 160, 0.08)' }}>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Buttons */}
        <div className="flex gap-2 pt-2 mt-auto">
          <div className="flex-1 h-10 rounded-lg relative overflow-hidden" style={{ background: 'rgba(37, 99, 235, 0.3)' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
          </div>
          <div className="flex-1 h-10 rounded-lg relative overflow-hidden" style={{ background: 'rgba(220, 38, 38, 0.3)' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductSkeleton
