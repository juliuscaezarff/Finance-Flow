import { cn } from '@/app/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavItemsProps = {
  label: string
  href: string
}

export const NavItem = ({ label, href }: NavItemsProps) => {
  const pathname = usePathname()

  const isActive = pathname === href

  return (
    <Link
      className={cn(
        'text-light-gray font-medium text-sm uppercase flex items-center gap-2',
        isActive && 'text-red-500'
      )}
      href={href}
    >
      {label}
    </Link>
  )
}
