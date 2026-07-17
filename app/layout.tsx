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
  title: "Alma Home | Nghỉ Dưỡng Đà Lạt Đích Thực",
  description: "Website giới thiệu Alma Home hiện đại, sang trọng, tối ưu trải nghiệm người dùng và dễ dàng tùy biến.",
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

