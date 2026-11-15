import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

type WebhookPayload = {
  _type: string;
  slug?: { current?: string };
  syndicate?: boolean;
};

export async function POST(req: NextRequest) {
  try {
    const { isValidSignature, body } = await parseBody<WebhookPayload>(
      req,
      process.env.SANITY_WEBHOOK_SECRET,
    );

    if (!isValidSignature) {
      return new NextResponse("Invalid signature", { status: 401 });
    }
    if (body?._type !== "post") {
      return NextResponse.json({ message: "Ignored" }, { status: 200 });
    }

    // Fresh site immediately — the "as easy as posting to social" promise.
    // Next 16 deprecated the single-arg form; { expire: 0 } is what the docs
    // recommend for webhook-triggered immediate invalidation.
    revalidateTag("post", { expire: 0 });
    if (body.slug?.current) revalidateTag(`post:${body.slug.current}`, { expire: 0 });

    // Syndication seam — build later. For v1, syndicate by hand.
    //    When ready, hand off here to Buffer / Make / n8n / a platform API,
    //    gated on body.syndicate === true, passing the canonical URL:
    //
    // if (body.syndicate && body.slug?.current) {
    //   await fetch(process.env.SYNDICATION_HOOK_URL!, {
    //     method: 'POST',
    //     headers: {'Content-Type': 'application/json'},
    //     body: JSON.stringify({
    //       slug: body.slug.current,
    //       url: `${SITE_URL}/journal/${body.slug.current}`, // from '@/lib/seo'
    //     }),
    //   })
    // }

    return NextResponse.json({ revalidated: true });
  } catch (err) {
    console.error(err);
    return new NextResponse("Error", { status: 500 });
  }
}
