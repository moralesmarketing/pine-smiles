import PageHero from "@/components/PageHero";

export const metadata = { title: "Before & After | Orthodontics | Pine Smiles" };

const cases = Array.from({ length: 6 }, (_, i) => `Case ${i + 1}`);

export default function BeforeAfterPage() {
  return (
    <div>
      <PageHero eyebrow="Orthodontics" title="Before & After" color="purple" />
      <section className="mx-auto max-w-5xl px-4 py-16">
        <p className="text-center text-slate-600 max-w-2xl mx-auto mb-10">
          Real smiles, real results. Photos of actual Pine Smiles patients.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cases.map((c) => (
            <div
              key={c}
              className="aspect-square rounded-3xl bg-pine-cream border-2 border-dashed border-pine-purple/30 flex items-center justify-center text-pine-purple font-heading"
            >
              {c}
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-slate-400 mt-8">
          Patient photos pending &mdash; these will be added once we confirm
          patient consent to reuse the original before/after photos on the
          new site.
        </p>
      </section>
    </div>
  );
}
