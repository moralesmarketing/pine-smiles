import PageHero from "@/components/PageHero";
import { whatSetsUsApart } from "@/lib/site-data";

export const metadata = { title: "What Sets Us Apart | Pine Smiles" };

const colors = ["pine-pink", "pine-orange", "pine-blue", "pine-purple"];

export default function WhatSetsUsApartPage() {
  return (
    <div>
      <PageHero eyebrow="Meet Our Team" title="What Sets Us Apart" color="orange" />
      <section className="mx-auto max-w-5xl px-4 py-16 grid sm:grid-cols-2 gap-6">
        {whatSetsUsApart.map((item, i) => (
          <div key={item.title} className="rounded-2xl border-2 border-slate-100 p-6">
            <div
              className="w-10 h-10 rounded-full mb-4"
              style={{ background: `var(--${colors[i % colors.length]})` }}
            />
            <h2 className="font-heading text-lg mb-2 text-slate-800">{item.title}</h2>
            <p className="text-sm text-slate-600 leading-relaxed">{item.body}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
