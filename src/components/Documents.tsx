import { motion } from 'framer-motion'
import { FaFileAlt, FaArrowRight, FaCheckCircle, FaShieldAlt } from 'react-icons/fa'
import type { Document } from '../App'
import './Documents.css'

interface DocumentsProps {
  documents: Document[]
  onDocumentClick: (doc: Document) => void
}

const Documents = ({ documents, onDocumentClick }: DocumentsProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  }

  return (
    <section id="documents" className="documents">
      {/* Wave Divider */}
      <div className="wave-divider">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,50 Q150,20 300,50 T600,50 T900,50 T1200,50 L1200,0 L0,0 Z"
            fill="url(#gradient-green)"
            opacity="0.15"
          />
          <path
            d="M0,70 Q200,40 400,70 T800,70 T1200,70 L1200,0 L0,0 Z"
            fill="url(#gradient-green)"
            opacity="0.1"
          />
          <defs>
            <linearGradient id="gradient-green" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6ba83d" />
              <stop offset="50%" stopColor="#8bc34a" />
              <stop offset="100%" stopColor="#6ba83d" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <motion.div
        className="documents-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="documents-badge">
          <FaShieldAlt />
          <span>Official Documents</span>
        </div>
        <h2 className="documents-title">Our Credentials</h2>
        <p className="documents-subtitle">
          Verified and trusted. Issued certificates and registrations establishing our business authenticity.
        </p>
      </motion.div>

      <motion.div
        className="documents-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {documents.map((doc, index) => (
          <motion.div
            key={doc.id}
            className="document-card"
            variants={cardVariants}
            onClick={() => onDocumentClick(doc)}
            whileTap={{ scale: 0.98 }}
          >
            {index === 0 && <div className="document-badge">Verified</div>}
            
            <div className="document-icon-wrapper">
              <FaFileAlt />
            </div>
            
            <div className="document-content">
              <h3 className="document-title">{doc.title}</h3>
              <p className="document-description">{doc.description}</p>
              
              <div className="document-meta">
                <div className="document-meta-item">
                  <FaCheckCircle />
                  <span>Verified</span>
                </div>
                <div className="document-meta-item">
                  <FaShieldAlt />
                  <span>Authentic</span>
                </div>
              </div>
              
              <div className="document-action">
                <span>View Document</span>
                <FaArrowRight />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom Wave Divider */}
      <div className="wave-divider">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,50 Q300,80 600,50 T1200,50 L1200,120 L0,120 Z"
            fill="url(#gradient-green2)"
            opacity="0.1"
          />
          <defs>
            <linearGradient id="gradient-green2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8bc34a" />
              <stop offset="100%" stopColor="#6ba83d" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  )
}

export default Documents
