import { FaFacebookF, FaTwitter, FaLinkedinIn, FaSearch } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="bg-white px-12 py-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="bg-yellow-500 p-3 rounded-lg text-white text-xl">
          📰
        </div>

        <h1 className="text-3xl font-bold text-slate-900">BuzzPulse</h1>
      </div>

      <nav className="flex gap-10 text-lg font-semibold text-slate-600">
        <a className="text-orange-500">Home</a>

        <a>Blog ▼</a>

        <a>Post ▼</a>

        <a>Contact</a>
      </nav>

      <div className="flex items-center gap-5">
        <div className="border rounded-xl px-5 py-4 w-96 flex justify-between">
          <input placeholder="Search Here..." className="outline-none" />

          <FaSearch className="text-slate-400 text-xl" />
        </div>

        <div className="flex gap-4">
          <div className="bg-blue-100 p-4 rounded-full">
            <FaFacebookF />
          </div>

          <div className="bg-blue-100 p-4 rounded-full">
            <FaTwitter />
          </div>

          <div className="bg-blue-100 p-4 rounded-full">
            <FaLinkedinIn />
          </div>
        </div>
      </div>
    </header>
  );
}
