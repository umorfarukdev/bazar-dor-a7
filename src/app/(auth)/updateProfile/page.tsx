"use client";
import { updateUser } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";

const UpdateProfile = () => {
  const router = useRouter();
  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userName = Object.fromEntries(formData.entries()) as { name: string };

    const { data, error } = await updateUser({
      name: userName.name,
    });

    if (error) {
      toast.error("Profile update failed");
      return;
    }

    if (data) {
      toast.success("Profile updated successfully!");
    }
    router.push("/profile");

  };
  return (
    <div className="bg-base-300 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl mt-6">
        <h1 className="font-semibold text-lg mb-6">তথ্য</h1>
        <form onSubmit={handleUpdate}>
          <label htmlFor="">নাম</label> <br />
          <input
            type="text"
            name="name"
            placeholder="Type here"
            className="input w-full my-4"
          />
          <button type="submit" className="btn bg-green-700 w-full">
            আপডেট
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
