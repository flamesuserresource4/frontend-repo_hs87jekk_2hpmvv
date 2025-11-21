import { useState } from 'react'

const faqs = [
  {
    q: 'Am I a candidate for Invisalign?',
    a: 'Most adults and teens with mild to moderate crowding, spacing, or bite issues are great candidates. We confirm during your free consultation.'
  },
  {
    q: 'How long does Invisalign take?',
    a: 'Typical treatment ranges from 6–12 months, depending on your case. You\'ll switch trays every 1–2 weeks.'
  },
  {
    q: 'What does Invisalign cost?',
    a: 'Every smile is different. We offer flexible monthly payments and work with insurance to maximize your benefits.'
  },
  {
    q: 'Will people notice?',
    a: 'Aligners are clear and low profile. Most people won\'t notice you\'re wearing them.'
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
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Invisalign FAQs</h2>
        <p className="text-blue-100 text-center mt-2">Answers to common questions about clear aligners</p>
        <div className="mt-10 max-w-3xl mx-auto space-y-3">
          {faqs.map((f) => (
            <Item key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  )
}
