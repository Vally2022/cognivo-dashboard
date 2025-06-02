import Header from "../components/Header";
import { FaClock, FaBolt, FaThumbsUp } from "react-icons/fa";
import Card from "../components/Card";
import ProductivityChart from "../components/ProductivityChart";
import PomodoroTimer from "../components/PomodoroTimer";
import AiInsight from "../components/AiInsight";
import PeakFocusWindow from "../components/PeakFocusWindow";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Intestazione */}
      <Header />

      {/* Metriche principali */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
          title="Focus Time (Today)"
          value="3h 45m"
          description="Time spent focused on deep work."
          icon={<FaClock className="text-blue-500 text-2xl" />}
          bgColor="bg-blue-50"
        />
        <Card
          title="Mental Energy"
          value="8.5/10"
          description="Your energy is at a good level. Great job balancing tasks!"
          icon={<FaBolt className="text-yellow-500 text-2xl" />}
          bgColor="bg-yellow-50"
        />
        <Card
          title="Focus Level"
          value="82%"
          description="You stayed focused for most of your work blocks."
          icon={<FaThumbsUp className="text-green-500 text-2xl" />}
          bgColor="bg-green-50"
        />
      </div>

      {/* Grafico + Timer Pomodoro */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Il grafico prende 2 colonne su desktop */}
        <div className="lg:col-span-2">
          <ProductivityChart />
        </div>
        <PomodoroTimer />
      </div>

      {/* Placeholder per futuri contenuti */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AiInsight />
        <PeakFocusWindow />
      </div>
    </div>
  );
}
