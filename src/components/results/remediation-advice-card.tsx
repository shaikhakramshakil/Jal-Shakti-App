
import type { SuggestRemediationOutput } from "@/ai/flows/suggest-remediation";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { TestTubeDiagonal, Recycle, ListChecks } from 'lucide-react';

type RemediationAdviceCardProps = {
    advice: SuggestRemediationOutput;
};

export function RemediationAdviceCard({ advice }: RemediationAdviceCardProps) {
    return (
        <section>
            <h2 className="text-xl font-bold mb-3">AI Remediation Advisor</h2>
            <Card className="bg-background/50">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                        <TestTubeDiagonal className="h-5 w-5 text-primary" />
                        <span>Potential Contamination Sources</span>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-wrap gap-2">
                        {advice.potentialSources.map((source, index) => (
                            <Badge key={index} variant="secondary">{source}</Badge>
                        ))}
                    </div>
                </CardContent>

                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                        <Recycle className="h-5 w-5 text-primary" />
                        <span>Remediation Techniques</span>
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                    {advice.remediationTechniques.map((technique, index) => (
                        <div key={index} className="p-3 bg-card border rounded-md">
                            <p className="font-semibold">{technique.name}</p>
                            <p className="text-sm text-muted-foreground">{technique.description}</p>
                        </div>
                    ))}
                </CardContent>

                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                        <ListChecks className="h-5 w-5 text-primary" />
                        <span>Further Recommendations</span>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                     <ul className="space-y-2 list-disc pl-5 text-sm text-muted-foreground">
                        {advice.recommendations.map((rec, index) => (
                            <li key={index}>{rec}</li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </section>
    );
}
