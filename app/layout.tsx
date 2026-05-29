import type { Metadata } from 'next';
import './globals.css';
import { Sidebar } from '@/components/sidebar';

export const metadata: Metadata = {
  title: 'DevToolkit',
  description: 'A modern, professional platform for essential developer utilities.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className="flex min-h-screen bg-gray-50">
        <Sidebar />
        <main className="flex-1 bg-white">{children}</main>
      </body>
    </html>
  );
}
