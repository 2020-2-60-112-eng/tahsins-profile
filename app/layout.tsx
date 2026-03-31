import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Md Tahsin | Fullstack Web Developer',
  description: 'Professional portfolio for Md Tahsin — React, Next.js, Tailwind CSS developer.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
