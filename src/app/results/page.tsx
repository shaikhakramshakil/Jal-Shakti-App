
"use client";

import { useSearchParams, useRouter } from 'next/navigation';
import { Suspense, useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { HmpiCalculationCard } from '@/components/results/hmpi-calculation';
import { WaterQualityCard } from '@/components/results/water-quality';
import { HmpiTrendChart } from '@/components/dashboard/hmpi-trend-chart';
import { ArrowLeft, TrendingUp, FileText } from 'lucide-react';
import { sampleData, type GroundwaterSample } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PollutionAlertDialog } from '@/components/results/pollution-alert-dialog';
import type { SuggestRemediationOutput } from '@/ai/flows/suggest-remediation';
import { suggestRemediationAction } from '../actions';
import { useToast } from '@/hooks/use-toast';
import { RemediationAdviceCard } from '@/components/results/remediation-advice-card';
import { TickerHeader } from '@/components/layout/ticker-header';

function ResultsContent() {
    const router = useRouter();
    const { toast } = useToast();
    const searchParams = useSearchParams();
    const dataString = searchParams.get('data');
    const data: GroundwaterSample[] = dataString ? JSON.parse(dataString) : sampleData;
    const [showAlert, setShowAlert] = useState(false);
    const [remediationAdvice, setRemediationAdvice] = useState<SuggestRemediationOutput | null>(null);
    const [isFetchingAdvice, setIsFetchingAdvice] = useState(false);
    const alertShownRef = useRef(false);


    useEffect(() => {
        if (data.length > 0 && data[0].hmpi > 15 && !alertShownRef.current) {
            setShowAlert(true);
            alertShownRef.current = true; // Mark as shown
        }
    }, [data]);

    if (data.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground p-8">
                <p>No data available to display results.</p>
                <Button onClick={() => router.push('/data-input')} className="mt-4">
                    Go to Data Input
                </Button>
            </div>
        );
    }
    
    const sample = data[0]; 

    const handleGenerateReport = () => {
        router.push('/report');
    };

    const handleGetRemediationAdvice = async () => {
        setIsFetchingAdvice(true);
        setRemediationAdvice(null);
        toast({ title: 'Generating Advice...', description: 'The AI is preparing recommendations.' });
        
        const input = {
            cadmium: sample.metals?.cadmium ?? 0.05,
            lead: sample.metals?.lead ?? 0.12,
            copper: sample.metals?.copper ?? 0.34,
            hmpi: sample.hmpi
        };

        try {
            const result = await suggestRemediationAction(input);
            if (result.status === 'success' && result.data) {
                setRemediationAdvice(result.data);
                toast({ title: 'Advice Generated', description: 'Remediation suggestions are ready.' });
            } else {
                throw new Error(result.message);
            }
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
            toast({ variant: 'destructive', title: 'Failed to Get Advice', description: errorMessage });
        } finally {
            setIsFetchingAdvice(false);
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            <PollutionAlertDialog open={showAlert} onOpenChange={setShowAlert} sample={sample} />
            <TickerHeader />
            <header className="flex items-center bg-background/80 backdrop-blur-sm p-4 sticky top-0 z-10 border-b">
                <Button variant="ghost" size="icon" onClick={() => router.back()}>
                    <ArrowLeft />
                </Button>
                <h1 className="text-lg font-bold flex-1 text-center pr-8">HMPI Results</h1>
            </header>
            <main className="flex-grow p-4 space-y-6 pb-24">
                <HmpiCalculationCard hmpi={sample.hmpi} />
                <WaterQualityCard 
                    quality={sample.quality} 
                    onGetAdvice={handleGetRemediationAdvice}
                    isFetchingAdvice={isFetchingAdvice}
                />
                {remediationAdvice && <RemediationAdviceCard advice={remediationAdvice} />}
                <Card>
                    <CardHeader>
                        <CardTitle className="text-xl font-bold">HMPI Trend</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="font-medium">HMPI Over Time</p>
                                <p className="text-sm text-muted-foreground">Last 6 Months</p>
                            </div>
                            <div className="flex items-center gap-1 text-green-600 text-sm font-medium">
                                <TrendingUp className="h-4 w-4" />
                                <span>+5%</span>
                            </div>
                        </div>
                        <div className="h-48 mt-4">
                            <HmpiTrendChart />
                        </div>
                    </CardContent>
                </Card>
            </main>
            <footer className="fixed bottom-0 left-0 right-0 p-4 bg-background/80 backdrop-blur-sm border-t">
                <Button className="w-full h-12 px-6 rounded-lg bg-primary text-white font-bold text-base shadow-lg shadow-primary/30 hover:bg-primary/90 transition-colors" onClick={handleGenerateReport}>
                    <FileText className="mr-2 h-5 w-5" />
                    Generate Report
                </Button>
            </footer>
        </div>
    );
}


export default function ResultsPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ResultsContent />
        </Suspense>
    );
}
