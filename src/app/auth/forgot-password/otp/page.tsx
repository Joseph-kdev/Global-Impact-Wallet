"use client";
import { useEffect, useRef, useState } from "react";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

export default function VerifyOTP() {
  const [isVerified, setIsVerified] = useState(false);
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    const newOtp = [...otp];
    newOtp[index] = value.replace(/\D/g, "").slice(0, 1);
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const newOtp = [...otp];
      newOtp[index - 1] = "";
      setOtp(newOtp);
      inputRefs.current[index - 1]?.focus();
    }
  };

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleSubmit = async () => {
    const filledOtp = otp.filter(digit => digit !== "");
    
    if(filledOtp.length === 0) {
      toast.error("Please enter OTP")
      return
    } else if (filledOtp.length !== 6) {
      toast.error("Enter all OTP values")
      return
    }
    
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsVerified(true);
    toast.success("Success")
    redirect("/auth/forgot-password/new-password");
  };

  return (
    <div className="p-4 container">
      <h2 className="text-[28px] font-bold text-primary-600 mb-3">Enter OTP</h2>
      <p className="text-[17px] text-secondary-500 mb-4">
        We have sent the OTP code to 87****47
      </p>
      <div className="flex justify-center gap-4 w-full mt-8">
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            maxLength={1}
            className="w-10 h-10 text-center text-2xl font-mono border-b-2 border-gray-300 focus:border-blue-500 outline-none"
            aria-label={`OTP digit ${index + 1}`}
          />
        ))}
      </div>
      <button
        className="bg-primary-500 mt-12 w-full rounded-full p-4 text-white text[16px] cursor-pointer"
        onClick={handleSubmit}
        disabled={isVerified}
      >
          {isVerified ? "Verifying..." : "Proceed"}
      </button>
      <p className="text-center text-[17px] mt-8 text-secondary-500">
        Didn&apos;t receive the OTP?{" "}
        <span className="text-primary-500 mt-4 cursor-pointer">Resend OTP</span>
      </p>
    </div>
  );
}