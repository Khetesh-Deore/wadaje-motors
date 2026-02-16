import { motion } from 'framer-motion'
import { FaArrowRight, FaCheckCircle, FaLeaf, FaSeedling } from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
  const scrollToDocuments = () => {
    const documentsSection = document.getElementById('documents')
    documentsSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero">
      <div className="hero-background">
        {/* Animated orbs */}
        <div className="growth-orb orb-1"></div>
        <div className="growth-orb orb-2"></div>
        <div className="growth-orb orb-3"></div>

        {/* Decorative agriculture icons */}
        <div className="hero-decoration decoration-1">🌾</div>
        <div className="hero-decoration decoration-2">🌱</div>
        <div className="hero-decoration decoration-3">🌻</div>
        <div className="hero-decoration decoration-4">🍃</div>

        {/* Wheat field effect */}
        <div className="wheat-field">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="wheat-stalk"
              style={{
                left: `${(i / 50) * 100}%`,
                height: `${Math.random() * 100 + 50}px`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${Math.random() * 2 + 2}s`
              }}
            />
          ))}
        </div>
      </div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Badge */}
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <FaSeedling className="hero-badge-icon" />
          <span>Cultivating Excellence Since Inception</span>
        </motion.div>

        {/* Logo */}
        <motion.img
          src="/documents/1000024686.png"
          alt="Wadaje Motors Logo"
          className="hero-logo"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />

        {/* Title */}
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Coming Soon
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <span className="hero-subtitle-highlight">Engineering Precision.</span> Driving Innovation.
          <br />
          Rooted in Quality, Growing with Purpose.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="hero-cta-group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <button className="btn-primary" onClick={scrollToDocuments}>
            Explore Documents
            <FaArrowRight className="btn-icon" />
          </button>
          <button className="btn-secondary">
            <FaLeaf style={{ marginRight: '8px' }} />
            Our Journey
          </button>
        </motion.div>

        {/* Features */}
        <motion.div
          className="hero-features"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="hero-feature">
            <FaCheckCircle className="hero-feature-icon" />
            <span>Certified & Verified</span>
          </div>
          <div className="hero-feature">
            <FaCheckCircle className="hero-feature-icon" />
            <span>Sustainable Practices</span>
          </div>
          <div className="hero-feature">
            <FaCheckCircle className="hero-feature-icon" />
            <span>Quality Assured</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <span>Discover More</span>
        <div className="scroll-icon"></div>
      </motion.div>
    </section>
  )
}

export default Hero
