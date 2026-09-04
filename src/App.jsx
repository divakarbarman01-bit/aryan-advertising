import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollProgress from './components/ScrollProgress'
import FloatingButtons from './components/FloatingButtons'
import Loader from './components/Loader'
import Home from './pages/Home'

export default function App() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <ScrollProgress />
          <Navbar />
          <Home />
          <Footer />
          <FloatingButtons />
        </>
      )}
    </>
  )
}
