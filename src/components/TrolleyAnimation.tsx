import { useEffect, useRef } from 'react'
import './TrolleyAnimation.css'

const TrolleyAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleClick = () => {
      const vehicle = container.querySelector('.tractor-trolley-set') as HTMLElement
      if (vehicle) {
        if (vehicle.style.animationPlayState === 'paused') {
          vehicle.style.animationPlayState = 'running'
        } else {
          vehicle.style.animationPlayState = 'paused'
        }
      }
    }

    container.addEventListener('click', handleClick)
    return () => container.removeEventListener('click', handleClick)
  }, [])

  return (
    <div className="trolley-container" ref={containerRef}>
      <div className="tractor-trolley-set">
        {/* TRACTOR (FRONT - PULLING) */}
        <div className="tractor">
          {/* Front Headlight */}
          <div className="tractor-headlight"></div>
          
          {/* Tractor Body */}
          <div className="tractor-body">
            {/* Engine Hood */}
            <div className="tractor-hood">
              <div className="hood-vent"></div>
              <div className="hood-vent"></div>
              <div className="hood-vent"></div>
            </div>
            
            {/* Cabin */}
            <div className="tractor-cabin">
              <div className="cabin-window"></div>
              <div className="cabin-roof"></div>
              <div className="cabin-door"></div>
            </div>

            {/* Exhaust Pipe */}
            <div className="exhaust-pipe">
              <div className="exhaust-smoke"></div>
            </div>
          </div>

          {/* Front Wheel (Small) */}
          <div className="tractor-wheel front-wheel">
            <div className="wheel-rim"></div>
            <div className="wheel-hub"></div>
            <div className="wheel-tread"></div>
          </div>

          {/* Rear Wheel (Large) */}
          <div className="tractor-wheel rear-wheel">
            <div className="wheel-rim"></div>
            <div className="wheel-hub"></div>
            <div className="wheel-tread"></div>
            <div className="wheel-tread tread-2"></div>
          </div>
        </div>

        {/* HITCH CONNECTION (CONNECTING TRACTOR TO TROLLEY) */}
        <div className="hitch-connection">
          <div className="hitch-bar"></div>
          <div className="hitch-joint"></div>
        </div>

        {/* TROLLEY (BEHIND - BEING PULLED) */}
        <div className="trolley">
          {/* Trolley Frame */}
          <div className="trolley-frame">
            {/* Cargo Box */}
            <div className="trolley-cargo">
              <div className="cargo-box">
                <div className="cargo-top"></div>
                <div className="cargo-side left"></div>
                <div className="cargo-side right"></div>
                <div className="cargo-front"></div>
                <div className="cargo-detail"></div>
                <div className="cargo-logo">WM</div>
              </div>
            </div>

            {/* Trolley Axles */}
            <div className="trolley-axle front-axle"></div>
            <div className="trolley-axle rear-axle"></div>
          </div>

          {/* Front Wheels */}
          <div className="trolley-wheel-set front">
            <div className="trolley-wheel">
              <div className="wheel-rim"></div>
              <div className="wheel-hub"></div>
              <div className="spoke"></div>
              <div className="spoke spoke-2"></div>
              <div className="spoke spoke-3"></div>
            </div>
            <div className="trolley-wheel">
              <div className="wheel-rim"></div>
              <div className="wheel-hub"></div>
              <div className="spoke"></div>
              <div className="spoke spoke-2"></div>
              <div className="spoke spoke-3"></div>
            </div>
          </div>

          {/* Rear Wheels */}
          <div className="trolley-wheel-set rear">
            <div className="trolley-wheel">
              <div className="wheel-rim"></div>
              <div className="wheel-hub"></div>
              <div className="spoke"></div>
              <div className="spoke spoke-2"></div>
              <div className="spoke spoke-3"></div>
            </div>
            <div className="trolley-wheel">
              <div className="wheel-rim"></div>
              <div className="wheel-hub"></div>
              <div className="spoke"></div>
              <div className="spoke spoke-2"></div>
              <div className="spoke spoke-3"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Ground Line */}
      <div className="ground-line"></div>
    </div>
  )
}

export default TrolleyAnimation
