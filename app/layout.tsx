import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import LeftSidebar from './components/LeftSidebar';
import MobileHeader from './components/MobileHeader';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ClinicDemo - Zâmbetul Tău Perfect',
  description: 'Demo uimitor pentru o clinică dentară modernă.',
  icons: {
    icon: '/lloogo.png', // favicon-ul corect
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
      </head>
      <body className={inter.className}>
        {/* Container principal: Sidebar + Conținut */}
        <div className="flex min-h-screen bg-gray-100">
          <LeftSidebar />
          <div className="w-full md:flex-1 md:overflow-y-auto relative">
            <MobileHeader />
            {children}
          </div>
        </div>

        {/* Footer-ul, plasat corect în afara containerului principal */}
        <Footer />
      </body>
    </html>
  );
}
