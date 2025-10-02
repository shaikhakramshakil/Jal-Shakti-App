
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Edit, LineChart, History, Settings, Bell, FilePenLine } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
    { href: '/', icon: FilePenLine, label: 'Data Input' },
    { href: '/results', icon: LineChart, label: 'Results' },
    { href: '/history', icon: History, label: 'History' },
    { href: '/settings', icon: Settings, label: 'Settings' },
];


export function MobileNav() {
  const pathname = usePathname();

  return (
    <footer className="sticky bottom-0 bg-card/80 dark:bg-surface-dark/80 backdrop-blur-lg border-t border-border/50 md:hidden">
        <nav className="flex justify-around py-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                className={cn(
                  "flex flex-col items-center gap-1 p-2 rounded-lg text-muted-foreground hover:text-primary transition-all duration-300 hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/20",
                  isActive && "text-primary"
                )}
                href={item.href}
              >
                <item.icon className="h-6 w-6" style={{ fill: isActive ? 'currentColor' : 'none' }} />
                <span className={cn("text-xs font-semibold", isActive && "text-primary")}>{item.label}</span>
              </Link>
            )
          })}
        </nav>
      </footer>
  )
}
