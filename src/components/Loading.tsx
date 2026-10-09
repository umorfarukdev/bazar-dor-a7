const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-300">
      <div className="flex flex-col items-center gap-4">

        <span className="loading loading-spinner loading-lg text-green-600"></span>

        <p className="text-green-700 font-semibold text-lg">
          লোড হচ্ছে...
        </p>

      </div>
    </div>
  );
};

export default Loading;