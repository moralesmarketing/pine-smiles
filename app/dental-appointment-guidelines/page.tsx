import PageHero from "@/components/PageHero";

export const metadata = { title: "Dental Filling Appointment | Pediatric Dentistry | Pine Smiles" };

export default function FillingPage() {
  return (
    <div>
      <PageHero eyebrow="Pediatric Dentistry" title="Dental Filling Appointment" color="purple" />
      <section className="mx-auto max-w-3xl px-4 py-16 space-y-5 text-slate-600 leading-relaxed">
        <p>
          Pediatric dentists have special training in helping anxious
          children feel secure during dental treatment, and pediatric dental
          offices are designed for children. Our staff members choose to
          work in a pediatric dental practice because they like kids &mdash;
          so most children are calm, comfortable and confident for their
          visits.
        </p>
        <h2 className="font-heading text-xl text-pine-purple pt-2">
          Why fill baby teeth when they fall out anyway?
        </h2>
        <p>
          While it is true that baby teeth do eventually come out, it is
          also true that they are important to your child in the meantime.
          Children need their baby teeth to speak clearly, eat comfortably,
          and smile with self-confidence. Also, baby teeth hold space for
          the permanent teeth &mdash; if one is lost, the others shift into
          the empty space, which often means bite crowding problems in a
          child&rsquo;s future. In addition, a decayed baby tooth can become
          infected and cause severe pain for a child.
        </p>
        <h2 className="font-heading text-xl text-pine-purple pt-2">
          Tips on How to Prepare Your Child for a Filling Visit
        </h2>
        <ul className="space-y-4">
          <li>
            It is probably best that you do not go into great detail when
            you tell your young child he/she is returning for a filling. We
            recommend simply telling them they have &ldquo;sugarbugs&rdquo;
            that are making holes in their teeth and that the doctor will be
            using a special brush to chase the bugs out.
          </li>
          <li>
            You are welcome to accompany your child to the back office for
            their filling visit. However, we often find that children do
            better when parents stay in the reception area. If you do choose
            to come to the back, we ask that you are a silent observer &mdash;
            it is difficult for a child to focus and follow directions if
            several adults are giving directions at the same time. The staff
            and doctors will show and explain every step, even demonstrating
            the tools first on your child&rsquo;s fingers. We use gentle,
            non-scary language.
          </li>
          <li>
            Please do not tell your child they are getting a
            &ldquo;shot.&rdquo; Shots hurt at the pediatrician&rsquo;s office
            and using this word will unnecessarily scare them for their
            dental injection. We prefer to call it &ldquo;sleepy
            juice.&rdquo; Most children tolerate dental shots very well and
            usually don&rsquo;t even know they received an injection,
            especially when they are calm and relaxed.
          </li>
          <li>
            Try not to use words that may alarm your child, like &ldquo;Does
            it hurt?&rdquo; or &ldquo;I&rsquo;m sorry.&rdquo; Suggested
            alternatives are &ldquo;Good job,&rdquo; &ldquo;You are a great
            helper,&rdquo; and &ldquo;I am so proud of you.&rdquo;
          </li>
          <li>
            Continue positive reinforcement after the dental visit. This
            makes your child feel good about themselves and encourages
            positive future visits.
          </li>
        </ul>
        <p>
          If you have any questions regarding the procedure, please contact
          us before the day of the appointment so that we may devote the
          entire appointment time to your child&rsquo;s treatment.
        </p>
        <p className="font-heading text-pine-pink">
          Please be assured that Dr. Gandhi and her well-trained staff will
          do everything we can to make your child&rsquo;s visit a positive
          and comfortable one. Parents are usually pleasantly surprised by
          how well their children do at our office!
        </p>
      </section>
    </div>
  );
}
