"use client";

import Link from "next/link";
import { useState } from "react";
import { business, nav } from "@/lib/site-data";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="bg-pine-purple text-white text-center text-sm font-medium py-1.5 px-4">
        Now welcoming new smiles! Call {business.phone} to schedule.
      </div>

      <div className="mx-auto max-w-7xl px-4 flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="font-heading text-2xl md:text-3xl text-pine-pink">
            Pine Smiles
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((item) => (
            <div key={item.label} className="relative group">
              <Link
                href={item.href}
                className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-pine-pink transition-colors inline-block"
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="absolute left-0 top-full hidden group-hover:block pt-2 min-w-[260px]">
                  <div className="bg-white rounded-2xl shadow-xl border border-slate-100 py-2 overflow-hidden">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-5 py-2.5 text-sm font-medium text-slate-600 hover:bg-pine-cream hover:text-pine-pink transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a href={business.phoneHref} className="text-sm font-bold text-pine-blue">
            {business.phone}
          </a>
          <Link href="/our-office" className="btn-pill bg-pine-orange text-white text-sm">
            Schedule an Appointment
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className="lg:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10"
        >
          <span
            className={`block h-0.5 w-7 bg-pine-pink transition-transform ${
              mobileOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-7 bg-pine-pink transition-opacity ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-7 bg-pine-pink transition-transform ${
              mobileOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {mobileOpen && (
        <nav className="lg:hidden border-t border-slate-100 bg-white max-h-[75vh] overflow-y-auto">
          {nav.map((item) => (
            <div key={item.label} className="border-b border-slate-100">
              <div className="flex items-center justify-between">
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex-1 px-5 py-3.5 text-sm font-semibold text-slate-700"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <button
                    type="button"
                    aria-label={`Toggle ${item.label} submenu`}
                    onClick={() =>
                      setMobileSubmenu((cur) => (cur === item.label ? null : item.label))
                    }
                    className="px-5 py-3.5 text-pine-pink"
                  >
                    {mobileSubmenu === item.label ? "−" : "+"}
                  </button>
                )}
              </div>
              {item.children && mobileSubmenu === item.label && (
                <div className="bg-pine-cream pb-2">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-8 py-2.5 text-sm text-slate-600"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="p-5">
            <Link
              href="/our-office"
              onClick={() => setMobileOpen(false)}
              className="btn-pill bg-pine-orange text-white text-sm w-full"
            >
              Schedule an Appointment
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
