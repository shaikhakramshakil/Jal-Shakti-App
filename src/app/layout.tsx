import type {Metadata} from 'next';
import { Toaster } from "@/components/ui/toaster";
import './globals.css';
import { ServiceWorkerRegistration } from '@/components/pwa/service-worker-registration';

export const metadata: Metadata = {
  title: 'Jal Shakti',
  description: 'Design and development of an application for Heavy Metal Pollution indices.',
  manifest: '/manifest.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
        <meta name="theme-color" content="#90EE90" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      </head>
      <body className="font-body antialiased" suppressHydrationWarning>
        <ServiceWorkerRegistration />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
