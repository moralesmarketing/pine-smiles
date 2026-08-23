import PageHero from "@/components/PageHero";
import Faq from "@/components/Faq";
import { pediatricFaq } from "@/lib/site-data";

export const metadata = { title: "Pediatric FAQ | Pine Smiles" };

export default function PediatricFaqPage() {
  return (
    <div>
      <PageHero eyebrow="Pediatric Dentistry" title="Pediatric FAQ" color="blue" />
      <section className="mx-auto max-w-3xl px-4 py-16">
        <Faq items={pediatricFaq} />
      </section>
    </div>
  );
}
