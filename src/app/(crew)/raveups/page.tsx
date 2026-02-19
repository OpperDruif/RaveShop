import { PageTransition } from '@/components/ui/page-transition';

export default function RaveUpsPage() {
  return (
    <PageTransition>
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">Festival Operations — Netherlands</h2>
        <div className="flex flex-wrap gap-2">{['Upcoming', 'Past', 'Mainstage', 'FriendsCamps', 'Hardstyle', 'International'].map((f) => <span key={f} className="rounded-full border border-ember-orange/30 px-3 py-1 text-sm">{f}</span>)}</div>
        <article className="raveline-card rounded-2xl p-6">
          <h3 className="text-xl font-semibold">Defqon Week Featured RaveUp</h3>
          <div className="mt-4 h-2 overflow-hidden rounded-full bg-black/40"><div className="h-full w-3/4 bg-gradient-to-r from-ember-orange to-ember-gold" /></div>
          <div className="mt-4 grid grid-cols-4 gap-2 text-xs text-ember-muted">{['Briefing', 'Setup', 'Live Ops', 'Cooldown'].map((s) => <div key={s} className="rounded-lg border border-ember-orange/30 p-2">{s}</div>)}</div>
        </article>
      </section>
    </PageTransition>
  );
}
