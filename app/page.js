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
    <main className="min-h-screen bg-hive-base">
      {/* Header */}
      <header className="w-full bg-hive-panel/80 backdrop-blur-md border-b border-hive-border sticky top-0 z-50 px-4 md:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 bg-gradient-to-br from-hive-cyan to-hive-amber rounded-lg flex items-center justify-center font-bold text-hive-base shadow-lg">
            ⬢
          </div>
          <h1 className="text-lg font-bold tracking-tight text-white">
            HiveGrid <span className="text-hive-cyan font-mono text-sm">Energy OS</span>
          </h1>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-xs font-mono bg-slate-900 border border-hive-border px-3 py-1.5 rounded-full">
          <span className="h-2 w-2 rounded-full bg-hive-cyan animate-pulse"></span>
          <span className="text-slate-400">ERCOT Fleet:</span>
          <span className="text-white font-bold">4,812 NODES</span>
        </div>
      </header>
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center pt-16 md:pt-24 px-4">
        <div className="inline-flex items-center gap-2 bg-hive-cyan/10 border border-hive-cyan/30 text-hive-cyan text-xs font-mono px-3 py-1.5 rounded-full mb-6 uppercase tracking-wider">
          ⚡ Re-Engineering The Texas Residential Grid
        </div>
        
        <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
          Every Home a Power Plant.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-hive-cyan to-hive-amber">
            $0 Upfront Cost.
          </span>
        </h2>
        
        <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
          HiveGrid Energy OS insulates your home with premium backup power while automatically capturing revenue from ERCOT's extreme market volatility.
        </p>
        {/* Lead Capture Form */}
        <form onSubmit={handleSubmit} className="mt-10 max-w-md mx-auto flex flex-col sm:flex-row gap-3 p-2 bg-hive-panel border border-hive-border rounded-2xl">
          {!submitted ? (
            <>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email..."
                className="flex-1 bg-hive-base border border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-hive-cyan text-white font-mono"
              />
              <button
                type="submit"
                className="bg-hive-cyan text-hive-base font-mono font-bold text-sm px-6 py-3 rounded-xl transition-all hover:opacity-90 whitespace-nowrap"
              >
                Get Started
              </button>
            </>
          ) : (
            <div className="w-full py-3 text-center font-mono text-sm text-hive-cyan font-bold">
              ✓ Node Qualification Profile Initiated
            </div>
          )}
        </form>
      </section>
      {/* Value Props */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 px-4">
        <div className="bg-hive-panel/50 border border-hive-border rounded-2xl p-6">
          <div className="h-10 w-10 bg-hive-cyan/10 border border-hive-cyan/20 rounded-xl flex items-center justify-center text-xl mb-4">💎</div>
          <h3 className="text-lg font-bold text-white">Zero Capital Upfront</h3>
          <p className="text-sm text-slate-400 mt-2 leading-relaxed">
            Premium solar + battery systems installed at $0 out-of-pocket. Hardware costs cleared via grid integration yields.
          </p>
        </div>
        <div className="bg-hive-panel/50 border border-hive-border rounded-2xl p-6">
          <div className="h-10 w-10 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center justify-center text-xl mb-4">🛡️</div>
          <h3 className="text-lg font-bold text-white">The Outage Shield</h3>
          <p className="text-sm text-slate-400 mt-2 leading-relaxed">
            Never risk blackouts. Guaranteed 10-minute contingency buffer locks down energy during extreme weather.
          </p>
        </div>
        <div className="bg-hive-panel/50 border border-hive-border rounded-2xl p-6">
          <div className="h-10 w-10 bg-hive-amber/10 border border-hive-amber/20 rounded-xl flex items-center justify-center text-xl mb-4">📈</div>
          <h3 className="text-lg font-bold text-white">Automated VPP Yields</h3>
          <p className="text-sm text-slate-400 mt-2 leading-relaxed">
            ERCOT's RTC+B engine bids your asset into high-yield Regulation markets completely on autopilot.
          </p>
        </div>
      </section>
      {/* Footer */}
      <footer className="mt-24 border-t border-hive-border bg-hive-panel/40 px-4 py-6 text-center text-xs font-mono text-slate-500">
        © 2026 HiveGrid Energy Inc. All rights reserved.
      </footer>
    </main>
  )
}
