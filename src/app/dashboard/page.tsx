"use client";
import React, { useState } from "react";
import {
  Eye,
  EyeOff,
  Plus,
  CreditCard,
  Wallet,
  TrendingUp,
  Gift,
  MapPin,
  Download,
  Users,
  Award,
  ShoppingBag,
  Home,
  Smartphone,
  CircleQuestionMark,
  MoveUpRight,
  EllipsisIcon,
  MoveDownLeft,
} from "lucide-react";
import Image from "next/image";

const WalletOverviewScreen = () => {
  const [showBalance, setShowBalance] = useState(true);

  // Dummy data for recent transactions
  const recentTransactions = [
    {
      id: 1,
      type: "credit",
      title: "Balance Load",
      description: "Added funds to wallet",
      amount: 1335.0,
      date: "Today",
      icon: "plus",
      color: "bg-blue-500",
    },
    {
      id: 2,
      type: "debit",
      title: "Kuhio, O'Connell and Carter",
      description: "Medical consultation",
      amount: -189.0,
      date: "Yesterday",
      icon: "medical",
      color: "bg-red-500",
    },
    {
      id: 3,
      type: "debit",
      title: "Towne - Hackett",
      description: "Pharmacy purchase",
      amount: -135.0,
      date: "2 days ago",
      icon: "pharmacy",
      color: "bg-red-500",
    },
    {
      id: 4,
      type: "credit",
      title: "Balance Load",
      description: "Bank transfer received",
      amount: 1335.0,
      date: "3 days ago",
      icon: "plus",
      color: "bg-blue-500",
    },
    {
      id: 5,
      type: "debit",
      title: "Meyer Group",
      description: "Wellness products",
      amount: -89.5,
      date: "4 days ago",
      icon: "shopping",
      color: "bg-red-500",
    },
  ];

  // Dummy data for favorite contacts
  const favoriteContacts = [
    { id: 1, name: "Sarah M.", avatar: "S", color: "bg-purple-500" },
    { id: 2, name: "John D.", avatar: "J", color: "bg-green-500" },
    { id: 3, name: "Emma W.", avatar: "E", color: "bg-pink-500" },
    { id: 4, name: "Mike R.", avatar: "M", color: "bg-orange-500" },
    { id: 5, name: "Lisa K.", avatar: "L", color: "bg-indigo-500" },
  ];

  // Dummy data for promotional offers
  const promotionalOffers = [
    {
      id: 1,
      title: "20% Off Wellness Checkup",
      description: "Valid at participating clinics",
      discount: "20% OFF",
      location: "0.5 miles away",
      expires: "Expires in 3 days",
      color: "from-green-500 to-emerald-600",
    },
    {
      id: 2,
      title: "Free Delivery on Pharmacy Orders",
      description: "Orders above $50",
      discount: "FREE",
      location: "1.2 miles away",
      expires: "Expires in 5 days",
      color: "from-blue-500 to-cyan-600",
    },
    {
      id: 3,
      title: "Buy 2 Get 1 Free Supplements",
      description: "Premium vitamin collection",
      discount: "B2G1",
      location: "0.8 miles away",
      expires: "Expires in 7 days",
      color: "from-purple-500 to-pink-600",
    },
  ];

  const getTransactionIcon = (iconType: string) => {
    switch (iconType) {
      case "credit":
        return <Plus className="w-5 h-5 text-white" />;
      case "debit":
        return <Home className="w-5 h-5 text-white" />;
      default:
        return <CreditCard className="w-5 h-5 text-white" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      {/* <div className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 lg:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="lg:hidden">
                        <Image
                          src="/Logo.png"
                          alt="Global impact logo"
                          width={95}
                          height={80}
                        />
              </div>
              <div className="hidden lg:block">
                        <Image
                          src="/Logo.png"
                          alt="Global impact logo"
                          width={95}
                          height={80}
                        />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-semibold text-gray-800">Good morning, { 'Matt'}!</h1>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <button className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors">
                <Bell size={20} />
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors">
                <Settings size={20} />
              </button>
              <button
                className="hidden lg:flex items-center gap-2 text-gray-600 hover:text-gray-800 px-3 py-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <LogOut size={18} />
                <span className="font-medium">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div> */}

      <div className="p-2 flex gap-2">
        <div className="border w-[100px] flex flex-col justify-center items-center p-2 rounded-lg">
          <Wallet size={26} />
          <p>My Wallet</p>
        </div>
        <div className="border w-[100px] flex flex-col justify-center items-center p-2 rounded-lg">
          <MoveUpRight size={26} />
          <p>Pay</p>
        </div>
        <div className="border w-[100px] flex flex-col justify-center items-center p-2 rounded-lg">
          <EllipsisIcon size={26} />
          <p>More</p>
        </div>
      </div>

      <div className="p-2">
        <div className="rounded-2xl shadow-sm p-4 border max-w-sm mt-2">
          <div className="flex justify-between mb-4">
            <span className="text-sm text-secondary-400 font-medium">
              Total Balance
            </span>
            <button
              onClick={() => setShowBalance(!showBalance)}
              className="p-1 text-secondary-400 hover:text-secondary-600 transition-colors"
            >
              {showBalance ? <Eye size={18} /> : <EyeOff size={18} />}
            </button>
          </div>
          <div className="mb-4">
            <h2 className="text-2xl lg:text-4xl font-bold text-secondary-700">
              {showBalance ? "$34,304.00" : "••••••••"}
            </h2>
          </div>
          <div className="w-full">
            <button className="flex items-center w-full justify-center bg-primary-500 hover:bg-primary-700 text-white p-2 rounded-xl font-semibold">
              <MoveDownLeft className="w-5 h-5 mr-2" />
              <p>Add Balance</p>
            </button>
          </div>
        </div>

        <div className="rounded-2xl shadow-sm p-4 border max-w-sm mt-2">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Rewards</span>
            <Award size={16} className="text-secondary-500 animate-bounce" />
          </div>
          <div className="mt-4 flex justify-between items-center">
            <h2 className="text-2xl lg:text-4xl font-bold text-secondary-700">
              1,423
            </h2>
            <div className="flex items-center gap-2">
              <TrendingUp size={16} className="text-green-500" />
              <span className="text-sm font-medium text-secondary-500">
                +12.5%
              </span>
            </div>
          </div>
          <div className="w-full mt-4">
            <button className="flex items-center w-full justify-center bg-primary-500 hover:bg-primary-700 text-white p-2 rounded-xl font-semibold">
              <CircleQuestionMark className="w-5 h-5 mr-2" />
              <p>Rewards</p>
            </button>
          </div>
        </div>
      </div>

      <div className="border p-2 mx-2">
        <div className="flex justify-between items-center">
          <h3 className="text-secondary-700 font-semibold">
            Recent Transactions
          </h3>
          <button className="text-primary-600 hover:text-blue-700 font-medium text-sm">
            View All
          </button>
        </div>
        <div>
          {recentTransactions.map((transaction) => (
            <div key={transaction.id}>

            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 py-6">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="space-y-6">
            {/* Recent Transactions */}
            <div className="bg-white rounded-xl shadow-sm p-2 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-800">
                  Recent Transactions
                </h3>
                <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                  View All
                </button>
              </div>

              <div className="space-y-4">
                {recentTransactions.map((transaction) => (
                  <div
                    key={transaction.id}
                    className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-8 h-8 ${transaction.color} rounded-full flex items-center justify-center`}
                      >
                        {getTransactionIcon(transaction.icon)}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">
                          {transaction.title}
                        </p>
                        <p className="text-sm text-gray-600">
                          {transaction.description}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p
                        className={`font-bold ${
                          transaction.type === "credit"
                            ? "text-green-600"
                            : "text-gray-800"
                        }`}
                      >
                        {transaction.type === "credit" ? "+" : "-"}$
                        {Math.abs(transaction.amount).toFixed(2)}
                      </p>
                      <p className="text-xs text-gray-500">
                        {transaction.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Transfer */}
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Quick Transfer
              </h3>
              <div className="flex gap-3 mb-4">
                {favoriteContacts.map((contact) => (
                  <button
                    key={contact.id}
                    className="flex flex-col items-center gap-2 p-2 hover:bg-gray-50 rounded-xl transition-colors group"
                  >
                    <div
                      className={`w-12 h-12 ${contact.color} rounded-full flex items-center justify-center text-white font-semibold group-hover:scale-110 transition-transform`}
                    >
                      {contact.avatar}
                    </div>
                    <span className="text-xs text-gray-600 font-medium">
                      {contact.name}
                    </span>
                  </button>
                ))}
              </div>
              <button className="w-full border-gray-200 text-gray-700 hover:bg-gray-50">
                <Users className="w-4 h-4 mr-2" />
                View All Contacts
              </button>
            </div>

            {/* Promotional Offers */}
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  Deals Nearby
                </h3>
                <MapPin className="w-5 h-5 text-gray-400" />
              </div>

              <div className="space-y-4">
                {promotionalOffers.map((offer) => (
                  <div
                    key={offer.id}
                    className={`bg-gradient-to-r ${offer.color} rounded-xl p-4 text-white relative overflow-hidden`}
                  >
                    <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-2">
                        <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1">
                          <span className="text-sm font-bold">
                            {offer.discount}
                          </span>
                        </div>
                        <Gift className="w-5 h-5" />
                      </div>
                      <h4 className="font-semibold mb-1">{offer.title}</h4>
                      <p className="text-sm opacity-90 mb-2">
                        {offer.description}
                      </p>
                      <div className="flex items-center justify-between text-xs opacity-80">
                        <span>{offer.location}</span>
                        <span>{offer.expires}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full mt-4 border-gray-200 text-gray-700 hover:bg-gray-50">
                <MapPin className="w-4 h-4 mr-2" />
                View All Offers
              </button>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                This Month
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Income</p>
                      <p className="text-sm text-gray-600">+$2,670.00</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                      <Download className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Expenses</p>
                      <p className="text-sm text-gray-600">-$1,413.50</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <Award className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">
                        Rewards Earned
                      </p>
                      <p className="text-sm text-gray-600">+347 points</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletOverviewScreen;
