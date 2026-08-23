import PageHero from "@/components/PageHero";

export const metadata = { title: "Refer a Friend | Pine Smiles" };

export default function ReferAFriendPage() {
  return (
    <div>
      <PageHero eyebrow="Contact" title="Refer a Friend" color="orange" />
      <section className="mx-auto max-w-2xl px-4 py-16">
        <p className="text-slate-600 leading-relaxed mb-8">
          A successful practice doesn&rsquo;t just happen; it is the result
          of a strong commitment to excellence in the professional community
          and in the relationships we build with our patients and
          colleagues. We appreciate the confidence you&rsquo;ve placed in us
          to provide you with the complete care you need, and we thank you
          for recommending our practice to your friends and family.
        </p>
        <form className="bg-pine-cream rounded-3xl p-8 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-semibold text-slate-600">Your First Name</label>
              <input className="mt-1 w-full rounded-xl border-2 border-slate-200 px-3 py-2" />
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-600">Your Last Name</label>
              <input className="mt-1 w-full rounded-xl border-2 border-slate-200 px-3 py-2" />
            </div>
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
                Patient&rsquo;s Email Address
              </label>
              <input className="mt-1 w-full rounded-xl border-2 border-slate-200 px-3 py-2" />
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-600">
                Patient&rsquo;s Phone Number
              </label>
              <input className="mt-1 w-full rounded-xl border-2 border-slate-200 px-3 py-2" />
            </div>
          </div>
          <div>
            <label className="text-sm font-semibold text-slate-600">Relationship to Patient</label>
            <input className="mt-1 w-full rounded-xl border-2 border-slate-200 px-3 py-2" />
          </div>
          <button type="submit" className="btn-pill bg-pine-orange text-white w-full">
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}
