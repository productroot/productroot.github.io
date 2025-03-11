import type { Metadata } from 'next'
import './globals.css'
import { Inter, Poppins } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'ProductRoot | Zarządzanie produktem w AI i oprogramowaniu',
  description: 'Firma specjalizująca się w zarządzaniu produktem w obszarach oprogramowania i sztucznej inteligencji, oferująca usługi strategii produktowej i przywództwa produktowego.',
  keywords: ['zarządzanie produktem', 'AI', 'sztuczna inteligencja', 'strategia produktowa', 'leadership', 'ecommerce', 'mobile', 'hospitality'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl" suppressHydrationWarning className={`${poppins.variable} ${inter.variable} scroll-smooth`}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
