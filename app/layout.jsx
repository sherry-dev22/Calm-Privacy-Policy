import localFont from 'next/font/local';
import { site } from '../site.config';
import './globals.css';

const display = localFont({
  src: './fonts/Fraunces.ttf',
  variable: '--font-display',
  display: 'swap',
});

const body = localFont({
  src: './fonts/PlusJakartaSans.ttf',
  variable: '--font-body',
  display: 'swap',
});

export const metadata = {
  title: `Privacy Policy | ${site.appName}`,
  description: `How the ${site.appName} sleep and relaxation app handles your information.`,
  robots: { index: true, follow: true },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0c0a2a',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
