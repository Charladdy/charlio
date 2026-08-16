import { PortableTextBlock } from "@portabletext/types";

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
