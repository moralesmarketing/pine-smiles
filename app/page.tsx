import Link from "next/link";
import { business, doctors, reviews, whatSetsUsApart } from "@/lib/site-data";
import OfficeTour360 from "@/components/OfficeTour360";

const servicePills = [
  { label: "Pediatric Dentistry", href: "/first-visit-kids", color: "bg-pine-blue" },
  { label: "Braces", href: "/braces", color: "bg-pine-pink" },
  { label: "Invisalign", href: "/invisalign", color: "bg-pine-orange" },
  { label: "New Patients", href: "/new-patient-info", color: "bg-pine-purple" },
];

export default function Home() {
  return (
    <div>
      <section className="bg-gradient-to-br from-pine-purple via-pine-pink to-pine-orange text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div className="text-center md:text-left">
            <p className="uppercase tracking-widest text-sm font-semibold text-white/80 mb-3">
              Chino Hills, CA
            </p>
            <h1 className="font-heading text-4xl md:text-6xl leading-tight mb-5">
              Top Pediatric Dentist &amp; Orthodontist in Chino Hills
            </h1>
            <p className="text-lg text-white/90 mb-8 max-w-xl">
              A family-owned, family-centered dental home offering gentle
              pediatric dentistry and orthodontic care for kids, teens, and
              adults &mdash; all under one roof.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Link href="/our-office" className="btn-pill bg-pine-orange text-white">
                Schedule an Appointment
              </Link>
              <a href={business.phoneHref} className="btn-pill bg-white text-pine-purple">
                Call {business.phone}
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {["🦷", "😁", "🪥", "✨"].map((emoji, i) => (
              <div
                key={i}
                className="aspect-square rounded-[2rem] bg-white/15 backdrop-blur-sm flex items-center justify-center text-6xl"
              >
                {emoji}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 -mt-8 md:-mt-10 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {servicePills.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className={`${p.color} text-white rounded-2xl px-4 py-5 text-center font-semibold shadow-lg hover:-translate-y-1 transition-transform text-sm md:text-base`}
            >
              {p.label}
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 md:py-20 text-center">
        <h2 className="font-heading text-3xl md:text-4xl text-pine-purple mb-6">
          Welcome to Pine Smiles!
        </h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          We would like to extend a warm welcome to you and your family! Our
          office is committed to providing the highest quality dental and
          orthodontic care with exceptional service. Our priority is to be
          your trusted dental healthcare provider, delivering exactly what
          each patient needs &mdash; no less and no more. We will genuinely
          care for you as members of our own family and make your visits
          comfortable and fun.
        </p>
        <p className="text-slate-600 leading-relaxed">
          Every patient has different needs, and we pride ourselves in
          getting to know and tailoring treatment to each person who walks
          through our doors. Whether you are a child, adolescent or adult,
          our experienced doctors and staff feel privileged in helping you
          achieve optimal dental health and a beautiful smile.
        </p>
      </section>

      <section className="bg-pine-cream py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="font-heading text-3xl md:text-4xl text-pine-purple text-center mb-10">
            Meet Our Doctors
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[doctors.gandhi, doctors.kim].map((doc) => (
              <Link
                key={doc.slug}
                href={`/${doc.slug}`}
                className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="w-20 h-20 rounded-full bg-pine-blue/15 flex items-center justify-center text-4xl mb-4">
                  🦷
                </div>
                <h3 className="font-heading text-xl text-pine-pink mb-1">
                  {doc.name}
                </h3>
                <p className="text-sm font-semibold text-pine-orange mb-3">
                  {doc.role}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed line-clamp-4">
                  {doc.bio[0]}
                </p>
                <span className="inline-block mt-4 text-sm font-bold text-pine-blue">
                  Read full bio →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <h2 className="font-heading text-3xl md:text-4xl text-pine-purple text-center mb-10">
          What Sets Us Apart
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {whatSetsUsApart.slice(0, 6).map((item, i) => {
            const colors = ["pine-pink", "pine-orange", "pine-blue"];
            const color = colors[i % colors.length];
            return (
              <div key={item.title} className="rounded-2xl border-2 border-slate-100 p-6">
                <div
                  className={`w-10 h-10 rounded-full mb-4`}
                  style={{ background: `var(--${color})` }}
                />
                <h3 className="font-heading text-lg mb-2 text-slate-800">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.body}</p>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-8">
          <Link href="/what-sets-us-apart" className="btn-pill bg-pine-purple text-white">
            See Everything That Sets Us Apart
          </Link>
        </div>
      </section>

      <section className="bg-pine-purple text-white py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl mb-4">
            Tour Our Office
          </h2>
          <p className="text-white/85 mb-8 max-w-2xl mx-auto">
            Before coming to our facilities, feel free to take a virtual
            walk-through &mdash; drag to look around, and click a room to
            move through the office.
          </p>
          <OfficeTour360 />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <h2 className="font-heading text-3xl md:text-4xl text-pine-purple text-center mb-10">
          Wonderful Reviews From Families Like Yours
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {reviews.slice(0, 2).map((r) => (
            <div key={r.author} className="bg-pine-cream rounded-3xl p-8">
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
        <div className="text-center mt-8">
          <Link href="/reviews" className="btn-pill bg-pine-blue text-white">
            Read More Reviews
          </Link>
        </div>
      </section>

      <section className="bg-pine-orange-light py-14">
        <div className="mx-auto max-w-4xl px-4 text-center text-white">
          <h2 className="font-heading text-2xl md:text-3xl mb-2">
            Convenient Location, Wonderful Reviews
          </h2>
          <p className="text-white/90 mb-6">
            A family-run office specializing in dentistry for kids and braces
            for all ages in Chino Hills, CA. Make an appointment so we can
            meet your family!
          </p>
          <Link href="/our-office" className="btn-pill bg-white text-pine-orange">
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
