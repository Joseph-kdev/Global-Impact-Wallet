"use client";

import { Input } from "@/components/Input";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function SignUp() {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [showTermsError, setShowTermsError] = useState(false);
  const router = useRouter();

  const handleChange = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsChecked(!isChecked);
    if (showTermsError) {
      setShowTermsError(false);
    }
  };

  const handleSignUp = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!isChecked) {
      setShowTermsError(true);
      return;
    }
    if (!emailValue || !passwordValue) {
      toast.error("Enter all details");
      return;
    }
    toast.success("Success");
    router.push("/dashboard");
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
          <div className="mt-2">
            <Input
              type="password"
              label="Confirm Password"
              placeholder=""
              value={confirmPasswordValue}
              onChange={(value) => setConfirmPasswordValue(value)}
              required
              customValidation={(value) => {
                if (value && passwordValue && value !== passwordValue) {
                  return "Passwords do not match";
                }
                return null;
              }}
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
                ? "bg-primary-500 border-primary-500"
                : showTermsError
                ? "border-red-500 hover:border-red-600"
                : "border-secondary-300 hover:border-secondary-400"
            }
          `}
                onClick={() => {
                  setIsChecked(!isChecked);
                  if (showTermsError) {
                    setShowTermsError(false);
                  }
                }}
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
              className={`text-primary-700 text-[15px] cursor-pointer select-none ${
                showTermsError ? "text-red-500" : ""
              }`}
              onClick={() => {
                setIsChecked(!isChecked);
                if (showTermsError) {
                  setShowTermsError(false);
                }
              }}
            >
              I accept the <b className="font-semibold">Terms of Use</b> &{" "}
              <b className="font-semibold">Privacy Policy</b>.
            </div>
          </div>
          {showTermsError && (
            <p className="mt-2 text-red-500 text-sm flex items-center">
              <svg
                className="w-4 h-4 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              You must accept the terms and conditions to continue
            </p>
          )}
          <button
            className="bg-primary-500 text-white mt-16 w-full rounded-full p-4 text-text cursor-pointer"
            onClick={handleSignUp}
          >
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
