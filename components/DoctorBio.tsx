import PageHero from "@/components/PageHero";

export default function DoctorBio({
  name,
  role,
  bio,
  color = "pink",
}: {
  name: string;
  role: string;
  bio: string[];
  color?: "pink" | "orange" | "blue" | "purple";
}) {
  return (
    <div>
      <PageHero eyebrow="Meet Our Team" title={name} color={color} />
      <section className="mx-auto max-w-3xl px-4 py-16">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 rounded-full bg-pine-cream flex items-center justify-center text-3xl">
            🦷
          </div>
          <p className="font-heading text-lg text-pine-orange">{role}</p>
        </div>
        <div className="space-y-5 text-slate-600 leading-relaxed">
          {bio.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>
    </div>
  );
}
