import PageHero from "@/components/PageHero";
import { business } from "@/lib/site-data";

export const metadata = { title: "Our Office | Contact | Pine Smiles" };

export default function OurOfficePage() {
  return (
    <div>
      <PageHero eyebrow="Contact" title="Our Office" color="pink" />
      <section className="mx-auto max-w-5xl px-4 py-16 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="font-heading text-xl text-pine-purple mb-3">
            {business.name}
          </h2>
          <p className="text-slate-600 leading-relaxed">
            {business.address.line1}
            <br />
            {business.address.line2}
          </p>
          <a
            href={business.phoneHref}
            className="block mt-3 text-lg font-bold text-pine-blue"
          >
            {business.phone}
          </a>
          <p className="text-sm text-slate-500 mt-3">
            Our voicemail will give you a direct phone number for the
            pediatric dentist on-call.
          </p>

          <div className="rounded-3xl overflow-hidden shadow-lg mt-8 border-2 border-slate-100">
            <iframe
              title="Pine Smiles virtual office tour"
              src={business.virtualTourEmbedUrl}
              width="100%"
              height="320"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <a
            href={business.mapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill bg-pine-orange text-white mt-4 inline-flex"
          >
            Get Directions
          </a>
        </div>

        <form className="bg-pine-cream rounded-3xl p-8 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-semibold text-slate-600">First Name</label>
              <input className="mt-1 w-full rounded-xl border-2 border-slate-200 px-3 py-2" />
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-600">Last Name</label>
              <input className="mt-1 w-full rounded-xl border-2 border-slate-200 px-3 py-2" />
            </div>
          </div>
          <div>
            <label className="text-sm font-semibold text-slate-600">Email Address</label>
            <input type="email" className="mt-1 w-full rounded-xl border-2 border-slate-200 px-3 py-2" />
          </div>
          <div>
            <label className="text-sm font-semibold text-slate-600">Subject</label>
            <input className="mt-1 w-full rounded-xl border-2 border-slate-200 px-3 py-2" />
          </div>
          <div>
            <label className="text-sm font-semibold text-slate-600">Message</label>
            <textarea rows={4} className="mt-1 w-full rounded-xl border-2 border-slate-200 px-3 py-2" />
          </div>
          <button type="submit" className="btn-pill bg-pine-pink text-white w-full">
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}
