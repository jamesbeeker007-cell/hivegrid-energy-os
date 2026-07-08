'use client'
import { useState } from 'react'

export default function HiveGridOSPortal() {
  const [role, setRole] = useState('admin') // 'admin' or 'electrician'

  // Preloaded demo jobs
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
      notes: "Permit approved on 6/25. Ready to schedule installation.",
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
      notes: "Installation started this morning. Main panel upgrade needed.",
      createdAt: "2026-06-29"
    },
    {
      id: 103,
      address: "5632 Cypress Creek Blvd, Houston, TX 77001",
      homeowner: "Linda Chen",
      phone: "(713) 555-0287",
      city: "Houston",
      county: "Harris",
      batteryType: "Tesla",
      status: "New / Unassigned",
      assignedTo: "",
      notes: "New lead from partner. Need to confirm availability.",
      createdAt: "2026-06-30"
    },
    {
      id: 104,
      address: "215 Willow Bend Court, Austin, TX 78701",
      homeowner: "David Patel",
      phone: "(512) 555-0419",
      city: "Austin",
      county: "Travis",
      batteryType: "FranklinWH",
      status: "Completed",
      assignedTo: "Carlos Ramirez",
      notes: "Installation complete. Final inspection scheduled for 7/3.",
      createdAt: "2026-06-25"
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

  // Filter jobs for the electrician
  const myJobs = jobs.filter(job => job.assignedTo === electricianName)

  // Admin: Create new job
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

  // Update any field on a job
  const updateJob = (id, field, value) => {
    setJobs(jobs.map(job =>
      job.id === id ? { ...job, [field]: value } : job
    ))
  }

  return (
    <div className="min-h-screen bg-[#0A0F1C] text-white">
      {/* Header */}
      <div className="border-b border-white/10 bg-[#0A0F1C]/95 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tighter">HiveGrid OS Portal</h1>
            <p className="text-hive-cyan text-xs tracking-[1px]">PHASE 1 PROTOTYPE • FOR DEVELOPMENT & TRAINING</p>
          </div>

          {/* Role Switcher */}
          <div className="flex items-center gap-1 bg-[#121A2E] rounded-xl p-1">
            <button
              onClick={() => setRole('admin')}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${role === 'admin' ? 'bg-hive-cyan text-[#0A0F1C]' : 'hover:bg-white/10'}`}
            >
              Admin
            </button>
            <button
              onClick={() => setRole('electrician')}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${role === 'electrician' ? 'bg-hive-cyan text-[#0A0F1C]' : 'hover:bg-white/10'}`}
            >
              Electrician
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">

        {/* ==================== ADMIN VIEW ==================== */}
        {role === 'admin' && (
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-semibold tracking-tight">Admin Dashboard</h2>
              <p className="text-white/70 mt-1">Create and manage all installation jobs</p>
            </div>

            {/* Create New Job Form */}
            <div className="bg-[#121A2E] rounded-3xl p-8 mb-10">
              <h3 className="text-xl font-semibold mb-6">Create New Job</h3>
              <form onSubmit={handleCreateJob} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Property Address *"
                  value={newJob.address}
                  onChange={(e) => setNewJob({ ...newJob, address: e.target.value })}
                  className="bg-[#0A0F1C] border border-white/20 rounded-2xl px-5 py-3.5 text-sm"
                  required
                />
                <input
                  type="text"
                  placeholder="Homeowner Name *"
                  value={newJob.homeowner}
                  onChange={(e) => setNewJob({ ...newJob, homeowner: e.target.value })}
                  className="bg-[#0A0F1C] border border-white/20 rounded-2xl px-5 py-3.5 text-sm"
                  required
                />
                <input
                  type="tel"
                  placeholder="Homeowner Phone"
                  value={newJob.phone}
                  onChange={(e) => setNewJob({ ...newJob, phone: e.target.value })}
                  className="bg-[#0A0F1C] border border-white/20 rounded-2xl px-5 py-3.5 text-sm"
                />
                <input
                  type="text"
                  placeholder="City"
                  value={newJob.city}
                  onChange={(e) => setNewJob({ ...newJob, city: e.target.value })}
                  className="bg-[#0A0F1C] border border-white/20 rounded-2xl px-5 py-3.5 text-sm"
                />
                <input
                  type="text"
                  placeholder="County"
                  value={newJob.county}
                  onChange={(e) => setNewJob({ ...newJob, county: e.target.value })}
                  className="bg-[#0A0F1C] border border-white/20 rounded-2xl px-5 py-3.5 text-sm"
                />
                <select
                  value={newJob.batteryType}
                  onChange={(e) => setNewJob({ ...newJob, batteryType: e.target.value })}
                  className="bg-[#0A0F1C] border border-white/20 rounded-2xl px-5 py-3.5 text-sm"
                >
                  <option value="FranklinWH">FranklinWH</option>
                  <option value="Duracell">Duracell</option>
                  <option value="Tesla">Tesla Powerwall</option>
                  <option value="Base Power">Base Power</option>
                </select>
                <input
                  type="text"
                  placeholder="Assign to Electrician (optional)"
                  value={newJob.assignedTo}
                  onChange={(e) => setNewJob({ ...newJob, assignedTo: e.target.value })}
                  className="bg-[#0A0F1C] border border-white/20 rounded-2xl px-5 py-3.5 text-sm md:col-span-2"
                />
                <button
                  type="submit"
                  className="md:col-span-2 mt-2 bg-gradient-to-r from-hive-cyan to-hive-teal hover:brightness-110 text-[#0A0F1C] font-semibold py-4 rounded-2xl transition-all"
                >
                  Create Job
                </button>
              </form>
            </div>

            {/* All Jobs List */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">All Jobs ({jobs.length})</h3>
              </div>

              <div className="space-y-4">
                {jobs.map(job => (
                  <div key={job.id} className="bg-[#121A2E] rounded-3xl p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <div className="font-semibold text-lg">{job.address}</div>
                        <div className="text-white/70 mt-1">{job.homeowner} • {job.phone}</div>
                        <div className="text-sm text-white/60 mt-1">{job.city}, {job.county} • {job.batteryType}</div>
                      </div>

                      <div className="flex flex-col items-end gap-2">
                        <select
                          value={job.status}
                          onChange={(e) => updateJob(job.id, 'status', e.target.value)}
                          className="bg-[#0A0F1C] border border-white/20 rounded-xl px-4 py-1.5 text-sm"
                        >
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

                    <textarea
                      value={job.notes}
                      onChange={(e) => updateJob(job.id, 'notes', e.target.value)}
                      placeholder="Add notes or updates..."
                      className="w-full mt-4 bg-[#0A0F1C] border border-white/20 rounded-2xl p-4 text-sm"
                      rows={2}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ==================== ELECTRICIAN VIEW ==================== */}
        {role === 'electrician' && (
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-semibold tracking-tight">Welcome back, {electricianName}</h2>
              <p className="text-white/70 mt-1">You have {myJobs.length} assigned jobs</p>
            </div>

            {myJobs.length > 0 ? (
              <div className="space-y-4">
                {myJobs.map(job => (
                  <div key={job.id} className="bg-[#121A2E] rounded-3xl p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div>
                        <div className="font-semibold text-xl">{job.address}</div>
                        <div className="text-white/70 mt-1">{job.homeowner} • {job.phone}</div>
                        <div className="text-sm text-white/60 mt-1">{job.city} • {job.batteryType}</div>
                      </div>

                      <div>
                        <select
                          value={job.status}
                          onChange={(e) => updateJob(job.id, 'status', e.target.value)}
                          className="bg-[#0A0F1C] border border-white/20 rounded-xl px-4 py-2 text-sm"
                        >
                          <option>New / Unassigned</option>
                          <option>Assigned</option>
                          <option>In Progress</option>
                          <option>Completed</option>
                          <option>Pending Verification</option>
                          <option>On Hold</option>
                        </select>
                      </div>
                    </div>

                    <textarea
                      value={job.notes}
                      onChange={(e) => updateJob(job.id, 'notes', e.target.value)}
                      placeholder="Add notes or updates for the back office..."
                      className="w-full bg-[#0A0F1C] border border-white/20 rounded-2xl p-4 text-sm"
                      rows={3}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 text-white/60">
                You currently have no jobs assigned.
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  )
}
