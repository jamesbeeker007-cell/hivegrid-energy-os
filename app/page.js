'use client'
import { useState, useEffect } from 'react'

const STEPS = [
  {
    n: '01',
    title: 'Contract',
    body: 'Install contract obtained from the battery-owner partner. Sits with HiveGrid Energy, LLC.',
    accent: 'text-hive-cyan',
    ring: 'border-hive-cyan/40',
  },
  {
    n: '02',
    title: 'Site',
    body: 'Homeowner and site assessment. Battery placement per partner, manufacturer, and jurisdiction.',
    accent: 'text-hive-blue',
    ring: 'border-hive-blue/40',
  },
  {
    n: '03',
    title: 'Engineer',
    body: 'Plans and schematics coordinated. HGE pays the electrical engineer.',
    accent: 'text-hive-cyan',
    ring: 'border-hive-cyan/35',
  },
  {
    n: '04',
    title: 'Permit',
    body: 'City or county submittal. Permits, parts, insurance, and field labor are HGE costs.',
    accent: 'text-hive-blue',
    ring: 'border-hive-blue/40',
  },
  {
    n: '05',
    title: 'Install',
    body: 'Two-person crew under the Master Electrician named on the Company TDLR license.',
    accent: 'text-hive-cyan',
    ring: 'border-hive-cyan/40',
  },
  {
    n: '06',
    title: 'Closeout',
    body: 'Inspection, remediation if needed, final approval, turnover back to the partner.',
    accent: 'text-[#34E07A]',
    ring: 'border-[#34E07A]/40',
  },
]

const MODULES = [
  { name: 'Brain', body: 'Job management and dispatch. One record per home.', accent: 'text-hive-cyan' },
  { name: 'Academy', body: 'Crew training and readiness against the systems we install.', accent: 'text-hive-blue' },
  { name: 'Shield', body: 'License, compliance, and assignment checks before work starts.', accent: 'text-hive-cyan' },
  { name: 'Standard', body: 'The installation standard and quality record for every job.', accent: 'text-[#34E07A]' },
]

function IconConnected() {
  return (
    <svg viewBox="0 0 64 64" className="h-14 w-14 mx-auto" fill="none">
      <path d="M32 8 L54 21 L54 43 L32 56 L10 43 L10 21 Z" stroke="#5B4EFF" strokeWidth="2.4" />
      <circle cx="32" cy="32" r="4" fill="#00FFFF" />
      <circle cx="22" cy="38" r="3" fill="#5B4EFF" />
      <circle cx="42" cy="38" r="3" fill="#5B4EFF" />
      <path d="M32 32 L22 38 M32 32 L42 38" stroke="#00FFFF" strokeWidth="1.6" />
    </svg>
  )
}
function IconReliable() {
  return (
    <svg viewBox="0 0 64 64" className="h-14 w-14 mx-auto" fill="none">
      <circle cx="32" cy="32" r="22" stroke="#5B4EFF" strokeWidth="2.4" />
      <path d="M36 16 L24 34 H33 L27 48 L42 30 H33 Z" fill="#E8C84A" />
    </svg>
  )
}
function IconPrecision() {
  return (
    <svg viewBox="0 0 64 64" className="h-14 w-14 mx-auto" fill="none">
      <path d="M36 12 L22 34 H32 L26 52 L46 28 H34 Z" stroke="#5B4EFF" strokeWidth="2.6" strokeLinejoin="round" />
    </svg>
  )
}
function IconSafety() {
  return (
    <svg viewBox="0 0 64 64" className="h-14 w-14 mx-auto" fill="none">
      <path d="M32 8 L54 21 L54 43 L32 56 L10 43 L10 21 Z" stroke="#00FFFF" strokeWidth="2.4" />
      <circle cx="32" cy="32" r="7" stroke="#5B4EFF" strokeWidth="2" />
      <circle cx="32" cy="32" r="3" fill="#00FFFF" />
    </svg>
  )
}
function IconPerformance() {
  return (
    <svg viewBox="0 0 64 64" className="h-14 w-14 mx-auto" fill="none">
      <path d="M32 8 L54 21 L54 43 L32 56 L10 43 L10 21 Z" stroke="#5B4EFF" strokeWidth="2.4" />
      <path d="M22 40 V32 M32 40 V24 M42 40 V28" stroke="#E8C84A" strokeWidth="3.2" strokeLinecap="round" />
    </svg>
  )
}

const ICONS = [
  { label: 'Connected Infrastructure', Icon: IconConnected },
  { label: 'Reliable Energy', Icon: IconReliable },
  { label: 'Precision Control', Icon: IconPrecision },
  { label: 'Safety Assured', Icon: IconSafety },
  { label: 'Performance Optimized', Icon: IconPerformance },
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
    <main className="min-h-screen hive-field text-white overflow-hidden">
      <nav className="w-full bg-[#0B0050]/80 backdrop-blur-md border-b border-hive-cyan/20 sticky top-0 z-50 px-4 py-3">
        <div className="max-w-6xl mx-auto flex justify-between items-center gap-3">
          <a href="/" className="flex items-center gap-3 min-w-0">
            <img src="/images/logo-icon.svg" alt="HiveGrid Energy" className="h-14 w-14 sm:h-16 sm:w-16 shrink-0" />
            <div className="leading-none">
              <div className="text-2xl sm:text-3xl font-bold tracking-tight text-white">HiveGrid</div>
              <div className="text-[11px] sm:text-xs text-hive-cyan tracking-[0.32em] font-semibold mt-1">ENERGY</div>
            </div>
          </a>
          <div className="hidden md:flex items-center gap-7 text-sm font-medium text-white/80">
            <a href="#about" className="hover:text-hive-cyan transition-colors">About</a>
            <a href="#how-it-works" className="hover:text-hive-cyan transition-colors">How It Works</a>
            <a href="#platform" className="hover:text-hive-blue transition-colors">Platform</a>
            <a href="#contact" className="hover:text-hive-cyan transition-colors">Contact</a>
            <a href="/portal" className="text-white/30 hover:text-white/60 text-xs tracking-wide">Portal</a>
          </div>
          <button onClick={toggleMenu} className="md:hidden text-hive-cyan text-3xl leading-none" aria-label="Toggle menu">
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-3">
            <div className="flex flex-col gap-3 text-sm font-medium hive-card border border-hive-cyan/25 rounded-2xl p-4">
              <a href="#about" onClick={closeMenu} className="py-1 text-hive-cyan">About</a>
              <a href="#how-it-works" onClick={closeMenu} className="py-1 text-hive-cyan">How It Works</a>
              <a href="#platform" onClick={closeMenu} className="py-1 text-hive-blue">Platform</a>
              <a href="#contact" onClick={closeMenu} className="py-1 text-hive-cyan">Contact</a>
              <a href="/portal" onClick={closeMenu} className="text-white/40 text-xs py-1">Portal</a>
            </div>
          </div>
        )}
      </nav>

      <section className="px-5 pt-16 pb-14 md:pt-24 md:pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-hive-blue/15 border border-hive-blue/40 text-hive-cyan px-4 py-1.5 rounded-full text-xs mb-7 font-semibold tracking-wide">
            Texas residential battery installation
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.05] text-hive-cyan">
            One crew. One home.<br />One standard.
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10">
            <span className="italic text-hive-cyan">“Building Trust Through Transparency”</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#how-it-works" className="bg-hive-cyan text-hive-indigo hover:brightness-110 font-semibold px-8 py-3.5 rounded-2xl text-base transition-all">
              Start to finish
            </a>
            <a href="#contact" className="border border-hive-blue/60 bg-hive-blue/15 hover:bg-hive-blue/25 font-semibold px-8 py-3.5 rounded-2xl text-base transition-all text-white">
              For partners
            </a>
          </div>
        </div>
      </section>

      <section className="px-5 pb-20">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {ICONS.map(({ label, Icon }) => (
            <div key={label} className="hive-card border border-hive-blue/25 rounded-3xl px-3 py-5 text-center">
              <Icon />
              <div className="mt-3 text-[11px] sm:text-xs font-semibold tracking-[0.12em] uppercase text-white/80 leading-snug">
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="px-5 pb-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-hive-cyan">What HiveGrid actually is</h2>
          <div className="hive-card border border-hive-cyan/30 rounded-3xl p-6 md:p-10 space-y-5 text-base md:text-lg leading-relaxed text-white/85">
            <p>
              HiveGrid Energy, LLC manages residential battery-storage installations from partner handoff through final inspection and project closeout. It coordinates site planning, engineering, permitting, licensed electrical installation, inspection, contractor management, and project administration. HiveGrid OS manages the workflow. Battery hardware and battery-control software are supplied and owned by the contracted energy-storage partner.
            </p>
            <p className="font-medium text-hive-cyan">
              HiveGrid Energy does not own the batteries, does not sell them, and does not operate a VPP. Channel partners are the face of the asset.
            </p>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="px-5 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-hive-cyan">Start to finish</h2>
            <p className="text-white/75 text-base md:text-lg">
              The unit of work is partner contract through city or county closeout. Partner pays HGE. HGE pays the field costs.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {STEPS.map((step) => (
              <div key={step.n} className={`hive-card border ${step.ring} rounded-3xl p-6`}>
                <div className={`text-sm font-semibold tracking-[0.2em] ${step.accent} mb-3`}>{step.n}</div>
                <h3 className={`text-xl font-bold mb-3 ${step.accent}`}>{step.title}</h3>
                <p className="text-sm leading-relaxed text-white/75">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="platform" className="px-5 pb-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-hive-cyan">HiveGrid OS</h2>
          <p className="text-white/75 text-base md:text-lg mb-8">
            Internal operating platform from partner contract through city or county final approval. Not the software that runs the battery.
          </p>
          <div className="hive-card border border-hive-blue/35 rounded-3xl p-6 md:p-10">
            <p className="text-white/85 mb-8 leading-relaxed">
              HiveGrid OS is the online app that runs the work: jobs, crews, training, and the installation standard. It comes into use as jobs arrive. It is built so every home is handled the same way.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {MODULES.map((mod) => (
                <div key={mod.name} className="border border-white/10 rounded-2xl p-5 bg-black/20">
                  <h3 className={`font-semibold ${mod.accent} mb-1.5`}>{mod.name}</h3>
                  <p className="text-sm text-white/70">{mod.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 pb-16">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-hive-cyan">Work with HiveGrid</h2>
          <p className="text-white/70 mb-2">For strategic partners.</p>
          <p className="text-white/80 mb-8 leading-relaxed">
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
                    className="flex-1 hive-card border border-hive-cyan/35 rounded-2xl px-5 py-3.5 text-white placeholder:text-white/40 focus:outline-none focus:border-hive-cyan"
                  />
                  <button
                    type="submit"
                    disabled={sending}
                    className="bg-hive-blue hover:brightness-110 text-white font-semibold px-8 py-3.5 rounded-2xl disabled:opacity-60"
                  >
                    {sending ? 'Sending…' : 'Contact us'}
                  </button>
                </div>
                {sendError && <p className="text-sm text-hive-cyan">{sendError}</p>}
              </>
            ) : (
              <div className="py-6 text-center text-hive-cyan font-medium">Thank you. We will be in touch shortly.</div>
            )}
          </form>
        </div>
      </section>

      <footer className="border-t border-hive-cyan/20 py-10 text-center text-sm text-white/55 px-5">
        <div className="italic text-hive-cyan/90 mb-2">“Building Trust Through Transparency”</div>
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
