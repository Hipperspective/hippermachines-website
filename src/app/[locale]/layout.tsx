import type { Metadata } from 'next';
import { Playfair_Display, Lato } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n/config';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '../globals.css';

// Playfair Display - Elegant serif for headlines
const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
});

// Lato - Clean sans-serif for body
const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-body',
  display: 'swap',
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: {
      default: t('title'),
      template: `%s | Hipper Machines`
    },
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      locale: locale,
      type: 'website',
      siteName: 'Hipper Machines',
    },
    alternates: {
      languages: Object.fromEntries(
        locales.map(l => [l, `/${l}`])
      ),
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  const themeScript = `
    (function() {
      try {
        var d = document.documentElement;
        var stored = localStorage.getItem('theme');
        var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        var isDark = stored === 'dark' || (!stored && prefersDark);
        d.classList.remove('dark', 'light');
        d.classList.add(isDark ? 'dark' : 'light');
        d.style.backgroundColor = isDark ? '#1A1816' : '#FAF8F5';
        d.style.colorScheme = isDark ? 'dark' : 'light';
      } catch (e) {}
    })();
  `;

  return (
    <html lang={locale} suppressHydrationWarning className={`${playfairDisplay.variable} ${lato.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: themeScript }}
          suppressHydrationWarning
        />
      </head>
      <body className="font-body flex flex-col min-h-screen bg-background text-foreground">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
