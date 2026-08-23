import PageHero from "@/components/PageHero";

export const metadata = { title: "Hygiene Appointment | Pediatric Dentistry | Pine Smiles" };

const weDo = [
  "Take x-rays (if needed; child-dependent)",
  "Screen for cancer and other diseases",
  "Assess growth and development",
  "Assess orthodontic needs",
  "Evaluate gum disease",
  "Check for cavities",
  "Apply fluoride",
  "Examine the diagnostic x-rays",
  "Assess the integrity of existing dental restorations (fillings)",
  "Educate you on your child's oral health status",
];

const weEstablish = [
  "A program of preventive home care including brushing, flossing, diet, and fluoride use",
  "A caries risk assessment",
  "Information about Early Childhood Caries",
  "Facts about oral habits",
  "What to do about preventing injuries to mouth and teeth and what to do if it happens",
  "Information on growth and development (when teeth erupt and fall out)",
];

export default function HygienePage() {
  return (
    <div>
      <PageHero eyebrow="Pediatric Dentistry" title="Hygiene Appointment" color="orange" />
      <section className="mx-auto max-w-3xl px-4 py-16 space-y-6 text-slate-600 leading-relaxed">
        <p>
          Preventive care includes regular professional teeth cleanings. The
          frequency of hygiene appointments will depend on the health of
          your child&rsquo;s teeth, gums and bone. Healthy children should
          have their teeth cleaned at least once every 6 months. If your
          child has high caries risk, which will be discussed with Dr.
          Gandhi, your child&rsquo;s teeth may need to be cleaned more
          often. Regular preventive dental visits allow problems to be
          identified early.
        </p>
        <p>
          During a standard appointment, one of our trained staff members
          will remove the build-up of soft (plaque) and hard (tartar,
          calculus or stains) deposits from the teeth and soft tissue.
        </p>
        <div className="grid sm:grid-cols-2 gap-8 pt-4">
          <div>
            <h2 className="font-heading text-lg text-pine-orange mb-3">We Also Will:</h2>
            <ul className="space-y-2 text-sm">
              {weDo.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-pine-pink">•</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-heading text-lg text-pine-blue mb-3">
              For Each Child, We Will Always Establish:
            </h2>
            <ul className="space-y-2 text-sm">
              {weEstablish.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-pine-pink">•</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="pt-2">
          Establishing a caries prevention program for your child is
          extremely important at Pine Smiles. The earlier the dental visit,
          the better the chance of preventing dental disease and helping
          your child build a cavity-free smile!
        </p>
      </section>
    </div>
  );
}
