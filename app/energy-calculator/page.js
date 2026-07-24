'use client'
import { useState } from 'react'

function fmt$(n) {
  return '$' + Math.round(n).toLocaleString()
}

export default function EnergyCalculatorPage() {
  const [monthlyBill, setMonthlyBill] = useState('')
  const [zip, setZip] = useState('')
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState(null)
  const [showLead, setShowLead] = useState(false)
  const [showThanks, setShowThanks] = useState(false)
  const [selectedRole, setSelectedRole] = useState('')
  const [form, setForm] = useState({
    fname: '', lname: '', email: '', phone: '', formZip: '', address: '', city: '', state: '', billRange: ''
  })
  const [qrUrl, setQrUrl] = useState('https://hivegridenergy.com/energy-calculator')

  const quickAmounts = [100, 150, 200, 250, 300, 400]

  const calculate = () => {
    const bill = parseFloat(monthlyBill)
    if (!bill || bill < 20) {
      alert('Please enter a realistic monthly electric bill (at least $20).')
      return
    }
    setLoading(true)
    setTimeout(() => {
      const annualBill = bill * 12
      // Conservative savings range for a home battery + possible VPP participation
      const lowSavePct = 0.15
      const highSavePct = 0.28
      const annualSaveLow = annualBill * lowSavePct
      const annualSaveHigh = annualBill * highSavePct
      const lifetimeLow = annualSaveLow * 10
      const lifetimeHigh = annualSaveHigh * 10

      setResults({
        monthlyBill: bill,
        annualBill,
        annualSaveLow,
        annualSaveHigh,
        lifetimeLow,
        lifetimeHigh
      })
      setForm(prev => ({ ...prev, formZip: zip, billRange: `$${Math.round(bill)}/mo` }))
      setLoading(false)
    }, 600)
  }

  const handleRole = (role) => setSelectedRole(role)

  const handleSubmitLead = (e) => {
    e.preventDefault()
    if (!form.fname || !form.email) {
      alert('Please enter at least your first name and email.')
      return
    }
    console.log('LEAD CAPTURED:', { role: selectedRole, ...form, monthlyBill, timestamp: new Date().toISOString() })
    setShowLead(false)
    setShowThanks(true)
  }

  const updateForm = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  return (
    <main className="min-h-screen bg-hive-base text-white">
      {/* Top bar */}
      <nav className="border-b border-white/10 px-4 sm:px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 sm:gap-3">
            <img src="/images/logo-icon.svg" alt="HiveGrid" className="h-8 w-8 sm:h-9 sm:w-9" />
            <div>
              <div className="text-base sm:text-lg font-bold leading-none">HiveGrid</div>
              <div className="text-[9px] sm:text-[10px] text-hive-blue tracking-[2px]">ENERGY</div>
            </div>
          </a>
          <a href="/" className="text-sm text-white/70 hover:text-hive-blue transition-colors">← Back</a>
        </div>
      </nav>

      {/* Hero + Calculator */}
      <section className="px-4 sm:px-6 py-12 sm:py-20">
        <div className="max-w-lg mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-hive-blue/10 border border-hive-blue/30 text-hive-blue px-4 py-1.5 rounded-full text-xs mb-6 font-medium tracking-wide">
            FREE INSTANT ANALYSIS
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-tight">
            How Much Is Your<br />
            <span className="text-hive-blue">Energy Bill</span><br />
            Costing You?
          </h1>

          <p className="text-white/70 mb-8 sm:mb-10 text-base sm:text-lg leading-relaxed">
            Enter your average monthly electric bill and see how much a home battery system could save you.
          </p>

          {/* Calculator Card */}
          <div className="bg-hive-panel border border-white/10 rounded-2xl p-5 sm:p-8 text-left shadow-xl">
            <label className="block text-xs font-medium tracking-widest text-hive-blue uppercase mb-3">
              Your Average Monthly Electric Bill
            </label>

            {/* Quick select buttons */}
            <div className="grid grid-cols-3 gap-2 mb-4">
              {quickAmounts.map(amount => (
                <button
                  key={amount}
                  type="button"
                  onClick={() => setMonthlyBill(String(amount))}
                  className={`py-2.5 rounded-xl text-sm font-semibold border transition-all ${
                    monthlyBill === String(amount)
                      ? 'bg-hive-blue text-white border-hive-blue'
                      : 'bg-hive-base border-white/15 text-white/80 hover:border-hive-blue/50'
                  }`}
                >
                  ${amount}
                </button>
              ))}
            </div>

            {/* Custom amount */}
            <div className="relative mb-4">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 text-lg">$</span>
              <input
                type="number"
                inputMode="decimal"
                min="20"
                step="1"
                value={monthlyBill}
                onChange={(e) => setMonthlyBill(e.target.value)}
                placeholder="Enter amount"
                className="w-full bg-hive-base border border-white/15 rounded-xl pl-8 pr-4 py-3.5 text-xl font-bold focus:outline-none focus:border-hive-blue"
              />
            </div>

            {/* Optional ZIP */}
            <div className="mb-5">
              <label className="block text-xs text-white/50 mb-1.5">ZIP Code <span className="text-white/30">(optional)</span></label>
              <input
                type="text"
                inputMode="numeric"
                maxLength={5}
                value={zip}
                onChange={(e) => setZip(e.target.value.replace(/\D/g, '').slice(0, 5))}
                placeholder="e.g. 76005"
                className="w-full bg-hive-base border border-white/15 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-hive-blue"
              />
            </div>

            <button
              onClick={calculate}
              disabled={loading}
              className="w-full bg-hive-blue text-white font-bold py-4 rounded-xl hover:brightness-110 transition-all disabled:opacity-50 text-base"
            >
              {loading ? 'Calculating…' : 'Calculate My Savings →'}
            </button>

            <p className="text-center text-xs text-white/40 mt-3">Instant results · No signup required · 100% free</p>

            {/* Results */}
            {results && (
              <div className="mt-8 space-y-4">
                <div className="text-center text-sm text-hive-cyan mb-2">
                  Based on your ${Math.round(results.monthlyBill)}/mo bill
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-hive-base border border-white/10 rounded-xl p-4 text-center">
                    <div className="text-xl sm:text-2xl font-bold text-white">{fmt$(results.annualBill)}</div>
                    <div className="text-[11px] text-white/50 uppercase tracking-wide mt-1">Annual Spend</div>
                  </div>
                  <div className="bg-hive-base border border-white/10 rounded-xl p-4 text-center">
                    <div className="text-xl sm:text-2xl font-bold text-hive-green">
                      {fmt$(results.annualSaveLow)}–{fmt$(results.annualSaveHigh)}
                    </div>
                    <div className="text-[11px] text-white/50 uppercase tracking-wide mt-1">Est. Annual Savings</div>
                  </div>
                </div>

                <div className="bg-hive-base border border-hive-green/30 rounded-xl p-5 text-center">
                  <div className="text-xl sm:text-2xl font-bold text-hive-green leading-snug">
                    Up to {fmt$(results.lifetimeHigh)} in 10-Year Savings
                  </div>
                  <div className="text-xs text-white/60 mt-1.5">
                    Estimated range with a home battery backup system
                  </div>
                </div>

                <button
                  onClick={() => setShowLead(true)}
                  className="w-full bg-hive-green text-hive-base font-bold py-4 rounded-xl hover:brightness-110 transition-all"
                >
                  🔋 See If You Qualify for a Free Quote →
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Lead Form */}
      {showLead && (
        <section className="px-4 sm:px-6 pb-20">
          <div className="max-w-lg mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2">
              Get Your <span className="text-hive-blue">Free</span> Quote
            </h2>
            <p className="text-center text-white/60 mb-8 text-sm sm:text-base">
              Tell us a little about yourself and we’ll send a personalized battery backup proposal — no obligation.
            </p>

            <form onSubmit={handleSubmitLead} className="bg-hive-panel border border-white/10 rounded-2xl p-5 sm:p-8 space-y-4">
              <div>
                <div className="text-xs font-medium tracking-widest text-hive-blue uppercase mb-2">I am a…</div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {['Homeowner', 'Renter', 'Electrician', 'Installer', 'Business', 'Just Looking'].map(role => (
                    <button
                      key={role}
                      type="button"
                      onClick={() => handleRole(role)}
                      className={`text-xs py-2.5 rounded-lg border transition-all ${
                        selectedRole === role
                          ? 'bg-hive-blue/20 border-hive-blue text-hive-blue'
                          : 'border-white/15 text-white/70 hover:border-white/30'
                      }`}
                    >
                      {role}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-hive-blue uppercase tracking-wide">First Name</label>
                  <input type="text" value={form.fname} onChange={e => updateForm('fname', e.target.value)}
                    className="w-full mt-1 bg-hive-base border border-white/15 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-hive-blue" placeholder="John" />
                </div>
                <div>
                  <label className="text-xs text-hive-blue uppercase tracking-wide">Last Name</label>
                  <input type="text" value={form.lname} onChange={e => updateForm('lname', e.target.value)}
                    className="w-full mt-1 bg-hive-base border border-white/15 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-hive-blue" placeholder="Smith" />
                </div>
              </div>

              <div>
                <label className="text-xs text-hive-blue uppercase tracking-wide">Email</label>
                <input type="email" value={form.email} onChange={e => updateForm('email', e.target.value)}
                  className="w-full mt-1 bg-hive-base border border-white/15 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-hive-blue" placeholder="john@email.com" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-hive-blue uppercase tracking-wide">Phone</label>
                  <input type="tel" value={form.phone} onChange={e => updateForm('phone', e.target.value)}
                    className="w-full mt-1 bg-hive-base border border-white/15 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-hive-blue" placeholder="(555) 000-0000" />
                </div>
                <div>
                  <label className="text-xs text-hive-blue uppercase tracking-wide">ZIP</label>
                  <input type="text" value={form.formZip} onChange={e => updateForm('formZip', e.target.value)}
                    className="w-full mt-1 bg-hive-base border border-white/15 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-hive-blue" maxLength={5} />
                </div>
              </div>

              <div>
                <label className="text-xs text-hive-blue uppercase tracking-wide">Street Address</label>
                <input type="text" value={form.address} onChange={e => updateForm('address', e.target.value)}
                  className="w-full mt-1 bg-hive-base border border-white/15 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-hive-blue" placeholder="123 Main Street" />
              </div>

              <button type="submit" className="w-full bg-hive-green text-hive-base font-bold py-4 rounded-xl hover:brightness-110 transition-all mt-2">
                ⚡ Get My Free Battery Quote →
              </button>
              <p className="text-center text-xs text-white/40">🔒 Your info is private and will never be sold.</p>
            </form>
          </div>
        </section>
      )}

      {/* Thank You */}
      {showThanks && (
        <section className="px-4 sm:px-6 py-20 text-center">
          <div className="max-w-md mx-auto">
            <div className="text-5xl mb-4">⚡</div>
            <h2 className="text-3xl font-bold text-hive-green mb-3">You’re In!</h2>
            <p className="text-white/70 mb-8">Thanks — a specialist will reach out within 24 hours with your personalized battery backup proposal.</p>
            <div className="bg-hive-panel border border-hive-green/20 rounded-2xl p-6 text-left text-sm text-white/80 space-y-2">
              <div><strong className="text-hive-green">What happens next:</strong></div>
              <div>✅ We review your energy data</div>
              <div>✅ We match you with the right system</div>
              <div>✅ You receive a no-obligation custom quote</div>
              <div>✅ Ask any questions — zero pressure</div>
            </div>
            <a href="/" className="inline-block mt-8 text-hive-blue hover:underline">← Back to HiveGrid Energy</a>
          </div>
        </section>
      )}

      {/* QR section */}
      <section className="border-t border-white/10 px-4 sm:px-6 py-14">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-xl sm:text-2xl font-bold mb-2">Generate Your <span className="text-hive-blue">QR Code</span></h2>
          <p className="text-white/60 text-sm mb-6">Print it on flyers, business cards, or truck wraps. One scan takes people straight here.</p>

          <input
            type="text"
            value={qrUrl}
            onChange={e => setQrUrl(e.target.value)}
            className="w-full bg-hive-panel border border-white/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-hive-blue mb-5"
            placeholder="https://hivegridenergy.com/energy-calculator"
          />

          <div className="inline-block bg-white p-4 rounded-2xl mb-3">
            <img
              src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(qrUrl)}`}
              alt="QR Code"
              width={180}
              height={180}
              className="block"
            />
          </div>
          <p className="text-xs text-white/50">Right-click → Save Image to download</p>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-white/50">
        © 2026 HiveGrid Energy LLC
      </footer>
    </main>
  )
}
