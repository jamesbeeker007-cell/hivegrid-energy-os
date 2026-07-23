'use client'
import { useState, useEffect } from 'react'

// Approximate residential rates by state (cents converted to dollars)
const stateRates = {
  AL:0.14,AK:0.24,AZ:0.14,AR:0.12,CA:0.30,CO:0.15,CT:0.26,DE:0.15,FL:0.15,GA:0.14,
  HI:0.42,ID:0.11,IL:0.16,IN:0.15,IA:0.13,KS:0.14,KY:0.13,LA:0.12,ME:0.22,MD:0.16,
  MA:0.27,MI:0.19,MN:0.15,MS:0.13,MO:0.13,MT:0.13,NE:0.12,NV:0.13,NH:0.24,NJ:0.19,
  NM:0.14,NY:0.23,NC:0.14,ND:0.12,OH:0.15,OK:0.12,OR:0.13,PA:0.17,RI:0.26,SC:0.14,
  SD:0.13,TN:0.13,TX:0.15,UT:0.12,VT:0.22,VA:0.14,WA:0.12,WV:0.13,WI:0.17,WY:0.12
}

const stateNames = {
  AL:'Alabama',AK:'Alaska',AZ:'Arizona',AR:'Arkansas',CA:'California',CO:'Colorado',CT:'Connecticut',
  DE:'Delaware',FL:'Florida',GA:'Georgia',HI:'Hawaii',ID:'Idaho',IL:'Illinois',IN:'Indiana',IA:'Iowa',
  KS:'Kansas',KY:'Kentucky',LA:'Louisiana',ME:'Maine',MD:'Maryland',MA:'Massachusetts',MI:'Michigan',
  MN:'Minnesota',MS:'Mississippi',MO:'Missouri',MT:'Montana',NE:'Nebraska',NV:'Nevada',NH:'New Hampshire',
  NJ:'New Jersey',NM:'New Mexico',NY:'New York',NC:'North Carolina',ND:'North Dakota',OH:'Ohio',
  OK:'Oklahoma',OR:'Oregon',PA:'Pennsylvania',RI:'Rhode Island',SC:'South Carolina',SD:'South Dakota',
  TN:'Tennessee',TX:'Texas',UT:'Utah',VT:'Vermont',VA:'Virginia',WA:'Washington',WV:'West Virginia',
  WI:'Wisconsin',WY:'Wyoming'
}

function guessState(zip) {
  if (zip.startsWith('75') || zip.startsWith('76') || zip.startsWith('77') || zip.startsWith('78') || zip.startsWith('79')) return 'TX'
  if (zip.startsWith('87')) return 'NM'
  if (zip.startsWith('90') || zip.startsWith('91') || zip.startsWith('92') || zip.startsWith('93')) return 'CA'
  if (zip.startsWith('10') || zip.startsWith('11') || zip.startsWith('12')) return 'NY'
  if (zip.startsWith('60')) return 'IL'
  if (zip.startsWith('80') || zip.startsWith('81')) return 'CO'
  if (zip.startsWith('85')) return 'AZ'
  if (zip.startsWith('33')) return 'FL'
  if (zip.startsWith('30')) return 'GA'
  const first = zip[0]
  const map = { '0':'MA','1':'NY','2':'VA','3':'FL','4':'OH','5':'MN','6':'TX','7':'TX','8':'CO','9':'CA' }
  return map[first] || 'TX'
}

function fmt$(n) {
  return '$' + Math.round(n).toLocaleString()
}

export default function EnergyCalculatorPage() {
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

  // Auto-run when ZIP reaches 5 digits
  useEffect(() => {
    if (zip.length === 5 && /^\d{5}$/.test(zip)) {
      calcZip()
    }
  }, [zip])

  const calcZip = () => {
    if (zip.length !== 5 || !/^\d{5}$/.test(zip)) {
      alert('Please enter a valid 5-digit ZIP code.')
      return
    }
    setLoading(true)
    setTimeout(() => {
      const state = guessState(zip)
      const rate = stateRates[state] || 0.15
      const avgKwh = 900
      const monthlyBill = avgKwh * rate
      const annualBill = monthlyBill * 12
      const annualSave = annualBill * 0.22
      const lifetimeSave = annualSave * 10

      setResults({
        state,
        stateName: stateNames[state] || state,
        rate,
        monthlyBill,
        annualBill,
        annualSave,
        lifetimeSave
      })
      setForm(prev => ({ ...prev, formZip: zip }))
      setLoading(false)
    }, 700)
  }

  const handleRole = (role) => setSelectedRole(role)

  const handleSubmitLead = (e) => {
    e.preventDefault()
    if (!form.fname || !form.email) {
      alert('Please enter at least your first name and email.')
      return
    }
    // For now we just log the lead. Later you can connect this to Formspree, Zapier, or your CRM.
    console.log('LEAD CAPTURED:', { role: selectedRole, ...form, timestamp: new Date().toISOString() })
    setShowLead(false)
    setShowThanks(true)
  }

  const updateForm = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  return (
    <main className="min-h-screen bg-hive-base text-white">
      {/* Simple top bar */}
      <nav className="border-b border-white/10 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <img src="/images/logo-icon.svg" alt="HiveGrid" className="h-9 w-9" />
            <div>
              <div className="text-lg font-bold leading-none">HiveGrid</div>
              <div className="text-[10px] text-hive-cyan tracking-[2px]">ENERGY</div>
            </div>
          </a>
          <a href="/" className="text-sm text-white/70 hover:text-hive-cyan transition-colors">← Back to Home</a>
        </div>
      </nav>

      {/* Hero + Calculator */}
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-hive-cyan/10 border border-hive-cyan/30 text-hive-cyan px-4 py-1.5 rounded-full text-xs mb-6 font-medium tracking-wide">
            FREE INSTANT ANALYSIS
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-tight">
            How Much Is Your<br />
            <span className="text-hive-cyan">Energy Bill</span><br />
            Costing You?
          </h1>

          <p className="text-white/70 mb-10 text-lg">
            Enter your ZIP code and see what homeowners in your area typically pay — and how much a home battery system could save you.
          </p>

          {/* ZIP Box */}
          <div className="bg-hive-panel border border-hive-cyan/20 rounded-2xl p-6 md:p-8 text-left shadow-xl">
            <label className="block text-xs font-medium tracking-widest text-hive-cyan uppercase mb-3">
              📍 Enter Your ZIP Code
            </label>
            <div className="flex gap-3">
              <input
                type="text"
                inputMode="numeric"
                maxLength={5}
                value={zip}
                onChange={(e) => setZip(e.target.value.replace(/\D/g, '').slice(0, 5))}
                placeholder="00000"
                className="flex-1 bg-hive-base border border-white/15 rounded-xl px-4 py-3 text-center text-2xl font-bold tracking-widest focus:outline-none focus:border-hive-cyan"
              />
              <button
                onClick={calcZip}
                disabled={loading}
                className="bg-hive-cyan text-hive-base font-semibold px-6 rounded-xl hover:brightness-110 transition-all disabled:opacity-50"
              >
                {loading ? '…' : 'Calculate'}
              </button>
            </div>
            <p className="text-center text-xs text-white/40 mt-3">Instant results · No signup required · 100% free</p>

            {/* Results */}
            {results && (
              <div className="mt-8 animate-fadeIn">
                <div className="text-center text-sm text-hive-cyan mb-4">
                  📍 ZIP {zip} — {results.stateName} · Rate: ${results.rate.toFixed(3)}/kWh
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-hive-base border border-white/10 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-hive-amber">{fmt$(results.monthlyBill)}/mo</div>
                    <div className="text-[11px] text-white/50 uppercase tracking-wide mt-1">Avg Monthly Bill</div>
                  </div>
                  <div className="bg-hive-base border border-white/10 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-hive-cyan">${results.rate.toFixed(3)}</div>
                    <div className="text-[11px] text-white/50 uppercase tracking-wide mt-1">Cost Per kWh</div>
                  </div>
                  <div className="bg-hive-base border border-white/10 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-white">{fmt$(results.annualBill)}/yr</div>
                    <div className="text-[11px] text-white/50 uppercase tracking-wide mt-1">Annual Spend</div>
                  </div>
                  <div className="bg-hive-base border border-white/10 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-emerald-400">{fmt$(results.annualSave)}/yr</div>
                    <div className="text-[11px] text-white/50 uppercase tracking-wide mt-1">Est. Savings w/ Battery</div>
                  </div>
                </div>

                <div className="bg-hive-base border border-emerald-500/30 rounded-xl p-5 text-center mb-5">
                  <div className="text-2xl font-bold text-emerald-400">Up to {fmt$(results.lifetimeSave)} in 10-Year Savings</div>
                  <div className="text-xs text-white/60 mt-1">Estimated savings with a home battery backup system</div>
                </div>

                <button
                  onClick={() => setShowLead(true)}
                  className="w-full bg-hive-cyan text-hive-base font-bold py-4 rounded-xl hover:brightness-110 transition-all"
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
        <section className="px-6 pb-20">
          <div className="max-w-lg mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">Get Your <span className="text-hive-cyan">Free</span> Quote</h2>
            <p className="text-center text-white/60 mb-8">Tell us a little about yourself and we’ll send a personalized battery backup proposal — no obligation.</p>

            <form onSubmit={handleSubmitLead} className="bg-hive-panel border border-white/10 rounded-2xl p-6 md:p-8 space-y-4">
              <div>
                <div className="text-xs font-medium tracking-widest text-hive-cyan uppercase mb-2">I am a…</div>
                <div className="grid grid-cols-3 gap-2">
                  {['Homeowner', 'Renter', 'Electrician', 'Installer', 'Business', 'Just Looking'].map(role => (
                    <button
                      key={role}
                      type="button"
                      onClick={() => handleRole(role)}
                      className={`text-xs py-2.5 rounded-lg border transition-all ${
                        selectedRole === role
                          ? 'bg-hive-cyan/20 border-hive-cyan text-hive-cyan'
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
                  <label className="text-xs text-hive-cyan uppercase tracking-wide">First Name</label>
                  <input type="text" value={form.fname} onChange={e => updateForm('fname', e.target.value)}
                    className="w-full mt-1 bg-hive-base border border-white/15 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-hive-cyan" placeholder="John" />
                </div>
                <div>
                  <label className="text-xs text-hive-cyan uppercase tracking-wide">Last Name</label>
                  <input type="text" value={form.lname} onChange={e => updateForm('lname', e.target.value)}
                    className="w-full mt-1 bg-hive-base border border-white/15 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-hive-cyan" placeholder="Smith" />
                </div>
              </div>

              <div>
                <label className="text-xs text-hive-cyan uppercase tracking-wide">Email</label>
                <input type="email" value={form.email} onChange={e => updateForm('email', e.target.value)}
                  className="w-full mt-1 bg-hive-base border border-white/15 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-hive-cyan" placeholder="john@email.com" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-hive-cyan uppercase tracking-wide">Phone</label>
                  <input type="tel" value={form.phone} onChange={e => updateForm('phone', e.target.value)}
                    className="w-full mt-1 bg-hive-base border border-white/15 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-hive-cyan" placeholder="(555) 000-0000" />
                </div>
                <div>
                  <label className="text-xs text-hive-cyan uppercase tracking-wide">ZIP</label>
                  <input type="text" value={form.formZip} onChange={e => updateForm('formZip', e.target.value)}
                    className="w-full mt-1 bg-hive-base border border-white/15 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-hive-cyan" maxLength={5} />
                </div>
              </div>

              <div>
                <label className="text-xs text-hive-cyan uppercase tracking-wide">Street Address</label>
                <input type="text" value={form.address} onChange={e => updateForm('address', e.target.value)}
                  className="w-full mt-1 bg-hive-base border border-white/15 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-hive-cyan" placeholder="123 Main Street" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-hive-cyan uppercase tracking-wide">City</label>
                  <input type="text" value={form.city} onChange={e => updateForm('city', e.target.value)}
                    className="w-full mt-1 bg-hive-base border border-white/15 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-hive-cyan" />
                </div>
                <div>
                  <label className="text-xs text-hive-cyan uppercase tracking-wide">State</label>
                  <select value={form.state} onChange={e => updateForm('state', e.target.value)}
                    className="w-full mt-1 bg-hive-base border border-white/15 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-hive-cyan">
                    <option value="">Select…</option>
                    {Object.keys(stateNames).map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs text-hive-cyan uppercase tracking-wide">Average Monthly Energy Bill</label>
                <select value={form.billRange} onChange={e => updateForm('billRange', e.target.value)}
                  className="w-full mt-1 bg-hive-base border border-white/15 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-hive-cyan">
                  <option value="">Select range…</option>
                  <option>Under $75</option>
                  <option>$75 – $125</option>
                  <option>$125 – $200</option>
                  <option>$200 – $300</option>
                  <option>$300 – $500</option>
                  <option>Over $500</option>
                </select>
              </div>

              <button type="submit" className="w-full bg-hive-amber text-hive-base font-bold py-4 rounded-xl hover:brightness-110 transition-all mt-2">
                ⚡ Get My Free Battery Quote →
              </button>
              <p className="text-center text-xs text-white/40">🔒 Your info is private and will never be sold.</p>
            </form>
          </div>
        </section>
      )}

      {/* Thank You */}
      {showThanks && (
        <section className="px-6 py-20 text-center">
          <div className="max-w-md mx-auto">
            <div className="text-5xl mb-4">⚡</div>
            <h2 className="text-3xl font-bold text-emerald-400 mb-3">You’re In!</h2>
            <p className="text-white/70 mb-8">Thanks — a specialist will reach out within 24 hours with your personalized battery backup proposal.</p>
            <div className="bg-hive-panel border border-emerald-500/20 rounded-2xl p-6 text-left text-sm text-white/80 space-y-2">
              <div><strong className="text-emerald-400">What happens next:</strong></div>
              <div>✅ We review your energy data</div>
              <div>✅ We match you with the right system</div>
              <div>✅ You receive a no-obligation custom quote</div>
              <div>✅ Ask any questions — zero pressure</div>
            </div>
            <a href="/" className="inline-block mt-8 text-hive-cyan hover:underline">← Back to HiveGrid Energy</a>
          </div>
        </section>
      )}

      {/* QR / Flyer section */}
      <section className="border-t border-white/10 px-6 py-16">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Generate Your <span className="text-hive-cyan">QR Code</span></h2>
          <p className="text-white/60 text-sm mb-8">Print it on flyers, business cards, truck wraps — anywhere. One scan takes people straight to this calculator.</p>

          <div className="flex gap-3 mb-6">
            <input
              type="text"
              value={qrUrl}
              onChange={e => setQrUrl(e.target.value)}
              className="flex-1 bg-hive-panel border border-white/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-hive-cyan"
              placeholder="https://hivegridenergy.com/energy-calculator"
            />
          </div>

          <div className="inline-block bg-white p-4 rounded-2xl mb-4">
            <img
              src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(qrUrl)}`}
              alt="QR Code"
              width={200}
              height={200}
              className="block"
            />
          </div>

          <p className="text-xs text-white/50 mb-6">Right-click the QR code → Save Image to download</p>

          {/* Simple flyer preview */}
          <div className="bg-hive-panel border border-hive-cyan/20 rounded-2xl p-8 text-center">
            <div className="text-xs tracking-widest text-hive-cyan uppercase mb-2">Scan to find out</div>
            <div className="text-2xl font-bold leading-tight mb-3">
              HOW MUCH IS YOUR<br /><span className="text-hive-cyan">ENERGY BILL</span><br />COSTING YOU?
            </div>
            <p className="text-sm text-white/60 mb-5">Enter your ZIP for an instant free analysis.</p>
            <div className="inline-block bg-white p-3 rounded-xl mb-3">
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=${encodeURIComponent(qrUrl)}`}
                alt="Flyer QR"
                width={140}
                height={140}
              />
            </div>
            <div className="text-xs text-white/50">📱 Scan with your phone camera</div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-white/50">
        © 2026 HiveGrid Energy LLC
      </footer>
    </main>
  )
}
