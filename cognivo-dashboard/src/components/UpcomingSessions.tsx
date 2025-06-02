type Session = {
  time: string;
  title: string;
};

const sessions: Session[] = [
  { time: "10:00 AM", title: "Deep Work Block" },
  { time: "1:00 PM", title: "Team Sync Meeting" },
  { time: "4:00 PM", title: "Read & Reflect" },
];

export default function UpcomingSessions() {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Upcoming Sessions
      </h3>
      <ul className="space-y-3">
        {sessions.map((s, index) => (
          <li key={index} className="flex items-center space-x-4">
            <div className="w-2 h-2 bg-blue-500 rounded-full" />
            <div>
              <p className="text-sm font-medium text-gray-700">{s.title}</p>
              <p className="text-xs text-gray-500">{s.time}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
