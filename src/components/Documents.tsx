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
        staggerChildren: 0.15
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  }

  return (
    <section id="documents" className="documents">
      {/* Subtle Wave Divider */}
      <div className="wave-divider">
        <svg viewBox="0 0 1200 100" preserveAspectRatio="none">
          <path
            d="M0,50 Q300,30 600,50 T1200,50 L1200,0 L0,0 Z"
            fill="url(#gradient-blue)"
            opacity="0.08"
          />
          <defs>
            <linearGradient id="gradient-blue" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3498db" />
              <stop offset="100%" stopColor="#2980b9" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <motion.div
        className="documents-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="documents-badge">
          <FaShieldAlt />
          <span>Official Documents</span>
        </div>
        <h2 className="documents-title">Our Credentials</h2>
        <p className="documents-subtitle">
          Verified and trusted certificates establishing our business authenticity and compliance
        </p>
      </motion.div>

      <motion.div
        className="documents-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
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
    </section>
  )
}

export default Documents
