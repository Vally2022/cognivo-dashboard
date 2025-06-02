import { FaHome, FaChartLine, FaClock, FaBrain, FaCog } from "react-icons/fa";

export default function Sidebar() {
  return (
    <aside className="w-20 h-screen bg-white shadow-xl flex flex-col items-center justify-between py-6 rounded-r-3xl">
      {/* Top icons */}
      <div className="flex flex-col items-center space-y-8">
        <IconButton icon={<FaHome />} />
        <IconButton icon={<FaChartLine />} />
        <IconButton icon={<FaClock />} />
        <IconButton icon={<FaBrain />} />
      </div>

      {/* Bottom icon */}
      <div>
        <IconButton icon={<FaCog />} />
      </div>
    </aside>
  );
}

type IconButtonProps = {
  icon: React.ReactNode;
};

function IconButton({ icon }: IconButtonProps) {
  return (
    <button className="text-gray-400 hover:text-blue-500 text-xl transition-colors duration-200">
      {icon}
    </button>
  );
}
