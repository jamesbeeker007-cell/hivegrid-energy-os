'use client'
import { useState, useEffect } from 'react'

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
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <main className="min-h-screen bg-hive-base text-white overflow-hidden">
      <nav className="w-full bg-hive-base/95 backdrop-blur-md border-b border-white/10 sticky top-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="/" className="flex items-center gap-3">
            <img src="/images/logo-icon.svg" alt="HiveGrid Energy" className="h-10 w-10" />
            <div>
              <div className="text-xl md:text-2xl font-bold tracking-tight leading-none">HiveGrid</div>
              <div className="text-[11px] text-hive-blue tracking-[3px] font-medium -mt-0.5">ENERGY</div>
            </div>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-hive-blue transition-colors">About</a>
            <a href="#how-it-works" className="hover:text-hive-blue transition-colors">How It Works</a>
            <a href="#platform" className="hover:text-hive-blue transition-colors">Platform</a>
            <a href="/energy-calculator" className="hover:text-hive-blue transition-colors">Savings Calculator</a>
            <a href="#contact" className="hover:text-hive-blue transition-colors">Contact</a>
            <a href="/portal" className="text-white/40 hover:text-white/70 transition-colors text-xs tracking-wide">Portal</a>
          </div>
          <button onClick={toggleMenu} className="md:hidden text-white text-2xl focus:outline-none" aria-label="Toggle menu">
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4 px-2 pb-4">
            <div className="flex flex-col gap-4 text-sm font-medium bg-hive-panel border border-white/10 rounded-2xl p-4">
              <a href="#about" onClick={closeMenu} className="hover:text-hive-blue transition-colors py-1">About</a>
              <a href="#how-it-works" onClick={closeMenu} className="hover:text-hive-blue transition-colors py-1">How It Works</a>
              <a href="#platform" onClick={closeMenu} className="hover:text-hive-blue transition-colors py-1">Platform</a>
              <a href="/energy-calculator" onClick={closeMenu} className="hover:text-hive-blue transition-colors py-1">Savings Calculator</a>
              <a href="#contact" onClick={closeMenu} className="hover:text-hive-blue transition-colors py-1">Contact</a>
              <a href="/portal" onClick={closeMenu} className="text-white/40 hover:text-white/70 transition-colors py-1 text-xs">Portal</a>
            </div>
          </div>
        )}
      </nav>
      <section className="min-h-[90vh] bg-hive-base flex items-center justify-center relative px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-hive-blue/10 border border-hive-blue/30 text-hive-blue px-6 py-2.5 rounded-full text-sm mb-8 font-medium">
            Texas residential battery installation
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter mb-6 leading-none text-white">
            One crew. One home.<br />One standard.
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed">
            Building Trust Through Transparency
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#how-it-works" className="bg-hive-blue hover:brightness-110 text-white font-semibold px-10 py-4 rounded-2xl text-lg transition-all">How It Works</a>
            <a href="#contact" className="border border-hive-blue/50 hover:bg-hive-blue/10 font-semibold px-10 py-4 rounded-2xl text-lg transition-all">For Partners</a>
          </div>
        </div>
      </section>
      <section id="about" className="max-w-5xl mx-auto mt-24 px-6 text-center">
        <h3 className="text-4xl md:text-5xl font-bold mb-8 text-hive-blue">Installation done to a standard</h3>
        <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-12">
          HiveGrid Energy installs residential battery systems in Texas and runs HiveGrid OS,
          the operating platform that keeps crews, jobs, and quality on one standard.
          Strategic partners own and operate the batteries. We do the work on the home.
        </p>
        <div className="max-w-3xl mx-auto border border-white/10 rounded-3xl py-10 px-8 bg-hive-panel/50">
          <h4 className="text-xl font-semibold mb-6 text-hive-blue">How we work</h4>
          <div className="space-y-2 text-lg text-white/90">
            <p>One crew. One home. One standard.</p>
            <p>Building Trust Through Transparency.</p>
            <p>Texas first. Built to scale with the work.</p>
          </div>
        </div>
      </section>
      <section id="how-it-works" className="max-w-5xl mx-auto mt-24 px-6">
        <h3 className="text-4xl md:text-5xl font-bold text-center mb-12 text-hive-blue">How It Works</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-hive-panel border border-white/10 rounded-3xl p-8 hover:border-hive-blue/50 transition-colors">
            <div className="text-5xl mb-6 text-hive-blue font-bold">1</div>
            <h4 className="text-2xl font-bold mb-4">Assign</h4>
            <p className="text-white/80">A job is opened for one home. The right crew is dispatched against a documented standard.</p>
          </div>
          <div className="bg-hive-panel border border-white/10 rounded-3xl p-8 hover:border-hive-blue/50 transition-colors">
            <div className="text-5xl mb-6 text-hive-blue font-bold">2</div>
            <h4 className="text-2xl font-bold mb-4">Install</h4>
            <p className="text-white/80">Licensed crews complete the installation. Quality is recorded on the job, not after the fact.</p>
          </div>
          <div className="bg-hive-panel border border-white/10 rounded-3xl p-8 hover:border-hive-blue/50 transition-colors">
            <div className="text-5xl mb-6 text-hive-blue font-bold">3</div>
            <h4 className="text-2xl font-bold mb-4">Verify</h4>
            <p className="text-white/80">The home is closed to the same standard every time so partners can operate the asset with confidence.</p>
          </div>
        </div>
      </section>
      <section id="platform" className="max-w-5xl mx-auto mt-24 px-6">
        <div className="text-center mb-12">
          <h3 className="text-4xl md:text-5xl font-bold mb-4 text-hive-blue">HiveGrid OS</h3>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">The operating platform for residential battery installation.</p>
        </div>
        <div className="bg-hive-panel border border-white/10 rounded-3xl p-10">
          <p className="text-lg text-white/80 mb-8 max-w-4xl">
            HiveGrid OS is the online app that runs the work: jobs, crews, training, and the installation standard.
            It comes into use as jobs arrive. It is built so every home is handled the same way.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-white/10 rounded-2xl p-6">
              <h5 className="font-semibold text-hive-blue mb-2">Brain</h5>
              <p className="text-white/80 text-sm">Job management and dispatch. One record per home.</p>
            </div>
            <div className="border border-white/10 rounded-2xl p-6">
              <h5 className="font-semibold text-hive-blue mb-2">Academy</h5>
              <p className="text-white/80 text-sm">Crew training and readiness against the systems we install.</p>
            </div>
            <div className="border border-white/10 rounded-2xl p-6">
              <h5 className="font-semibold text-hive-blue mb-2">Shield</h5>
              <p className="text-white/80 text-sm">License, compliance, and assignment checks before work starts.</p>
            </div>
            <div className="border border-white/10 rounded-2xl p-6">
              <h5 className="font-semibold text-hive-blue mb-2">Standard</h5>
              <p className="text-white/80 text-sm">The installation standard and quality record for every job.</p>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="max-w-5xl mx-auto mt-24 px-6 text-center">
        <h3 className="text-4xl md:text-5xl font-bold mb-6 text-hive-blue">Work with HiveGrid</h3>
        <p className="text-white/80 mb-10">For strategic partners and accredited investors.</p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col gap-3">
          {!submitted ? (
            <>
              <div className="flex gap-3">
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required className="flex-1 bg-hive-panel border border-white/20 rounded-2xl px-6 py-4 focus:outline-none focus:border-hive-blue" />
                <button type="submit" disabled={sending} className="bg-hive-blue hover:brightness-110 text-white font-bold px-10 py-4 rounded-2xl whitespace-nowrap disabled:opacity-60">
                  {sending ? 'Sending…' : 'Contact Us'}
                </button>
              </div>
              {sendError && <p className="text-sm text-red-400">{sendError}</p>}
            </>
          ) : (
            <div className="w-full py-6 text-center text-hive-blue font-medium">Thank you. We will be in touch shortly.</div>
          )}
        </form>
      </section>
      <footer className="mt-24 border-t border-white/10 py-12 text-center text-sm text-white/60">
        <div className="mb-2">Building Trust Through Transparency</div>
        © 2026 HiveGrid Energy, LLC • Wyoming LLC • Texas operations
      </footer>
      {showBackToTop && (
        <button onClick={scrollToTop} className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-hive-blue text-white shadow-lg hover:brightness-110 transition-all" aria-label="Back to top">
          <span className="text-2xl font-bold">↑</span>
        </button>
      )}
    </main>
  )
}
