
"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

export function InstallButton() {
  const { toast } = useToast();
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallpPromptEvent);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        toast({ title: 'Installation Success!', description: 'Jal Shakti has been added to your device.' });
      } else {
        toast({ title: 'Installation Dismissed', description: 'You can install the app later from the browser menu.' });
      }
      setDeferredPrompt(null);
    } else {
        toast({ title: 'Already Installed or Not Supported', description: 'Your browser may not support PWA installation, or the app is already installed.' });
    }
  };
  
  if (!deferredPrompt) return null;

  return (
    <Button
      onClick={handleInstallClick}
      className="w-full font-bold py-3 px-5 h-auto rounded-lg shadow-lg shadow-primary/30"
    >
      <Download className="mr-2 h-5 w-5" />
      Install App
    </Button>
  );
}
