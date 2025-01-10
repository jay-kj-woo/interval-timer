import { useEffect, useState } from 'react';
import { IntervalTimer } from '../types/IntervalTimer';

type Props = {
  intervalTimer: IntervalTimer;
};

const Timer = ({ intervalTimer }: Props) => {
  const config = intervalTimer;
  const [timeLeft, setTimeLeft] = useState(config.highIntensity);
  const [isHighIntensity, setIsHighIntensity] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [currentRound, setCurrentRound] = useState(1);

  useEffect(() => {
    let interval: number;

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((p) => p - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      if (isHighIntensity) {
        setIsHighIntensity(false);
        setTimeLeft(config.lowIntensity);
      } else {
        if (currentRound < config.rounds) {
          setCurrentRound((p) => p + 1);
          setIsHighIntensity(true);
          setTimeLeft(config.highIntensity);
        } else {
          setIsActive(false);
        }
      }
    }

    return () => clearInterval(interval);
  }, [config, currentRound, isActive, isHighIntensity, timeLeft]);

  const onResetTimer = () => {
    setIsActive(false);
    setIsHighIntensity(true);
    setTimeLeft(config.highIntensity);
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
        <div className="text-white text-4xl font-bold text-center">
          {minutes} : {seconds}
        </div>
        <div className="text-white text-4xl font-bold text-center">
          {currentRound} / {config.rounds}
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
    </div>
  );
};

export default Timer;
