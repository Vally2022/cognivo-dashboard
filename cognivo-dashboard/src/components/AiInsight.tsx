import { FaLightbulb } from "react-icons/fa";

export default function AiInsight() {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 h-full flex flex-col justify-between">
      {/* Header con icona e titolo */}
      <div className="flex items-center space-x-3 mb-4">
        <FaLightbulb className="text-yellow-500 text-2xl" />
        <h3 className="text-lg font-semibold text-gray-800">
          AI Insight of the Day
        </h3>
      </div>

      {/* Contenuto */}
      <p className="text-sm text-gray-600 flex-1">
        🔍 You tend to be most productive between <strong>10:00 AM</strong> and{" "}
        <strong>12:00 PM</strong>. Schedule your deep work during this period
        for maximum focus.
      </p>
    </div>
  );
}
