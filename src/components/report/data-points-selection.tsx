"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const dataPoints = [
    { id: "dp1", label: "Well A - Sample 1 (2023-08-15)" },
    { id: "dp2", label: "Well B - Sample 2 (2023-09-20)" },
    { id: "dp3", label: "Well C - Sample 3 (2023-10-25)" },
]

export function DataPointsSelection() {
    return (
        <section>
            <h2 className="text-xl font-bold mb-4">Select Data Points</h2>
            <div className="space-y-4">
                {dataPoints.map((item) => (
                    <Label key={item.id} htmlFor={item.id} className="flex items-center gap-x-4 p-4 bg-card border rounded-lg cursor-pointer">
                        <Checkbox id={item.id} defaultChecked className="h-6 w-6 rounded" />
                        <span className="flex-1 font-normal">{item.label}</span>
                    </Label>
                ))}
            </div>
        </section>
    );
}
