import type { Metadata } from 'next';
import './globals.css';
import { Poppins } from 'next/font/google';
import Provider from '@/lib/provider';
import { Toaster } from 'sonner';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Artif Software',
  description:
    'Artif software offers top-notch web design and development services, including UI/UX design, advanced development, and AI solutions.',
  twitter: {
    card: 'summary_large_image',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  params: {
    locale: string;
  };
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${poppins.className}`}>
        <Provider>
          {children} <Toaster />
        </Provider>
      </body>
    </html>
  );
}
