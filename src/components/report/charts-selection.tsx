"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const chartOptions = [
    { id: "chart1", label: "HMPI Trend Over Time" },
    { id: "chart2", label: "Metal Concentration Comparison" },
];

export function ChartsSelection() {
    return (
        <section>
            <h2 className="text-xl font-bold mb-4">Include Charts</h2>
            <div className="space-y-4">
                {chartOptions.map((item, index) => (
                    <Label key={item.id} htmlFor={item.id} className="flex items-center gap-x-4 p-4 bg-card border rounded-lg cursor-pointer">
                        <Checkbox id={item.id} defaultChecked={index === 0} className="h-6 w-6 rounded" />
                        <span className="flex-1 font-normal">{item.label}</span>
                    </Label>
                ))}
            </div>
        </section>
    );
}
