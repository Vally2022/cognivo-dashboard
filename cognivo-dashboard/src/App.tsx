import Sidebar from "./components/Sidebar";
import Dashboard from "./dashboard/Dashboard";

function App() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 overflow-auto p-6">
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
