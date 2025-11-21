import { motion } from 'framer-motion'

export default function Hero({ onCTAClick }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_60%)]" />
      <div className="container mx-auto px-6 py-20 md:py-28 relative">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold tracking-tight text-white"
            >
              Confident Smiles, Modern Care
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 text-lg md:text-xl text-blue-100 max-w-xl"
            >
              Friendly dentists. Gentle treatments. Flexible hours. Your smile is our priority.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <button onClick={onCTAClick} className="px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-semibold shadow-lg shadow-blue-500/30 transition">
                Book Free Consultation
              </button>
              <a href="#services" className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold backdrop-blur border border-white/20 transition">
                Explore Services
              </a>
            </motion.div>
            <div className="mt-6 flex items-center gap-3 text-blue-200/80 text-sm">
              <span>Open late • Emergency slots daily • Most insurance accepted</span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 bg-blue-500/10 blur-3xl rounded-full" />
            <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1600&auto=format&fit=crop" alt="Dental clinic" className="relative rounded-3xl border border-white/10 shadow-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
