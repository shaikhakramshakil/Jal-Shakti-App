
"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Map, Loader, AlertCircle } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import type { GroundwaterSample } from "@/lib/data";
import type { GeneratePollutionMapOutput } from "@/ai/flows/generate-pollution-map";
import { Skeleton } from "../ui/skeleton";
import { PlaceHolderImages } from "@/lib/placeholder-images";

type PollutionMapCardProps = {
  hmpiData: GroundwaterSample[];
  mapResult: GeneratePollutionMapOutput | null;
  setMapResult: (result: GeneratePollutionMapOutput | null) => void;
};

const mockMapImage = PlaceHolderImages.find(img => img.id === "mumbai-map");

export function PollutionMapCard({ hmpiData, mapResult, setMapResult }: PollutionMapCardProps) {
  const { toast } = useToast();
  
  const hasData = hmpiData.length > 0;

  return (
    <Card className="flex flex-col shadow-md">
      <CardHeader>
        <CardTitle>Interactive Pollution Map</CardTitle>
        <CardDescription>Visualize groundwater quality geographically.</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow flex items-center justify-center bg-background rounded-lg m-6 mt-0 min-h-[400px]">
        {mockMapImage ? (
          <Image
            src={mockMapImage.imageUrl}
            alt="Mock Pollution Map of Mumbai"
            width={600}
            height={400}
            data-ai-hint={mockMapImage.imageHint}
            className="rounded-lg object-contain shadow-lg border"
          />
        ) : (
          <div className="text-center text-muted-foreground p-8 border-2 border-dashed rounded-lg w-full">
            <Map className="mx-auto h-12 w-12" />
            <p className="mt-4">Map image not available.</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
