import Link from "next/link";
import type { Metadata } from "next";
import { sanityFetch } from "@/lib/sanity/fetch";
import { POSTS_QUERY } from "@/lib/sanity/queries";
import type { SanityPostListItem } from "@/lib/sanity/types";
import { SITE_URL, siteOpenGraph } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Journal",
  description: "Notes on building small-business websites that owners can actually keep up to date.",
  alternates: { canonical: `${SITE_URL}/journal` },
  openGraph: { ...siteOpenGraph("en"), url: `${SITE_URL}/journal` },
};

export default async function JournalPage() {
  const posts = await sanityFetch<SanityPostListItem[]>({ query: POSTS_QUERY, tags: ["post"] });

  return (
    <div className="page-content">
      <h1>Journal</h1>
      <ul>
        {posts.map((post) => (
          <li key={post._id} className="mb-8">
            <Link href={`/journal/${post.slug}`}>
              <h2>{post.title}</h2>
            </Link>
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString()}
            </time>
            {post.excerpt && <p>{post.excerpt}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}
