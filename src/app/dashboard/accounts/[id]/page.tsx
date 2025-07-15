"use client";
import React, { useState } from "react";
import { Trash2 } from "lucide-react";
import { useParams } from "next/navigation";
import { bankAccounts } from "../page";
import TransactionItem from "@/components/TransactionItem";
import { recentTransactions } from "../../page";

export default function BankDetail() {
  const [activeTab, setActiveTab] = useState("details");
  const params = useParams();
  const id = params.id as string;

  console.log("parameter", id);

  const bankAccount = bankAccounts.find((acc) => acc.id === parseInt(id));

  if (!bankAccount) {
    return <div>Account not found</div>;
  }

  const handleRemoveCard = () => {
    alert(
      `Card ${bankAccount.name} ending in ${bankAccount.lastFourDigits} has been removed successfully!`
    );
    console.log(
      `Removing card: ${bankAccount.name} - ${bankAccount.lastFourDigits}`
    );
  };

  return (
    <div className="p-2 bg-[rgb(245,245,245)] rounded-xl shadow-md">
      <div className="bg-white p-4 rounded-lg">
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab("details")}
            className={`py-1 px-4 rounded-full text-[15px] font-medium ${
              activeTab === "details"
                ? "border-primary-500 bg-primary-500 text-white"
                : "text-secondary-300 hover:text-gray-700"
            }`}
          >
            Details
          </button>
          <button
            onClick={() => setActiveTab("history")}
            className={`py-1 px-4 rounded-full text-[15px] font-medium ${
              activeTab === "history"
                ? "border-primary-500 bg-primary-500 text-white"
                : "text-secondary-300 hover:text-gray-700"
            }`}
          >
            Transaction History
          </button>
        </div>
        {activeTab === "details" && (
          <div className="mt-4">
            <div className="relative bg-[#B31E30] rounded-2xl p-6 text-white shadow-lg">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h2 className="text-yellow-300 font-bold text-lg tracking-wide">
                    {bankAccount.name.toUpperCase()}
                  </h2>
                </div>
                <div className="text-white font-bold text-xl">VISA</div>
              </div>

              <div className="mb-6">
                <div className="flex gap-1 mb-2 items-center">
                  {[...Array(4)].map((_, i) => (
                    <span key={i} className="flex gap-1">
                      {[...Array(4)].map((_, j) => (
                        <span
                          key={j}
                          className="w-2 h-2 bg-white rounded-full opacity-70"
                        ></span>
                      ))}
                    </span>
                  ))}
                  <span className="ml-2 text-white font-mono text-lg tracking-wider">
                    {bankAccount.lastFourDigits}
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-end">
                <div>
                  <p className="text-xs text-gray-200 mb-1">EXP</p>
                  <p className="text-sm font-mono">12/28</p>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center">
              <button
                onClick={handleRemoveCard}
                className="mt-4 border-2 border-red-500 text-red-500 p-2 rounded-full flex items-center justify-center gap-2 hover:bg-red-50 transition-colors "
              >
                <Trash2 width={20} />
                <span className="font-medium">Remove Card</span>
              </button>
            </div>
          </div>
        )}
        {activeTab === "history" && <div className="">
          <TransactionItem transactions={recentTransactions} />
          </div>}
      </div>
    </div>
  );
}
