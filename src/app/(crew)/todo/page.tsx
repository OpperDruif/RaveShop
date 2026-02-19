'use client';

import { motion } from 'framer-motion';
import { PageTransition } from '@/components/ui/page-transition';

export default function TodoPage() {
  const tabs = ['Critical', 'Staged', 'Building', 'Logistics', 'Planning', 'Gear', 'FriendsCamps'];

  return (
    <PageTransition>
      <section className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">{tabs.map((tab) => <span key={tab} className="rounded-full border border-ember-orange/30 px-3 py-1 text-sm">{tab}</span>)}</div>
          <div className="raveline-card rounded-2xl p-5">
            <h2 className="text-2xl font-semibold">Task Lanes</h2>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="rounded-lg border border-ember-orange/20 p-3">Critical: Stage power validation</li>
              <li className="rounded-lg border border-ember-orange/20 p-3">Building: FriendsCamp entrance arch</li>
              <li className="rounded-lg border border-ember-orange/20 p-3">Logistics: Shuttle wristbands batch</li>
            </ul>
          </div>
        </div>
        <aside className="raveline-card rounded-2xl p-5">
          <h3 className="text-lg font-semibold">Completion</h3>
          <motion.div initial={{ width: 0 }} animate={{ width: '72%' }} transition={{ duration: 0.8 }} className="mt-4 h-3 rounded-full bg-gradient-to-r from-ember-orange to-ember-gold" />
          <p className="mt-3 text-sm text-ember-muted">72% complete</p>
        </aside>
      </section>
    </PageTransition>
  );
}
