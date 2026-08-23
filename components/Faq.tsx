"use client";

import { useState } from "react";

export default function Faq({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={item.q} className="border-2 border-slate-100 rounded-2xl overflow-hidden">
          <button
            type="button"
            onClick={() => setOpen((cur) => (cur === i ? null : i))}
            aria-expanded={open === i}
            className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left font-heading text-slate-800 hover:bg-pine-cream transition-colors"
          >
            <span>{item.q}</span>
            <span className="text-pine-pink text-xl shrink-0">
              {open === i ? "−" : "+"}
            </span>
          </button>
          {open === i && (
            <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed">
              {item.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
