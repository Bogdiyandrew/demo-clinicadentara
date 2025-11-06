import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import LeftSidebar from './components/LeftSidebar';
import MobileHeader from './components/MobileHeader'; // 1. Importă noul header

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ClinicDemo - Zâmbetul Tău Perfect',
  description: 'Demo uimitor pentru o clinică dentară modernă.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body className={inter.className}>
        
        <div className="flex min-h-screen bg-gray-100">
          
          {/* 1. Sidebar (Desktop) - este 'hidden md:flex' */}
          <LeftSidebar />

          {/* 2. Conținutul principal (Mobil + Desktop) */}
          <div className="w-full md:flex-1 md:overflow-y-auto relative">
            
            {/* 2a. Header-ul de Mobil - este 'md:hidden' */}
            <MobileHeader /> {/* 2. Adaugă componenta aici */}
            
            {/* 2b. Conținutul paginii */}
            {children}
          </div>

        </div>
      </body>
    </html>
  );
}