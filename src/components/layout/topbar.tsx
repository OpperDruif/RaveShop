'use client';

import { Search } from 'lucide-react';

const actionByPath: Record<string, string> = {
  '/dashboard': 'New Task',
  '/raveups': 'New RaveUp',
  '/drive': 'Upload Files',
};

export function Topbar({ pathname }: { pathname: string }) {
  const action = actionByPath[pathname] ?? 'Create';

  return (
    <header className="raveline-card sticky top-0 z-20 ml-20 flex h-20 items-center justify-between rounded-b-2xl px-8">
      <div>
        <p className="text-xs tracking-[0.24em] text-ember-subtle">RCD</p>
        <h1 className="text-lg font-semibold">Raveline Crew Dashboard</h1>
      </div>
      <div className="flex items-center gap-4">
        <select className="rounded-xl border border-ember-orange/30 bg-black/30 px-3 py-2 text-sm">
          <option>Defqon Week</option>
          <option>Dominance Season</option>
        </select>
        <label className="flex items-center gap-2 rounded-xl border border-ember-orange/30 bg-black/30 px-3 py-2">
          <Search className="h-4 w-4 text-ember-subtle" />
          <input className="bg-transparent text-sm outline-none placeholder:text-ember-subtle" placeholder="Search crew, assets..." />
        </label>
        <button className="rounded-xl bg-ember-orange px-4 py-2 text-sm font-semibold text-black shadow-ember transition hover:shadow-ember-strong">
          {action}
        </button>
        <div className="h-10 w-10 rounded-full border border-ember-orange/40 bg-ember-bronze/40" />
      </div>
    </header>
  );
}
