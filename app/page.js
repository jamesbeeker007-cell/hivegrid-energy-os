'use client'
import { useState } from 'react'

export default function HomePage() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim()) setSubmitted(true)
  }

  return (
    <main className="min-h-screen bg-hive-base text-white overflow-hidden">
      {/* Navigation */}
      <nav className="w-full bg-hive-base/95 backdrop-blur-md border-b border-white/10 sticky top-0 z-50 px-6 py-5 flex justify-between items-center">
        <div className="flex items-center gap-4">
          {/* Real Logo from public/images */}
          <img 
            src="/images/hivegrid-logo.png" 
            alt="HiveGrid Energy OS" 
            className="h-14 w-auto"
          />

          <div>
            <h1 className="text-3xl font-bold tracking-tighter">HiveGrid</h1>
            <p className="text-xs text-hive-cyan -mt-1 tracking-[2px]">ENERGY OS</p>
          </div>
        </div>

        <div className="flex items-center gap-8 text-sm font-medium text-white">
          <a href="#about" className="hover:text-hive-cyan transition-colors">About</a>
          <a href="#how-it-works" className="hover:text-hive-cyan transition-colors">How It Works</a>
          <a href="#platform" className="hover:text-hive-cyan transition-colors">HiveGrid OS</a>
          <a href="#contact" className="hover:text-hive-cyan transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-[90vh] bg-hive-base flex items-center justify-center relative px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-hive-cyan/10 border border-hive-cyan/30 text-hive-cyan px-6 py-2.5 rounded-full text-sm mb-8 font-medium">
            ⚡ RE-ENGINEERING THE TEXAS RESIDENTIAL GRID
          </div>

          <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-6 leading-none text-white">
            Every Home a<br />Power Plant
          </h1>

          <p className="text-2xl md:text-3xl text-white/80 max-w-3xl mx-auto mb-8">
            Premium solar + battery systems at <span className="text-hive-yellow font-semibold">$0 Upfront Cost</span>.
          </p>

          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-12">
            Automatically generating revenue from ERCOT volatility while providing reliable backup power.
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
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-5xl mx-auto mt-24 px-6 text-center">
        <h3 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-hive-cyan via-hive-teal to-hive-yellow bg-clip-text text-transparent">
          The Distributed Future is Here
        </h3>
        <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
          Instead of one giant facility, HiveGrid is building thousands of intelligent residential nodes.
          Every home becomes a smart power plant — combining battery storage, grid services, and future AI compute into one seamless platform.
        </p>
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
            <p className="text-white/80">Premium battery systems installed at $0 upfront through our SOLRITE partnership.</p>
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

      {/* HiveGrid OS Platform */}
      <section id="platform" className="max-w-5xl mx-auto mt-24 px-6 bg-hive-panel rounded-3xl py-16 text-center border border-hive-cyan/20">
        <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-hive-cyan via-hive-teal to-hive-yellow bg-clip-text text-transparent">
          HiveGrid Energy OS
        </h3>
        <p className="text-xl text-white/80 max-w-3xl mx-auto">
          The operating system for distributed energy. Real-time monitoring, automated revenue generation, crew dispatch, and future AI compute integration — all in one powerful platform.
        </p>
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
        © 2026 HiveGrid Energy LLC • Building the Distributed Future of Texas Energy
      </footer>
    </main>
  )
}
