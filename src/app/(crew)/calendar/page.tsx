import { PageTransition } from '@/components/ui/page-transition';

export default function CalendarPage() {
  return (
    <PageTransition>
      <section className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-4">
          <div className="flex items-center justify-between"><h2 className="text-3xl font-semibold">Calendar</h2><div className="flex gap-2 text-sm"><span className="rounded-lg border border-ember-orange/30 px-3 py-1">Month</span><span className="rounded-lg border border-ember-orange/30 px-3 py-1">Week</span></div></div>
          <div className="raveline-card grid grid-cols-7 gap-2 rounded-2xl p-4 text-sm">
            {Array.from({ length: 35 }).map((_, i) => <div key={i} className="min-h-20 rounded-lg border border-ember-orange/20 p-2">{i + 1}</div>)}
          </div>
        </div>
        <aside className="raveline-card rounded-2xl p-4">
          <h3 className="text-lg font-semibold">Mini Month View</h3>
        </aside>
      </section>
    </PageTransition>
  );
}
