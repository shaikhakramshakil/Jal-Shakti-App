
"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import type { GroundwaterSample } from "@/lib/data";
import { AlertTriangle } from "lucide-react";

type PollutionAlertDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  sample: GroundwaterSample;
};

export function PollutionAlertDialog({ open, onOpenChange, sample }: PollutionAlertDialogProps) {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className="max-w-sm">
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mb-4">
            <AlertTriangle className="text-destructive h-8 w-8" />
          </div>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-lg font-bold text-destructive">High Pollution Alert</AlertDialogTitle>
            <AlertDialogDescription>
              A significant change in HMPI detected.
            </AlertDialogDescription>
          </AlertDialogHeader>
        </div>
        <div className="mt-6 space-y-3">
          <div className="flex justify-between items-center text-sm">
            <p className="text-muted-foreground font-medium">Location:</p>
            <p className="font-semibold">{sample.location}</p>
          </div>
          <div className="flex justify-between items-center text-sm">
            <p className="text-muted-foreground font-medium">New HMPI Value:</p>
            <p className="text-destructive font-bold text-lg">{sample.hmpi.toFixed(2)}</p>
          </div>
        </div>
        <AlertDialogFooter className="mt-6 gap-3">
            <AlertDialogCancel asChild>
                <Button variant="outline">Dismiss</Button>
            </AlertDialogCancel>
            <AlertDialogAction asChild>
                <Button>View Details</Button>
            </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
