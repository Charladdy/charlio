import { PortableTextBlock } from "@portabletext/types";

/**
 * Converts Sanity Portable Text to a plain text string
 */
export function portableTextToPlain(blocks?: PortableTextBlock[]): string | undefined {
  if (!blocks || blocks.length === 0) return undefined;

  return blocks
    .map((block) => {
      if (block._type !== "block" || !block.children) {
        return "";
      }
      return block.children.map((child: any) => child.text).join("");
    })
    .join(" ");
}
