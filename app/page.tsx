import ThemeSwitcher from '@/components/theme/theme-switcher'
import Header from './(home)/header'
import Home from './(home)/page'
import { ScrollArea } from '@/components/ui/scroll-area'

export default function Page() {
  return (
    <div className='flex h-screen max-h-[620px] w-full max-w-xl flex-col rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
      <div className='absolute z-20 -ml-4 -mt-3'>
        <ThemeSwitcher />
      </div>
      <Header />
      <ScrollArea className='flex min-w-full flex-grow items-center justify-center place-self-center justify-self-center rounded-b-lg bg-secondary/50 p-6'>
        <Home />
      </ScrollArea>
    </div>
  )
}
