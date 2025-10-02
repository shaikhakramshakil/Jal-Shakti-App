
"use client";

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { NotificationList } from '@/components/notifications/notification-list';
import { MobileNav } from '@/components/layout/mobile-nav';

export default function NotificationsPage() {
    const router = useRouter();

    return (
        <div className="flex flex-col min-h-screen w-full">
            <header className="sticky top-0 z-10 flex items-center justify-between border-b bg-background/80 p-4 pb-3 backdrop-blur-sm">
                <Button variant="ghost" size="icon" className="p-2 -ml-2" onClick={() => router.back()}>
                    <ArrowLeft />
                </Button>
                <h1 className="text-lg font-bold">Notifications</h1>
                <div className="h-10 w-10"></div>
            </header>
            <main className="flex-grow p-4">
                 <NotificationList />
            </main>
            <MobileNav />
        </div>
    );
}
