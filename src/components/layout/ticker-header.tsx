
"use client";

import { sampleData } from '@/lib/data';
import { AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';

export function TickerHeader() {
  const highAlerts = sampleData
    .filter(d => d.quality === 'High' || d.quality === 'Very High')
    .sort((a, b) => b.hmpi - a.hmpi);

  const tickerItems = highAlerts.length > 2 ? [...highAlerts, ...highAlerts] : highAlerts;

  if (highAlerts.length === 0) {
    return null;
  }

  const getQualityColor = (quality: 'High' | 'Very High') => {
    return quality === 'Very High' ? 'text-red-500' : 'text-amber-500';
  }

  return (
    <div className="relative bg-card border-b px-4 py-2">
      <div className="overflow-hidden rounded-full bg-background">
        <div className="ticker-track flex">
          {tickerItems.map((item, index) => (
            <div key={index} className="flex items-center flex-shrink-0 p-2 whitespace-nowrap">
              <AlertTriangle className={cn("h-4 w-4 mr-2", getQualityColor(item.quality as 'High' | 'Very High'))} />
              <span className="text-sm font-semibold">{item.location}:</span>
              <span className="ml-2 font-mono text-destructive text-sm font-bold">{item.hmpi.toFixed(2)}</span>
              <span className={cn("ml-1 text-sm font-bold", getQualityColor(item.quality as 'High' | 'Very High'))}>
                ({item.quality})
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
