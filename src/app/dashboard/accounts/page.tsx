import BankList from "@/components/BankList";
import { Plus } from "lucide-react";
import React from "react";

export const bankAccounts = [
  {
    id: 1,
    name: "Wells Fargo",
    lastFourDigits: "2445",
    logo: "/wells.png",
  },
  {
    id: 2,
    name: "Chase Bank",
    lastFourDigits: "2389",
    logo: "/chase.png",
  },
];

export default function AccountPage() {
  return (
    <div className="max-w-md mx-auto p-4 bg-[#F5F5F5] min-h-screen rounded-xl shadow-md">
      <div className="bg-white p-2 rounded-lg">
      <h2 className="text-[15px] font-medium text-secondary-300">
        Bank Accounts
      </h2>
      <BankList accounts={bankAccounts} />
      <button
        className="mt-4 w-full bg-primary-500 p-2 rounded-full flex justify-center items-center gap-2"
      >
        <Plus width={24} className="text-primary-100"/>
        <p className="text-[15px] text-white">Add New</p>
      </button>
      </div>
    </div>
  );
}
