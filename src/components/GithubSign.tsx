"use client";
import { signIn } from "@/lib/auth-client";
import { FaGithub } from "react-icons/fa";

const GithubSign = () => {
  const handleGithubSignIn = async () => {
    await signIn.social({
      provider: "github",
    });
  };
  return (
    <button
      onClick={handleGithubSignIn}
      aria-label="Log in with GitHub"
      className="p-3 btn w-full mb-4 text-xl rounded-sm flex items-center gap-1.5"
    >
      <FaGithub className="text-xl"></FaGithub> GitHub দিয়ে চালিয়ে যান
    </button>
  );
};

export default GithubSign;
