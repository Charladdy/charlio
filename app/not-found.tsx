import Link from 'next/link';
import Image from 'next/image';
import "./not-found-styles.css"

export default function NotFound() {
  return (
    <>
        <div className='hor-gfx-mask'/>
        <div className='vert-gfx-div'/>
        <div className='hor-gfx-div'/>
        <div className="m-auto" style={{ textAlign: 'center', padding: '50px' }}>
            <h1 className="font-bold text-4xl mb-5">404</h1>
            <h2 className="font-semibold text-2xl mb-10">Page Not Found</h2>
            <p className="mb-5">Could not find the content you're looking for.</p>
            <Link className="font-bold underline" href="/">Return Home</Link>
        </div>
    </>
  );
}
