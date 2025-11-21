import { motion } from 'framer-motion'

export default function Invisalign() {
  const benefits = [
    { title: 'Nearly Invisible', desc: 'Clear, removable aligners that are hard to notice in everyday life.' },
    { title: 'Comfortable', desc: 'Smooth plastic trays – no brackets or wires to irritate cheeks.' },
    { title: 'Removable', desc: 'Eat, brush, and floss normally. Lifestyle-friendly treatment.' },
    { title: 'Fast Results', desc: 'Most cases complete in 6–12 months depending on complexity.' },
  ]

  const steps = [
    { n: 1, t: 'Free Smile Assessment', d: 'We scan your teeth and map your custom treatment plan.' },
    { n: 2, t: 'Preview Your New Smile', d: 'See a 3D preview before you begin treatment.' },
    { n: 3, t: 'Start With Your First Set', d: 'Swap trays every 1–2 weeks and check in with us periodically.' },
  ]

  return (
    <section id="invisalign" className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-white"
          >
            Invisalign Clear Aligners
          </motion.h2>
          <p className="text-blue-100 mt-2 max-w-2xl mx-auto">
            Straighten your teeth discreetly with removable, comfortable aligners designed just for you.
          </p>
          <div className="inline-flex items-center gap-2 mt-4 text-emerald-300 bg-emerald-400/10 border border-emerald-400/20 px-3 py-1 rounded-full text-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            Limited-Time: Free Consultation + Smile Preview
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
            <h3 className="text-white font-semibold text-lg">Why Patients Love Invisalign</h3>
            <div className="mt-5 grid sm:grid-cols-2 gap-4">
              {benefits.map((b) => (
                <div key={b.title} className="rounded-2xl bg-white/5 border border-white/10 p-4">
                  <div className="text-white font-medium">{b.title}</div>
                  <div className="text-blue-100 text-sm mt-1">{b.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-blue-600/20 to-indigo-600/20 border border-white/10 p-6">
            <h3 className="text-white font-semibold text-lg">How It Works</h3>
            <div className="mt-5 space-y-4">
              {steps.map((s) => (
                <div key={s.n} className="flex gap-4">
                  <div className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/10 border border-white/10 text-white font-semibold">{s.n}</div>
                  <div>
                    <div className="text-white font-medium">{s.t}</div>
                    <div className="text-blue-100 text-sm">{s.d}</div>
                  </div>
                </div>
              ))}
            </div>
            <a href="#book" className="mt-6 inline-block px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-semibold">Book My Free Invisalign Consult</a>
            <div className="text-blue-200/80 text-xs mt-3">Most cases eligible · Flexible payments available</div>
          </div>
        </div>
      </div>
    </section>
  )
}
