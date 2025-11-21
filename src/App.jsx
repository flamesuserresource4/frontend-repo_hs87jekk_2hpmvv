import { useRef } from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import LeadForm from './components/LeadForm'
import Footer from './components/Footer'

function App() {
  const bookRef = useRef(null)
  const scrollToBook = () => {
    const el = document.getElementById('book')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
      <header className="sticky top-0 z-20 backdrop-blur bg-slate-900/60 border-b border-white/10">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-400/30" />
            <span className="font-semibold">BrightSmile Dental</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-blue-100">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#book" className="hover:text-white">Book</a>
          </nav>
          <button onClick={scrollToBook} className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-400 text-white text-sm font-semibold">Free Consultation</button>
        </div>
      </header>

      <Hero onCTAClick={scrollToBook} />
      <Services />
      <LeadForm ref={bookRef} />
      <Footer />
    </div>
  )
}

export default App
