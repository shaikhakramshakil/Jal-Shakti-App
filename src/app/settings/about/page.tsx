
"use client";

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Droplets } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { InstallButton } from '@/components/pwa/install-button';

export default function AboutPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm">
        <div className="flex items-center justify-between p-4 border-b">
          <Button variant="ghost" size="icon" className="p-2 -ml-2" onClick={() => router.back()}>
            <ArrowLeft />
          </Button>
          <h1 className="text-lg font-bold text-center">About Us</h1>
          <div className="w-8"></div>
        </div>
      </header>
      <main className="flex-grow p-4">
        <Card className="text-center">
            <CardContent className="p-6">
                <div className="bg-primary p-4 rounded-lg shadow inline-block mb-4">
                    <Droplets className="h-10 w-10 text-primary-foreground" />
                </div>
                <h2 className="text-2xl font-bold font-headline tracking-tight">
                    Jal Shakti
                </h2>
                <p className="text-sm text-muted-foreground">Version 1.0.0</p>
                <p className="mt-4 text-card-foreground">
                    This application is a direct response to the problem statement (ID: 25067) from the **Ministry of Jal Shakti (CGWB)** to design and develop an application for Heavy Metal Pollution indices.
                </p>
                <p className="mt-2 text-card-foreground">
                    Our mission is to provide an accessible and efficient tool for environmental professionals and researchers to monitor water safety and make informed decisions.
                </p>
                <div className="mt-6">
                  <InstallButton />
                </div>
            </CardContent>
        </Card>
      </main>
    </div>
  );
}
