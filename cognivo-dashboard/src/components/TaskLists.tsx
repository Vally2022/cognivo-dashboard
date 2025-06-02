type Task = {
  title: string;
  progress: number; // percentuale
};

const tasks: Task[] = [
  { title: "Wireframe UI screens", progress: 85 },
  { title: "Review feedback", progress: 40 },
  { title: "Daily standup notes", progress: 60 },
];

export default function TasksList() {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Tasks in Progress
      </h3>
      <ul className="space-y-4">
        {tasks.map((task, index) => (
          <li key={index}>
            <div className="flex justify-between text-sm text-gray-600 mb-1">
              <span>{task.title}</span>
              <span>{task.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 h-2 rounded-full">
              <div
                className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${task.progress}%` }}
              ></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
