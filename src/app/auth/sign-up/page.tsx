"use client";

import { Input } from "@/components/Input";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function SignUp() {
  const [textValue, setTextValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsChecked(!isChecked);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="flex mx-4 mt-4">
        <Image
          src="/Favicon.png"
          alt="global impact favicon"
          width={70}
          height={70}
        />
      </div>
      <div className="mt-2">
        <p className="text-[28px] text-primary-600 font-bold mx-4">
          Join the Global Impact Marketplace
        </p>
        <p className="mt-2 text-[17px] text-secondary-500 mx-4 font-normal">
          It only takes a minute to join the marketplace and unlock exclusive
          wellness perks.
        </p>
      </div>
      <div className="mx-4 mt-6">
        <form action="">
          <div>
            <Input
              type="text"
              label="Email Address"
              placeholder=""
              value={textValue}
              onChange={setTextValue}
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
          <div className="mt-2">
            <Input
              type="password"
              label="Confirm Password"
              placeholder=""
              value={passwordValue}
              onChange={setPasswordValue}
              required
            />
          </div>
          <div className="flex items-start gap-3 mt-4">
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
              className="text-primary-700 text-[15px] cursor-pointer select-none"
              onClick={() => setIsChecked(!isChecked)}
            >
              I accept the <b className="font-semibold">Terms of Use</b> &{" "}
              <b className="font-semibold">Privacy Policy</b>.
            </div>
          </div>
          <button className="bg-primary-500 text-white mt-16 w-full rounded-full p-4 text-text cursor-pointer">
            Sign Up
          </button>
        </form>
      </div>
      <p className="mt-4 text-center text-secondary-500 font-medium">
        Already have an account?{" "}
        <Link href="/auth/login" className="text-primary-500">
          Login
        </Link>
      </p>
      <div className="absolute bottom-4 w-full text-[13px] flex justify-between p-4 text-primary-600  underline">
        <a href="">PRIVACY POLICY</a>
        <a href="">TERMS & CONDITIONS</a>
      </div>
    </div>
  );
}
