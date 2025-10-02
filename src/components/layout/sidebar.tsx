"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { FilePenLine, BarChart, History, Settings, Edit, LineChart } from 'lucide-react';

const navItems = [
    { href: '/', icon: Edit, label: 'Data Input' },
    { href: '/results', icon: LineChart, label: 'Results' },
    { href: '/history', icon: History, label: 'History' },
    { href: '/settings', icon: Settings, label: 'Settings' },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex flex-col w-64 bg-card border-r">
      <nav className="flex flex-col gap-2 p-4">
        {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                    "flex items-center gap-3 px-4 py-2 text-muted-foreground hover:bg-muted rounded-lg transition-all duration-300 hover:shadow-lifted hover:shadow-primary/20",
                    isActive && "bg-primary/10 text-primary font-semibold"
                )}
              >
                <item.icon className="h-6 w-6" />
                <span>{item.label}</span>
              </Link>
            )
        })}
      </nav>
    </aside>
  );
}
