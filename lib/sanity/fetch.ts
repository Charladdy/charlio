import { client } from "./client";

// Tag-based fetch: pairs with app/api/revalidate/route.ts, which calls
// revalidateTag(...) on publish so post pages update immediately instead
// of waiting out useCdn's cache.
export async function sanityFetch<T>({
  query,
  params = {},
  tags,
}: {
  query: string;
  params?: Record<string, unknown>;
  tags: string[];
}): Promise<T> {
  return client.fetch<T>(query, params, { next: { tags } });
}
