import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type HmpiCalculationCardProps = {
    hmpi: number;
};

export function HmpiCalculationCard({ hmpi }: HmpiCalculationCardProps) {
    return (
        <section>
            <h2 className="text-xl font-bold mb-3">HMPI Calculation</h2>
            <div className="bg-primary/10 rounded-lg p-4 text-center">
                <p className="text-sm font-medium text-muted-foreground">HMPI Value</p>
                <p className="text-primary text-4xl font-bold">{hmpi.toFixed(2)}</p>
            </div>
        </section>
    );
}
