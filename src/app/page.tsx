"use client";

import { MainDashboard } from '@/components/dashboard/main-dashboard';
import { MobileNav } from '@/components/layout/mobile-nav';
import { TickerHeader } from '@/components/layout/ticker-header';
import { Header } from '@/components/layout/header';
import { Sidebar } from '@/components/layout/sidebar';

export default function DataInputPage() {
  return (
    <div className="flex min-h-screen w-full">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-grow p-5 space-y-8 animate-fadeIn bg-background">
           <div className="w-full max-w-2xl mx-auto space-y-8">
             <MainDashboard />
           </div>
        </main>
        <MobileNav />
      </div>
    </div>
  );
}
