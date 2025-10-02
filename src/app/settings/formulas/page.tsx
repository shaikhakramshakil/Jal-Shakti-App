
"use client";

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function FormulasPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm">
        <div className="flex items-center justify-between p-4 border-b">
          <Button variant="ghost" size="icon" className="p-2 -ml-2" onClick={() => router.back()}>
            <ArrowLeft />
          </Button>
          <h1 className="text-lg font-bold text-center">Formulas</h1>
          <div className="w-8"></div>
        </div>
      </header>
      <main className="flex-grow p-4">
        <Accordion type="single" collapsible className="w-full" defaultValue="item-2">
            <AccordionItem value="item-2">
                <AccordionTrigger>Quality Rating (Qi)</AccordionTrigger>
                <AccordionContent>
                The Quality Rating (Qi) normalizes the concentration of each heavy metal against its standard permissible value. It is a crucial first step for each metal measured.
                <br /><br />
                <strong>Qi = (Mi / Si) * 100</strong>
                <br /><br />
                Where:
                <ul>
                  <li className="ml-4"><strong>Mi</strong> is the monitored value (concentration) of the heavy metal.</li>
                  <li className="ml-4"><strong>Si</strong> is the standard permissible value for that specific metal.</li>
                </ul>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-1">
                <AccordionTrigger>Heavy Metal Pollution Index (HMPI)</AccordionTrigger>
                <AccordionContent>
                The HMPI provides a single, comprehensive score representing the overall pollution from multiple heavy metals. It is calculated by averaging the Quality Ratings (Qi) of all metals considered.
                <br /><br />
                <strong>HMPI = [ Σ (Qi) ] / n</strong>
                <br /><br />
                 Where:
                <ul>
                  <li className="ml-4"><strong>Σ (Qi)</strong> is the sum of the Quality Ratings for all heavy metals.</li>
                  <li className="ml-4"><strong>n</strong> is the total number of metals considered in the analysis.</li>
                </ul>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
      </main>
    </div>
  );
}
