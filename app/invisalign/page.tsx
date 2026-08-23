import PageHero from "@/components/PageHero";
import Link from "next/link";

export const metadata = { title: "Invisalign | Orthodontics | Pine Smiles" };

export default function InvisalignPage() {
  return (
    <div>
      <PageHero eyebrow="Orthodontics" title="Invisalign & Invisalign Teen" color="blue" />
      <section className="mx-auto max-w-3xl px-4 py-16 space-y-6 text-slate-600 leading-relaxed">
        <p>
          For the patients who want the benefits of beautiful straight teeth
          without going through braces, Invisalign is a series of
          custom-made, clear aligners suited to adults and teens with minor
          orthodontic problems. The Invisalign aligners gradually move teeth
          into proper alignment. The major benefit of Invisalign is that
          this treatment makes the process nearly invisible. A proper
          assessment will identify whether Invisalign would be an ideal
          method for you.
        </p>
        <Link href="/our-office" className="btn-pill bg-pine-blue text-white inline-flex">
          Ask About Invisalign
        </Link>
      </section>
    </div>
  );
}
