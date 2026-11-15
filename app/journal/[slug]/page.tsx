import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { sanityFetch } from "@/lib/sanity/fetch";
import { POST_QUERY, POST_SLUGS_QUERY } from "@/lib/sanity/queries";
import { portableComponents } from "@/lib/sanity/portable-components";
import { urlFor } from "@/lib/sanity/image";
import type { SanityPost } from "@/lib/sanity/types";
import { SITE_URL, siteOpenGraph } from "@/lib/seo";

export async function generateStaticParams() {
  const slugs = await sanityFetch<{ slug: string }[]>({
    query: POST_SLUGS_QUERY,
    tags: ["post"],
  });
  return slugs.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await sanityFetch<SanityPost | null>({
    query: POST_QUERY,
    params: { slug },
    tags: [`post:${slug}`],
  });
  if (!post) return {};

  // The POSSE spine: self-canonical unless the piece was first published elsewhere.
  const canonical = post.canonicalUrl ?? `${SITE_URL}/journal/${post.slug}`;
  const title = post.seoTitle ?? post.title;
  const description = post.seoDescription ?? post.excerpt;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      ...siteOpenGraph("en"),
      title,
      description,
      type: "article",
      url: canonical,
      images: post.coverImage ? [urlFor(post.coverImage).width(1200).height(630).url()] : undefined,
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await sanityFetch<SanityPost | null>({
    query: POST_QUERY,
    params: { slug },
    tags: [`post:${slug}`],
  });

  if (!post) notFound();

  return (
    <div className="page-content">
      <article>
        <h1>{post.title}</h1>
        <time dateTime={post.publishedAt}>
          {new Date(post.publishedAt).toLocaleDateString()}
        </time>
        {post.body ? (
          <PortableText value={post.body} components={portableComponents} />
        ) : null}
      </article>
    </div>
  );
}
