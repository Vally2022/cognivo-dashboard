import { useState, useEffect, useRef } from "react";
import { FaClock } from "react-icons/fa";

const INITIAL_TIME = 25 * 60; // 25 minuti in secondi

export default function PomodoroTimer() {
  const [secondsLeft, setSecondsLeft] = useState(INITIAL_TIME);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<number | null>(null);

  // Avvia il timer
  const startTimer = () => {
    if (intervalRef.current !== null) return;
    setIsRunning(true);
    intervalRef.current = window.setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current!);
          intervalRef.current = null;
          setIsRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  // Resetta il timer
  const resetTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setSecondsLeft(INITIAL_TIME);
    setIsRunning(false);
  };

  // Formatta mm:ss
  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  // Pulizia a smontaggio componente
  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col items-center justify-center h-full">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">
        Pomodoro Timer
      </h3>
      <p className="text-sm text-gray-500 mb-6">Focus Session</p>

      {/* Cerchio timer finto */}
      <div className="relative w-40 h-40 mb-4">
        <div className="absolute inset-0 rounded-full border-8 border-blue-200" />
        <div className="absolute inset-2 rounded-full bg-blue-100 flex items-center justify-center text-3xl font-bold text-blue-600">
          {formatTime(secondsLeft)}
        </div>
      </div>

      <div className="flex space-x-4">
        <button
          onClick={startTimer}
          disabled={isRunning}
          className="px-4 py-1.5 rounded-md text-white bg-blue-600 hover:bg-blue-700 text-sm disabled:opacity-50"
        >
          Start
        </button>
        <button
          onClick={resetTimer}
          className="px-4 py-1.5 rounded-md text-blue-600 border border-blue-600 text-sm"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
