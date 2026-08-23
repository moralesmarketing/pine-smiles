import PageHero from "@/components/PageHero";
import { business } from "@/lib/site-data";

export const metadata = { title: "Emergency Information | Orthodontics | Pine Smiles" };

const items = [
  {
    title: "If Something Is Poking You",
    body: "For immediate relief, place wax on the spot. If the back of a wire is poking into your cheek, get help cutting it with sterile nail clippers. Give us a ring and we will try to get you in for an appointment the next morning.",
  },
  {
    title: "If You Have a Sore in Your Mouth",
    body: "Brush the area with warm salt water AM and PM to help it heal, then rinse. You can also use wax if you have irritation on your cheek or lip. Schedule an appointment if the sore hasn't resolved within a week.",
  },
  {
    title: "If A Bracket Moves or Becomes Loose",
    body: "Remove the bracket if you can, or place wax on the area. Give us a call and we will try to book you for an appointment the next morning.",
  },
  {
    title: "If A Chain Breaks or Falls Off",
    body: "This should not cause any pain. Use wax if soreness occurs. Call and we will get you in for an appointment as soon as possible.",
  },
  {
    title: "If a Separator is Lost",
    body: "Most patients lose a separator during their treatment. Do not worry about losing a separator, but call our office to see if it needs to be replaced.",
  },
  {
    title: "In Case of an Accident",
    body: "Call our after-hours line and the doctor on call will help direct you to get the appropriate medical attention. In a case of a severe accident, please call your medical doctor to get appropriate medical attention.",
  },
];

export default function EmergencyOrthoPage() {
  return (
    <div>
      <PageHero eyebrow="Orthodontics" title="Emergency Information" color="pink" />
      <section className="mx-auto max-w-3xl px-4 py-16">
        <p className="text-slate-600 leading-relaxed mb-8">
          Emergencies are pretty rare, but we&rsquo;ve put together a few
          pointers you can use to help yourself in a sticky situation. If
          all else fails or if you are in a lot of pain, give us a call at{" "}
          <a href={business.phoneHref} className="font-bold text-pine-pink">
            {business.phone}
          </a>{" "}
          &mdash; we will schedule you in for an appointment as soon as we
          can, probably the next morning.
        </p>
        <div className="space-y-6">
          {items.map((item) => (
            <div key={item.title} className="rounded-2xl bg-pine-cream p-6">
              <h2 className="font-heading text-lg text-pine-purple mb-2">{item.title}</h2>
              <p className="text-sm text-slate-600 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
