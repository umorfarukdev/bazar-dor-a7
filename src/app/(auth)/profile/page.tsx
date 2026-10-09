import { signOut, useSession } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { Bounce, toast } from "react-toastify";

const Profile = () => {
  const { data: session, isPending } = useSession();

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
      <div className="max-w-5xl">
        <h1 className="text-2xl font-bold">আমার প্রোফাইল</h1>
        <p className="text-sm text-[#1D271F70]">আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>
        <div className="flex items-center justify-between p-6">
          <div className="flex items-center gap-3">
            <Image
              src={session?.user?.image || "/user.png"}
              height={50}
              width={50}
              alt="name"
              unoptimized
            ></Image>
            <div>
              <h1 className="font-semibold text-xl">{session?.user.name}</h1>
              <p className="text-sm text-[#1D271F70]">{session?.user.email}</p>
            </div>
          </div>
          <Link
            onClick={handleSignOut}
            href={"/signup"}
            className="btn btn-outline border-red-600 text-red-600"
          >
            ↩ সাইন আউট
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
