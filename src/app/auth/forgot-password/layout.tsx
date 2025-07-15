"use client"
import { ArrowLeftIcon } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'

export default function ForgotPasswordLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  
    return (
    <div>
      <div className="text-primary-500 mt-4 cursor-pointer" onClick={() => router.back()}>
        <ArrowLeftIcon width={32}/>
      </div>
      <div className="flex justify-center mb-6 mt-8">
        <Image src="/key.png" alt="Key Icon" width={160} height={160} />
      </div>
      <section>{children}</section>
    </div>
  );
}
