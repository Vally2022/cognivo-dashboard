import type { ReactNode } from "react";

type CardProps = {
  title: string;
  value: string;
  description: string;
  icon: ReactNode;
  bgColor?: string;
};

export default function Card({
  title,
  value,
  description,
  icon,
  bgColor = "bg-white",
}: CardProps) {
  return (
    <div className={`rounded-2xl shadow-sm p-6 ${bgColor}`}>
      <div className="flex items-center space-x-4 mb-4">
        <div className="p-3 bg-white rounded-full shadow text-blue-500">
          {icon}
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-500">{title}</h3>
          <p className="text-2xl font-bold text-gray-800">{value}</p>
        </div>
      </div>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}
