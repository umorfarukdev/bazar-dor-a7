import { updateUser } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import React from "react";
import { Bounce, toast } from "react-toastify";

const UpdateUser = () => {
  const router = useRouter();
  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userName = Object.fromEntries(formData.entries()) as { name: string };

    await updateUser({
      name: userName.name,
    });
    router.push("/profile");

    toast.success("🦄 Wow so easy!", {
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
  };
  return (
    <div className="bg-base-300 min-h-screen">
      <div className="bg-white p-6">
        <h1 className="font-semibold text-lg">তথ্য</h1>
        <form onSubmit={handleUpdate}>
          <label htmlFor="">নাম</label>
          <input className="p-4 rounded-lg" name="name" type="text" />
          <button type="submit" className="btn bg-green-700 w-full">
            আপডেট
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
