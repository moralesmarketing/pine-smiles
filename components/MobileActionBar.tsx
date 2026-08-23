import { business } from "@/lib/site-data";

export default function MobileActionBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 grid grid-cols-3 bg-pine-purple text-white text-xs font-semibold shadow-[0_-4px_12px_rgba(0,0,0,0.15)]">
      <a
        href={business.phoneHref}
        className="flex flex-col items-center justify-center gap-1 py-3 border-r border-white/15"
      >
        <span aria-hidden>📞</span>
        Call Now
      </a>
      <a
        href={business.mapsDirectionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center gap-1 py-3 border-r border-white/15"
      >
        <span aria-hidden>📍</span>
        Directions
      </a>
      <a
        href="/our-office"
        className="flex flex-col items-center justify-center gap-1 py-3 bg-pine-orange"
      >
        <span aria-hidden>🗓️</span>
        Schedule
      </a>
    </div>
  );
}
