"use client";

import { Card, CardContent } from '@/components/ui/card';
import { HmpiTrendChart } from '@/components/dashboard/hmpi-trend-chart';
import { TrendingUp } from 'lucide-react';

export function HmpiTrendsCard() {
  return (
    <section>
      <h2 className="text-lg font-bold mb-3">HMPI Trends</h2>
      <Card className="rounded-xl bg-white dark:bg-background-dark p-4 shadow-sm">
        <p className="text-base font-medium text-gray-800 dark:text-gray-200">HMPI Over Time</p>
        <p className="text-4xl font-bold text-gray-900 dark:text-white">1.2</p>
        <div className="flex items-center gap-2 mt-1">
          <p className="text-sm font-normal text-gray-500 dark:text-gray-400">Last 12 Months</p>
          <p className="text-sm font-medium text-green-500 flex items-center">
            <TrendingUp className="h-4 w-4 mr-1" />
            +12%
          </p>
        </div>
        <div className="h-40 mt-4">
          <HmpiTrendChart />
        </div>
      </Card>
    </section>
  );
}
