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
