import Link from "next/link";
import PageHero from "@/components/PageHero";
import { posts, formatDate } from "@/lib/blog";

export const metadata = { title: "Blog | Pine Smiles" };

const colors = ["pine-pink", "pine-orange", "pine-blue", "pine-purple"];

export default function BlogIndexPage() {
  return (
    <div>
      <PageHero eyebrow="Pine Smiles" title="Blog" color="purple" />
      <section className="mx-auto max-w-6xl px-4 py-16">
        {posts.length === 0 ? (
          <p className="text-center text-slate-500">
            Blog posts coming soon.
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-3xl border-2 border-slate-100 overflow-hidden hover:shadow-xl transition-shadow flex flex-col"
              >
                <div
                  className="h-32 flex items-center justify-center text-4xl"
                  style={{ background: `var(--${colors[i % colors.length]})` }}
                >
                  🦷
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-xs uppercase tracking-wide text-slate-400 mb-2">
                    {formatDate(post.date)}
                  </p>
                  <h2 className="font-heading text-lg text-slate-800 mb-2 group-hover:text-pine-pink transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-slate-500 line-clamp-3 flex-1">
                    {post.body?.[0]}
                  </p>
                  <span className="mt-4 text-sm font-bold text-pine-blue">
                    Read more →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
