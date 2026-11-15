import { defineQuery } from "next-sanity";

// Get all menus
export const ALL_MENUS_QUERY = defineQuery(
  `*[_type == "menu"] | order(name asc) {
    _id,
    name,
    displayName,
    slug,
    location,
    description
  }`
);

// Get a specific menu by slug with all its categories and items.
// Categories and items are embedded objects (not documents), so they're
// projected directly off the array — no dereferencing, no reference lookups.
// Display order follows the array order as arranged in Studio.
export const MENU_BY_SLUG_QUERY = defineQuery(
  `*[_type == "menu" && slug.current == $slug][0] {
    _id,
    name,
    displayName,
    slug,
    location,
    description,
    categories[] {
      name,
      displayName,
      description,
      items[] {
        name,
        displayName,
        description,
        price
      }
    }
  }`
);

// Journal (blog) posts

export const POSTS_QUERY = defineQuery(
  `*[_type == "post" && defined(slug.current) && publishedAt <= now()]
  | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    audience,
    publishedAt,
    coverImage
  }`
);

export const POST_QUERY = defineQuery(
  `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    audience,
    publishedAt,
    coverImage,
    body,
    seoTitle,
    seoDescription,
    canonicalUrl,
    syndicationLinks
  }`
);

export const POST_SLUGS_QUERY = defineQuery(
  `*[_type == "post" && defined(slug.current)] { "slug": slug.current }`
);
