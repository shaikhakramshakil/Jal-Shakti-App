"use client";

import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';

export function FilterOptions() {
    return (
        <section>
            <h2 className="text-lg font-bold mb-3 sr-only">Filter</h2>
            <div className="flex gap-3 flex-wrap">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="flex items-center justify-center gap-x-2 rounded-lg bg-primary/10 dark:bg-primary/20 text-gray-800 dark:text-gray-200 px-4 py-2 text-sm font-medium">
                            <span>Location</span>
                            <ChevronDown className="h-5 w-5" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem>Location 1</DropdownMenuItem>
                        <DropdownMenuItem>Location 2</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="flex items-center justify-center gap-x-2 rounded-lg bg-primary/10 dark:bg-primary/20 text-gray-800 dark:text-gray-200 px-4 py-2 text-sm font-medium">
                            <span>Date</span>
                            <ChevronDown className="h-5 w-5" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem>Last 7 days</DropdownMenuItem>
                        <DropdownMenuItem>Last 30 days</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="flex items-center justify-center gap-x-2 rounded-lg bg-primary/10 dark:bg-primary/20 text-gray-800 dark:text-gray-200 px-4 py-2 text-sm font-medium">
                            <span>Parameters</span>
                            <ChevronDown className="h-5 w-5" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem>Parameter 1</DropdownMenuItem>
                        <DropdownMenuItem>Parameter 2</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </section>
    );
}
