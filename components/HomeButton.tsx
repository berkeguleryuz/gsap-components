import Link from "next/link";

const HomeButton = () => {
  return (
    <Link
      href="/"
      className="fixed right-6 top-1/2 transform -translate-y-1/2 bg-black hover:bg-slate-800 text-white p-4 rounded-full shadow-lg hover:shadow-xl border border-white transition-all duration-300 z-50 group">
      <svg
        className="w-6 h-6 group-hover:scale-110 transition-transform"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    </Link>
  );
};

export default HomeButton;
