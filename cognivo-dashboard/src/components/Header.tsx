import { FaSearch, FaChevronDown } from "react-icons/fa";

export default function Header() {
  return (
    <header className="flex items-center justify-between mb-8">
      {/* Sinistra: search e titolo */}
      <div className="flex items-center space-x-6">
        {/* Campo di ricerca */}
        <div className="relative">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
          <input
            type="text"
            placeholder="Search anything..."
            className="pl-10 pr-4 py-2 rounded-xl bg-white border border-gray-200 shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Titolo */}
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Dashboard Overview
          </h1>
        </div>
      </div>

      {/* Destra: utente + mese + avatar */}
      <div className="flex items-center space-x-6">
        <div className="text-right">
          <p className="text-sm font-medium text-gray-800">Zen Nakano</p>
          <p className="text-xs text-gray-500">zen@pomodoro.com</p>
        </div>

        {/* Mese */}
        <div className="flex items-center space-x-1 bg-white px-3 py-1.5 rounded-md border border-gray-200 shadow-sm text-sm text-gray-700">
          <span>June 2025</span>
          <FaChevronDown className="text-xs" />
        </div>

        {/* Avatar */}
        <img
          src="https://i.pravatar.cc/36"
          alt="User avatar"
          className="w-9 h-9 rounded-full border-2 border-blue-500"
        />
      </div>
    </header>
  );
}
