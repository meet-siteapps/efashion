const TShirtIcon = () => {
  return (
    <svg 
      viewBox="0 0 200 200" 
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* T-Shirt Body */}
      <g className="animate-swing origin-center">
        {/* Main Body */}
        <rect
          x="60"
          y="80"
          width="80"
          height="100"
          rx="5"
          fill="rgba(37, 99, 235, 0.2)"
          stroke="currentColor"
          strokeWidth="2"
          className="text-blue-electric animate-pulse-glow"
        />
        
        {/* Neck */}
        <path
          d="M 85 80 Q 100 70 115 80"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-blue-bright"
        />
        
        {/* Left Sleeve */}
        <path
          d="M 60 80 L 40 90 L 45 110 L 60 100 Z"
          fill="rgba(37, 99, 235, 0.15)"
          stroke="currentColor"
          strokeWidth="2"
          className="text-blue-electric/60 animate-pulse-glow"
        />
        
        {/* Right Sleeve */}
        <path
          d="M 140 80 L 160 90 L 155 110 L 140 100 Z"
          fill="rgba(37, 99, 235, 0.15)"
          stroke="currentColor"
          strokeWidth="2"
          className="text-blue-electric/60 animate-pulse-glow"
          style={{ animationDelay: '0.3s' }}
        />
        
        {/* Design Lines */}
        <line
          x1="70"
          y1="100"
          x2="130"
          y2="100"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-blue-light/40"
          strokeDasharray="3,3"
        />
        <line
          x1="70"
          y1="120"
          x2="130"
          y2="120"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-blue-light/40"
          strokeDasharray="3,3"
        />
        
        {/* Pocket */}
        <rect
          x="85"
          y="95"
          width="30"
          height="20"
          rx="2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-blue-light/50"
        />
      </g>
      
      {/* Sparkles */}
      <circle cx="50" cy="95" r="2" fill="currentColor" className="text-blue-light animate-ping" />
      <circle cx="150" cy="100" r="2" fill="currentColor" className="text-blue-light animate-ping" style={{ animationDelay: '0.7s' }} />
      <circle cx="100" cy="65" r="2" fill="currentColor" className="text-blue-bright animate-ping" style={{ animationDelay: '1.2s' }} />
    </svg>
  )
}

export default TShirtIcon
