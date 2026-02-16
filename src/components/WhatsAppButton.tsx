import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import './WhatsAppButton.css'

const WhatsAppButton = () => {
  const [showTooltip, setShowTooltip] = useState(false)

  const handleClick = () => {
    const message = encodeURIComponent('Hello, I would like to enquire about your services.')
    const phoneNumber = '919876543210' // Replace with actual WhatsApp number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
    >
      <motion.button
        className="whatsapp-button"
        onClick={handleClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Contact us on WhatsApp"
      >
        <FaWhatsapp />
      </motion.button>

      <AnimatePresence>
        {showTooltip && (
          <motion.div
            className="whatsapp-tooltip"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.2 }}
          >
            Chat with us
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default WhatsAppButton
