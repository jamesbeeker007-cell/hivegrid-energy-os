'use client'
import { useState, useEffect } from 'react'

const PORTAL_KEY = 'hivegrid-os-portal-unlock'
const PORTAL_PASS = 'hivegrid-internal'

export default function HiveGridOSPortal() {
  const [unlocked, setUnlocked] = useState(false)
  const [pass, setPass] = useState('')
  const [error, setError] = useState('')
  const [role, setRole] = useState('admin')

  const [jobs, setJobs] = useState([
    {
      id: 101,
      address: "1247 Maple Ridge Drive, Fort Worth, TX 76107",
      homeowner: "Maria Gonzalez",
      phone: "(817) 555-0192",
      city: "Fort Worth",
      county: "Tarrant",
      batteryType: "FranklinWH",
      status: "Assigned",
      assignedTo: "Carlos Ramirez",
      notes: "Permit approved. Ready to schedule installation.",
      createdAt: "2026-06-28"
    },
    {
      id: 102,
      address: "892 Oak Hollow Lane, Denton, TX 76201",
      homeowner: "Robert Thompson",
      phone: "(940) 555-0341",
      city: "Denton",
      county: "Denton",
      batteryType: "Duracell",
      status: "In Progress",
      assignedTo: "Carlos Ramirez",
      notes: "Installation started this morning.",
      createdAt: "2026-06-29"
    }
  ])

  const [newJob, setNewJob] = useState({
    address: "",
    homeowner: "",
    phone: "",
    city: "",
    county: "",
    batteryType: "FranklinWH",
    assignedTo: ""
  })

  const electricianName = "Carlos Ramirez"
  const myJobs = jobs.filter(job => job.assignedTo === electricianName)

  useEffect(() => {
    if (typeof window !== 'undefined' && sessionStorage.getItem(PORTAL_KEY) === '1') {
      setUnlocked(true)
    }
  }, [])

  const handleUnlock = (e) => {
    e.preventDefault()
    if (pass === PORTAL_PASS) {
      sessionStorage.setItem(PORTAL_KEY, '1')
      setUnlocked(true)
      setError('')
    } else {
      setError('Access denied.')
    }
  }

  const handleCreateJob = (e) => {
    e.preventDefault()
    if (!newJob.address || !newJob.homeowner) return
    const job = {
      id: Date.now(),
      ...newJob,
      status: "New / Unassigned",
      notes: "",
      createdAt: new Date().toISOString().split('T')[0]
    }
    setJobs([job, ...jobs])
    setNewJob({
      address: "",
      homeowner: "",
      phone: "",
      city: "",
      county: "",
      batteryType: "FranklinWH",
      assignedTo: ""
    })
  }

  const updateJob = (id, field, value) => {
    setJobs(jobs.map(job => job.id === id ? { ...job, [field]: value } : job))
  }

  if (!unlocked) {
    return (
      <div className="min-h-screen bg-hive-base text-white flex items-center justify-center px-6">
        <form onSubmit={handleUnlock} className="w-full max-w-md bg-hive-panel border border-white/10 rounded-3xl p-8">
          <h1 className="text-2xl font-bold tracking-tight mb-1">HiveGrid OS</h1>
          <p className="text-sm text-white/60 mb-6">Internal access only. This portal is not public.</p>
          <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} placeholder="Access code" className="w-full bg-hive-base border border-white/20 rounded-2xl px-5 py-3.5 mb-4 focus:outline-none focus:border-hive-blue" />
          {error && <p className="text-sm text-red-400 mb-4">{error}</p>}
          <button type="submit" className="w-full bg-hive-blue hover:brightness-110 text-white font-semibold py-3.5 rounded-2xl">Enter</button>
          <a href="/" className="block text-center text-sm text-white/40 mt-6 hover:text-white/70">Back to HiveGrid Energy</a>
        </form>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-hive-base text-white">
      <div className="border-b border-white/10 bg-hive-base/95 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tighter">HiveGrid OS Portal</h1>
            <p className="text-hive-blue text-xs tracking-[1px]">INTERNAL • PHASE 1 PROTOTYPE</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 bg-hive-panel rounded-xl p-1">
              <button onClick={() => setRole('admin')} className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${role === 'admin' ? 'bg-hive-blue text-white' : 'hover:bg-white/10'}`}>Admin</button>
              <button onClick={() => setRole('electrician')} className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${role === 'electrician' ? 'bg-hive-blue text-white' : 'hover:bg-white/10'}`}>Electrician</button>
            </div>
            <a href="/" className="text-sm text-white/50 hover:text-white">Home</a>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 py-8">
        {role === 'admin' && (
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-semibold tracking-tight">Admin Dashboard</h2>
              <p className="text-white/70 mt-1">Create and manage installation jobs</p>
            </div>
            <div className="bg-hive-panel rounded-3xl p-8 mb-10">
              <h3 className="text-xl font-semibold mb-6">Create New Job</h3>
              <form onSubmit={handleCreateJob} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Property Address *" value={newJob.address} onChange={(e) => setNewJob({ ...newJob, address: e.target.value })} className="bg-hive-base border border-white/20 rounded-2xl px-5 py-3.5 text-sm" required />
                <input type="text" placeholder="Homeowner Name *" value={newJob.homeowner} onChange={(e) => setNewJob({ ...newJob, homeowner: e.target.value })} className="bg-hive-base border border-white/20 rounded-2xl px-5 py-3.5 text-sm" required />
                <input type="tel" placeholder="Homeowner Phone" value={newJob.phone} onChange={(e) => setNewJob({ ...newJob, phone: e.target.value })} className="bg-hive-base border border-white/20 rounded-2xl px-5 py-3.5 text-sm" />
                <input type="text" placeholder="City" value={newJob.city} onChange={(e) => setNewJob({ ...newJob, city: e.target.value })} className="bg-hive-base border border-white/20 rounded-2xl px-5 py-3.5 text-sm" />
                <input type="text" placeholder="County" value={newJob.county} onChange={(e) => setNewJob({ ...newJob, county: e.target.value })} className="bg-hive-base border border-white/20 rounded-2xl px-5 py-3.5 text-sm" />
                <select value={newJob.batteryType} onChange={(e) => setNewJob({ ...newJob, batteryType: e.target.value })} className="bg-hive-base border border-white/20 rounded-2xl px-5 py-3.5 text-sm">
                  <option value="FranklinWH">FranklinWH</option>
                  <option value="Duracell">Duracell</option>
                  <option value="Tesla">Tesla Powerwall</option>
                  <option value="Base Power">Base Power</option>
                </select>
                <input type="text" placeholder="Assign to Electrician (optional)" value={newJob.assignedTo} onChange={(e) => setNewJob({ ...newJob, assignedTo: e.target.value })} className="bg-hive-base border border-white/20 rounded-2xl px-5 py-3.5 text-sm md:col-span-2" />
                <button type="submit" className="md:col-span-2 mt-2 bg-hive-blue hover:brightness-110 text-white font-semibold py-4 rounded-2xl transition-all">Create Job</button>
              </form>
            </div>
            <h3 className="text-xl font-semibold mb-4">All Jobs ({jobs.length})</h3>
            <div className="space-y-4">
              {jobs.map(job => (
                <div key={job.id} className="bg-hive-panel rounded-3xl p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="font-semibold text-lg">{job.address}</div>
                      <div className="text-white/70 mt-1">{job.homeowner} • {job.phone}</div>
                      <div className="text-sm text-white/60 mt-1">{job.city}, {job.county} • {job.batteryType}</div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <select value={job.status} onChange={(e) => updateJob(job.id, 'status', e.target.value)} className="bg-hive-base border border-white/20 rounded-xl px-4 py-1.5 text-sm">
                        <option>New / Unassigned</option>
                        <option>Assigned</option>
                        <option>In Progress</option>
                        <option>Completed</option>
                        <option>Pending Verification</option>
                        <option>On Hold</option>
                      </select>
                      <div className="text-xs text-white/50">Assigned to: {job.assignedTo || "Unassigned"}</div>
                    </div>
                  </div>
                  <textarea value={job.notes} onChange={(e) => updateJob(job.id, 'notes', e.target.value)} placeholder="Add notes..." className="w-full mt-4 bg-hive-base border border-white/20 rounded-2xl p-4 text-sm" rows={2} />
                </div>
              ))}
            </div>
          </div>
        )}
        {role === 'electrician' && (
          <div>
            <h2 className="text-3xl font-semibold tracking-tight mb-2">Welcome back, {electricianName}</h2>
            <p className="text-white/70 mb-6">You have {myJobs.length} assigned jobs</p>
            <div className="space-y-4">
              {myJobs.map(job => (
                <div key={job.id} className="bg-hive-panel rounded-3xl p-6">
                  <div className="font-semibold text-xl">{job.address}</div>
                  <div className="text-white/70 mt-1">{job.homeowner} • {job.phone}</div>
                  <div className="text-sm text-white/60 mt-1 mb-4">{job.city} • {job.batteryType}</div>
                  <select value={job.status} onChange={(e) => updateJob(job.id, 'status', e.target.value)} className="bg-hive-base border border-white/20 rounded-xl px-4 py-2 text-sm mb-4">
                    <option>Assigned</option>
                    <option>In Progress</option>
                    <option>Completed</option>
                    <option>Pending Verification</option>
                    <option>On Hold</option>
                  </select>
                  <textarea value={job.notes} onChange={(e) => updateJob(job.id, 'notes', e.target.value)} placeholder="Add notes..." className="w-full bg-hive-base border border-white/20 rounded-2xl p-4 text-sm" rows={3} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
