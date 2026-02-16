import { motion } from 'framer-motion'
import { FaInstagram, FaFacebook, FaLinkedin, FaXTwitter, FaUsers } from 'react-icons/fa6'
import './SocialMedia.css'

const SocialMedia = () => {
  const socials = [
    { icon: FaInstagram, name: 'Instagram', url: '#', color: '#E4405F' },
    { icon: FaFacebook, name: 'Facebook', url: '#', color: '#1877F2' },
    { icon: FaLinkedin, name: 'LinkedIn', url: '#', color: '#0A66C2' },
    { icon: FaXTwitter, name: 'X', url: '#', color: '#000000' }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 300
      }
    }
  }

  return (
    <section className="social-media">
      <svg className="wave-divider top" viewBox="0 0 1200 80" preserveAspectRatio="none">
        <path
          d="M0,40 Q300,60 600,40 T1200,40 L1200,0 L0,0 Z"
          fill="url(#gradient-social)"
          opacity="0.06"
        />
        <defs>
          <linearGradient id="gradient-social" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3498db" />
            <stop offset="100%" stopColor="#27ae60" />
          </linearGradient>
        </defs>
      </svg>

      <motion.div
        className="social-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="social-badge">
          <FaUsers />
          <span>Stay Connected</span>
        </div>
        <h2 className="social-title">Connect With Us</h2>
        <p className="social-subtitle">
          Follow us on social media for the latest updates and announcements
        </p>
      </motion.div>

      <motion.div
        className="social-icons"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {socials.map((social) => (
          <motion.a
            key={social.name}
            href={social.url}
            className="social-icon"
            variants={itemVariants}
            whileHover={{
              scale: 1.08,
              y: -4,
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.95 }}
            style={{ '--social-color': social.color } as React.CSSProperties}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
          >
            <social.icon className="icon" />
            <span className="social-name">{social.name}</span>
          </motion.a>
        ))}
      </motion.div>
    </section>
  )
}

export default SocialMedia
