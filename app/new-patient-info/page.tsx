import PageHero from "@/components/PageHero";

export const metadata = { title: "New Patient Info | Pine Smiles" };

export default function NewPatientInfoPage() {
  return (
    <div>
      <PageHero eyebrow="New Patients" title="New Patient Info" color="orange" />
      <section className="mx-auto max-w-3xl px-4 py-16 space-y-8 text-slate-600 leading-relaxed">
        <div>
          <h2 className="font-heading text-xl text-pine-orange mb-3">
            Appointments &amp; Cancellations
          </h2>
          <p>
            We make every effort to schedule appointments at your
            convenience and based on availability. Morning appointments are
            recommended for younger children when they are refreshed and
            more accepting of new experiences. This also allows our staff to
            spend more time with your child if needed.
          </p>
          <p className="mt-3">
            Appointments are reserved exclusively for each patient.
            Therefore, we ask that you arrive on time. We understand that
            emergencies do occur &mdash; if you are unable to keep your
            appointment, please notify our office 24 hours prior to your
            scheduled time. As always, we will call a day or two prior to
            confirm your appointment. We wholeheartedly believe in
            maintaining excellent oral health and keeping appointments are
            necessary to meet our goals.
          </p>
        </div>
        <div>
          <h2 className="font-heading text-xl text-pine-orange mb-3">
            Financial Information
          </h2>
          <p>
            We currently accept most insurance providers. As a courtesy to
            our patients, we file all claims on your behalf. However, the
            ultimate responsibility for payment of the claim belongs to you.
            We will assist you in estimating your portion of the cost of
            treatment, but we cannot guarantee what your insurance will or
            will not do with each claim. Patients with dental insurance are
            expected to pay for services when rendered.
          </p>
          <p className="mt-3">
            Please keep the front staff informed of any insurance changes
            such as policy name, insurance company address, or change of
            employment status. Insurance providers we work with may change
            at any time and without notice. Please call our office for the
            most updated information about insurance and payment options.
          </p>
          <p className="mt-3">
            We want to make it as easy as possible for you to receive the
            best pediatric dental and orthodontic care. We accept all major
            credit cards, checks, cash and many insurance plans. The cost of
            your treatment will vary depending on your individual needs,
            and our staff will ensure you know what to expect before
            beginning treatment. We can work with you to tailor a payment
            plan to meet your needs.
          </p>
        </div>
      </section>
    </div>
  );
}
