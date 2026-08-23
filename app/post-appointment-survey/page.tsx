import PageHero from "@/components/PageHero";

export const metadata = { title: "Post Appointment Survey | Pine Smiles" };

export default function SurveyPage() {
  return (
    <div>
      <PageHero eyebrow="Contact" title="Post Appointment Survey" color="blue" />
      <section className="mx-auto max-w-2xl px-4 py-16">
        <p className="text-slate-600 leading-relaxed mb-8">
          We appreciate you choosing our practice, and we are committed to
          making sure that your time spent with us is as comfortable and
          fulfilling as possible. In order to continue providing the kind of
          care that keeps our patients smiling, we encourage your comments
          and suggestions about the treatments and personal care
          you&rsquo;ve received while visiting our practice.
        </p>
        <form className="bg-pine-cream rounded-3xl p-8 space-y-4">
          <div>
            <label className="text-sm font-semibold text-slate-600">
              Please describe your experience visiting our practice.
            </label>
            <textarea rows={3} className="mt-1 w-full rounded-xl border-2 border-slate-200 px-3 py-2" />
          </div>
          <div>
            <label className="text-sm font-semibold text-slate-600">
              Please describe your experience working with doctors and staff.
            </label>
            <textarea rows={3} className="mt-1 w-full rounded-xl border-2 border-slate-200 px-3 py-2" />
          </div>
          <div>
            <label className="text-sm font-semibold text-slate-600">
              What was your favorite thing about our office?
            </label>
            <textarea rows={2} className="mt-1 w-full rounded-xl border-2 border-slate-200 px-3 py-2" />
          </div>
          <div>
            <label className="text-sm font-semibold text-slate-600">
              What areas could we improve on to make your experience more
              enjoyable?
            </label>
            <textarea rows={2} className="mt-1 w-full rounded-xl border-2 border-slate-200 px-3 py-2" />
          </div>
          <div>
            <label className="text-sm font-semibold text-slate-600">
              Additional comments or suggestions.
            </label>
            <textarea rows={2} className="mt-1 w-full rounded-xl border-2 border-slate-200 px-3 py-2" />
          </div>
          <div>
            <span className="text-sm font-semibold text-slate-600 block mb-1">
              Would you like a member of our team to contact you to further
              discuss your experience?
            </span>
            <label className="mr-4 text-sm">
              <input type="radio" name="contact-back" className="mr-1" /> Yes
            </label>
            <label className="text-sm">
              <input type="radio" name="contact-back" className="mr-1" /> No, thank you
            </label>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-semibold text-slate-600">Your Name</label>
              <input className="mt-1 w-full rounded-xl border-2 border-slate-200 px-3 py-2" />
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-600">Your Email</label>
              <input type="email" className="mt-1 w-full rounded-xl border-2 border-slate-200 px-3 py-2" />
            </div>
          </div>
          <button type="submit" className="btn-pill bg-pine-blue text-white w-full">
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}
