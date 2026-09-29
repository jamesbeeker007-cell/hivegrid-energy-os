export default function EnergyCalculatorPage() {
  return (
    <main className="min-h-screen bg-hive-base text-white flex items-center justify-center px-6">
      <section className="w-full max-w-2xl text-center hive-card border border-white/10 rounded-3xl p-8 md:p-12">
        <img src="/images/logo-icon.svg" alt="HiveGrid Energy" className="h-16 w-16 mx-auto mb-6" />
        <div className="text-xs tracking-[0.18em] uppercase text-hive-cyan mb-4">Archived concept</div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-5">This calculator is not a current HiveGrid service.</h1>
        <p className="text-white/70 leading-relaxed mb-4">
          This route is retained only as a placeholder for a possible future concept. HiveGrid Energy currently focuses on residential battery installation operations.
        </p>
        <p className="text-white/70 leading-relaxed mb-8">
          HiveGrid does not currently sell batteries, provide consumer battery-savings estimates, or operate a VPP.
        </p>
        <a href="/" className="inline-flex bg-hive-cyan text-hive-indigo hover:brightness-110 font-semibold px-7 py-3.5 rounded-2xl">
          Return to HiveGrid Energy
        </a>
      </section>
    </main>
  )
}
