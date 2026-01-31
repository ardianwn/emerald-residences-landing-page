import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://emeraldresidences.com'),
  title: 'Emerald Residences | Hunian Premium di Lokasi Strategis',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.svg',
  },
  manifest: '/manifest.json',
  description: 'Temukan hunian impian Anda di Emerald Residences. Perumahan premium dengan fasilitas lengkap, keamanan 24 jam, dan lokasi strategis. Investasi properti terbaik untuk masa depan Anda.',
  keywords: ['properti', 'perumahan', 'hunian premium', 'investasi properti', 'rumah dijual', 'Emerald Residences'],
  authors: [{ name: 'Emerald Properties' }],
  openGraph: {
    title: 'Emerald Residences | Hunian Premium di Lokasi Strategis',
    description: 'Temukan hunian impian Anda di Emerald Residences. Perumahan premium dengan fasilitas lengkap.',
    type: 'website',
    locale: 'id_ID',
    url: 'https://emeraldresidences.com',
    siteName: 'Emerald Residences',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Emerald Residences - Hunian Premium',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emerald Residences | Hunian Premium',
    description: 'Temukan hunian impian Anda di Emerald Residences.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="font-sans bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
