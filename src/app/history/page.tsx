"use client";

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { FilterOptions } from '@/components/history/filter-options';
import { HmpiTrendsCard } from '@/components/history/hmpi-trends-card';
import { PastAssessments } from '@/components/history/past-assessments';
import { MobileNav } from '@/components/layout/mobile-nav';
import { TickerHeader } from '@/components/layout/ticker-header';

export default function HistoryPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen w-full bg-background">
      <TickerHeader />
      <header className="sticky top-0 bg-background/80 dark:bg-background-dark/80 backdrop-blur-lg z-10">
        <div className="flex items-center p-4">
          <Button variant="ghost" size="icon" onClick={() => router.back()} className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors -ml-2">
            <ArrowLeft />
          </Button>
          <h1 className="text-xl font-bold flex-1 text-center pr-10">HMPI History</h1>
        </div>
      </header>
      <main className="flex-grow p-4 space-y-6">
        <FilterOptions />
        <div className="space-y-6">
          <HmpiTrendsCard />
          <PastAssessments />
        </div>
      </main>
      <MobileNav />
    </div>
  );
}
