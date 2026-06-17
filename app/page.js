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
    <main className="min-h-screen bg-[#0C1222] text-circuit-white">
      {/* Navigation */}
      <nav className="w-full bg-[#0C1222]/95 backdrop-blur-md border-b border-silver-node/30 sticky top-0 z-50 px-6 py-5 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 bg-gradient-to-br from-electric-amber to-hive-green rounded-xl flex items-center justify-center font-bold text-xl shadow-lg">
            ⬡
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight font-space-grotesk">HiveGrid</h1>
            <p className="text-xs text-electric-amber -mt-1">ENERGY OS</p>
          </div>
        </div>
       
        <div className="flex items-center gap-8 text-sm font-medium">
          <a href="#about" className="hover:text-electric-amber transition-colors">About</a>
          <a href="#how-it-works" className="hover:text-electric-amber transition-colors">How It Works</a>
          <a href="#platform" className="hover:text-electric-amber transition-colors">HiveGrid OS</a>
          <a href="#contact" className="hover:text-electric-amber transition-colors">Contact</a>
        </div>
      </nav>

      {/* Premium Blended Hero */}
      <section className="min-h-screen bg-[#0C1222] text-circuit-white flex items-center justify-center relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-electric-amber/10 text-electric-amber px-4 py-1.5 rounded-full text-sm mb-6">
            ⚡ HiveGrid Energy OS — Live in Texas
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold font-space-grotesk tracking-tight mb-6 leading-none">
            Not one giant power plant.<br />
            <span className="bg-gradient-to-r from-cyan-400 via-electric-amber to-amber-400 bg-clip-text text-transparent">
              Thousands of smart ones.
            </span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-silver-node max-w-3xl mx-auto mb-10">
            Every home becomes a silent micro power plant and AI edge compute station — 
            creating a resilient, distributed energy network more powerful than any centralized facility.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#how-it-works" 
               className="bg-electric-amber hover:bg-amber-400 text-hive-green font-semibold px-10 py-4 rounded-xl text-lg transition-all">
              Learn How It Works
            </a>
            <a href="#contact" 
               className="border border-circuit-white hover:bg-white/10 font-semibold px-10 py-4 rounded-xl text-lg transition-all">
              For Investors & Partners
            </a>
          </div>
        </div>
      </section>

      {/* About / Distributed Future */}
      <section id="about" className="max-w-5xl mx-auto mt-32 px-6 text-center">
        <h3 className="text-4xl font-bold mb-8">The Distributed Future is Here</h3>
        <p className="text-xl text-silver-node max-w-3xl mx-auto leading-relaxed">
          Instead of one giant facility, HiveGrid is building thousands of intelligent residential nodes.
          Every home becomes a smart power plant — combining battery storage, grid services, and future AI compute into one seamless platform.
        </p>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="max-w-5xl mx-auto mt-32 px-6">
        <h3 className="text-4xl font-bold text-center mb-12">How It Works</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#0F1A2E] border border-silver-node/30 rounded-3xl p-8">
            <div className="text-5xl mb-6 text-electric-amber">1</div>
            <h4 className="text-2xl font-bold mb-4">Install</h4>
            <p className="text-silver-node">Premium battery systems installed at $0 upfront through our SOLRITE partnership.</p>
          </div>
          <div className="bg-[#0F1A2E] border border-silver-node/30 rounded-3xl p-8">
            <div className="text-5xl mb-6 text-electric-amber">2</div>
            <h4 className="text-2xl font-bold mb-4">Optimize</h4>
            <p className="text-silver-node">Your home automatically participates in ERCOT markets, earning revenue from volatility.</p>
          </div>
          <div className="bg-[#0F1A2E] border border-silver-node/30 rounded-3xl p-8">
            <div className="text-5xl mb-6 text-electric-amber">3</div>
            <h4 className="text-2xl font-bold mb-4">Protect</h4>
            <p className="text-silver-node">Reliable backup power during extreme Texas weather. Never risk blackouts again.</p>
          </div>
        </div>
      </section>

      {/* HiveGrid OS Platform */}
      <section id="platform" className="max-w-5xl mx-auto mt-32 px-6 bg-[#0F1A2E] rounded-3xl py-16 text-center">
        <h3 className="text-4xl font-bold mb-6">HiveGrid Energy OS</h3>
        <p className="text-xl text-silver-node max-w-3xl mx-auto">
          The operating system for distributed energy. Real-time monitoring, automated revenue generation, crew dispatch, and future AI compute integration — all in one powerful platform.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-5xl mx-auto mt-32 px-6 text-center">
        <h3 className="text-4xl font-bold mb-6">Ready to Power the Future?</h3>
        <p className="text-silver-node mb-10">For accredited investors and strategic partners.</p>
       
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-3">
          {!submitted ? (
            <>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 bg-[#0F1A2E] border border-silver-node rounded-2xl px-6 py-4 focus:outline-none focus:border-electric-amber"
              />
              <button
                type="submit"
                className="bg-electric-amber hover:bg-amber-400 transition-colors text-hive-green font-bold px-10 py-4 rounded-2xl whitespace-nowrap"
              >
                Contact Us
              </button>
            </>
          ) : (
            <div className="w-full py-6 text-center text-electric-amber font-medium">
              ✓ Thank you. We’ll be in touch shortly.
            </div>
          )}
        </form>
      </section>

      <footer className="mt-32 border-t border-silver-node/30 py-12 text-center text-sm text-silver-node">
        © 2026 HiveGrid Energy LLC • Building the Distributed Future of Texas Energy
      </footer>
    </main>
  )
}