"use client";
import { useState } from "react";
import { redirect } from "next/navigation";
import { Input } from "@/components/Input";
import Link from "next/link";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitted(true);
    redirect("/auth/forgot-password/verify");
  };

  return (
    <div className="mx-4">
      <h2 className="text-[28px] font-bold text-primary-600 mb-4">
        Forgot Password
      </h2>
      <p className="text-secondary-500 mb-4 text-[17px]">
        Not to worry! Enter email address associated with your account and we’ll
        send a link to reset your password.
      </p>
      <div className="mt-12">
      <Input
        type="email"
        label="Email Address"
        placeholder=""
        value={email}
        onChange={setEmail}
        disabled={isSubmitted}
      />
      </div>
      <button
        className="bg-primary-500 mt-12 w-full rounded-full p-4 text-white cursor-pointer text-[16px]"
        onClick={handleSubmit}
        disabled={isSubmitted || !email}
      >
        Submit
      </button>
      <button className="text-[17px] mt-4 w-full rounded-full p-2 text-primary-500 cursor-pointer">
        <Link href="/auth/forgot-password/otp">Send OTP</Link>
      </button>
    </div>
  );
}
