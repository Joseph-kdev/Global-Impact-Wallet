"use client";
import { useState } from "react";
import { redirect } from "next/navigation";
import { Input } from "@/components/Input";
import toast from "react-hot-toast";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isUpdated, setIsUpdated] = useState(false);

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    if (!password || !confirmPassword) {
      toast.error("Please enter the password");
      return;
    }
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsUpdated(true);
    toast.success("Password updated");
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
              onChange={(value) => setConfirmPassword(value)}
              required
              customValidation={(value) => {
                if (value && password && value !== password) {
                  return "Passwords do not match";
                }
                return null;
              }}
            />
      <p className="text-xs text-secondary-400 mt-2 mb-3">
        Both passwords must match.
      </p>
      </div>

      <button
        className="bg-primary-500 mt-16 w-full rounded-full p-4 text-white cursor-pointer"
        onClick={handleSubmit}
      >
        {isUpdated ? "Updating..." : "Update Password"}
      </button>
    </div>
  );
}
