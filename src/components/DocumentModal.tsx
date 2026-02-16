import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaFileAlt, FaTimes, FaShieldAlt } from 'react-icons/fa'
import type { Document } from '../App'
import './DocumentModal.css'

interface DocumentModalProps {
  document: Document | null
  onClose: () => void
}

const DocumentModal = ({ document: doc, onClose }: DocumentModalProps) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (doc) {
      setLoading(true)
      const timer = setTimeout(() => setLoading(false), 1000)
      return () => clearTimeout(timer)
    }
  }, [doc])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    const preventContextMenu = (e: MouseEvent) => {
      if (doc) e.preventDefault()
    }

    const preventPrint = (e: KeyboardEvent) => {
      if (doc && (e.ctrlKey || e.metaKey) && e.key === 'p') {
        e.preventDefault()
      }
    }

    if (doc) {
      document.addEventListener('keydown', handleEscape)
      document.addEventListener('contextmenu', preventContextMenu)
      document.addEventListener('keydown', preventPrint)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('contextmenu', preventContextMenu)
      document.removeEventListener('keydown', preventPrint)
      document.body.style.overflow = 'unset'
    }
  }, [doc, onClose])

  if (!doc) return null

  return (
    <AnimatePresence>
      <motion.div
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="modal-content"
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal-header">
            <div className="modal-title">
              <FaFileAlt className="modal-title-icon" />
              <span>{doc.title}</span>
            </div>
            <button className="modal-close" onClick={onClose}>
              <FaTimes />
            </button>
          </div>

          <div className="modal-body">
            {loading && (
              <div className="loading-spinner">
                <div className="spinner"></div>
                <span className="loading-text">Loading document...</span>
              </div>
            )}
            <div className="pdf-viewer-container">
              <iframe
                src={`${doc.path}#toolbar=0&navpanes=0&scrollbar=1`}
                title={doc.title}
                onLoad={() => setLoading(false)}
                style={{ display: loading ? 'none' : 'block' }}
              />
              <div className="pdf-protection-overlay"></div>
            </div>
          </div>

          <div className="modal-footer">
            <FaShieldAlt />
            <span>This document is protected and cannot be downloaded</span>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default DocumentModal
