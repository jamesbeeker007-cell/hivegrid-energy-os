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
    <main className="min-h-screen bg-hive-base text-white">
      {/* Navigation */}
      <nav className="w-full bg-hive-panel/90 backdrop-blur-md border-b border-hive-border sticky top-0 z-50 px-6 py-5 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 bg-gradient-to-br from-hive-cyan to-hive-amber rounded-xl flex items-center justify-center font-bold text-xl shadow-lg">
            ⬡
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">HiveGrid</h1>
            <p className="text-xs text-hive-cyan -mt-1">ENERGY OS</p>
          </div>
        </div>
        
        <div className="flex items-center gap-8 text-sm font-medium">
          <a href="#about" className="hover:text-hive-cyan transition-colors">About</a>
          <a href="#how-it-works" className="hover:text-hive-cyan transition-colors">How It Works</a>
          <a href="#platform" className="hover:text-hive-cyan transition-colors">HiveGrid OS</a>
          <a href="#contact" className="hover:text-hive-cyan transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-5xl mx-auto text-center pt-20 px-6">
        <div className="inline-flex items-center gap-2 bg-hive-cyan/10 border border-hive-cyan/30 text-hive-cyan text-sm font-mono px-5 py-2 rounded-full mb-8">
          ⚡ RE-ENGINEERING THE TEXAS RESIDENTIAL GRID
        </div>

        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none">
          Every Home a<br />
          <span className="bg-gradient-to-r from-hive-cyan via-cyan-400 to-hive-amber bg-clip-text text-transparent">
            Power Plant
          </span>
        </h2>

        <p className="mt-6 text-2xl text-hive-slate max-w-2xl mx-auto">
          Premium solar + battery systems at <span className="text-hive-amber font-semibold">$0 Upfront Cost</span>.<br />
          Automatically generating revenue from ERCOT volatility while providing backup power.
        </p>

        <form onSubmit={handleSubmit} className="mt-10 max-w-md mx-auto flex gap-3">
          {!submitted ? (
            <>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 bg-hive-panel border border-hive-border rounded-2xl px-6 py-4 focus:outline-none focus:border-hive-cyan"
              />
              <button
                type="submit"
                className="bg-hive-cyan hover:bg-cyan-400 transition-colors text-black font-bold px-10 py-4 rounded-2xl whitespace-nowrap"
              >
                Get Early Access
              </button>
            </>
          ) : (
            <div className="w-full py-6 text-center text-hive-cyan font-medium">
              ✓ Thank you. We’ll be in touch shortly.
            </div>
          )}
        </form>
      </section>

      {/* About */}
      <section id="about" className="max-w-5xl mx-auto mt-32 px-6">
        <h3 className="text-4xl font-bold text-center mb-12">The Distributed Future is Here</h3>
        <p className="text-xl text-hive-slate max-w-3xl mx-auto text-center leading-relaxed">
          HiveGrid Energy OS turns every home into a smart power node — combining battery storage, grid services, and future AI compute into one seamless platform. 
          Instead of building one giant facility, we’re building thousands of intelligent residential nodes.
        </p>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="max-w-5xl mx-auto mt-32 px-6">
        <h3 className="text-4xl font-bold text-center mb-12">How It Works</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-hive-panel border border-hive-border rounded-3xl p-8">
            <div className="text-5xl mb-6">1️⃣</div>
            <h4 className="text-2xl font-bold mb-4">Install</h4>
            <p className="text-hive-slate">Premium solar + battery systems installed at $0 upfront through our SOLRITE partnership.</p>
          </div>
          <div className="bg-hive-panel border border-hive-border rounded-3xl p-8">
            <div className="text-5xl mb-6">2️⃣</div>
            <h4 className="text-2xl font-bold mb-4">Optimize</h4>
            <p className="text-hive-slate">Your home automatically participates in ERCOT markets, earning revenue from volatility.</p>
          </div>
          <div className="bg-hive-panel border border-hive-border rounded-3xl p-8">
            <div className="text-5xl mb-6">3️⃣</div>
            <h4 className="text-2xl font-bold mb-4">Protect</h4>
            <p className="text-hive-slate">Reliable backup power during extreme weather — never risk blackouts again.</p>
          </div>
        </div>
      </section>

      {/* HiveGrid OS */}
      <section id="platform" className="max-w-5xl mx-auto mt-32 px-6 bg-hive-panel/50 rounded-3xl py-16">
        <h3 className="text-4xl font-bold text-center mb-8">HiveGrid Energy OS</h3>
        <p className="text-xl text-hive-slate max-w-3xl mx-auto text-center">
          The operating system for the distributed energy future. Real-time monitoring, automated revenue generation, crew dispatch, and future AI compute integration — all in one platform.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-5xl mx-auto mt-32 px-6 text-center">
        <h3 className="text-4xl font-bold mb-6">Ready to Power the Future?</h3>
        <p className="text-hive-slate mb-10">For accredited investors and strategic partners.</p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-3">
          {!submitted ? (
            <>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 bg-hive-panel border border-hive-border rounded-2xl px-6 py-4 focus:outline-none focus:border-hive-cyan"
              />
              <button
                type="submit"
                className="bg-hive-cyan hover:bg-cyan-400 transition-colors text-black font-bold px-10 py-4 rounded-2xl whitespace-nowrap"
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

      <footer className="mt-32 border-t border-hive-border py-12 text-center text-sm text-hive-slate">
        © 2026 HiveGrid Energy LLC • Building the Distributed Future of Texas Energy
      </footer>
    </main>
  )
}
