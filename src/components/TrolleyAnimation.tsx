import { useEffect, useRef } from 'react'
import './TrolleyAnimation.css'

const TrolleyAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleClick = () => {
      const trolley = container.querySelector('.trolley') as HTMLElement
      if (trolley) {
        if (trolley.style.animationPlayState === 'paused') {
          trolley.style.animationPlayState = 'running'
        } else {
          trolley.style.animationPlayState = 'paused'
        }
      }
    }

    container.addEventListener('click', handleClick)
    return () => container.removeEventListener('click', handleClick)
  }, [])

  return (
    <div className="trolley-container" ref={containerRef}>
      <div className="trolley">
        {/* Front Wheels */}
        <div className="wheel-set front">
          <div className="wheel trolley-wheel">
            <div className="wheel-rim"></div>
            <div className="wheel-hub"></div>
            <div className="spoke"></div>
            <div className="spoke spoke-2"></div>
            <div className="spoke spoke-3"></div>
          </div>
          <div className="wheel trolley-wheel">
            <div className="wheel-rim"></div>
            <div className="wheel-hub"></div>
            <div className="spoke"></div>
            <div className="spoke spoke-2"></div>
            <div className="spoke spoke-3"></div>
          </div>
        </div>

        {/* Trolley Body */}
        <div className="trolley-body">
          {/* Suspension */}
          <div className="suspension">
            <div className="spring"></div>
            <div className="spring"></div>
          </div>

          {/* Cargo Box */}
          <div className="trolley-cargo">
            <div className="cargo-box">
              <div className="cargo-top"></div>
              <div className="cargo-side left"></div>
              <div className="cargo-side right"></div>
              <div className="cargo-front"></div>
              <div className="cargo-detail"></div>
            </div>
          </div>

          {/* Handle */}
          <div className="handle">
            <div className="handle-grip"></div>
          </div>

          {/* Axle */}
          <div className="axle front-axle"></div>
          <div className="axle rear-axle"></div>
        </div>

        {/* Rear Wheels */}
        <div className="wheel-set rear">
          <div className="wheel trolley-wheel">
            <div className="wheel-rim"></div>
            <div className="wheel-hub"></div>
            <div className="spoke"></div>
            <div className="spoke spoke-2"></div>
            <div className="spoke spoke-3"></div>
          </div>
          <div className="wheel trolley-wheel">
            <div className="wheel-rim"></div>
            <div className="wheel-hub"></div>
            <div className="spoke"></div>
            <div className="spoke spoke-2"></div>
            <div className="spoke spoke-3"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrolleyAnimation
