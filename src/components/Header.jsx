import { useState } from 'react'

export default function Header({ onCTAClick }) {
  const [open, setOpen] = useState(false)

  const scrollToId = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-white/10">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer select-none" onClick={() => scrollToId('top')}>
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-400 to-indigo-500 shadow-lg shadow-blue-500/30 border border-white/10 rotate-6" />
          <span className="font-semibold tracking-tight">BrightSmile Dental</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-blue-100">
          <button className="hover:text-white" onClick={() => scrollToId('services')}>Services</button>
          <button className="hover:text-white" onClick={() => scrollToId('faq')}>FAQ</button>
          <button className="hover:text-white" onClick={() => scrollToId('book')}>Book</button>
          <button onClick={onCTAClick} className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-400 text-white text-sm font-semibold shadow shadow-blue-500/20">
            Free Consultation
          </button>
        </nav>
        <button className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/10 border border-white/10" onClick={() => setOpen((s) => !s)} aria-label="Toggle menu">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/80">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-3 text-blue-100">
            <button className="text-left hover:text-white" onClick={() => scrollToId('services')}>Services</button>
            <button className="text-left hover:text-white" onClick={() => scrollToId('faq')}>FAQ</button>
            <button className="text-left hover:text-white" onClick={() => scrollToId('book')}>Book</button>
            <button onClick={() => { onCTAClick?.(); setOpen(false) }} className="mt-2 px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-400 text-white text-sm font-semibold w-max">
              Free Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
