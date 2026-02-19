import { PageTransition } from '@/components/ui/page-transition';

export default function DrivePage() {
  return (
    <PageTransition>
      <section className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-5">
          <h2 className="text-3xl font-semibold">Drive</h2>
          <div className="raveline-card rounded-2xl p-5">
            <p className="text-sm text-ember-muted">43.6GB of 60GB</p>
            <div className="mt-3 h-3 overflow-hidden rounded-full bg-black/40"><div className="h-full w-[72%] bg-gradient-to-r from-ember-orange to-ember-gold" /></div>
          </div>
          <div className="grid gap-3 md:grid-cols-2">{['Planning', 'FreshCamp', 'Logistics', 'Payments'].map((f) => <div key={f} className="raveline-card rounded-xl p-4">{f}</div>)}</div>
        </div>
        <aside className="raveline-card rounded-2xl p-5">
          <h3 className="text-lg font-semibold">Recent Uploads + Stats</h3>
        </aside>
      </section>
    </PageTransition>
  );
}
