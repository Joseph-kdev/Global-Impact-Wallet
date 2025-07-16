"use client";

import { Input } from "@/components/Input";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function Login() {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const router = useRouter();

  const handleChange = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsChecked(!isChecked);
  };

  const handleLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!emailValue || !passwordValue) {
      toast.error("Missing email or password");
      return;
    }
    toast.success("success");
    router.push("/dashboard");
  };
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="w-full flex mx-4 mt-8">
        <Image
          src="/Favicon.png"
          alt="global impact favicon"
          width={70}
          height={70}
        />
      </div>
      <div className="mt-2">
        <p className="text-[28px] text-primary-600 font-bold mx-4">
          Welcome Back
        </p>
        <p className="mt-2 text-[17px] text-secondary-500 mx-4 font-normal">
          Log in to continue shopping, earning rewards, and supporting trusted
          wellness providers.
        </p>
      </div>
      <div className="mx-4 mt-8">
        <form action="">
          <div>
            <Input
              type="email"
              label="Email Address"
              placeholder=""
              value={emailValue}
              onChange={setEmailValue}
              required
            />
          </div>
          <div className="mt-2">
            <Input
              type="password"
              label="Password"
              placeholder=""
              value={passwordValue}
              onChange={setPasswordValue}
              required
            />
          </div>
          <div className="mt-2 flex justify-between">
            <div></div>
            <Link
              href="/auth/forgot-password"
              className="text-[16px] font-semibold text-primary-600"
            >
              Forgot password?
            </Link>
          </div>
          <div className="flex items-start gap-3 mt-6">
            <div className="relative flex-shrink-0 mt-0.5">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleChange}
                className="sr-only"
              />

              <div
                className={`
                w-5 h-5 border-2 rounded cursor-pointer transition-all duration-200
                ${
                  isChecked
                    ? "bg-blue-500 border-blue-500"
                    : "border-gray-300 hover:border-gray-400"
                }
              `}
                onClick={() => setIsChecked(!isChecked)}
              >
                {isChecked && (
                  <Check
                    size={12}
                    className="text-white absolute top-1 left-1"
                  />
                )}
              </div>
            </div>
            <div
              className="text-primary-700 text-[15px] cursor-pointer select-none leading-relaxed"
              onClick={() => setIsChecked(!isChecked)}
            >
              Remember me and keep me logged in
            </div>
          </div>
          <button
            className="bg-primary-500 mt-16 w-full rounded-full p-4 text-white text-[16px] cursor-pointer"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>
      </div>
      <p className="mt-6 text-center text-[17px]">
        Don&apos;t have an account?{" "}
        <Link href="/auth/sign-up" className="text-primary-500">
          Sign Up
        </Link>
      </p>
      <div className="absolute bottom-4 w-full text-[13px] flex justify-between p-4 text-primary-600 underline">
        <a href="">PRIVACY POLICY</a>
        <a href="">TERMS & CONDITIONS</a>
      </div>
    </div>
  );
}
