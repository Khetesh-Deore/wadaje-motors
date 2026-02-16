import { motion } from 'framer-motion'
import { FaInstagram, FaFacebook, FaLinkedin, FaXTwitter } from 'react-icons/fa6'
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
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 300
      }
    }
  }

  return (
    <section className="social-media">
      <svg className="wave-divider top" viewBox="0 0 1200 100" preserveAspectRatio="none">
        <path
          d="M0,50 Q300,100 600,50 T1200,50 L1200,0 L0,0 Z"
          fill="url(#gradient2)"
          opacity="0.1"
        />
        <defs>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--primary-purple)" />
            <stop offset="100%" stopColor="var(--primary-blue)" />
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
        <h2 className="social-title">Connect With Us</h2>
        <p className="social-subtitle">Follow us on social media for updates</p>
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
              scale: 1.15,
              rotate: [0, -5, 5, 0],
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
