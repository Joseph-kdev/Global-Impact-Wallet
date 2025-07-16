"use client";
import { useState } from "react";
import { redirect, useRouter } from "next/navigation";
import { Input } from "@/components/Input";
import toast from "react-hot-toast";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const router = useRouter();

  const handleSubmit = async () => {
    if (!email) {
      toast.error("Please provide an email");
      return;
    }
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitted(true);
    toast.success("Submitted");
    redirect("/");
  };

  const handleOtpSend = async () => {
    toast.success(`OTP sent`);
    router.push("/auth/forgot-password/otp");
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
        disabled={isSubmitted}
      >
        Submit
      </button>
      <button
        className="text-[17px] mt-4 w-full rounded-full p-2 text-primary-500 cursor-pointer"
        onClick={handleOtpSend}
      >
        Send OTP
      </button>
    </div>
  );
}
