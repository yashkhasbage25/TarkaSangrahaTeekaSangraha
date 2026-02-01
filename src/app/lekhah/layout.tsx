import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'लेखाः - Articles on Nyāya Philosophy',
  description: 'न्यायदर्शनविषयकाः लेखाः - Articles and blogs on Nyāya philosophy, Tarkasaṅgraha, and Indian logic.',
};

export default function LekhahLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
