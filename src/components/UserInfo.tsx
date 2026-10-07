"use client";

import { signOut, useSession } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { Bounce, toast } from "react-toastify";

const UserInfo = () => {
  const { data: session, isPending } = useSession();

  const userInfo = session?.user;

  if (isPending) {
    return <span className="loading loading-spinner text-success"></span>;
  }

  const handleSignOut = async () => {
    await signOut();
    toast.success("User Logout Successfull!", {
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
    <div>
      {userInfo ? (
        <>
          <div className="flex items-center gap-3">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  {/* <h1>Pro</h1> */}
                  <Image
                    width={60}
                    height={60}
                    src={userInfo?.image || "/default-avatar.png"}
                    alt={userInfo?.name || "User profile"}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                </div>
              </div>
              <ul
                tabIndex={-1}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-60 p-2 shadow"
              >
                <li>{userInfo.name}</li>
                <li>{userInfo.email}</li>
                <li>
                  <a className="justify-between">Profile</a>
                </li>
                <li>
                  <Link
                    onClick={handleSignOut}
                    className="btn bg-[#D03739] text-white font-semibold"
                    href={"/signup"}
                  >
                    ↩ সাইন আউট
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </>
      ) : (
        <>
          {" "}
          <div className="flex items-center gap-3">
            <Link className="font-semibold" href={"/signin"}>
              সাইন ইন
            </Link>
            <Link
              className="btn bg-[#34A853] text-white font-semibold"
              href={"/signup"}
            >
              সাইন আপ
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default UserInfo;
