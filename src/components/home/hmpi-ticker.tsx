
"use client";

import { sampleData } from '@/lib/data';
import { AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';

export function HmpiTicker() {
  const highAlerts = sampleData
    .filter(d => d.quality === 'High' || d.quality === 'Very High')
    .sort((a, b) => b.hmpi - a.hmpi);

  const tickerItems = highAlerts.length > 3 ? [...highAlerts, ...highAlerts] : highAlerts;

  if (highAlerts.length === 0) {
    return null;
  }

  const getQualityColor = (quality: 'High' | 'Very High') => {
    return quality === 'Very High' ? 'text-red-500' : 'text-amber-500';
  }

  return (
    <div className="relative bg-card border-t border-b">
      <div className="flex overflow-hidden">
        <div className="ticker-track flex">
          {tickerItems.map((item, index) => (
            <div key={index} className="flex items-center flex-shrink-0 p-3 whitespace-nowrap">
              <AlertTriangle className={cn("h-5 w-5 mr-2", getQualityColor(item.quality as 'High' | 'Very High'))} />
              <span className="font-semibold">{item.location}:</span>
              <span className="ml-2 font-mono text-destructive font-bold">{item.hmpi.toFixed(2)}</span>
              <span className={cn("ml-1 font-bold", getQualityColor(item.quality as 'High' | 'Very High'))}>
                ({item.quality})
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
