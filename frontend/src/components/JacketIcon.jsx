const JacketIcon = () => {
  return (
    <svg 
      viewBox="0 0 200 200" 
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Jacket Body */}
      <g className="animate-swing origin-center">
        {/* Left Side */}
        <path
          d="M 60 80 L 50 120 L 50 180 L 90 180 L 90 100 Z"
          fill="rgba(37, 99, 235, 0.2)"
          stroke="currentColor"
          strokeWidth="2"
          className="text-blue-electric animate-pulse-glow"
        />
        
        {/* Right Side */}
        <path
          d="M 140 80 L 150 120 L 150 180 L 110 180 L 110 100 Z"
          fill="rgba(37, 99, 235, 0.2)"
          stroke="currentColor"
          strokeWidth="2"
          className="text-blue-electric animate-pulse-glow"
          style={{ animationDelay: '0.2s' }}
        />
        
        {/* Collar Left */}
        <path
          d="M 60 80 L 80 60 L 90 80 Z"
          fill="rgba(59, 130, 246, 0.3)"
          stroke="currentColor"
          strokeWidth="2"
          className="text-blue-bright"
        />
        
        {/* Collar Right */}
        <path
          d="M 140 80 L 120 60 L 110 80 Z"
          fill="rgba(59, 130, 246, 0.3)"
          stroke="currentColor"
          strokeWidth="2"
          className="text-blue-bright"
        />
        
        {/* Zipper */}
        <line
          x1="100"
          y1="80"
          x2="100"
          y2="180"
          stroke="currentColor"
          strokeWidth="3"
          className="text-blue-light animate-pulse-glow"
          strokeDasharray="5,5"
        />
        
        {/* Pockets */}
        <rect
          x="55"
          y="130"
          width="30"
          height="25"
          rx="3"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-blue-light/50"
        />
        <rect
          x="115"
          y="130"
          width="30"
          height="25"
          rx="3"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-blue-light/50"
        />
        
        {/* Sleeves */}
        <path
          d="M 50 80 L 20 100 L 30 140 L 50 120 Z"
          fill="rgba(37, 99, 235, 0.15)"
          stroke="currentColor"
          strokeWidth="2"
          className="text-blue-electric/60"
        />
        <path
          d="M 150 80 L 180 100 L 170 140 L 150 120 Z"
          fill="rgba(37, 99, 235, 0.15)"
          stroke="currentColor"
          strokeWidth="2"
          className="text-blue-electric/60"
        />
      </g>
      
      {/* Sparkles */}
      <circle cx="40" cy="90" r="2" fill="currentColor" className="text-blue-light animate-ping" />
      <circle cx="160" cy="95" r="2" fill="currentColor" className="text-blue-light animate-ping" style={{ animationDelay: '0.5s' }} />
      <circle cx="100" cy="70" r="2" fill="currentColor" className="text-blue-bright animate-ping" style={{ animationDelay: '1s' }} />
    </svg>
  )
}

export default JacketIcon
