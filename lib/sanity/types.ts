import { PortableTextBlock } from "@portabletext/types";
import type { SanityImageSource } from "@sanity/image-url";

export interface SanityMenuItem {
  name: string;
  displayName?: string;
  description?: PortableTextBlock[];
  price?: string;
}

export interface SanityMenuCategory {
  name: string;
  displayName?: string;
  description?: string;
  items?: SanityMenuItem[];
}

export interface SanityMenu {
  _id: string;
  name: string;
  displayName?: string;
  slug: {
    current: string;
  };
  location?: string;
  description?: string;
  categories?: SanityMenuCategory[];
}

export type SanityPostAudience = "owners" | "builders";

export type SanityPostCoverImage = SanityImageSource & { alt?: string };

export interface SanityPostSyndicationLink {
  platform?: string;
  url?: string;
}

export interface SanityPostListItem {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  audience?: SanityPostAudience;
  publishedAt: string;
  coverImage?: SanityPostCoverImage;
}

export interface SanityPost extends SanityPostListItem {
  body?: PortableTextBlock[];
  seoTitle?: string;
  seoDescription?: string;
  canonicalUrl?: string;
  syndicationLinks?: SanityPostSyndicationLink[];
}
