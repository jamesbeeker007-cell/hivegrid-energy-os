'use client'
import { useState, useEffect } from 'react'

const STEPS = [
  {
    n: '01',
    title: 'Contract',
    body: 'Install contract obtained from the battery-owner partner. Sits with HiveGrid Energy, LLC.',
  },
  {
    n: '02',
    title: 'Site',
    body: 'Homeowner and site assessment. Battery placement per partner, manufacturer, and jurisdiction.',
  },
  {
    n: '03',
    title: 'Engineer',
    body: 'Plans and schematics coordinated. HGE pays the electrical engineer.',
  },
  {
    n: '04',
    title: 'Permit',
    body: 'City or county submittal. Permits, parts, insurance, and field labor are HGE costs.',
  },
  {
    n: '05',
    title: 'Install',
    body: 'Two-person crew under the Master Electrician named on the Company TDLR license.',
  },
  {
    n: '06',
    title: 'Closeout',
    body: 'Inspection, remediation if needed, final approval, turnover back to the partner.',
  },
]

const MODULES = [
  { name: 'Brain', body: 'Job management and dispatch. One record per home.' },
  { name: 'Academy', body: 'Crew training and readiness against the systems we install.' },
  { name: 'Shield', body: 'License, compliance, and assignment checks before work starts.' },
  { name: 'Standard', body: 'The installation standard and quality record for every job.' },
]

export default function HomePage() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [sendError, setSendError] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email.trim()) return
    setSending(true)
    setSendError('')
    try {
      const res = await fetch('https://formsubmit.co/ajax/sandram@hivegridenergy.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          email,
          _subject: 'HiveGrid Energy website contact',
          source: 'hivegrid-energy-os landing page',
        }),
      })
      if (!res.ok) throw new Error('send failed')
      setSubmitted(true)
    } catch (err) {
      setSendError('Could not send just now. Email sandram@hivegridenergy.com directly.')
    } finally {
      setSending(false)
    }
  }

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-hive-light text-hive-indigo overflow-hidden">
      <nav className="w-full bg-hive-white/90 backdrop-blur-md border-b border-hive-indigo/10 sticky top-0 z-50 px-5 py-3.5">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <a href="/" className="flex items-center gap-3 min-w-0">
            <img src="/images/logo-icon.svg" alt="HiveGrid Energy" className="h-10 w-10 shrink-0" />
            <div className="leading-none">
              <div className="text-xl font-bold tracking-tight text-hive-indigo">HiveGrid</div>
              <div className="text-[10px] text-hive-blue tracking-[0.28em] font-semibold mt-0.5">ENERGY</div>
            </div>
          </a>
          <div className="hidden md:flex items-center gap-7 text-sm font-medium text-hive-indigo/80">
            <a href="#about" className="hover:text-hive-blue transition-colors">About</a>
            <a href="#how-it-works" className="hover:text-hive-blue transition-colors">How It Works</a>
            <a href="#platform" className="hover:text-hive-blue transition-colors">Platform</a>
            <a href="#contact" className="hover:text-hive-blue transition-colors">Contact</a>
            <a href="/portal" className="text-hive-indigo/30 hover:text-hive-indigo/60 text-xs tracking-wide">Portal</a>
          </div>
          <button onClick={toggleMenu} className="md:hidden text-hive-indigo text-2xl leading-none" aria-label="Toggle menu">
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-3">
            <div className="flex flex-col gap-3 text-sm font-medium bg-hive-white border border-hive-indigo/10 rounded-2xl p-4">
              <a href="#about" onClick={closeMenu} className="py-1">About</a>
              <a href="#how-it-works" onClick={closeMenu} className="py-1">How It Works</a>
              <a href="#platform" onClick={closeMenu} className="py-1">Platform</a>
              <a href="#contact" onClick={closeMenu} className="py-1">Contact</a>
              <a href="/portal" onClick={closeMenu} className="text-hive-indigo/40 text-xs py-1">Portal</a>
            </div>
          </div>
        )}
      </nav>

      <section className="px-5 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-hive-blue/10 border border-hive-blue/25 text-hive-blue px-4 py-1.5 rounded-full text-xs mb-7 font-semibold tracking-wide">
            Texas residential battery installation
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.05] text-hive-indigo">
            One crew. One home.<br />One standard.
          </h1>
          <p className="text-lg md:text-xl text-hive-indigo/70 max-w-2xl mx-auto mb-10">
            <span className="italic">“Building Trust Through Transparency”</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#how-it-works" className="bg-hive-blue hover:brightness-110 text-white font-semibold px-8 py-3.5 rounded-2xl text-base transition-all">
              Start to finish
            </a>
            <a href="#contact" className="border border-hive-blue/40 hover:bg-hive-blue/10 font-semibold px-8 py-3.5 rounded-2xl text-base transition-all text-hive-indigo">
              For partners
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="px-5 pb-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-hive-indigo">What HiveGrid actually is</h2>
          <div className="bg-hive-white border border-hive-indigo/10 rounded-3xl p-6 md:p-10 space-y-5 text-base md:text-lg leading-relaxed text-hive-indigo/80">
            <p>
              HiveGrid Energy, LLC manages residential battery-storage installations from partner handoff through final inspection and project closeout. It coordinates site planning, engineering, permitting, licensed electrical installation, inspection, contractor management, and project administration. HiveGrid OS manages the workflow. Battery hardware and battery-control software are supplied and owned by the contracted energy-storage partner.
            </p>
            <p className="font-medium text-hive-indigo">
              HiveGrid Energy does not own the batteries, does not sell them, and does not operate a VPP. Channel partners are the face of the asset.
            </p>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="px-5 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-hive-indigo">Start to finish</h2>
            <p className="text-hive-indigo/70 text-base md:text-lg">
              The unit of work is partner contract through city or county closeout. Partner pays HGE. HGE pays the field costs.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {STEPS.map((step) => (
              <div key={step.n} className="bg-hive-white border border-hive-indigo/10 rounded-3xl p-6 hover:border-hive-blue/40 transition-colors">
                <div className="text-sm font-semibold tracking-[0.2em] text-hive-blue mb-3">{step.n}</div>
                <h3 className="text-xl font-bold mb-3 text-hive-indigo">{step.title}</h3>
                <p className="text-sm leading-relaxed text-hive-indigo/70">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="platform" className="px-5 pb-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-hive-indigo">HiveGrid OS</h2>
          <p className="text-hive-indigo/70 text-base md:text-lg mb-8">
            Internal operating platform from partner contract through city or county final approval. Not the software that runs the battery.
          </p>
          <div className="bg-hive-white border border-hive-indigo/10 rounded-3xl p-6 md:p-10">
            <p className="text-hive-indigo/80 mb-8 leading-relaxed">
              HiveGrid OS is the online app that runs the work: jobs, crews, training, and the installation standard. It comes into use as jobs arrive. It is built so every home is handled the same way.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {MODULES.map((mod) => (
                <div key={mod.name} className="border border-hive-indigo/10 rounded-2xl p-5">
                  <h3 className="font-semibold text-hive-blue mb-1.5">{mod.name}</h3>
                  <p className="text-sm text-hive-indigo/70">{mod.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 pb-16">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-hive-indigo">Work with HiveGrid</h2>
          <p className="text-hive-indigo/70 mb-2">For strategic partners.</p>
          <p className="text-hive-indigo/80 mb-8 leading-relaxed">
            10221 Paintbrush Dr.<br />Fort Worth, TX 76244
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 text-left">
            {!submitted ? (
              <>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                    className="flex-1 bg-hive-white border border-hive-indigo/15 rounded-2xl px-5 py-3.5 text-hive-indigo focus:outline-none focus:border-hive-blue"
                  />
                  <button
                    type="submit"
                    disabled={sending}
                    className="bg-hive-blue hover:brightness-110 text-white font-semibold px-8 py-3.5 rounded-2xl disabled:opacity-60"
                  >
                    {sending ? 'Sending…' : 'Contact us'}
                  </button>
                </div>
                {sendError && <p className="text-sm text-hive-copper">{sendError}</p>}
              </>
            ) : (
              <div className="py-6 text-center text-hive-blue font-medium">Thank you. We will be in touch shortly.</div>
            )}
          </form>
        </div>
      </section>

      <footer className="border-t border-hive-indigo/10 py-10 text-center text-sm text-hive-indigo/55 px-5">
        <div className="italic mb-2">“Building Trust Through Transparency”</div>
        <div>10221 Paintbrush Dr., Fort Worth, TX 76244</div>
        <div className="mt-2">© 2026 HiveGrid Energy, LLC · Wyoming LLC · Texas operations</div>
      </footer>

      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-hive-blue text-white shadow-lg hover:brightness-110"
          aria-label="Back to top"
        >
          ↑
        </button>
      )}
    </main>
  )
}
