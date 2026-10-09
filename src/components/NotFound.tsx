import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-300">
      <div className="bg-white rounded-2xl shadow-md p-10 text-center max-w-md">
        <h1 className="text-6xl font-bold text-green-600">404</h1>

        <h2 className="text-2xl font-semibold mt-4">পেজ পাওয়া যায়নি</h2>

        <p className="text-gray-500 mt-2">
          দুঃখিত, আপনি যে পেজটি খুঁজছেন সেটি পাওয়া যাচ্ছে না।
        </p>

        <Link
          href="/"
          className="
            inline-block
            mt-6
            bg-green-600
            hover:bg-green-700
            text-white
            px-6
            py-3
            rounded-xl
            font-semibold
          "
        >
          হোমে ফিরে যান
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
