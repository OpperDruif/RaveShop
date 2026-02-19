'use client';

import { Calendar, FolderOpen, LayoutDashboard, ListTodo, Radio, TentTree } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const items = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/raveups', label: 'RaveUps', icon: Radio },
  { href: '/friendscamps', label: 'FriendsCamps', icon: TentTree },
  { href: '/calendar', label: 'Calendar', icon: Calendar },
  { href: '/todo', label: 'ToDo', icon: ListTodo },
  { href: '/drive', label: 'Drive', icon: FolderOpen },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-30 flex h-screen w-20 flex-col items-center border-r border-ember-orange/25 bg-[#130d0b]/90 py-6 backdrop-blur-ember">
      {items.map((item) => {
        const isActive = pathname === item.href;
        const Icon = item.icon;

        return (
          <motion.div whileHover={{ scale: 1.05 }} key={item.href} className="mb-4">
            <Link
              href={item.href}
              className={cn(
                'relative flex h-12 w-12 items-center justify-center rounded-xl text-ember-muted transition-all hover:text-ember-text hover:shadow-ember',
                isActive && 'bg-ember-orange/15 text-ember-orange shadow-ember',
              )}
            >
              {isActive && <span className="absolute -left-4 h-8 w-1 rounded-full bg-ember-orange" />}
              <Icon className="h-5 w-5" />
            </Link>
          </motion.div>
        );
      })}
    </aside>
  );
}
