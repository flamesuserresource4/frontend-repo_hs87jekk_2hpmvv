import { useState } from 'react'

const faqs = [
  {
    q: 'Do you accept my insurance?',
    a: 'We work with most major PPO plans and will verify your benefits before treatment. We also offer transparent pricing and flexible payment options.'
  },
  {
    q: 'Is treatment painful?',
    a: 'Your comfort comes first. We use gentle techniques, modern equipment, and offer numbing and sedation options to keep you relaxed.'
  },
  {
    q: 'How soon can I get an appointment?',
    a: 'We reserve same-week appointments for new patients and do our best to accommodate urgent needs. Call us and we will find you a time.'
  },
  {
    q: 'Do you treat kids?',
    a: 'Yes. Our friendly team provides care for the whole family and helps little ones feel comfortable during visits.'
  }
]

function Item({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-2xl bg-white/5 border border-white/10">
      <button onClick={() => setOpen((o) => !o)} className="w-full flex items-center justify-between px-5 py-4 text-left">
        <span className="text-white font-medium">{q}</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className={`transition ${open ? 'rotate-180' : ''}`}>
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      {open && (
        <div className="px-5 pb-5 text-blue-100 text-sm">{a}</div>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Frequently Asked Questions</h2>
        <p className="text-blue-100 text-center mt-2">Everything you need to know about visiting our clinic</p>
        <div className="mt-10 max-w-3xl mx-auto space-y-3">
          {faqs.map((f) => (
            <Item key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  )
}
