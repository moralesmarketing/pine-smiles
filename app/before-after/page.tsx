import Image from "next/image";
import PageHero from "@/components/PageHero";

export const metadata = { title: "Before & After | Orthodontics | Pine Smiles" };

const cases = Array.from({ length: 6 }, (_, i) => ({
  label: `Case ${i + 1}`,
  image: `/images/before-after/case-${i + 1}.webp`,
}));

export default function BeforeAfterPage() {
  return (
    <div>
      <PageHero eyebrow="Orthodontics" title="Before & After" color="purple" />
      <section className="mx-auto max-w-4xl px-4 py-16">
        <p className="text-center text-slate-600 max-w-2xl mx-auto mb-10">
          Real smiles, real results. Photos of actual Pine Smiles patients.
        </p>
        <div className="space-y-8">
          {cases.map((c) => (
            <div key={c.label}>
              <p className="font-heading text-pine-purple mb-2">{c.label}</p>
              <div className="relative w-full aspect-[1500/552] rounded-2xl overflow-hidden border-2 border-slate-100">
                <Image
                  src={c.image}
                  alt={`${c.label} — before and after orthodontic treatment`}
                  fill
                  sizes="(min-width: 1024px) 900px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
