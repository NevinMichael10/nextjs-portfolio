'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { MenuIcon } from 'lucide-react'
import { HEADER_LINKS } from '@/components/layout/links'
import Link from 'next/link'

const MobileNav = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={(props) => (
          <Button
            {...props}
            className="flex size-9 items-center justify-center p-0 rounded-full cursor-pointer md:hidden"
            aria-label="Toggle Menu"
            variant="ghost"
          >
            <MenuIcon className="size-4" />
          </Button>
        )}
      />

      <DropdownMenuContent align="end" sideOffset={20} className="min-w-40 rounded-2xl">
        {HEADER_LINKS.map((link) => (
          <DropdownMenuItem key={link.key} className="p-0 rounded-xl">
            <Link href={link.href} className="flex w-full items-center gap-2 px-3 py-2">
              {link.icon}
              <div>{link.key}</div>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default MobileNav