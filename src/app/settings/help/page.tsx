
"use client";

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function HelpPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm">
        <div className="flex items-center justify-between p-4 border-b">
          <Button variant="ghost" size="icon" className="p-2 -ml-2" onClick={() => router.back()}>
            <ArrowLeft />
          </Button>
          <h1 className="text-lg font-bold text-center">Help</h1>
          <div className="w-8"></div>
        </div>
      </header>
      <main className="flex-grow p-4">
        <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
                <AccordionTrigger>How do I import data?</AccordionTrigger>
                <AccordionContent>
                To import data, navigate to the "Data Input" screen. You can either manually enter the heavy metal concentrations and geo-coordinates, or you can use the 'Import from File' button to upload a CSV or Excel file.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>What do the quality categories mean?</AccordionTrigger>
                <AccordionContent>
                The groundwater quality is categorized based on the calculated HMPI value:
                <ul>
                    <li><strong>Low:</strong> Excellent quality, safe for drinking.</li>
                    <li><strong>Medium:</strong> Good quality, slightly polluted, may require treatment.</li>
                    <li><strong>High:</strong> Poor quality, moderately polluted, requires caution.</li>
                    <li><strong>Very High:</strong> Unsuitable for consumption, heavily polluted.</li>
                </ul>
                </AccordionContent>
            </AccordionItem>
             <AccordionItem value="item-3">
                <AccordionTrigger>How are reports generated?</AccordionTrigger>
                <AccordionContent>
                After calculating the HMPI, go to the "Results" page. From there, you can click "Generate Report" to create a downloadable PDF or CSV summary of the assessment, including data points and visualizations.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
      </main>
    </div>
  );
}
