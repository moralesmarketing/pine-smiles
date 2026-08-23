import PageHero from "@/components/PageHero";

export const metadata = { title: "First Visit | Pediatric Dentistry | Pine Smiles" };

export default function FirstVisitPage() {
  return (
    <div>
      <PageHero eyebrow="Pediatric Dentistry" title="First Visit" color="blue" />
      <section className="mx-auto max-w-3xl px-4 py-16 space-y-5 text-slate-600 leading-relaxed">
        <p className="font-heading text-xl text-pine-blue">Dear Parent(s):</p>
        <p>
          We would like the first visit for your child to be as pleasant as
          possible. Because parents often do not know what to expect, it is
          not unusual for parents and children to be a bit apprehensive about
          the first dental visit. By letting you know what will happen
          during this visit, our office would like to partner with you to
          make this experience comfortable, enjoyable and positive. Tell
          your child in advance that they will be meeting some nice grownups
          that will help them take care of their teeth.
        </p>
        <p>
          When you bring your child for his/her first visit, one of our
          staff members will explain each and every step of the appointment
          so there will be no surprises. We teach with a method called
          &ldquo;tell-show-do.&rdquo; This instills trust in the
          doctor-child relationship, and gives the child a vested interest
          in his or her own health. From taking pictures (x-rays if needed
          depending on your child&rsquo;s age, dental development, and
          cavity risk), to getting their teeth cleaned and counted (exam),
          we will show your child everything first. Focus on the positive!
          Talk about the fun stuff our office has. We have iPad stations and
          toys in the waiting room, TVs on the ceilings and prizes for the
          kids at the end!
        </p>
        <p>
          Dr. Gandhi will talk to you about the importance of oral hygiene,
          growth and development and diet/nutrition. Since our office has an
          orthodontist, we can also recommend if and when orthodontic
          treatment would be needed. Together we will come up with a plan
          for your child&rsquo;s developing teeth that focuses on prevention
          and excellent oral health care.
        </p>
        <p>
          If your child has a favorite toy that tends to provide comfort,
          feel free to bring it to the appointment. Try and schedule the
          appointment early when your child is most rested. Avoid discussing
          any negative dental experiences or dental anxiety you may have
          with your child. Read a story together about a trip to the dentist
          or play dentist with your child. Parents are allowed to join their
          child as Dr. Gandhi and her staff explain each and every step of
          the dental visit. You may also set up a &ldquo;meet and
          greet&rdquo; visit with our office where you can bring your child
          to simply tour the office and meet Dr. Gandhi and our staff! This
          will allow your child to become familiar with the office to make
          the experience even more positive.
        </p>
        <p className="font-heading text-pine-pink">
          We look forward to meeting your family!
          <br />
          Thank you, Dr. Gandhi and staff
        </p>
      </section>
    </div>
  );
}
