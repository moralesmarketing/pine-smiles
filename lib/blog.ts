import blogContent from "@/blog-content.json";

export type BlogPost = {
  slug: string;
  originalUrl?: string;
  title: string;
  date: string;
  body: string[];
  thin?: boolean;
};

export const posts: BlogPost[] = (blogContent as BlogPost[])
  .slice()
  .sort((a, b) => (a.date < b.date ? 1 : -1));

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function formatDate(iso: string) {
  const d = new Date(`${iso}T00:00:00`);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
