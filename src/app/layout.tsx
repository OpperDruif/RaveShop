import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'RCD — Raveline Crew Dashboard',
  description: 'Internal festival operations platform for Raveline Division crew members.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
