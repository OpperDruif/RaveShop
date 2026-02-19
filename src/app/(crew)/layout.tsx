'use client';

import { usePathname } from 'next/navigation';
import { BackgroundWrapper } from '@/components/layout/background-wrapper';
import { Sidebar } from '@/components/layout/sidebar';
import { Topbar } from '@/components/layout/topbar';

export default function CrewLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <BackgroundWrapper>
      <Sidebar />
      <Topbar pathname={pathname} />
      <main className="ml-20 p-8">{children}</main>
      <footer className="ml-20 px-8 pb-6 text-xs text-ember-subtle">One Tribe, Worldwide</footer>
    </BackgroundWrapper>
  );
}
