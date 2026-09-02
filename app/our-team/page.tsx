import Image from "next/image";
import PageHero from "@/components/PageHero";

export const metadata = { title: "Our Team | Pine Smiles" };

const moments = [
  {
    title: "Staff Appreciation — Dodgers Game",
    image: "/images/team/dodgers-game.webp",
  },
  {
    title: "Staff Appreciation — Hollywood Bowl",
    image: "/images/team/hollywood-bowl.webp",
  },
  {
    title: "Reaching for the Cure 5K Walk",
    image: "/images/team/reaching-for-the-cure-5k.webp",
    objectPosition: "bottom",
  },
  {
    title: "American Association of Orthodontists (AAO) Meeting",
    image: "/images/team/aao-meeting.webp",
  },
  {
    title: "American Association of Pediatric Dentistry (AAPD) Meeting",
    image: null,
    color: "bg-pine-orange-light",
  },
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
          {moments.map((m) =>
            m.image ? (
              <div
                key={m.title}
                className="relative rounded-3xl overflow-hidden aspect-video group"
              >
                <Image
                  src={m.image}
                  alt={m.title}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                  style={{ objectPosition: m.objectPosition ?? "center" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent flex items-end p-6">
                  <span className="text-white font-heading text-lg">
                    {m.title}
                  </span>
                </div>
              </div>
            ) : (
              <div
                key={m.title}
                className={`${m.color} rounded-3xl aspect-video flex items-end p-6 text-white font-heading text-lg`}
              >
                {m.title}
              </div>
            )
          )}
        </div>
        <p className="text-center text-sm text-slate-400 mt-8">
          More team photos coming soon.
        </p>
      </section>
    </div>
  );
}
