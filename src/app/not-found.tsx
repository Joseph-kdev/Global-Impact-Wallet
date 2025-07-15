'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <Image src="/construction.svg" alt="Construction in progress" width={300} height={300} />
      <h1 className="text-xl font-bold text-secondary-500 mt-6">404 - Page Not Found</h1>
      <p className="text-lg text-primary-900 text-center mt-2">Oops! It looks like this page is under construction.</p>
      <Link href="/" className='cursor-pointer'>
        <button className="mt-6 px-6 py-3 bg-primary-500 text-white rounded-full">
          Back to Home
        </button>
      </Link>
    </div>
  );
}