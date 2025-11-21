export default function Services() {
  const services = [
    { title: 'Checkups & Cleaning', desc: 'Gentle hygiene and routine exams for long-term oral health.' },
    { title: 'Teeth Whitening', desc: 'Safe, fast whitening for a brighter smile in under an hour.' },
    { title: 'Invisalign', desc: 'Clear aligners to straighten teeth discreetly and comfortably.' },
    { title: 'Implants', desc: 'Permanent solutions to replace missing teeth with natural look.' },
  ]
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Popular Treatments</h2>
        <p className="text-blue-100 text-center mt-2">Modern dentistry for every smile</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition">
              <h3 className="text-white font-semibold text-lg">{s.title}</h3>
              <p className="text-blue-100 mt-2 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
