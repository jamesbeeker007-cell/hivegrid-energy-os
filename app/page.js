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

      {/* More sections can go here — About, How It Works, Platform, etc. */}

      <footer className="mt-32 border-t border-hive-border py-12 text-center text-sm text-hive-slate">
        © 2026 HiveGrid Energy LLC • Building the Distributed Future of Texas Energy
      </footer>
    </main>
  )
}
