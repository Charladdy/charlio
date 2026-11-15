import Image from "next/image";
import type { PortableTextComponents } from "@portabletext/react";
import { urlFor } from "@/lib/sanity/image";

export const portableComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      return (
        <Image
          src={urlFor(value).width(1200).url()}
          alt={value.alt ?? ""}
          width={1200}
          height={800}
          style={{ width: "100%", height: "auto" }}
        />
      );
    },
  },
  marks: {
    link: ({ value, children }) => {
      const href = value?.href ?? "#";
      const external = href.startsWith("http");
      return (
        <a href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
          {children}
        </a>
      );
    },
  },
};
