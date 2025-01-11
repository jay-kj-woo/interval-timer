import { useContext, useEffect, useState } from 'react';
import EditTimer from './EditTimer';
import { TimerConfigContext } from './TimerConfigProvider';

const Timer = () => {
  const { timerConfig } = useContext(TimerConfigContext);
  const [timeLeft, setTimeLeft] = useState(timerConfig.highIntensity);
  const [isHighIntensity, setIsHighIntensity] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [currentRound, setCurrentRound] = useState(1);
  const [showEditTimer, setShowEditTimer] = useState(false);

  useEffect(() => {
    let interval: number;

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((p) => p - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      if (isHighIntensity) {
        setIsHighIntensity(false);
        setTimeLeft(timerConfig.lowIntensity);
      } else {
        if (currentRound < timerConfig.rounds) {
          setCurrentRound((p) => p + 1);
          setIsHighIntensity(true);
          setTimeLeft(timerConfig.highIntensity);
        } else {
          setIsActive(false);
        }
      }
    }

    return () => clearInterval(interval);
  }, [timerConfig, currentRound, isActive, isHighIntensity, timeLeft]);

  const onResetTimer = () => {
    setIsActive(false);
    setIsHighIntensity(true);
    setTimeLeft(timerConfig.highIntensity);
    setCurrentRound(1);
  };

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div
      className={`w-screen h-screen flex justify-center items-center p-10 ${
        isHighIntensity ? 'bg-red-500' : 'bg-green-500'
      }`}
    >
      <div className="w-full h-full flex flex-col items-center justify-center gap-4">
        <button
          className="absolute top-0 right-0 m-4 text-white"
          onClick={() => setShowEditTimer(true)}
        >
          Edit Timer
        </button>
        <div className="text-white text-4xl font-bold text-center">
          {minutes} : {seconds}
        </div>
        <div className="text-white text-4xl font-bold text-center">
          {currentRound} / {timerConfig.rounds}
        </div>
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={toggleTimer}
            className="bg-white text-black px-4 py-2 rounded-md"
          >
            {isActive ? 'Pause' : 'Start'}
          </button>
          <button
            onClick={onResetTimer}
            className="bg-white text-black px-4 py-2 rounded-md"
          >
            Reset Timer
          </button>
        </div>
      </div>
      {showEditTimer && (
        <EditTimer closeEditTimer={() => setShowEditTimer(false)} />
      )}
    </div>
  );
};

export default Timer;
