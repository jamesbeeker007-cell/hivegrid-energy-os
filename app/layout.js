import './globals.css'
export const metadata = {
  title: 'HiveGrid Energy OS',
  description: 'Distributed VPP Platform - Every Home a Power Plant',
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-hive-base text-hive-slate antialiased">
        {children}
      </body>
    </html>
  )
}
