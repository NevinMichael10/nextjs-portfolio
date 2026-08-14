import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { THEMES } from '@/lib/constants'

export function ThemeSwitcher() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button variant='ghost' className="size-9 bg-transparent border-transparent rounded-full hover:border-transparent hover:cursor-pointer" aria-label={'theme-toggle.toggle-theme'} data-testid='theme-toggle'>
            <SunIcon className='dark:hidden' />
            <MoonIcon className='hidden dark:block' />
          </Button>
        }
      />
      <DropdownMenuContent align='end' className='min-w-36 rounded-2xl'>
        {THEMES.map((theme) => (
          <DropdownMenuItem
            className='gap-2 px-3 py-2 rounded-xl hover:cursor-pointer'
            key={theme.value}
            onClick={() => {
              setTheme(theme.value)
            }}
            data-testid={`theme-option-${theme.value}`}
          >
            {theme.icon}
            {theme.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}