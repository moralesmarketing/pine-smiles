import PageHero from "@/components/PageHero";
import { reviews } from "@/lib/site-data";

export const metadata = { title: "Reviews | Pine Smiles" };

const colors = ["pine-pink", "pine-orange", "pine-blue", "pine-purple"];

export default function ReviewsPage() {
  return (
    <div>
      <PageHero eyebrow="Families Love Us" title="Reviews" color="blue" />
      <section className="mx-auto max-w-4xl px-4 py-16">
        <p className="text-center text-slate-600 max-w-2xl mx-auto mb-10">
          Experience is what validates an idea, but testimonials and reviews
          can certainly help you decide what to do on a day to day basis.
          Here are some of our reviews from Yelp and Google Reviews.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((r, i) => (
            <div key={r.author} className="bg-pine-cream rounded-3xl p-8">
              <div
                className="w-10 h-10 rounded-full mb-4"
                style={{ background: `var(--${colors[i % colors.length]})` }}
              />
              <p className="text-slate-700 leading-relaxed mb-4">
                &ldquo;{r.quote}&rdquo;
              </p>
              <p className="font-heading text-pine-pink">
                {r.author}
                {r.location ? `, ${r.location}` : ""}
              </p>
              <p className="text-xs text-slate-500 uppercase tracking-wide">
                {r.source}
              </p>
            </div>
          ))}
        </div>
        <p className="text-center text-slate-500 text-sm mt-10 max-w-xl mx-auto">
          These reviews and testimonials are not shown here to brag, but to
          inspire you to give us your confidence &mdash; we will do our best
          to give you the help you deserve. See you soon!
        </p>
      </section>
    </div>
  );
}
