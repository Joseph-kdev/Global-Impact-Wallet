'use client';
import React from 'react';
import Image from 'next/image';

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const time = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }).toLowerCase();
  const day = date.getDate();
  const month = date.toLocaleString('en-US', { month: 'short' });
  const suffix = ['th', 'st', 'nd', 'rd'][(day % 10 > 3 || Math.floor(day / 10) === 1) ? 0 : day % 10] || 'th';
  return `${time} | ${month} ${day}${suffix}`;
};

export default function TransactionItem({transactions}) {
  return (
    <div className="mt-4">
      <div className="space-y-4">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between py-2 shadow-sm"
          >
            <div className="flex items-center gap-4">
              <div
                className={`w-8 h-8 ${transaction.type === 'credit' ? 'bg-primary-300' : 'bg-red-400'} rounded-full flex items-center justify-center`}
              >
                <Image
                  src={transaction.type === 'credit' ? '/arrow-down-left.png' : '/arrow-up-right.png'}
                  width={12}
                  height={12}
                  alt={transaction.type === 'credit' ? 'Credit transaction' : 'Debit transaction'}
                />
              </div>
              <div>
                <p className="font-medium text-secondary-500 text-sm">{transaction.title}</p>
                <p className="text-xs text-secondary-300">{formatDate(transaction.date)}</p>
                </div>
            </div>
            <div className="text-right">
              <p
                className="text-xs text-primary-900"
              >$
                {Math.abs(transaction.amount).toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}