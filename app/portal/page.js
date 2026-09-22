'use client'
import { useState, useEffect } from 'react'

const PORTAL_KEY = 'hivegrid-os-portal-unlock'
const DEMO_CODE = 'demo'
const WORK_CODE = 'hivegrid-internal'

const SAMPLE_JOBS = [
  {
    id: 101,
    address: '100 Example Street, Fort Worth, TX',
    homeowner: 'Sample Home 01',
    phone: '—',
    city: 'Fort Worth',
    county: 'Tarrant',
    batteryType: 'Partner battery',
    status: 'Permit',
    assignedTo: 'Sample Crew',
    notes: 'Sample record. Not a live job.',
    createdAt: '2026-09-01',
  },
  {
    id: 102,
    address: '200 Example Street, Fort Worth, TX',
    homeowner: 'Sample Home 02',
    phone: '—',
    city: 'Fort Worth',
    county: 'Tarrant',
    batteryType: 'Partner battery',
    status: 'Install',
    assignedTo: 'Sample Crew',
    notes: 'Sample record. Refresh resets this screen.',
    createdAt: '2026-09-08',
  },
]

const STATUSES = ['Contract', 'Site', 'Engineer', 'Permit', 'Install', 'Closeout', 'On Hold']

export default function HiveGridOSPortal() {
  const [unlocked, setUnlocked] = useState(false)
  const [mode, setMode] = useState('demo')
  const [pass, setPass] = useState('')
  const [error, setError] = useState('')
  const [role, setRole] = useState('admin')
  const [jobs, setJobs] = useState(SAMPLE_JOBS)
  const [newJob, setNewJob] = useState({
    address: '',
    homeowner: '',
    phone: '',
    city: '',
    county: '',
    batteryType: 'Partner battery',
    assignedTo: '',
  })

  const myJobs = jobs.filter((job) => job.assignedTo === 'Sample Crew')

  useEffect(() => {
    if (typeof window === 'undefined') return
    const saved = sessionStorage.getItem(PORTAL_KEY)
    if (saved === 'demo' || saved === 'work') {
      setMode(saved)
      setUnlocked(true)
    }
  }, [])

  const handleUnlock = (e) => {
    e.preventDefault()
    const code = pass.trim().toLowerCase()
    if (code === DEMO_CODE) {
      sessionStorage.setItem(PORTAL_KEY, 'demo')
      setMode('demo')
      setUnlocked(true)
      setError('')
      return
    }
    if (code === WORK_CODE) {
      sessionStorage.setItem(PORTAL_KEY, 'work')
      setMode('work')
      setUnlocked(true)
      setError('')
      return
    }
    setError('Access denied.')
  }

  const handleCreateJob = (e) => {
    e.preventDefault()
    if (!newJob.address || !newJob.homeowner) return
    const job = {
      id: Date.now(),
      ...newJob,
      status: 'Contract',
      notes: 'Sample only. Not saved.',
      createdAt: new Date().toISOString().split('T')[0],
    }
    setJobs([job, ...jobs])
    setNewJob({
      address: '',
      homeowner: '',
      phone: '',
      city: '',
      county: '',
      batteryType: 'Partner battery',
      assignedTo: '',
    })
  }

  const updateJob = (id, field, value) => {
    setJobs(jobs.map((job) => (job.id === id ? { ...job, [field]: value } : job)))
  }

  const resetSamples = () => setJobs(SAMPLE_JOBS)

  const lock = () => {
    sessionStorage.removeItem(PORTAL_KEY)
    setUnlocked(false)
    setPass('')
    setJobs(SAMPLE_JOBS)
  }

  if (!unlocked) {
    return (
      <div className="min-h-screen bg-hive-base text-white flex items-center justify-center px-6">
        <form onSubmit={handleUnlock} className="w-full max-w-md bg-hive-panel border border-white/10 rounded-3xl p-8">
          <h1 className="text-2xl font-bold tracking-tight mb-1">HiveGrid OS</h1>
          <p className="text-sm text-white/60 mb-6">Access code required. This is not a public tool.</p>
          <input
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder="Access code"
            className="w-full bg-hive-base border border-white/20 rounded-2xl px-5 py-3.5 mb-4 focus:outline-none focus:border-hive-cyan text-white"
          />
          {error && <p className="text-sm text-hive-copper mb-4">{error}</p>}
          <button type="submit" className="w-full bg-hive-blue hover:brightness-110 text-white font-semibold py-3.5 rounded-2xl">
            Enter
          </button>
          <a href="/" className="block text-center text-sm text-white/40 mt-6 hover:text-white/70">
            Back to HiveGrid Energy
          </a>
        </form>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-hive-base text-white">
      <div className="bg-hive-copper text-white text-center text-xs sm:text-sm py-2 px-4">
        Phase One demonstration. Sample jobs only. Nothing entered here is saved. Protected login comes when live work starts.
      </div>
      <div className="border-b border-white/10 bg-hive-base/95 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tighter">HiveGrid OS</h1>
            <p className="text-hive-cyan text-xs tracking-[1px] mt-1">
              {mode === 'work' ? 'WORKING VIEW · STILL A SANDBOX' : 'DEMONSTRATION · SAMPLE ONLY'}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-1 bg-hive-panel rounded-xl p-1">
              <button onClick={() => setRole('admin')} className={`px-4 py-2 rounded-lg text-sm font-medium ${role === 'admin' ? 'bg-hive-blue text-white' : 'hover:bg-white/10'}`}>
                Admin
              </button>
              <button onClick={() => setRole('electrician')} className={`px-4 py-2 rounded-lg text-sm font-medium ${role === 'electrician' ? 'bg-hive-blue text-white' : 'hover:bg-white/10'}`}>
                Crew
              </button>
            </div>
            <button onClick={resetSamples} className="text-xs text-white/50 hover:text-white px-3 py-2">
              Reset samples
            </button>
            <button onClick={lock} className="text-xs text-white/50 hover:text-white px-3 py-2">
              Lock
            </button>
            <a href="/" className="text-sm text-white/50 hover:text-white px-2">
              Home
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 py-8">
        {role === 'admin' && (
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-semibold tracking-tight">Job board</h2>
              <p className="text-white/70 mt-1">Partner contract through city or county closeout. Sample records only.</p>
            </div>
            <div className="bg-hive-panel rounded-3xl p-8 mb-10">
              <h3 className="text-xl font-semibold mb-6">Add a sample job</h3>
              <form onSubmit={handleCreateJob} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Property address *" value={newJob.address} onChange={(e) => setNewJob({ ...newJob, address: e.target.value })} className="bg-hive-base border border-white/20 rounded-2xl px-5 py-3.5 text-sm" required />
                <input type="text" placeholder="Homeowner (sample) *" value={newJob.homeowner} onChange={(e) => setNewJob({ ...newJob, homeowner: e.target.value })} className="bg-hive-base border border-white/20 rounded-2xl px-5 py-3.5 text-sm" required />
                <input type="text" placeholder="City" value={newJob.city} onChange={(e) => setNewJob({ ...newJob, city: e.target.value })} className="bg-hive-base border border-white/20 rounded-2xl px-5 py-3.5 text-sm" />
                <input type="text" placeholder="County" value={newJob.county} onChange={(e) => setNewJob({ ...newJob, county: e.target.value })} className="bg-hive-base border border-white/20 rounded-2xl px-5 py-3.5 text-sm" />
                <select value={newJob.batteryType} onChange={(e) => setNewJob({ ...newJob, batteryType: e.target.value })} className="bg-hive-base border border-white/20 rounded-2xl px-5 py-3.5 text-sm">
                  <option value="Partner battery">Partner battery</option>
                  <option value="Partner battery B">Partner battery B</option>
                </select>
                <input type="text" placeholder="Assign to crew (optional)" value={newJob.assignedTo} onChange={(e) => setNewJob({ ...newJob, assignedTo: e.target.value })} className="bg-hive-base border border-white/20 rounded-2xl px-5 py-3.5 text-sm" />
                <button type="submit" className="md:col-span-2 mt-2 bg-hive-blue hover:brightness-110 text-white font-semibold py-4 rounded-2xl">
                  Add sample job
                </button>
              </form>
            </div>
            <h3 className="text-xl font-semibold mb-4">Jobs ({jobs.length})</h3>
            <div className="space-y-4">
              {jobs.map((job) => (
                <div key={job.id} className="bg-hive-panel rounded-3xl p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="font-semibold text-lg">{job.address}</div>
                      <div className="text-white/70 mt-1">{job.homeowner}</div>
                      <div className="text-sm text-white/60 mt-1">{job.city} {job.county ? `· ${job.county}` : ''} · {job.batteryType}</div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <select value={job.status} onChange={(e) => updateJob(job.id, 'status', e.target.value)} className="bg-hive-base border border-white/20 rounded-xl px-4 py-1.5 text-sm">
                        {STATUSES.map((s) => (
                          <option key={s}>{s}</option>
                        ))}
                      </select>
                      <div className="text-xs text-white/50">Crew: {job.assignedTo || 'Unassigned'}</div>
                    </div>
                  </div>
                  <textarea value={job.notes} onChange={(e) => updateJob(job.id, 'notes', e.target.value)} placeholder="Notes (not saved)" className="w-full mt-4 bg-hive-base border border-white/20 rounded-2xl p-4 text-sm" rows={2} />
                </div>
              ))}
            </div>
          </div>
        )}
        {role === 'electrician' && (
          <div>
            <h2 className="text-3xl font-semibold tracking-tight mb-2">Crew view</h2>
            <p className="text-white/70 mb-6">Assigned sample jobs: {myJobs.length}. Refresh resets this screen.</p>
            <div className="space-y-4">
              {myJobs.map((job) => (
                <div key={job.id} className="bg-hive-panel rounded-3xl p-6">
                  <div className="font-semibold text-xl">{job.address}</div>
                  <div className="text-white/70 mt-1">{job.homeowner}</div>
                  <div className="text-sm text-white/60 mt-1 mb-4">{job.city} · {job.batteryType}</div>
                  <select value={job.status} onChange={(e) => updateJob(job.id, 'status', e.target.value)} className="bg-hive-base border border-white/20 rounded-xl px-4 py-2 text-sm mb-4">
                    {STATUSES.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                  <textarea value={job.notes} onChange={(e) => updateJob(job.id, 'notes', e.target.value)} placeholder="Notes (not saved)" className="w-full bg-hive-base border border-white/20 rounded-2xl p-4 text-sm" rows={3} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
