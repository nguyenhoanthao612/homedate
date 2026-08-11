import type {Metadata} from 'next';
import { Manrope, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css'; // Global styles

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://almahome.vercel.app'),
  title: "Alma Home | Your space your moment",
  description: "Alma Home hiện đại, sang trọng, không gian của bạn khoảnh khắc của bạn.",
  openGraph: {
    title: "Alma Home | Your space your moment",
    description: "Alma Home hiện đại, sang trọng, không gian của bạn khoảnh khắc của bạn.",
    url: "https://almahome.vercel.app/",
    siteName: "Alma Home",
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alma Home | Your space your moment",
    description: "Alma Home hiện đại, sang trọng, không gian của bạn khoảnh khắc của bạn.",
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="vi" className={`${manrope.variable} ${plusJakartaSans.variable} scroll-smooth`}>
      <body className="bg-luxury-50 text-luxury-800 antialiased font-sans" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

