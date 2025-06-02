import { FaClock } from "react-icons/fa";

export default function PeakFocusWindow() {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 h-full flex flex-col justify-between">
      {/* Header con icona e titolo */}
      <div className="flex items-center space-x-3 mb-4">
        <FaClock className="text-blue-500 text-2xl" />
        <h3 className="text-lg font-semibold text-gray-800">
          Peak Focus Window
        </h3>
      </div>

      {/* Contenuto */}
      <p className="text-sm text-gray-600 mb-2">
        ⏱️ <strong>10:00 AM - 12:00 PM</strong>
      </p>
      <p className="text-sm text-gray-600 flex-1">
        Your brain activity is consistently highest during this period. Great
        time for deep work and creative tasks.
      </p>
    </div>
  );
}
