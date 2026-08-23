import Link from "next/link";
import { business, nav } from "@/lib/site-data";

export default function Footer() {
  return (
    <footer className="bg-[#2b1a3d] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 grid gap-10 md:grid-cols-3">
        <div>
          <div className="font-heading text-2xl text-pine-orange-light mb-3">
            Pine Smiles
          </div>
          <p className="text-sm text-white/70 leading-relaxed">
            Orthodontics &amp; Pediatric Dentistry for the whole family in
            Chino Hills, CA.
          </p>
          <div className="flex gap-3 mt-4">
            {[
              { label: "Facebook", href: business.social.facebook },
              { label: "Instagram", href: business.social.instagram },
              { label: "YouTube", href: business.social.youtube },
              { label: "Yelp", href: business.social.yelp },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold hover:bg-pine-pink transition-colors"
              >
                {s.label[0]}
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="font-heading text-lg text-pine-blue mb-3">Menu</div>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-white/70">
            {nav.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="hover:text-white transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="font-heading text-lg text-pine-pink mb-3">Visit Us</div>
          <p className="text-sm text-white/70 leading-relaxed">
            {business.address.line1}
            <br />
            {business.address.line2}
          </p>
          <a
            href={business.phoneHref}
            className="block mt-2 text-sm font-bold text-pine-orange-light"
          >
            {business.phone}
          </a>
          <Link
            href="/our-office"
            className="btn-pill bg-pine-blue text-white text-sm mt-4"
          >
            Schedule an Appointment
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-white/50 px-4">
        <p className="max-w-3xl mx-auto">
          Proudly serving children&apos;s dentistry and orthodontic care for
          all ages in {business.serviceAreas.join(", ")}.
        </p>
        <p className="mt-3">
          © {new Date().getFullYear()} {business.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
