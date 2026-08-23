import PageHero from "@/components/PageHero";

export const metadata = { title: "Braces | Orthodontics | Pine Smiles" };

const types = ["Traditional Metal Braces", "Clear Ceramic Braces", "Invisalign"];

export default function BracesPage() {
  return (
    <div>
      <PageHero eyebrow="Orthodontics" title="Braces" color="orange" />
      <section className="mx-auto max-w-3xl px-4 py-16 space-y-8 text-slate-600 leading-relaxed">
        <div>
          <h2 className="font-heading text-xl text-pine-orange mb-3">Why Braces</h2>
          <p>
            Braces are used to treat a number of common problems.
            Orthodontic problems may lead to tooth decay, gum disease, bone
            destruction and chewing and digestive difficulties. A
            &ldquo;bad bite&rdquo; can contribute to speech impairments, jaw
            joint issues, tooth loss, chipped teeth and other dental
            injuries. The amount of time spent in braces will vary
            depending on your individual needs. Dr. Kim will help you
            determine the best treatment for you/your child&rsquo;s teeth
            after a comprehensive first exam.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-xl text-pine-orange mb-3">Types of Braces</h2>
          <p className="mb-4">
            Orthodontic treatment is not what it used to be. Today&rsquo;s
            options range from colorful to nearly invisible braces. The
            choice is yours and you don&rsquo;t have to come up with the
            answers alone. Dr. Kim will help find the perfect match for you.
          </p>
          <div className="flex flex-wrap gap-3">
            {types.map((t) => (
              <span
                key={t}
                className="px-4 py-2 rounded-full bg-pine-cream text-pine-purple font-semibold text-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-heading text-xl text-pine-orange mb-3">Food Guidelines</h2>
          <p>
            Your teeth may be a little sore for the first several days in
            braces, so we recommend sticking to a soft food diet until the
            discomfort subsides. While in braces, you can still eat just
            about anything although there are a few exceptions. Avoid hard
            foods, such as ice and pizza crust, as well as sticky foods,
            including licorice and caramels &mdash; these can damage wires
            and brackets. It is also important to minimize foods high in
            sugar content, like ice cream and cookies, and reduce sugary
            drinks to once a day.
          </p>
          <p className="mt-3">
            In the event of a loose/broken bracket or wire, call our office
            immediately to arrange an appointment for repair.
          </p>
        </div>
      </section>
    </div>
  );
}
