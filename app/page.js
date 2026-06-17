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
    <main className="min-h-screen bg-[#0F172A] text-circuit-white">
      {/* Navigation */}
      <nav className="w-full bg-[#0F172A]/95 backdrop-blur-md border-b border-silver-node/30 sticky top-0 z-50 px-6 py-5 flex justify-between items-center">
        <div className="flex items-center gap-3">
          {/* New Vibrant Logo */}
          <div className="h-12 w-12 bg-gradient-to-br from-orange-400 via-amber-400 to-emerald-400 rounded-2xl flex items-center justify-center shadow-xl relative">
            <div className="text-white text-4xl font-black tracking-tighter drop-shadow-md">⬡</div>
            <div className="absolute -right-1 -top-1 text-2xl drop-shadow-md">⚡</div>
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

      {/* Hero - Option 2 */}
      <section className="min-h-screen bg-[#0F172A] text-circuit-white flex items-center justify-center relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-400/10 to-emerald-400/10 text-electric-amber px-5 py-2 rounded-full text-sm mb-8 border border-electric-amber/30">
            ⚡ HiveGrid Energy OS — Live in Texas
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold font-space-grotesk tracking-tight mb-6 leading-none">
            Every Home a<br />
            <span className="bg-gradient-to-r from-cyan-400 via-orange-400 to-emerald-400 bg-clip-text text-transparent">
              Power Plant
            </span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-silver-node max-w-3xl mx-auto mb-8 font-light">
            The strongest grid is the one that belongs to everyone.
          </p>
          
          <p className="text-xl text-silver-node max-w-3xl mx-auto mb-12">
            Premium battery systems at <span className="text-electric-amber font-semibold">$0 upfront</span>. 
            Automatically generating revenue from ERCOT while providing reliable backup power.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#how-it-works" 
               className="bg-gradient-to-r from-electric-amber to-orange-400 hover:brightness-110 text-hive-green font-semibold px-10 py-4 rounded-xl text-lg transition-all">
              Learn How It Works
            </a>
            <a href="#contact" 
               className="border border-circuit-white hover:bg-white/10 font-semibold px-10 py-4 rounded-xl text-lg transition-all">
              For Investors & Partners
            </a>
          </div>
        </div>
      </section>

      {/* Rest of the page (refined) */}
      <section id="about" className="max-w-5xl mx-auto mt-32 px-6 text-center">
        <h3 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-orange-400 to-emerald-400 bg-clip-text text-transparent">
          The Distributed Future is Here
        </h3>
        <p className="text-xl text-silver-node max-w-3xl mx-auto leading-relaxed">
          Instead of one giant facility, HiveGrid is building thousands of intelligent residential nodes. 
          Every home becomes a smart power plant — combining battery storage, grid services, and future AI compute into one seamless platform.
        </p>
      </section>

      <section id="how-it-works" className="max-w-5xl mx-auto mt-32 px-6">
        <h3 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 via-orange-400 to-emerald-400 bg-clip-text text-transparent">
          How It Works
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#0F172A] border border-silver-node/30 rounded-3xl p-8 hover:border-electric-amber/50 transition-colors">
            <div className="text-5xl mb-6 text-electric-amber">1</div>
            <h4 className="text-2xl font-bold mb-4">Install</h4>
            <p className="text-silver-node">Premium battery systems installed at $0 upfront through our SOLRITE partnership.</p>
          </div>
          <div className="bg-[#0F172A] border border-silver-node/30 rounded-3xl p-8 hover:border-electric-amber/50 transition-colors">
            <div className="text-5xl mb-6 text-electric-amber">2</div>
            <h4 className="text-2xl font-bold mb-4">Optimize</h4>
            <p className="text-silver-node">Your home automatically participates in ERCOT markets, earning revenue from volatility.</p>
          </div>
          <div className="bg-[#0F172A] border border-silver-node/30 rounded-3xl p-8 hover:border-electric-amber/50 transition-colors">
            <div className="text-5xl mb-6 text-electric-amber">3</div>
            <h4 className="text-2xl font-bold mb-4">Protect</h4>
            <p className="text-silver-node">Reliable backup power during extreme Texas weather. Never risk blackouts again.</p>
          </div>
        </div>
      </section>

      <section id="platform" className="max-w-5xl mx-auto mt-32 px-6 bg-[#0F172A] rounded-3xl py-16 text-center">
        <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-orange-400 to-emerald-400 bg-clip-text text-transparent">
          HiveGrid Energy OS
        </h3>
        <p className="text-xl text-silver-node max-w-3xl mx-auto">
          The operating system for distributed energy. Real-time monitoring, automated revenue generation, crew dispatch, and future AI compute integration — all in one powerful platform.
        </p>
      </section>

      <section id="contact" className="max-w-5xl mx-auto mt-32 px-6 text-center">
        <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-orange-400 to-emerald-400 bg-clip-text text-transparent">
          Ready to Power the Future?
        </h3>
        <p className="text-silver-node mb-10">For accredited investors and strategic partners.</p>
       
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-3">
          {!submitted ? (
            <>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 bg-[#0F172A] border border-silver-node rounded-2xl px-6 py-4 focus:outline-none focus:border-electric-amber"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-electric-amber to-orange-400 hover:brightness-110 text-hive-green font-bold px-10 py-4 rounded-2xl whitespace-nowrap"
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
