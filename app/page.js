'use client'
import { useState, useEffect } from 'react'

function IconConnected() {
  return (
    <svg viewBox="0 0 64 64" className="h-12 w-12" fill="none" aria-hidden="true">
      <path d="M32 8 L54 21 L54 43 L32 56 L10 43 L10 21 Z" stroke="#5B4EFF" strokeWidth="2.4" />
      <circle cx="32" cy="32" r="4" fill="#00FFFF" />
      <circle cx="22" cy="38" r="3" fill="#5B4EFF" />
      <circle cx="42" cy="38" r="3" fill="#C45A24" />
      <path d="M32 32 L22 38 M32 32 L42 38" stroke="#00FFFF" strokeWidth="1.6" />
    </svg>
  )
}
function IconSite() {
  return (
    <svg viewBox="0 0 64 64" className="h-12 w-12" fill="none" aria-hidden="true">
      <path d="M32 8 L54 21 L54 43 L32 56 L10 43 L10 21 Z" stroke="#5B4EFF" strokeWidth="2.4" />
      <path d="M22 38 L32 22 L42 38 V44 H22 Z" stroke="#00FFFF" strokeWidth="2" />
    </svg>
  )
}
function IconPrecision() {
  return (
    <svg viewBox="0 0 64 64" className="h-12 w-12" fill="none" aria-hidden="true">
      <path d="M36 12 L22 34 H32 L26 52 L46 28 H34 Z" stroke="#00FFFF" strokeWidth="2.6" strokeLinejoin="round" />
    </svg>
  )
}
function IconSafety() {
  return (
    <svg viewBox="0 0 64 64" className="h-12 w-12" fill="none" aria-hidden="true">
      <path d="M32 8 L54 21 L54 43 L32 56 L10 43 L10 21 Z" stroke="#00FFFF" strokeWidth="2.4" />
      <circle cx="32" cy="32" r="7" stroke="#5B4EFF" strokeWidth="2" />
      <circle cx="32" cy="32" r="3" fill="#C45A24" />
    </svg>
  )
}
function IconReliable() {
  return (
    <svg viewBox="0 0 64 64" className="h-12 w-12" fill="none" aria-hidden="true">
      <circle cx="32" cy="32" r="22" stroke="#5B4EFF" strokeWidth="2.4" />
      <path d="M36 16 L24 34 H33 L27 48 L42 30 H33 Z" fill="#C45A24" />
    </svg>
  )
}
function IconPerformance() {
  return (
    <svg viewBox="0 0 64 64" className="h-12 w-12" fill="none" aria-hidden="true">
      <path d="M32 8 L54 21 L54 43 L32 56 L10 43 L10 21 Z" stroke="#5B4EFF" strokeWidth="2.4" />
      <path d="M22 40 V32 M32 40 V24 M42 40 V28" stroke="#C45A24" strokeWidth="3.2" strokeLinecap="round" />
    </svg>
  )
}

const STEPS = [
  {
    n: '01',
    title: 'Contract',
    body: 'Install contract obtained from the battery-owner partner. Sits with HiveGrid Energy, LLC.',
    Icon: IconConnected,
  },
  {
    n: '02',
    title: 'Site',
    body: 'Homeowner and site assessment. Battery placement per partner, manufacturer, and jurisdiction.',
    Icon: IconSite,
  },
  {
    n: '03',
    title: 'Engineer',
    body: 'Plans and schematics coordinated. HGE pays the electrical engineer.',
    Icon: IconPrecision,
  },
  {
    n: '04',
    title: 'Permit',
    body: 'City or county submittal. Permits, parts, insurance, and field labor are HGE costs.',
    Icon: IconSafety,
  },
  {
    n: '05',
    title: 'Install',
    body: 'Two-person crew under the Master Electrician named on the Company TDLR license.',
    hot: true,
    Icon: IconReliable,
  },
  {
    n: '06',
    title: 'Closeout',
    body: 'Inspection, remediation if needed, final approval, turnover back to the partner.',
    Icon: IconPerformance,
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

  const closeMenu = () => setIsMenuOpen(false)

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="min-h-screen hive-field text-white overflow-hidden">
      <nav className="w-full bg-[#07002E]/85 backdrop-blur-md border-b border-white/10 sticky top-0 z-50 px-4 py-3">
        <div className="max-w-6xl mx-auto flex justify-between items-center gap-3">
          <a href="/" className="flex items-center gap-3 min-w-0">
            <img src="/images/logo-icon.svg" alt="HiveGrid Energy" className="h-14 w-14 sm:h-16 sm:w-16 shrink-0 hive-mark-live" />
            <div className="leading-none">
              <div className="text-2xl sm:text-3xl font-bold tracking-tight text-white">HiveGrid</div>
              <div className="text-[11px] sm:text-xs text-hive-cyan tracking-[0.32em] font-semibold mt-1">ENERGY</div>
            </div>
          </a>
          <div className="hidden md:flex items-center gap-7 text-sm font-medium text-white/75">
            <a href="#about" className="hover:text-hive-cyan">About</a>
            <a href="#how-it-works" className="hover:text-hive-gold">How It Works</a>
            <a href="#platform" className="hover:text-hive-cyan">Platform</a>
            <a href="#contact" className="hover:text-hive-gold">Contact</a>
            <a href="/portal" className="hover:text-hive-cyan">Portal</a>
          </div>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-hive-cyan text-3xl leading-none" aria-label="Toggle menu">
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-3">
            <div className="flex flex-col gap-3 text-sm hive-card border border-white/10 rounded-2xl p-4">
              <a href="#about" onClick={closeMenu} className="text-hive-cyan">About</a>
              <a href="#how-it-works" onClick={closeMenu} className="text-hive-gold">How It Works</a>
              <a href="#platform" onClick={closeMenu} className="text-hive-cyan">Platform</a>
              <a href="#contact" onClick={closeMenu} className="text-hive-gold">Contact</a>
              <a href="/portal" onClick={closeMenu} className="text-hive-cyan">Portal</a>
            </div>
          </div>
        )}
      </nav>

      <section className="relative px-5 pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="hive-watermark">
          <img src="/images/logo-icon.svg" alt="" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 border border-white/15 text-white/70 px-4 py-1.5 rounded-full text-xs mb-8 tracking-[0.16em] uppercase">
            Texas residential battery installation
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 leading-[0.95] text-hive-cyan">
            One crew.<br />One home.<br />One standard.
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12">
            <span className="italic text-white">“Building Trust Through Transparency”</span>
          </p>
          <div className="flex justify-center">
            <a href="#how-it-works" className="bg-hive-cyan text-hive-indigo hover:brightness-110 font-semibold px-10 py-4 rounded-2xl">
              Start to finish
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="px-5 pb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-hive-cyan">What HiveGrid actually is</h2>
          <p className="text-white/70 text-base md:text-lg mt-4 max-w-3xl">
            The work from partner handoff through city or county closeout.
          </p>
          <div className="h-px w-16 bg-hive-gold mt-4 mb-8" />
          <div className="hive-card border border-white/10 rounded-3xl p-6 md:p-10 space-y-5 text-base md:text-lg leading-relaxed text-white/85">
            <p>
              HiveGrid Energy, LLC manages residential battery-storage installations from partner handoff through final inspection and project closeout. It coordinates site planning, engineering, permitting, licensed electrical installation, inspection, contractor management, and project administration. HiveGrid OS manages the workflow. Battery hardware and battery-control software are supplied and owned by the contracted energy-storage partner.
            </p>
            <p className="text-white">
              HiveGrid Energy does not own the batteries, does not sell them, and does not operate a VPP. Channel partners are the face of the asset.
            </p>
          </div>
          <div className="mt-4 hive-card border border-hive-gold/30 rounded-3xl p-6 md:p-8 text-white/80 leading-relaxed">
            <div className="text-xs tracking-[0.18em] uppercase text-hive-gold mb-3">The bottleneck</div>
            <p>
              Contracts are already sold. The work stalls between city or county permit and a crew that can finish the home. HiveGrid Energy runs that stretch — permit through inspection and closeout — and hands the completed install back to the partner.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl border border-dashed border-white/20 bg-black/20 min-h-[220px] md:min-h-[300px] flex flex-col items-center justify-center text-center px-6">
            <div className="text-xs tracking-[0.18em] uppercase text-white/40 mb-3">Photograph</div>
            <p className="text-white/55 max-w-md text-sm leading-relaxed">
              One Texas install still, or a schematic of the work. Not stock. Drop the file when you have it.
            </p>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="px-5 pb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-hive-cyan">The HiveGrid Installation Standard</h2>
          <div className="h-px w-16 bg-hive-gold mt-4 mb-5" />
          <p className="text-white/70 text-base md:text-lg max-w-3xl mb-10">
            The unit of work is partner contract through city or county closeout. Partner pays HGE. HGE pays the field costs.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {STEPS.map((step) => (
              <div key={step.n} className="hive-card border border-white/10 rounded-3xl p-7 min-h-[240px]">
                <div className="mb-5">
                  <step.Icon />
                </div>
                <div className={`inline-flex text-[11px] font-semibold tracking-[0.2em] uppercase px-3 py-1 rounded-full mb-4 ${
                  step.hot ? 'bg-hive-gold/20 text-hive-gold' : 'bg-white/5 text-hive-cyan'
                }`}>
                  {step.n} {step.title}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">{step.title}</h3>
                <p className="text-sm leading-relaxed text-white/70">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="platform" className="px-5 pb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-hive-cyan">HiveGrid OS</h2>
          <div className="h-px w-16 bg-hive-gold mt-4 mb-5" />
          <p className="text-white/70 text-base md:text-lg mb-8">
            Internal operating platform from partner contract through city or county final approval. Not the software that runs the battery.
          </p>
          <div className="hive-card border border-white/10 rounded-3xl p-6 md:p-10">
            <p className="text-white/80 mb-8 leading-relaxed">
              HiveGrid OS is the online app that runs the work: jobs, crews, training, and the installation standard. It comes into use as jobs arrive. It is built so every home is handled the same way.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {MODULES.map((mod) => (
                <div key={mod.name} className="rounded-2xl p-5 bg-black/25 border border-white/8">
                  <h3 className="font-semibold text-hive-cyan mb-1.5">{mod.name}</h3>
                  <p className="text-sm text-white/65">{mod.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 pb-16">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-hive-cyan">Work with HiveGrid</h2>
          <div className="h-px w-16 bg-hive-gold mx-auto mt-4 mb-5" />
          <p className="text-white/70 mb-2">For strategic partners.</p>
          <p className="text-white/80 mb-8">10221 Paintbrush Dr.<br />Fort Worth, TX 76244</p>
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
                    className="flex-1 bg-black/30 border border-white/15 rounded-2xl px-5 py-3.5 text-white placeholder:text-white/40 focus:outline-none focus:border-hive-gold"
                  />
                  <button type="submit" disabled={sending} className="bg-hive-gold hover:brightness-110 text-hive-ink font-semibold px-8 py-3.5 rounded-2xl disabled:opacity-60">
                    {sending ? 'Sending…' : 'Contact us'}
                  </button>
                </div>
                {sendError && <p className="text-sm text-hive-gold">{sendError}</p>}
              </>
            ) : (
              <div className="py-6 text-center text-hive-cyan font-medium">Thank you. We will be in touch shortly.</div>
            )}
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10 text-center text-sm text-white/50 px-5">
        <div className="italic text-white mb-2">“Building Trust Through Transparency”</div>
        <div>10221 Paintbrush Dr., Fort Worth, TX 76244</div>
        <div className="mt-2">© 2026 HiveGrid Energy, LLC · Wyoming LLC · Texas operations</div>
      </footer>

      {showBackToTop && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-hive-gold text-hive-ink" aria-label="Back to top">
          ↑
        </button>
      )}
    </main>
  )
}
