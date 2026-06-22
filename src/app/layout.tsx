import type { Metadata } from 'next';
import { Space_Mono, Outfit } from 'next/font/google';
import './globals.css';

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
});

const outfit = Outfit({
  weight: ['300', '400', '600'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Manav Kaushal — Data Scientist & AI Engineer',
  description:
    'Portfolio of Manav Kaushal — Data Scientist, AI Engineer, and MLOps practitioner building scalable AI systems.',
  metadataBase: new URL('https://manavkaushal.dev'),
  openGraph: {
    title: 'Manav Kaushal — Data Scientist & AI Engineer',
    description:
      'Data Scientist and AI Engineer building scalable, deployable AI systems. Currently obsessed with LLMs, Agentic Workflows, and Computer Vision.',
    url: 'https://manavkaushal.dev',
    siteName: 'Manav Kaushal',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title: 'Manav Kaushal — Data Scientist & AI Engineer',
    description:
      'Data Scientist and AI Engineer building scalable, deployable AI systems.',
    creator: '@maybemnv',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceMono.variable} ${outfit.variable}`}>
      <head>
        <meta name="theme-color" content="#050505" />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
