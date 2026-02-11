import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hipper Machines',
  description: 'Precision machines for professional reed making',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
