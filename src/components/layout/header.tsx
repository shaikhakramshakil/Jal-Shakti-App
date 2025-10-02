import { Bell, Droplets } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function Header() {
  return (
    <header className="border-b bg-card shadow-sm sticky top-0 z-10">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="bg-primary p-2 rounded-lg shadow">
            <Droplets className="h-8 w-8 text-primary-foreground" />
          </div>
          <h1 className="text-2xl font-bold font-headline tracking-tight">
            Jal Shakti
          </h1>
        </div>
        <div className="flex items-center">
            <Link href="/notifications">
                <Button variant="ghost" size="icon">
                    <Bell className="h-6 w-6" />
                    <span className="sr-only">Notifications</span>
                </Button>
            </Link>
        </div>
      </div>
    </header>
  );
}
