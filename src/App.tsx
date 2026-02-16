import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Hero from './components/Hero'
import Documents from './components/Documents'
import SocialMedia from './components/SocialMedia'
import WhatsAppButton from './components/WhatsAppButton'
import ScrollProgress from './components/ScrollProgress'
import LoadingScreen from './components/LoadingScreen'
import DocumentModal from './components/DocumentModal'
import './App.css'

export interface Document {
  id: string
  title: string
  description: string
  path: string
}

function App() {
  const [loading, setLoading] = useState(true)
  const [selectedDocument, setSelectedDocument] = useState<Document | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200)
    return () => clearTimeout(timer)
  }, [])

  const documents: Document[] = [
    {
      id: 'gst',
      title: 'GST Certificate',
      description: 'Goods and Services Tax Registration',
      path: '/documents/8. Wadaje Motors - GST No..pdf'
    },
    {
      id: 'udyam',
      title: 'Udyam Registration',
      description: 'MSME Registration Certificate',
      path: '/documents/Wadaje Motors - Udyam Registration Certificate + Memorandum - New..pdf'
    },
    {
      id: 'shop-act',
      title: 'Shop Act License',
      description: 'Shop and Establishment License',
      path: '/documents/6. Wadaje Motors - Shop Act - Form G + F..pdf'
    },
    {
      id: 'iec',
      title: 'Import Export Code',
      description: 'IEC Certificate for International Trade',
      path: '/documents/10. Wadaje Motors - Import Export Code..pdf'
    }
  ]

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ScrollProgress />
          <Hero />
          <Documents documents={documents} onDocumentClick={setSelectedDocument} />
          <SocialMedia />
          <WhatsAppButton />
          
          <DocumentModal
            document={selectedDocument}
            onClose={() => setSelectedDocument(null)}
          />
        </motion.div>
      )}
    </>
  )
}

export default App
