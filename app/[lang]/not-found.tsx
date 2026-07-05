import Link from 'next/link';
import { defaultLocale } from '@/lib/i18n/locales';
import { getDictionary } from '@/lib/i18n/getDictionary';
import "../not-found-styles.css";

export default async function NotFound() {
  // Next.js does not pass route params to not-found.tsx, so we fall back to the default locale here.
  const dict = await getDictionary(defaultLocale);

  return (
    <>
      <div className='hor-gfx-mask' />
      <div className='vert-gfx-div' />
      <div className='hor-gfx-div' />
      <div className="m-auto" style={{ textAlign: 'center', padding: '50px' }}>
        <h1 className="font-bold text-4xl mb-5">{dict.common.notFound.title}</h1>
        <h2 className="font-semibold text-2xl mb-10">{dict.common.notFound.heading}</h2>
        <p className="mb-5">{dict.common.notFound.message}</p>
        <Link className="font-bold underline" href={`/${defaultLocale}`}>{dict.common.notFound.returnHome}</Link>
      </div>
    </>
  );
}
