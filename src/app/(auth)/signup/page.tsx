"use client";
import GithubSign from "@/components/GithubSign";
import GoogleSign from "@/components/GoogleSign";
import { signUp } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";
import { Bounce, toast } from "react-toastify";

const SignUp = () => {
  const handleSignUp = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const signInData = Object.fromEntries(formData.entries()) as {
      name: string;
      image: string;
      email: string;
      password: string;
    };

    const { data, error } = await signUp.email({
      name: signInData.name,
      image: signInData.image,
      email: signInData.email,
      password: signInData.password,
      callbackURL: "/"
    });

    if (error) {
      toast.error("Plese add valid email!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    }

    if (data) {
      toast.success("User Create Successfully!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }

    console.log("user", data, "error", error);
  };
  return (
    <div>
      <div className="w-full max-w-xl mx-auto p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-1 text-[#1D271F] text-center">
            অ্যাকাউন্ট তৈরি করুন
          </h1>
          <p className="text-lg text-[#1D271F70] font-semibold mb-8">
            বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
          </p>
        </div>
        <div className="bg-gray-50 p-5 rounded-2xl border-2 border-gray-300">
          <form className="space-y-6 " onSubmit={handleSignUp}>
            <div className="space-y-1 text-sm">
              <label htmlFor="username" className="block dark:text-gray-600">
                নাম
              </label>
              <input
                type="text"
                name="name"
                placeholder="যেমন: রহিম উদ্দিন"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-md dark:border-gray-100 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="password" className="block dark:text-gray-600">
                ছবির লিংক
              </label>
              <input
                type="url"
                name="image"
                placeholder="যেমন: https://media.istockphoto.com/id/814423752"
                className="w-full px-4 py-3 rounded-md border-2 border-gray-200 dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
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
            <button
              type="submit"
              className="block w-full text-white font-semibold bg-[#34A853] p-3 text-center rounded-md dark:text-gray-50 dark:bg-violet-600"
            >
              অ্যাকাউন্ট তৈরি করুন
            </button>
          </form>
          <div className="divider">অথবা</div>
          <div className="">
            <GoogleSign></GoogleSign>
            <GithubSign></GithubSign>
          </div>
          <p className="text-lg text-center sm:px-6  dark:text-gray-600">
            অ্যাকাউন্ট আছে?
            <Link
              href={"/signin"}
              className="underline ml-1  text-[#34A853] dark:text-gray-800"
            >
              সাইন ইন করুন
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

export default SignUp;
