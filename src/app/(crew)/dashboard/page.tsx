import { deployments, crewPulse } from '@/data/mock-data';
import { PageTransition } from '@/components/ui/page-transition';

export default function DashboardPage() {
  return (
    <PageTransition>
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">Welkom terug, Nyra</h2>
        <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <article className="raveline-card rounded-2xl p-6">
            <p className="text-sm text-ember-muted">Next Deployment</p>
            <h3 className="mt-2 text-2xl font-semibold">Defqon Week — Main Stage</h3>
            <p className="text-ember-subtle">Biddinghuizen, Netherlands</p>
            <button className="mt-5 rounded-xl bg-ember-orange px-4 py-2 font-semibold text-black">Crew Briefing</button>
          </article>
          <aside className="raveline-card rounded-2xl p-6">
            <h3 className="mb-4 text-lg font-semibold">Crew Pulse</h3>
            <div className="space-y-3">
              {crewPulse.map((item) => (
                <div key={item.label} className="flex justify-between border-b border-ember-orange/20 pb-2 text-sm">
                  <span className="text-ember-muted">{item.label}</span>
                  <span>{item.value}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {deployments.map((deployment) => (
            <article key={deployment.title} className="raveline-card rounded-2xl p-5 transition hover:shadow-ember-strong">
              <h4 className="text-lg font-semibold">{deployment.title}</h4>
              <p className="text-sm text-ember-muted">{deployment.date} · {deployment.location}</p>
              <p className="mt-3 text-sm">Participation {deployment.participation}%</p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                {['Crew', 'Participants', 'Assets', 'Logistics', 'Tasks'].map((tag) => (
                  <span key={tag} className="rounded-full border border-ember-orange/30 px-2 py-1">{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
