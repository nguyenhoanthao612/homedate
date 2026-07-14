import type {Metadata} from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "L'Amour Villa Homedate | Nghỉ Dưỡng Đà Lạt Đích Thực",
  description: "Website giới thiệu L'Amour Villa Homedate hiện đại, sang trọng, tối ưu trải nghiệm người dùng và dễ dàng tùy biến.",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="vi" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
      <body className="bg-luxury-50 text-luxury-800 antialiased font-sans" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

