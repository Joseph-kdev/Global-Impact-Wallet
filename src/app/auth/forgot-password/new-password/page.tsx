"use client";
import { useState } from "react";
import { redirect } from "next/navigation";
import { Input } from "@/components/Input";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isUpdated, setIsUpdated] = useState(false);

  const handleSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsUpdated(true);
    redirect("/auth/login");
  };

  return (
    <div className="p-4">
      <h2 className="text-[28px] font-bold text-primary-600 mb-4">
        Create New Password
      </h2>
      <p className="text-[17px] text-secondary-500 mb-6">
        Your new password must be different from previous passwords and must be
        of at least 8 characters.
      </p>
      <div className="mt-8">
        <Input
          type="password"
          label="Password"
          placeholder=""
          value={password}
          onChange={setPassword}
          disabled={isUpdated}
        />
        <p className="text-xs text-secondary-400 mt-2 mb-3">
          Must be at least 8 characters.
        </p>
        <Input
          type="password"
          label="Confirm Password"
          placeholder=""
          value={confirmPassword}
          onChange={setConfirmPassword}
          disabled={isUpdated}
        />
      <p className="text-xs text-secondary-400 mt-2 mb-3">
        Both passwords must match.
      </p>
      </div>

      <button
        className="bg-primary-500 mt-16 w-full rounded-full p-4 text-white cursor-pointer"
        onClick={handleSubmit}
        disabled={
          isUpdated || password !== confirmPassword || password.length < 8
        }
      >
        {isUpdated ? "Updating..." : "Update Password"}
      </button>
    </div>
  );
}
