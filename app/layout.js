import './globals.css'

export const metadata = {
  title: 'HiveGrid Energy',
  description: 'Every Home a Power Plant — Residential battery storage & distributed energy for Texas',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen bg-hive-base text-white antialiased font-space-grotesk">
        {children}
      </body>
    </html>
  )
}
