"use client";
import React, { useState } from "react";
import {
  Eye,
  EyeOff,
  Bell,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import TransactionItem from "@/components/TransactionItem";
import Link from "next/link";
import Navbar from "@/components/NavBar";

// Dummy data for recent transactions
export const recentTransactions = [
  {
    id: 1,
    type: 'credit',
    title: 'Balance Load',
    description: 'Added funds to wallet',
    amount: 1335.0,
    date: '2025-07-15T14:30:00Z', // ISO string for dynamic formatting
  },
  {
    id: 2,
    type: 'debit',
    title: 'Kuhio, O\'Connell and Carter',
    description: 'Medical consultation',
    amount: -189.0,
    date: '2025-07-14T14:30:00Z',
  },
  {
    id: 3,
    type: 'debit',
    title: 'Towne - Hackett',
    description: 'Pharmacy purchase',
    amount: -135.0,
    date: '2025-07-13T14:30:00Z',
  },
  {
    id: 4,
    type: 'credit',
    title: 'Balance Load',
    description: 'Bank transfer received',
    amount: 1335.0,
    date: '2025-07-12T14:30:00Z',
  },
  {
    id: 5,
    type: 'debit',
    title: 'Meyer Group',
    description: 'Wellness products',
    amount: -89.5,
    date: '2025-07-11T14:30:00Z',
  },
];

const WalletOverviewScreen = () => {
  const [showBalance, setShowBalance] = useState(true);

  return (
    <div className="min-h-screen bg-[#F5F5F5] p-4 overflow-y-scroll">
      <div className="flex justify-between items-center">
        <p className="text-primary-700 text-2xl font-bold">
          Good morning, Matt!
        </p>
        <Bell width={24}/>
      </div>
      <div className="mt-4">
        <div className="rounded-xl shadow-lg p-4 max-w-sm mt-2">
            <p className="text-[17px] text-secondary-300 font-medium mb-2">
              Total Balance
            </p>
          <div className="flex justify-between mb-4 items-center">
          <div className="">
            <h2 className="text-[32px] font-bold text-primary-500">
              {showBalance ? "$34,304.00" : "••••••••"}
            </h2>
          </div>
            <button
              onClick={() => setShowBalance(!showBalance)}
              className="p-1 text-secondary-400 hover:text-secondary-600 transition-colors"
            >
              {showBalance ? <Eye size={18} /> : <EyeOff size={18} />}
            </button>
          </div>
          <hr className="text-secondary-100"/>
          <p className="text-[15px] font-medium text-secondary-300 mt-4">
            Rewards
          </p>
          <div className="flex justify-between">
            <p className="text-2xl text-primary-500 font-bold">
              1,596
            </p>
            <div className="text-secondary-300">
              <ArrowRight width={24}/>
            </div>
          </div>
          <div className="w-full grid grid-cols-2 gap-2 mt-4">
            <button className="flex items-center gap-2 text-[15px] justify-center bg-primary-500 hover:bg-primary-700 text-white p-2 rounded-full">
              <Image src="/arrow-down-left.png" width={12} height={12} alt="*"/>
              <p>Add Balance</p>
            </button>
            <button className="flex items-center gap-2 text-[15px] justify-center bg-primary-500 hover:bg-primary-700 text-white p-2 rounded-full">
            <Image src="/arrow-up-right.png" width={12} height={12} alt="*"/>
            <p>Pay</p>
            </button>
          </div>
        </div>

        <Link className="bg-primary-500 flex justify-between p-4 rounded-lg mt-4 cursor-pointer" href="/dashboard/accounts">
          <div className="flex gap-2">
            <Image src="/wallet.png" width={24} height={24} alt="wallet image"/>
            <p className="text-[17px] font-medium text-primary-100">
              My Wallet
            </p>
          </div>
          <div className="">
            <ArrowRight width={24} className="text-primary-100" />
          </div>
        </Link>
      </div>

      <div className="shadow-lg p-2 mt-8 rounded-lg bg-white">
          <h3 className="text-[15px] text-secondary-300 font-medium">
            Recent Transactions
          </h3>
        <div>
          <TransactionItem transactions={recentTransactions} />
        </div>
      </div>
      <div>
        <Navbar />
      </div>
    </div>
  );
};

export default WalletOverviewScreen;
