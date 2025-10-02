
"use client";

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { sampleData } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Input } from '../ui/input';
import { useToast } from '@/hooks/use-toast';
import { Locate, Plus, X, Upload, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '../ui/card';
import { extractHMPIDataAction } from '@/app/actions';

const initialMetals = [
    { id: 'cadmium', name: 'Cadmium', value: '0.05', color: '#ef4444' },
    { id: 'lead', name: 'Lead', value: '0.12', color: '#f97316' },
    { id: 'copper', name: 'Copper', value: '0.34', color: '#8b5cf6' },
];

export function DataImportCard() {
  const router = useRouter();
  const { toast } = useToast();
  const [latitude, setLatitude] = useState('28.6139');
  const [longitude, setLongitude] = useState('77.2090');
  const [metals, setMetals] = useState(initialMetals);
  const [reportImage, setReportImage] = useState<string | null>(null);
  const [isExtracting, setIsExtracting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleMetalValueChange = (id: string, value: string) => {
    setMetals(prev => prev.map(m => m.id === id ? {...m, value} : m));
  };
  
  const removeMetal = (id: string) => {
    setMetals(prev => prev.filter(m => m.id !== id));
  };

  const addMetal = () => {
    const newId = `new-metal-${Date.now()}`;
    const newMetal = {
      id: newId,
      name: 'New Metal',
      value: '0.00',
      color: '#14b8a6' // teal
    };
    setMetals(prev => [...prev, newMetal]);
  };

  const handleCalculate = () => {
    const dataToPass = sampleData.map(d => ({
        ...d,
        metals: metals.reduce((acc, metal) => ({...acc, [metal.id]: parseFloat(metal.value)}), {})
    }));
    router.push(`/results?data=${encodeURIComponent(JSON.stringify(dataToPass))}`);
  };

  const handleGetCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude.toFixed(4));
          setLongitude(position.coords.longitude.toFixed(4));
          toast({
            title: "Location Fetched",
            description: "Your current location has been filled in.",
          });
        },
        (error) => {
          console.error("Geolocation error:", error);
          toast({
            variant: "destructive",
            title: "Location Error",
            description: "Could not fetch your location. Please enter it manually.",
          });
        }
      );
    } else {
      toast({
        variant: "destructive",
        title: "Geolocation Not Supported",
        description: "Your browser does not support geolocation.",
      });
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onloadend = () => {
          const dataUri = reader.result as string;
          setReportImage(dataUri);
          handleExtractData(dataUri);
        };
        reader.readAsDataURL(file);
      } else if (file.type === 'application/pdf' || file.name.endsWith('.csv') || file.name.endsWith('.xls') || file.name.endsWith('.xlsx')) {
        toast({
            title: "Feature Coming Soon!",
            description: `Processing for ${file.type} files is under development.`,
        });
        // Reset file input
        if(fileInputRef.current) {
            fileInputRef.current.value = '';
        }
      } else {
        toast({
            variant: 'destructive',
            title: 'Unsupported File Type',
            description: 'Please upload an image, PDF, CSV, or Excel file.',
        });
      }
    }
  };

  const handleExtractData = async (dataUri: string) => {
    setIsExtracting(true);
    toast({ title: 'Extracting data...', description: 'The AI is analyzing the lab report.' });
    try {
      const result = await extractHMPIDataAction(dataUri);
      if (result.status === 'success' && result.data) {
        const newMetals = [...metals];
        let updated = false;
        for (const [key, value] of Object.entries(result.data)) {
            const metalIndex = newMetals.findIndex(m => m.id.toLowerCase() === key.toLowerCase());
            if (metalIndex !== -1 && value !== null) {
                newMetals[metalIndex] = { ...newMetals[metalIndex], value: String(value) };
                updated = true;
            }
        }
        if(updated) {
            setMetals(newMetals);
            toast({ title: 'Success', description: 'Data extracted and fields populated.' });
        } else {
            toast({ variant: 'destructive', title: 'Extraction Failed', description: 'Could not find relevant HMPI data in the report.' });
        }
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
      toast({ variant: 'destructive', title: 'Extraction Error', description: errorMessage });
    } finally {
      setIsExtracting(false);
    }
  };


  const mapPreviewImage = PlaceHolderImages.find(img => img.id === "delhi-map") ?? { 
      imageUrl: "https://images.unsplash.com/photo-1599837563052-e5b15a452934?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxjaXR5JTIwbWFwfGVufDB8fHx8MTc2MDM0MjA5NHww&ixlib=rb-4.1.0&q=80&w=1080",
      imageHint: "city map"
  };
  

  return (
    <>
      <section>
        <h2 className="text-lg font-semibold mb-4 text-foreground">Location</h2>
        <div className="bg-card rounded-xl shadow-soft overflow-hidden transition-all duration-300 hover:shadow-lifted hover:shadow-primary/20">
          <div className="h-64 bg-muted relative">
            <Image
              alt="Interactive Map"
              className="w-full h-full object-cover"
              src={mapPreviewImage.imageUrl}
              fill
              data-ai-hint={mapPreviewImage.imageHint}
            />
            <div className="absolute inset-0 flex items-center justify-center" onClick={handleGetCurrentLocation}>
              <div className="relative group cursor-pointer" >
                <div className="absolute -inset-3 bg-red-500/20 rounded-full animate-pinPulse group-hover:animate-none"></div>
                <Locate className="text-red-500 text-5xl drop-shadow-lg" style={{fill: 'currentColor'}} />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 divide-x divide-border">
            <div className="p-4 text-center">
              <p className="text-sm text-muted-foreground">Latitude</p>
              <p className="text-lg font-semibold text-foreground">{latitude}</p>
            </div>
            <div className="p-4 text-center">
              <p className="text-sm text-muted-foreground">Longitude</p>
              <p className="text-lg font-semibold text-foreground">{longitude}</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-foreground">Heavy Metals (mg/L)</h2>
            <Button variant="outline" size="sm" onClick={() => fileInputRef.current?.click()}>
                <Upload className="mr-2 h-4 w-4" />
                Import File
            </Button>
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
                accept="image/*,application/pdf,.csv,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
            />
        </div>

        {reportImage && (
          <Card className="mb-4">
            <CardContent className="p-4 relative">
              <Image src={reportImage} alt="Lab Report Preview" width={500} height={300} className="rounded-md w-full h-auto" />
              {isExtracting && (
                <div className="absolute inset-0 bg-background/70 flex flex-col items-center justify-center rounded-md">
                    <Loader2 className="h-8 w-8 animate-spin text-primary" />
                    <p className="mt-2 text-sm font-semibold">Analyzing Report...</p>
                </div>
              )}
               <Button variant="ghost" size="icon" className="absolute top-2 right-2 rounded-full bg-background/50 hover:bg-background/80" onClick={() => setReportImage(null)}>
                    <X className="h-5 w-5" />
                </Button>
            </CardContent>
          </Card>
        )}

        <div className="bg-card rounded-xl shadow-soft p-5 space-y-4">
            {metals.map((metal, index) => (
                 <div key={metal.id} className="flex items-center rounded-full h-16 w-full transition-all duration-300 ease-in-out animate-pillExpand hover:shadow-lifted hover:shadow-primary/20" style={{ backgroundColor: `${metal.color}1A`, animationDelay: `${index*100}ms`}}>
                    <div className="w-28 flex-shrink-0 text-center">
                        <span className="font-semibold" style={{color: metal.color}}>{metal.name}</span>
                    </div>
                    <div className="flex-grow flex items-center px-4">
                        <Input 
                            className="pill-input w-full bg-transparent text-lg font-medium text-foreground text-center border-0 focus-visible:ring-0 focus-visible:ring-offset-0" 
                            value={metal.value}
                            onChange={(e) => handleMetalValueChange(metal.id, e.target.value)}
                         />
                    </div>
                    <Button variant="ghost" size="icon" className="flex-shrink-0 rounded-full mr-2" style={{color: `${metal.color}B3`}} onClick={() => removeMetal(metal.id)}>
                        <X className="h-5 w-5" />
                    </Button>
                </div>
            ))}

            <div className="flex items-center justify-center pt-2">
                <Button 
                    variant="ghost" 
                    className="flex items-center gap-2 text-primary hover:text-primary-dark dark:hover:text-sky-300 transition-colors py-2 px-4 rounded-full border-2 border-dashed border-primary/50 hover:border-primary/80 h-auto"
                    onClick={addMetal}
                >
                    <Plus className="h-5 w-5" />
                    <span className="font-semibold">Add Metal</span>
                </Button>
            </div>
        </div>
      </section>

      <div className="pt-4">
        <Button 
            className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-5 px-4 rounded-xl text-lg shadow-lifted transition-all duration-300 transform hover:scale-105 active:scale-100 h-auto"
            onClick={handleCalculate}
        >
          Calculate HMPI
        </Button>
      </div>
    </>
  );
}
