import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import SectionHeader from '@/components/SectionHeader';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'סטודיו לצילום אלפא',
  description: 'אנחנו סטודיו לצילום מוביל בתחום הצילום עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#588C7E" />
      </head>
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          {/* Navbar will be inserted here */}
          <SectionHeader />
          <Navbar />

          {children}


          <footer className="py-6 bg-gray-100 dark:bg-gray-800 mt-10">
            <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
              &copy; 2025 סטודיו לצילום אלפא. webis
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
