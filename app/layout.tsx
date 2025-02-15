import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Manrope } from 'next/font/google';
import { UserProvider } from '@/lib/auth';
import { getUser } from '@/lib/db/queries';

export const metadata: Metadata = {
  title: 'The Hack Fix | Cybersecurity Solutions & Threat Intelligence',
  description: 'Enterprise-grade cybersecurity services including penetration testing, vulnerability assessments, and real-time threat detection. Certified ethical hackers protecting your digital assets.',
  keywords: [
    'cybersecurity',
    'penetration testing',
    'ethical hacking',
    'threat detection',
    'vulnerability assessment',
    'network security',
    'The Hack Fix'
  ].join(', '),
  authors: [{ name: 'The Hack Fix Team' }],
  openGraph: {
    title: 'The Hack Fix | Cybersecurity Defense Experts',
    description: 'Protect your business from cyber threats with our certified security solutions and YouTube security tutorials.',
    url: 'https://thehackfix.com',
    siteName: 'The Hack Fix',
    images: [
      {
        url: 'https://thehackfix.com/og-image.jpg',
        width: 1200,
        height: 630,
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Hack Fix | Cybersecurity Defense Experts',
    description: 'Enterprise cybersecurity solutions with integrated threat intelligence and educational YouTube content',
    creator: '@thehackfix',
    images: ['https://thehackfix.com/twitter-image.jpg'],
  },
};

export const viewport: Viewport = {
  maximumScale: 1,
  themeColor: '#0f172a', // Dark blue theme color
};

const manrope = Manrope({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let userPromise = getUser();

  return (
    <html
      lang="en"
      className={`bg-white dark:bg-gray-950 text-black dark:text-white ${manrope.className}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="min-h-[100dvh] bg-gray-50">
        <UserProvider userPromise={userPromise}>{children}</UserProvider>
      </body>
    </html>
  );
}
