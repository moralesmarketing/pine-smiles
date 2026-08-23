import PageHero from "@/components/PageHero";
import { business } from "@/lib/site-data";
import OfficeTour360 from "@/components/OfficeTour360";

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
          <a
            href={business.mapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill bg-pine-orange text-white mt-6 inline-flex"
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

      <section id="tour" className="bg-pine-purple py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h2 className="font-heading text-2xl md:text-3xl text-white mb-4">
            Take a Look Inside
          </h2>
          <p className="text-white/85 mb-8 max-w-2xl mx-auto">
            Drag to look around, and click a room to walk through the office.
          </p>
          <OfficeTour360 />
        </div>
      </section>
    </div>
  );
}
