import PageHero from "@/components/PageHero";

export const metadata = { title: "Refer a Patient | Pine Smiles" };

export default function ReferAPatientPage() {
  return (
    <div>
      <PageHero eyebrow="Contact" title="Refer a Patient" color="purple" />
      <section className="mx-auto max-w-2xl px-4 py-16">
        <p className="text-slate-600 leading-relaxed mb-4">
          A successful practice doesn&rsquo;t just happen; it is the result
          of a strong commitment to excellence in the professional community
          and in the relationships we build with our patients and
          colleagues. We appreciate the confidence you&rsquo;ve placed in us
          to provide you with the complete care you need, and we thank you
          for recommending our practice to your friends and family.
        </p>
        <p className="text-slate-600 leading-relaxed mb-8">
          If you are a doctor here to refer a patient to our practice,
          please provide us with the information below.
        </p>
        <form className="bg-pine-cream rounded-3xl p-8 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-semibold text-slate-600">Doctor First Name</label>
              <input className="mt-1 w-full rounded-xl border-2 border-slate-200 px-3 py-2" />
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-600">Doctor Last Name</label>
              <input className="mt-1 w-full rounded-xl border-2 border-slate-200 px-3 py-2" />
            </div>
          </div>
          <div>
            <label className="text-sm font-semibold text-slate-600">Practice Name</label>
            <input className="mt-1 w-full rounded-xl border-2 border-slate-200 px-3 py-2" />
          </div>
          <div>
            <label className="text-sm font-semibold text-slate-600">Your Email Address</label>
            <input type="email" className="mt-1 w-full rounded-xl border-2 border-slate-200 px-3 py-2" />
          </div>
          <div>
            <label className="text-sm font-semibold text-slate-600">
              Name of Patient You Are Referring
            </label>
            <input className="mt-1 w-full rounded-xl border-2 border-slate-200 px-3 py-2" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-semibold text-slate-600">
                Patient&rsquo;s Phone Number
              </label>
              <input className="mt-1 w-full rounded-xl border-2 border-slate-200 px-3 py-2" />
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-600">
                Patient&rsquo;s Email Address
              </label>
              <input className="mt-1 w-full rounded-xl border-2 border-slate-200 px-3 py-2" />
            </div>
          </div>
          <div>
            <label className="text-sm font-semibold text-slate-600">Comments</label>
            <textarea rows={3} className="mt-1 w-full rounded-xl border-2 border-slate-200 px-3 py-2" />
          </div>
          <div>
            <span className="text-sm font-semibold text-slate-600 block mb-1">
              Radiographs Sent?
            </span>
            <label className="mr-4 text-sm">
              <input type="radio" name="radiographs" className="mr-1" /> Yes
            </label>
            <label className="text-sm">
              <input type="radio" name="radiographs" className="mr-1" /> No
            </label>
          </div>
          <button type="submit" className="btn-pill bg-pine-purple text-white w-full">
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}
