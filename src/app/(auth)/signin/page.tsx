"use client"

import { signIn } from "@/lib/auth-client";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SignIn = () => {
        const handleSignIn = async (e: React.SubmitEvent<HTMLElement>) => {
            e.preventDefault()
    
            const formData = new FormData(e.target)
            const signInData = Object.fromEntries(formData.entries()) as {
                name: string
                email: string
                password: string
                confirmPassword: string
            }
    
            const {data, error} = await signIn.email({
                email: signInData.email,
                password: signInData.password,
                // confirmPassword: signInData.confirmPassword
            })
    
            console.log("user", data, "error", error)
          
        }
  return (
    <div>
      <div className="w-full max-w-xl mx-auto p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#1D271F] mb-1 text-center">
            সাইন ইন
          </h1>
          <p className="text-lg text-[#1D271F70] mb-6 font-semibold">
            বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
          </p>
        </div>
        <div className="bg-gray-50 p-5 rounded-2xl border-2 border-gray-300">
          <form className="space-y-6 " onSubmit={handleSignIn}>
            <div className="space-y-1 text-sm">
              <label htmlFor="username" className="block dark:text-gray-600">
                ইমেইল
              </label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-md dark:border-gray-100 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="password" className="block dark:text-gray-600">
                পাসওয়ার্ড
              </label>
              <input
                type="password"
                name="password"
                placeholder="কমপক্ষে ৮ অক্ষর"
                className="w-full px-4 py-3 rounded-md border-2 border-gray-200 dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            <button type="submit" className="block w-full text-white font-semibold bg-[#34A853] p-3 text-center rounded-md dark:text-gray-50 dark:bg-violet-600">
              সাইন ইন
            </button>
          </form>
          <div className="divider">অথবা</div>
          <div className="">
            <button
              aria-label="Log in with Google"
              className="p-3 btn w-full mb-4 text-xl rounded-sm flex items-center gap-1.5"
            >
              <FcGoogle className="text-xl"></FcGoogle> Google দিয়ে চালিয়ে যান
            </button>
            <button
              aria-label="Log in with GitHub"
              className="p-3 btn w-full mb-4 text-xl rounded-sm flex items-center gap-1.5"
            >
              <FaGithub className="text-xl"></FaGithub> GitHub দিয়ে চালিয়ে যান
            </button>
          </div>
          <p className="text-lg text-center sm:px-6  dark:text-gray-600">
            অ্যাকাউন্ট নেই?
            <Link
              href={"/signup"}
              className="underline ml-1  text-[#34A853] dark:text-gray-800"
            >
              সাইন আপ করুন
            </Link>
          </p>
        </div>
        <div className="text-center mt-6">
          <Link href={"/"}>← হোম পেজে ফিরে যান</Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
