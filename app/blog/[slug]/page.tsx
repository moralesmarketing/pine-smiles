import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import { posts, getPost, formatDate } from "@/lib/blog";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  return { title: post ? `${post.title} | Pine Smiles Blog` : "Blog | Pine Smiles" };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <div>
      <PageHero eyebrow={formatDate(post.date)} title={post.title} color="pink" />
      <article className="mx-auto max-w-3xl px-4 py-16">
        <div className="space-y-5 text-slate-600 leading-relaxed">
          {post.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-slate-100">
          <Link href="/blog" className="btn-pill bg-pine-purple text-white">
            ← Back to Blog
          </Link>
        </div>
      </article>
    </div>
  );
}
