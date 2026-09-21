import './globals.css'

export const metadata = {
  title: 'HiveGrid Energy',
  description:
    'One crew. One home. One standard. HiveGrid Energy, LLC manages residential battery-storage installations from partner handoff through final inspection and project closeout.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-hive-indigo text-white antialiased font-space-grotesk">
        {children}
      </body>
    </html>
  )
}
