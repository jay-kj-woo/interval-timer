import { useState } from 'react';

interface Props {
  timeLeft: number;
  currentRound: number;
  totalRounds: number;
  initialTime: number;
}

const TimerDisplay = ({
  timeLeft,
  currentRound,
  totalRounds,
  initialTime,
}: Props) => {
  const [timerRadius, setTimerRadius] = useState(0);

  const handleContainerRefCallback = (node: HTMLDivElement) => {
    if (node) {
      setTimerRadius(Math.min(node.clientWidth, node.clientHeight) / 2);
    }
  };

  const roundedSeconds = Math.ceil(timeLeft % 60);
  const isExactMinute = roundedSeconds === 60;
  const minutes = isExactMinute
    ? Math.floor(timeLeft / 60) + 1
    : Math.floor(timeLeft / 60);
  const seconds = isExactMinute ? 0 : roundedSeconds;

  // Calculate progress percentage (going from 100 to 0)
  const progress = (timeLeft / initialTime) * 100;
  const radius = timerRadius; // Size of circle
  const strokeWidth = 8;
  const normalizedRadius = radius - strokeWidth * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div
      className="relative flex flex-col items-center justify-center w-full h-full"
      ref={handleContainerRefCallback}
    >
      <svg
        height={radius * 2}
        width={radius * 2}
        className="transform -rotate-90"
      >
        {/* Background circle */}
        <circle
          stroke="rgba(255,255,255,0.2)"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        {/* Progress circle */}
        <circle
          stroke="white"
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference + ' ' + circumference}
          style={{ strokeDashoffset }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          className="transition-all duration-100 ease-linear"
        />
      </svg>

      {/* Timer text positioned absolutely in center */}
      <div className="absolute flex flex-col items-center justify-center text-white">
        <h1 className="text-6xl font-bold">
          {minutes.toString().padStart(2, '0')}:
          {seconds.toString().padStart(2, '0')}
        </h1>
        <h2 className="text-xl mt-2">
          Round {currentRound} of {totalRounds}
        </h2>
      </div>
    </div>
  );
};

export default TimerDisplay;
