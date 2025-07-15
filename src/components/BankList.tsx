import { ArrowRight } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

export interface BankAccount {
  id: number;
  name: string;
  lastFourDigits: string;
  logo: string; 
}

export default function BankList({accounts}: {accounts: BankAccount[]}) {
  return (
    <div className="bg-white">
      <div className="">
        {accounts.map((account) => (
          <Link
            key={account.id}
            className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors shadow-sm"
            href={`/dashboard/accounts/${account.id}`}
          >
            <div className="flex items-center gap-3">
              <Image
                src={account.logo}
                alt={`${account.name} logo`}
                width={40}
                height={36}
                className="object-contain"
              />
              <div>
                <p className="font-medium text-sm text-secondary-500">{account.name} - {account.lastFourDigits}</p>
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-secondary-300"><ArrowRight width={24}/></span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
