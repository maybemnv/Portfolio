import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Manav Kaushal — Data Scientist & AI Engineer',
  description: 'Portfolio of Manav Kaushal — Data Scientist, AI Engineer, and MLOps practitioner building scalable AI systems.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
