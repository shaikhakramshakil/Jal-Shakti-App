
"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

export default function UnitsPage() {
  const router = useRouter();
  const [selectedUnit, setSelectedUnit] = useState('mg/L');

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm">
        <div className="flex items-center justify-between p-4 border-b">
          <Button variant="ghost" size="icon" className="p-2 -ml-2" onClick={() => router.back()}>
            <ArrowLeft />
          </Button>
          <h1 className="text-lg font-bold text-center">Units</h1>
          <div className="w-8"></div>
        </div>
      </header>
      <main className="flex-grow p-4">
        <RadioGroup value={selectedUnit} onValueChange={setSelectedUnit} className="space-y-4">
          <Label htmlFor="mg-l" className="flex items-center gap-x-4 p-4 bg-card border rounded-lg cursor-pointer">
            <RadioGroupItem value="mg/L" id="mg-l" />
            <span className="flex-1 font-normal">mg/L (milligram per liter)</span>
          </Label>
          <Label htmlFor="ug-l" className="flex items-center gap-x-4 p-4 bg-card border rounded-lg cursor-pointer">
            <RadioGroupItem value="µg/L" id="ug-l" />
            <span className="flex-1 font-normal">µg/L (microgram per liter)</span>
          </Label>
          <Label htmlFor="ppm" className="flex items-center gap-x-4 p-4 bg-card border rounded-lg cursor-pointer">
            <RadioGroupItem value="ppm" id="ppm" />
            <span className="flex-1 font-normal">ppm (parts per million)</span>
          </Label>
        </RadioGroup>
      </main>
      <footer className="fixed bottom-0 left-0 right-0 p-4 bg-background/80 backdrop-blur-sm border-t">
        <Button 
            className="w-full h-12 px-6 rounded-lg bg-primary text-white font-bold text-base shadow-lg shadow-primary/30 hover:bg-primary/90 transition-colors"
            onClick={() => router.back()}
        >
            Save Changes
        </Button>
      </footer>
    </div>
  );
}
