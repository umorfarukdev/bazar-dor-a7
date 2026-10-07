"use client";
import { signIn } from "@/lib/auth-client";
import React from "react";
import { FcGoogle } from "react-icons/fc";

const GoogleSign = () => {
  const handleGoogleSignIn = async () => {
    await signIn.social({
      provider: "google",
    });
  };
  return (
    <div>
      <button
        onClick={handleGoogleSignIn}
        aria-label="Log in with Google"
        className="p-3 btn w-full mb-4 text-xl rounded-sm flex items-center gap-1.5"
      >
        <FcGoogle className="text-xl"></FcGoogle> Google দিয়ে চালিয়ে যান
      </button>
    </div>
  );
};

export default GoogleSign;
