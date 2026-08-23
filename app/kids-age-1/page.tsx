import PageHero from "@/components/PageHero";

export const metadata = { title: "Age 1 Visit | Pediatric Dentistry | Pine Smiles" };

export default function AgeOnePage() {
  return (
    <div>
      <PageHero eyebrow="Pediatric Dentistry" title="Age 1 Visit" color="pink" />
      <section className="mx-auto max-w-3xl px-4 py-16 space-y-5 text-slate-600 leading-relaxed">
        <p>
          Our office, as well as the American Academy of Pediatric Dentistry
          (AAPD), the American Academy of Pediatrics (AAP) and the American
          Dental Association (ADA) all recommend establishing a
          &ldquo;Dental Home&rdquo; for your child shortly after the first
          tooth erupts and no later than the child&rsquo;s first birthday.
          This allows us to begin a thorough prevention program for your
          child and avoid early childhood caries.
        </p>
        <p>
          First dental visits for babies are less clinical and more
          educational. Think of this first visit as a &ldquo;well baby
          check-up&rdquo; for your child&rsquo;s teeth. We perform a
          knee-to-knee exam with the child and engage parents by having them
          assist with the thorough oral exam, showing them the dentition,
          soft tissues, and brushing and flossing techniques.
        </p>
        <p>
          In this appointment Dr. Gandhi will also cover topics such as the
          importance of baby teeth, diet, development, breast or
          bottle-feeding, thumb-sucking and pacifier habits, fluoride use,
          and overall oral hygiene.
        </p>
        <p>
          The earlier the visit, the better the chance of learning how to
          prevent dental disease and helping your child belong to the
          cavity-free generation. Also, by establishing a relationship early
          with us, a surprise visit will not seem as nerve-racking for your
          child. By educating our parents about the benefits of prevention,
          we can partner together to teach children about the importance of
          healthy teeth right from the start.
        </p>
      </section>
    </div>
  );
}
