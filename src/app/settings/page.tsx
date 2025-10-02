
"use client";

import { MobileNav } from '@/components/layout/mobile-nav';
import { Sidebar } from '@/components/layout/sidebar';
import { Header } from '@/components/layout/header';
import { ChevronRight, Moon, Sun, Bell } from 'lucide-react';
import Link from 'next/link';
import { ThemeToggle } from '@/components/settings/theme-toggle';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

export default function SettingsPage() {
  const { toast } = useToast();

  const handleNotificationPermission = async () => {
    if (!('Notification' in window) || !('serviceWorker' in navigator)) {
      toast({
        variant: 'destructive',
        title: 'Unsupported Browser',
        description: 'Push notifications are not supported in this browser.',
      });
      return;
    }

    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      toast({
        title: 'Notifications Enabled',
        description: 'You will now receive alerts for high pollution levels.',
      });
      // Here you would typically send the subscription to your backend
    } else {
      toast({
        variant: 'destructive',
        title: 'Notifications Denied',
        description: 'You have blocked notifications. You can change this in your browser settings.',
      });
    }
  };

  return (
    <div className="flex min-h-screen w-full">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-grow bg-background">
          <div className="p-4 space-y-8">
            <div>
              <h2 className="px-4 text-sm font-semibold text-muted-foreground mb-2">General</h2>
              <div className="bg-card rounded-xl shadow-sm">
                <Link href="/settings/units" className="flex items-center justify-between p-4 border-b">
                  <div className="flex flex-col">
                    <span className="font-medium text-card-foreground">Units</span>
                    <span className="text-sm text-primary">mg/L</span>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </Link>
                <div className="flex items-center justify-between p-4 border-b">
                    <div className="flex items-center gap-3">
                        <Moon className="h-5 w-5 text-muted-foreground" />
                        <span className="font-medium text-card-foreground">Dark Mode</span>
                    </div>
                    <ThemeToggle />
                </div>
                 <div className="flex items-center justify-between p-4 border-b">
                    <div className="flex items-center gap-3">
                        <Bell className="h-5 w-5 text-muted-foreground" />
                        <span className="font-medium text-card-foreground">Push Notifications</span>
                    </div>
                    <Button size="sm" onClick={handleNotificationPermission}>Enable</Button>
                </div>
              </div>
            </div>
            <div>
              <h2 className="px-4 text-sm font-semibold text-muted-foreground mb-2">About</h2>
              <div className="bg-card rounded-xl shadow-sm">
                <Link href="/settings/formulas" className="flex items-center justify-between p-4 border-b">
                  <span className="font-medium text-card-foreground">Formulas</span>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </Link>
                <Link href="/settings/help" className="flex items-center justify-between p-4 border-b">
                  <span className="font-medium text-card-foreground">Help</span>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </Link>
                <Link href="/settings/about" className="flex items-center justify-between p-4">
                  <span className="font-medium text-card-foreground">About Us</span>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </Link>
              </div>
            </div>
          </div>
        </main>
        <MobileNav />
      </div>
    </div>
  );
}
