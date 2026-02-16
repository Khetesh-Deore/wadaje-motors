import { motion } from 'framer-motion'
import './LoadingScreen.css'

const LoadingScreen = () => {
  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="loading-content"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="loading-logo-wrapper">
          <div className="loading-circle loading-circle-1"></div>
          <div className="loading-circle loading-circle-2"></div>
          <div className="loading-circle loading-circle-3"></div>
          <motion.img
            src="/documents/1000024686.png"
            alt="Wadaje Motors Logo"
            className="loading-logo"
            animate={{
              scale: [1, 1.03, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <motion.div
          className="loading-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2>WADAJE MOTORS</h2>
          <p>WM INDIA</p>
          <div className="loading-tagline">Engineering Excellence</div>
        </motion.div>

        <div className="loading-bar-container">
          <motion.div
            className="loading-bar"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </motion.div>
  )
}

export default LoadingScreen
