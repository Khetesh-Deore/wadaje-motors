import { motion } from 'framer-motion'
import { FaArrowRight, FaCheckCircle, FaCog, FaIndustry } from 'react-icons/fa'
import TrolleyAnimation from './TrolleyAnimation'
import './Hero.css'

const Hero = () => {
  const scrollToDocuments = () => {
    const documentsSection = document.getElementById('documents')
    documentsSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero">
      <div className="hero-background">
        {/* Subtle gradient orbs */}
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>

        {/* Geometric pattern overlay */}
        <div className="geometric-pattern"></div>
      </div>

      {/* Trolley Animation */}
      <TrolleyAnimation />

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Professional Badge */}
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <FaIndustry className="hero-badge-icon" />
          <span>Quality Manufacturing Since Inception</span>
        </motion.div>

        {/* Logo */}
        <motion.img
          src="/documents/1000024686.png"
          alt="Wadaje Motors Logo"
          className="hero-logo"
          initial={{ scale: 0.9, opacity: 0 }}
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
          Premium Agricultural Trolleys & Tractor Parts
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
            <FaCog style={{ marginRight: '8px' }} />
            Our Products
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
            <span>Quality Assured</span>
          </div>
          <div className="hero-feature">
            <FaCheckCircle className="hero-feature-icon" />
            <span>Trusted Partner</span>
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
