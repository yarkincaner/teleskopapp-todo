import Header from '@/components/header'
import Providers from '@/components/providers'
import { ThemeProvider } from '@/components/theme/theme-provider'
import ThemeSwitcher from '@/components/theme/theme-switcher'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Toaster } from 'sonner'
import './globals.css'
import { ScrollArea } from '@/components/ui/scroll-area'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900'
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Providers>
            <main className='flex min-h-screen items-center justify-center p-6'>
              <div className='flex h-screen max-h-[620px] w-full max-w-xl flex-col rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
                <div className='absolute z-20 -ml-4 -mt-3'>
                  <ThemeSwitcher />
                </div>
                <Header />
                <ScrollArea className='flex min-w-full flex-grow items-center justify-center place-self-center justify-self-center rounded-b-lg bg-secondary/50 p-2 sm:p-6'>
                  {children}
                </ScrollArea>
              </div>
            </main>
            <Toaster richColors />
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  )
}
