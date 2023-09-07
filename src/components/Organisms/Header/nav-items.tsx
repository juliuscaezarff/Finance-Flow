import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavItemsProps = {
  label: string
  href: string
  className?: string
}

export const NavItem = ({ label, href, className }: NavItemsProps) => {
  const pathname = usePathname()

  const isActive = pathname === href

  return (
    <Link
      className={cn(
        'text-light-gray font-medium font-sans text-sm uppercase flex items-center gap-2',
        isActive && 'underline',
        className
      )}
      href={href}
    >
      {label}
    </Link>
  )
}
