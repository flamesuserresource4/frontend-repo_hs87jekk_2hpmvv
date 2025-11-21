import { useEffect, useMemo, useState } from 'react'

export default function LeadForm() {
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)

  // Capture UTM params and source
  const utms = useMemo(() => {
    const params = new URLSearchParams(window.location.search)
    return {
      source: params.get('source') || 'website',
      utm_source: params.get('utm_source') || undefined,
      utm_medium: params.get('utm_medium') || undefined,
      utm_campaign: params.get('utm_campaign') || undefined,
    }
  }, [])

  useEffect(() => {
    // no-op but keeps lint happy for window usage in SSR-less env
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    payload.consent = !!payload.consent

    const finalPayload = { ...utms, ...payload }

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(finalPayload)
      })
      if (!res.ok) throw new Error('Failed to submit')
      await res.json()
      setStatus({ type: 'success', message: 'Thanks! Your free Invisalign consultation request is in. We’ll reach out shortly.' })
      e.currentTarget.reset()
      // Smooth scroll to thank you blurb
      const ty = document.getElementById('thanks')
      if (ty) ty.scrollIntoView({ behavior: 'smooth' })
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
            <h3 className="text-2xl font-bold text-white">Book a Free Invisalign Consultation</h3>
            <p className="text-blue-100 mt-1">Tell us a bit about your smile goals. We’ll call to confirm your appointment.</p>

            <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input name="full_name" required placeholder="Full name" className="col-span-1 sm:col-span-2 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-200/70 focus:outline-none focus:ring-2 focus:ring-blue-400" />
              <input name="phone" required placeholder="Phone" className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-200/70 focus:outline-none focus:ring-2 focus:ring-blue-400" />
              <input name="email" placeholder="Email (optional)" className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-200/70 focus:outline-none focus:ring-2 focus:ring-blue-400" />

              <input type="hidden" name="service" value="Invisalign" />

              <div className="grid grid-cols-2 gap-4 col-span-1 sm:col-span-2">
                <input name="preferred_date" placeholder="Preferred date" className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-200/70 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                <input name="preferred_time" placeholder="Preferred time" className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-200/70 focus:outline-none focus:ring-2 focus:ring-blue-400" />
              </div>

              <textarea name="message" placeholder="What would you like to improve? (crowding, gaps, bite, etc.)" className="col-span-1 sm:col-span-2 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-200/70 focus:outline-none focus:ring-2 focus:ring-blue-400 min-h-[120px]" />

              <label className="col-span-1 sm:col-span-2 flex items-center gap-2 text-blue-100 text-sm">
                <input type="checkbox" name="consent" defaultChecked className="accent-blue-500" />
                I agree to be contacted by phone or email.
              </label>

              <button disabled={loading} className="col-span-1 sm:col-span-2 mt-2 px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-400 disabled:opacity-60 text-white font-semibold">
                {loading ? 'Submitting...' : 'Get My Free Invisalign Consult'}
              </button>

              {status && (
                <p className={`col-span-2 text-sm ${status.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                  {status.message}
                </p>
              )}
            </form>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-blue-600/30 to-indigo-600/30 border border-white/10 p-6">
            <h4 className="text-white font-semibold text-lg">Invisalign Specials</h4>
            <ul className="mt-4 space-y-3 text-blue-100">
              <li>• Free consultation + 3D smile preview</li>
              <li>• $0 down with flexible monthly payments</li>
              <li>• Up to $500 off this month</li>
              <li>• Most insurance accepted</li>
            </ul>
            <div className="mt-6 text-blue-100 text-sm">
              Mon–Fri 8am–8pm • Sat 9am–2pm • Free parking • Near downtown
            </div>
          </div>
        </div>
        <div id="thanks" className="mt-8 text-center text-blue-100 text-sm">
          After you submit, our team will reach out within one business day to confirm your appointment time.
        </div>
      </div>
    </section>
  )
}
