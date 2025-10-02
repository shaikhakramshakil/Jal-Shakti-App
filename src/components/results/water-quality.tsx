
import { Badge } from "@/components/ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { GroundwaterSample } from "@/lib/data";
import { Lightbulb, Loader2 } from "lucide-react";

type WaterQualityCardProps = {
    quality: GroundwaterSample['quality'];
    onGetAdvice: () => void;
    isFetchingAdvice: boolean;
};

const qualityDetails = {
    'Low': { category: 'Excellent', class: 'Class I', suitability: 'Safe for drinking', suitabilityTag: 'Potable' },
    'Medium': { category: 'Good', class: 'Class II', suitability: 'Slightly polluted', suitabilityTag: 'Treatable' },
    'High': { category: 'Poor', class: 'Class III', suitability: 'Moderately polluted', suitabilityTag: 'Caution' },
    'Very High': { category: 'Unsuitable', class: 'Class IV', suitability: 'Heavily polluted', suitabilityTag: 'Unsafe' },
};


export function WaterQualityCard({ quality, onGetAdvice, isFetchingAdvice }: WaterQualityCardProps) {
    const details = qualityDetails[quality];
    const isHighPollution = quality === 'High' || quality === 'Very High';

    return (
        <section>
            <h2 className="text-xl font-bold mb-3">Water Quality</h2>
            <div className="bg-card rounded-lg divide-y border">
                <div className="flex items-center justify-between p-4">
                    <div>
                        <p className="font-medium">Category</p>
                        <p className="text-sm text-muted-foreground">{details.category}</p>
                    </div>
                    <Badge variant="outline" className="bg-primary/10 text-primary">{details.class}</Badge>
                </div>
                <div className="flex items-center justify-between p-4">
                    <div>
                        <p className="font-medium">Suitability</p>
                        <p className="text-sm text-muted-foreground">{details.suitability}</p>
                    </div>
                     <Badge variant="outline" className="bg-primary/10 text-primary">{details.suitabilityTag}</Badge>
                </div>
                {isHighPollution && (
                    <div className="p-4">
                        <Button className="w-full" onClick={onGetAdvice} disabled={isFetchingAdvice}>
                            {isFetchingAdvice ? (
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            ) : (
                                <Lightbulb className="mr-2 h-4 w-4" />
                            )}
                            {isFetchingAdvice ? 'Analyzing...' : 'Get Remediation Advice'}
                        </Button>
                    </div>
                )}
            </div>
        </section>
    );
}
