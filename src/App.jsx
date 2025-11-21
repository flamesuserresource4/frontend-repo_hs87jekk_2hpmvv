import { useRef } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import FAQ from './components/FAQ'
import LeadForm from './components/LeadForm'
import Footer from './components/Footer'

function App() {
  const bookRef = useRef(null)
  const scrollToBook = () => {
    const el = document.getElementById('book')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div id="top" className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
      <Header onCTAClick={scrollToBook} />
      <Hero onCTAClick={scrollToBook} />
      <Services />
      <FAQ />
      <LeadForm ref={bookRef} />
      <Footer />
    </div>
  )
}

export default App
