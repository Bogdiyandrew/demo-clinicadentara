import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import LeftSidebar from './components/LeftSidebar';
import MobileHeader from './components/MobileHeader';
import Footer from './components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ClinicDemo - Zâmbetul Tău Perfect',
  description: 'Demo uimitor pentru o clinică dentară modernă.',
  icons: {
    icon: '/laga.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
      </head>
      <body className="font-sans antialiased bg-background text-foreground selection:bg-primary/20 selection:text-primary">
        <div className="flex min-h-screen bg-background">
          <LeftSidebar />
          <div className="w-full md:flex-1 md:ml-64 md:overflow-y-auto relative flex flex-col">
            <MobileHeader />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
