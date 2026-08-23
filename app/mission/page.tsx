import PageHero from "@/components/PageHero";

export const metadata = { title: "Our Mission | Pine Smiles" };

export default function MissionPage() {
  return (
    <div>
      <PageHero eyebrow="Pine Smiles | Chino Hills, CA" title="Our Mission" color="purple" />
      <section className="mx-auto max-w-3xl px-4 py-16 space-y-6 text-slate-600 leading-relaxed">
        <p className="text-xl font-heading text-pine-pink">
          Our vision is to provide excellent, comprehensive dental care for
          our patients with a positive experience right from the start.
        </p>
        <p>
          Pine Smiles Orthodontics and Pediatric Dentistry is a
          family-owned and family-centered comprehensive dental home for the
          community. We emphasize the importance of excellent oral health
          care and how to achieve long-lasting, happy smiles. By encouraging
          our patients and maintaining good communication with them, we aim
          to earn their trust and build their confidence in us, making them
          feel comfortable in our care.
        </p>
        <p>
          As a state of the art, digital office, we can enhance the
          education experience with our families. Parents will always be
          involved with the child in education, prevention and diagnosis of
          dental disease. We truly believe that a partnership between our
          office and the parents will encourage our patients to maintain an
          overall healthy lifestyle.
        </p>
      </section>
    </div>
  );
}
