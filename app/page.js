'use client'
import { useState, useEffect } from 'react'

export default function HomePage() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim()) setSubmitted(true)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  // Back to Top - Show button after scrolling down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true)
      } else {
        setShowBackToTop(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <main className="min-h-screen bg-hive-base text-white overflow-hidden">
      {/* Navigation */}
      <nav className="w-full bg-hive-base/95 backdrop-blur-md border-b border-white/10 sticky top-0 z-50 px-6 py-5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo / Company Name */}
          <div className="flex items-center">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold tracking-tighter">HiveGrid</h1>
              <p className="text-xs text-hive-cyan -mt-1 tracking-[2px]">ENERGY</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white">
            <a href="#about" className="hover:text-hive-cyan transition-colors">About</a>
            <a href="#how-it-works" className="hover:text-hive-cyan transition-colors">How It Works</a>
            <a href="#platform" className="hover:text-hive-cyan transition-colors">Platform</a>
            <a href="#contact" className="hover:text-hive-cyan transition-colors">Contact</a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white text-2xl focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 px-2 pb-4">
            <div className="flex flex-col gap-4 text-sm font-medium bg-hive-panel border border-white/10 rounded-2xl p-4">
              <a href="#about" onClick={closeMenu} className="hover:text-hive-cyan transition-colors py-1">About</a>
              <a href="#how-it-works" onClick={closeMenu} className="hover:text-hive-cyan transition-colors py-1">How It Works</a>
              <a href="#platform" onClick={closeMenu} className="hover:text-hive-cyan transition-colors py-1">Platform</a>
              <a href="#contact" onClick={closeMenu} className="hover:text-hive-cyan transition-colors py-1">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-[90vh] bg-hive-base flex items-center justify-center relative px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-hive-cyan/10 border border-hive-cyan/30 text-hive-cyan px-6 py-2.5 rounded-full text-sm mb-8 font-medium">
            ⚡ RE-ENGINEERING THE TEXAS RESIDENTIAL GRID
          </div>

          <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-6 leading-none text-white">
            Every Home a<br />Power Plant
          </h1>

          <p className="text-2xl md:text-3xl text-white/80 max-w-3xl mx-auto mb-8">
            Not one giant plant. Thousands of smart ones.<br />
            Every home. One grid. Infinite power.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#how-it-works"
               className="bg-gradient-to-r from-hive-cyan to-hive-teal hover:brightness-110 text-hive-base font-semibold px-10 py-4 rounded-2xl text-lg transition-all">
              Learn How It Works
            </a>
            <a href="#contact"
               className="border border-hive-cyan/50 hover:bg-hive-cyan/10 font-semibold px-10 py-4 rounded-2xl text-lg transition-all">
              For Investors & Partners
            </a>
          </div>

          {/* Field Operations Portal Button - Now Active */}
          <div className="mt-8">
            <a 
              href="/portal"
              className="inline-flex items-center gap-2 text-sm font-medium text-hive-cyan hover:text-white transition-colors border border-hive-cyan/40 hover:border-hive-cyan px-6 py-3 rounded-2xl"
            >
              Field Operations Portal →
            </a>
            <p className="text-xs text-white/50 mt-2">For electricians and field crews</p>
          </div>
        </div>
      </section>

      {/* About + Vision */}
      <section id="about" className="max-w-5xl mx-auto mt-24 px-6 text-center">
        <h3 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-hive-cyan via-hive-teal to-hive-yellow bg-clip-text text-transparent">
          The Distributed Future is Here
        </h3>
        <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-12">
          Instead of one giant facility, HiveGrid Energy is building thousands of intelligent residential nodes.
          Every home becomes a smart power plant — combining battery storage, grid services, and future AI compute into one seamless platform.
        </p>

        {/* Vision Block */}
        <div className="max-w-3xl mx-auto border border-white/10 rounded-3xl py-10 px-8 bg-hive-panel/50">
          <h4 className="text-xl font-semibold mb-6 text-hive-cyan">Vision</h4>
          <div className="space-y-2 text-lg text-white/90">
            <p>Not one giant plant. Thousands of smart ones.</p>
            <p>Every home. One grid. Infinite power.</p>
            <p>The power plant is the neighborhood.</p>
            <p>Distributed by design. Powerful by nature.</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="max-w-5xl mx-auto mt-24 px-6">
        <h3 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-hive-cyan via-hive-teal to-hive-yellow bg-clip-text text-transparent">
          How It Works
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-hive-panel border border-white/10 rounded-3xl p-8 hover:border-hive-cyan/50 transition-colors">
            <div className="text-5xl mb-6 text-hive-cyan">1</div>
            <h4 className="text-2xl font-bold mb-4">Install</h4>
            <p className="text-white/80">Premium battery systems installed at $0 upfront through our strategic partnerships.</p>
          </div>
          <div className="bg-hive-panel border border-white/10 rounded-3xl p-8 hover:border-hive-cyan/50 transition-colors">
            <div className="text-5xl mb-6 text-hive-cyan">2</div>
            <h4 className="text-2xl font-bold mb-4">Optimize</h4>
            <p className="text-white/80">Your home automatically participates in ERCOT markets, earning revenue from volatility.</p>
          </div>
          <div className="bg-hive-panel border border-white/10 rounded-3xl p-8 hover:border-hive-cyan/50 transition-colors">
            <div className="text-5xl mb-6 text-hive-cyan">3</div>
            <h4 className="text-2xl font-bold mb-4">Protect</h4>
            <p className="text-white/80">Reliable backup power during extreme Texas weather. Never risk blackouts again.</p>
          </div>
        </div>
      </section>

      {/* Platform Section */}
      <section id="platform" className="max-w-5xl mx-auto mt-24 px-6">
        <div className="text-center mb-12">
          <h3 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-hive-cyan via-hive-teal to-hive-yellow bg-clip-text text-transparent">
            HiveGrid Energy OS
          </h3>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            The proprietary operating system powering high-quality, compliant distributed energy deployment.
          </p>
        </div>

        <div className="bg-hive-panel border border-white/10 rounded-3xl p-10">
          <p className="text-lg text-white/80 mb-8 max-w-4xl">
            HiveGrid Energy OS is our proprietary platform that connects field crews, regulatory compliance,
            installation quality, and grid asset activation into one seamless system. It is designed to solve
            the biggest operational bottlenecks in residential battery deployment.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-white/10 rounded-2xl p-6">
              <h5 className="font-semibold text-hive-cyan mb-2">Jurisdictional Compliance Dispatcher</h5>
              <p className="text-white/80 text-sm">Real-time verification of electrician licenses against state and local requirements before job assignment.</p>
            </div>
            <div className="border border-white/10 rounded-2xl p-6">
              <h5 className="font-semibold text-hive-cyan mb-2">Geofenced Job Dispatch</h5>
              <p className="text-white/80 text-sm">Dynamic assignment of jobs based on proximity, license validity, and specialization.</p>
            </div>
            <div className="border border-white/10 rounded-2xl p-6">
              <h5 className="font-semibold text-hive-cyan mb-2">AR Install Assist</h5>
              <p className="text-white/80 text-sm">Augmented reality overlays that guide electricians through code-compliant installations step-by-step.</p>
            </div>
            <div className="border border-white/10 rounded-2xl p-6">
              <h5 className="font-semibold text-hive-cyan mb-2">Automated Verification Loop (“Verify-to-Pay”)</h5>
              <p className="text-white/80 text-sm">Computer vision quality control that verifies completed work, triggers payment, and activates the asset.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-5xl mx-auto mt-24 px-6 text-center">
        <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-hive-cyan via-hive-teal to-hive-yellow bg-clip-text text-transparent">
          Ready to Power the Future?
        </h3>
        <p className="text-white/80 mb-10">For accredited investors and strategic partners.</p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-3">
          {!submitted ? (
            <>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 bg-hive-panel border border-white/20 rounded-2xl px-6 py-4 focus:outline-none focus:border-hive-cyan"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-hive-cyan to-hive-teal hover:brightness-110 text-hive-base font-bold px-10 py-4 rounded-2xl whitespace-nowrap"
              >
                Contact Us
              </button>
            </>
          ) : (
            <div className="w-full py-6 text-center text-hive-cyan font-medium">
              ✓ Thank you. We’ll be in touch shortly.
            </div>
          )}
        </form>
      </section>

      <footer className="mt-24 border-t border-white/10 py-12 text-center text-sm text-white/60">
        <div className="mb-2">Trust. Truth. Transparency.</div>
        © 2026 HiveGrid Energy LLC • Building the Distributed Future of Texas Energy
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-hive-cyan text-hive-base shadow-lg hover:bg-cyan-400 transition-all"
          aria-label="Back to top"
        >
          <span className="text-2xl font-bold">↑</span>
        </button>
      )}
    </main>
  )
}
