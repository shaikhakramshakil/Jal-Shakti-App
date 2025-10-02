
"use client";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

type ExportFormatSelectionProps = {
    selectedFormat: string;
    onFormatChange: (format: string) => void;
};

export function ExportFormatSelection({ selectedFormat, onFormatChange }: ExportFormatSelectionProps) {
    return (
        <section>
            <h2 className="text-xl font-bold mb-4">Export Format</h2>
            <RadioGroup value={selectedFormat} onValueChange={onFormatChange} className="grid grid-cols-2 gap-4">
                <Label htmlFor="pdf" className="flex items-center justify-center p-4 h-20 rounded-lg border-2 border-border cursor-pointer has-[:checked]:border-primary has-[:checked]:ring-2 has-[:checked]:ring-primary has-[:checked]:bg-primary/10">
                    <RadioGroupItem value="pdf" id="pdf" className="sr-only" />
                    <span className="font-semibold">PDF</span>
                </Label>
                <Label htmlFor="csv" className="flex items-center justify-center p-4 h-20 rounded-lg border-2 border-border cursor-pointer has-[:checked]:border-primary has-[:checked]:ring-2 has-[:checked]:ring-primary has-[:checked]:bg-primary/10">
                    <RadioGroupItem value="csv" id="csv" className="sr-only" />
                    <span className="font-semibold">CSV</span>
                </Label>
            </RadioGroup>
        </section>
    );
}
