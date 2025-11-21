import { useState } from 'react'

export default function LeadForm() {
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    payload.consent = !!payload.consent

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('Failed to submit')
      await res.json()
      setStatus({ type: 'success', message: 'Thank you! We will reach out shortly.' })
      e.currentTarget.reset()
    } catch (err) {
      setStatus({ type: 'error', message: 'Something went wrong. Please try again.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="book" className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
            <h3 className="text-2xl font-bold text-white">Book a Free Consultation</h3>
            <p className="text-blue-100 mt-1">Leave your details and our team will call you to confirm a time.</p>

            <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input name="full_name" required placeholder="Full name" className="col-span-1 sm:col-span-2 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-200/70 focus:outline-none focus:ring-2 focus:ring-blue-400" />
              <input name="phone" required placeholder="Phone" className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-200/70 focus:outline-none focus:ring-2 focus:ring-blue-400" />
              <input name="email" placeholder="Email (optional)" className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-200/70 focus:outline-none focus:ring-2 focus:ring-blue-400" />

              <select name="service" className="col-span-1 sm:col-span-2 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400">
                <option value="">Choose a service</option>
                <option>Checkup & Cleaning</option>
                <option>Teeth Whitening</option>
                <option>Invisalign</option>
                <option>Implants</option>
              </select>

              <input name="preferred_date" placeholder="Preferred date" className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-200/70 focus:outline-none focus:ring-2 focus:ring-blue-400" />
              <input name="preferred_time" placeholder="Preferred time" className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-200/70 focus:outline-none focus:ring-2 focus:ring-blue-400" />
              <textarea name="message" placeholder="Tell us about your goals" className="col-span-1 sm:col-span-2 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-200/70 focus:outline-none focus:ring-2 focus:ring-blue-400 min-h-[120px]" />

              <label className="col-span-1 sm:col-span-2 flex items-center gap-2 text-blue-100 text-sm">
                <input type="checkbox" name="consent" defaultChecked className="accent-blue-500" />
                I agree to be contacted by phone or email.
              </label>

              <button disabled={loading} className="col-span-1 sm:col-span-2 mt-2 px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-400 disabled:opacity-60 text-white font-semibold">
                {loading ? 'Submitting...' : 'Request My Free Consultation'}
              </button>

              {status && (
                <p className={`col-span-2 text-sm ${status.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                  {status.message}
                </p>
              )}
            </form>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-blue-600/30 to-indigo-600/30 border border-white/10 p-6">
            <h4 className="text-white font-semibold text-lg">Why choose us</h4>
            <ul className="mt-4 space-y-3 text-blue-100">
              <li>• Same-week appointments</li>
              <li>• Sedation options for anxious patients</li>
              <li>• Transparent pricing, no surprises</li>
              <li>• Top-rated team with gentle care</li>
            </ul>
            <div className="mt-6 text-blue-100 text-sm">
              Mon–Fri 8am–8pm • Sat 9am–2pm • Free parking • Near downtown
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
