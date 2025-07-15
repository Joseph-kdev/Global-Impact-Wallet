"use client"
import { ArrowLeftIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react'

export default function AccountsLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  
    return (
    <div className='bg-[#F5F5F5]'>
      <div className="text-primary-500 cursor-pointer p-4" onClick={() => router.back()}>
        <ArrowLeftIcon width={32}/>
      </div>
      <section>{children}</section>
    </div>
  );
}
