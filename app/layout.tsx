import type { Metadata } from 'next';
import { ibmPlexSansArabic } from '@/app/fonts';
import '@/app/globals.css';

export const metadata: Metadata = {
  title: 'Podbay Clone',
  description: 'Search for podcasts and episodes.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${ibmPlexSansArabic.variable}`}>
      <body>{children}</body>
    </html>
  );
}
