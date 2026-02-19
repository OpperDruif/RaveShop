export function BackgroundWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen bg-[linear-gradient(180deg,#0B0D0F_0%,#1A0F0C_100%)]">
      <div
        className="fixed inset-0 -z-30 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/festival-bg.jpg')" }}
      />
      <div className="fixed inset-0 -z-20 bg-black/55" />
      <div className="ember-grid fixed inset-0 -z-10 opacity-15" />
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/4 top-10 h-2 w-2 animate-pulse rounded-full bg-ember-orange/80" />
        <div className="absolute left-2/3 top-40 h-1.5 w-1.5 animate-ping rounded-full bg-ember-glow/70" />
        <div className="absolute left-1/2 top-80 h-2 w-2 animate-pulse rounded-full bg-ember-orange/60" />
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}
