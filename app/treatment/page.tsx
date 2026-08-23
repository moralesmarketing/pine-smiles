import PageHero from "@/components/PageHero";
import { orthoTreatmentSections } from "@/lib/site-data";

export const metadata = { title: "Treatment | Orthodontics | Pine Smiles" };

export default function TreatmentPage() {
  return (
    <div>
      <PageHero eyebrow="Orthodontics" title="Treatment" color="pink" />
      <section className="mx-auto max-w-3xl px-4 py-16 space-y-10">
        {orthoTreatmentSections.map((s) => (
          <div key={s.title}>
            <h2 className="font-heading text-xl text-pine-pink mb-3">{s.title}</h2>
            <p className="text-slate-600 leading-relaxed">{s.body}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
