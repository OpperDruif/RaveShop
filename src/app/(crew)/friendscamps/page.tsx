import { PageTransition } from '@/components/ui/page-transition';

export default function FriendsCampsPage() {
  return (
    <PageTransition>
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">FriendsCamps in the Netherlands</h2>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {['Iron Wolves', 'Neon Echo', 'Bass Monks', 'Solar Havoc'].map((camp, i) => (
            <article key={camp} className="raveline-card rounded-2xl p-4 transition hover:shadow-ember-strong">
              <p className="text-xs text-ember-muted">Rank #{i + 1}</p>
              <h3 className="mt-2 text-lg font-semibold">{camp}</h3>
              <p className="text-sm text-ember-subtle">Defqon Week</p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs">{['Chat', 'Tasks', 'Gear', 'Connect'].map((a) => <span key={a} className="rounded-full border border-ember-orange/30 px-2 py-1">{a}</span>)}</div>
            </article>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
