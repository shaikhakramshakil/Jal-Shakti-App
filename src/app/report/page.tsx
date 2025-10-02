"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { DataPointsSelection } from '@/components/report/data-points-selection';
import { ChartsSelection } from '@/components/report/charts-selection';
import { ExportFormatSelection } from '@/components/report/export-format-selection';

export default function ReportPage() {
    const router = useRouter();
    const [exportFormat, setExportFormat] = useState('pdf');

    const handleGenerateReport = () => {
        let content = '';
        let mimeType = '';
        let filename = '';

        if (exportFormat === 'pdf') {
            content = 'This is a mock PDF report. In a real application, a PDF would be generated here.';
            mimeType = 'text/plain'; // Using text/plain for mock PDF
            filename = 'report.txt'; // Using .txt extension for mock PDF
        } else {
            content = 'ID,Location,HMPI,Quality\n';
            content += '1,"Well A, North District",5.2,Low\n';
            content += '2,"Borehole B, South End",15.8,Medium\n';
            content += '3,"Spring C, West Valley",22.1,High\n';
            mimeType = 'text/csv';
            filename = 'report.csv';
        }

        const blob = new Blob([content], { type: mimeType });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (
        <div className="flex flex-col min-h-screen">
            <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm">
                <div className="flex items-center justify-between p-4 border-b">
                    <Button variant="ghost" size="icon" className="p-2 -ml-2" onClick={() => router.back()}>
                        <ArrowLeft />
                    </Button>
                    <h1 className="text-lg font-bold text-center">Report Generation</h1>
                    <div className="w-8"></div>
                </div>
            </header>
            <main className="flex-grow pb-24">
                <div className="p-4 space-y-8">
                    <DataPointsSelection />
                    <ChartsSelection />
                    <ExportFormatSelection selectedFormat={exportFormat} onFormatChange={setExportFormat} />
                </div>
            </main>
            <footer className="fixed bottom-0 left-0 right-0 p-4 bg-background/80 backdrop-blur-sm border-t">
                <Button 
                    className="w-full h-12 px-6 rounded-lg bg-primary text-white font-bold text-base shadow-lg shadow-primary/30 hover:bg-primary/90 transition-colors"
                    onClick={handleGenerateReport}
                >
                    Generate and Export Report
                </Button>
            </footer>
        </div>
    );
}
