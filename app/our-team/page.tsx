import PageHero from "@/components/PageHero";

export const metadata = { title: "Our Team | Pine Smiles" };

const moments = [
  { title: "Staff Appreciation — Dodgers Game", color: "bg-pine-blue" },
  { title: "Staff Appreciation — Hollywood Bowl", color: "bg-pine-pink" },
  { title: "Reaching for the Cure 5K Walk", color: "bg-pine-orange" },
  { title: "American Association of Orthodontists (AAO) Meeting", color: "bg-pine-purple" },
  { title: "American Association of Pediatric Dentistry (AAPD) Meeting", color: "bg-pine-orange-light" },
];

export default function OurTeamPage() {
  return (
    <div>
      <PageHero eyebrow="Meet Our Team" title="Our Team" color="blue" />
      <section className="mx-auto max-w-5xl px-4 py-16">
        <p className="text-center text-slate-600 max-w-2xl mx-auto mb-10">
          We&rsquo;re a family-run team that loves growing together &mdash;
          in the office and out. Here are a few of our favorite moments as a
          team.
        </p>
        <div className="grid sm:grid-cols-2 gap-6">
          {moments.map((m) => (
            <div
              key={m.title}
              className={`${m.color} rounded-3xl aspect-video flex items-end p-6 text-white font-heading text-lg`}
            >
              {m.title}
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-slate-400 mt-8">
          Real team photos coming soon.
        </p>
      </section>
    </div>
  );
}
