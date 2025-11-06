import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import LeftSidebar from './components/LeftSidebar';
import MobileHeader from './components/MobileHeader';
import Footer from './components/Footer'; // 1. Importă noul Footer

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
        
        {/* Containerul principal flexibil (Sidebar + Conținut) */}
        <div className="flex min-h-screen bg-gray-100">
          
          <LeftSidebar />

          <div className="w-full md:flex-1 md:overflow-y-auto relative">
            <MobileHeader />
            {children}
          </div>

        </div>

        {/* 2. Adaugă Footer-ul aici, în afara div-ului flexibil */}
        <Footer /> 

      </body>
    </html>
  );
}