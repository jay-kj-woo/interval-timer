import { useNavigate } from 'react-router';
import useTimer from '../hooks/useTimer';
import { IntervalTimer } from '../types/IntervalTimer';
import TimerDisplay from './TimerDisplay';

const Timer = ({ timerConfig }: { timerConfig: IntervalTimer }) => {
  const navigate = useNavigate();
  const {
    timeLeft,
    isHighIntensity,
    isActive,
    currentRound,
    onResetTimer,
    toggleTimer,
  } = useTimer({ timerConfig });

  const onEditTimer = () => {
    navigate(`/edit/${timerConfig.id}`);
  };

  const goHome = () => {
    navigate('/');
  };

  return (
    <div
      className={`w-screen h-screen flex justify-center items-center p-10 ${
        isHighIntensity ? 'bg-red-500' : 'bg-green-500'
      }`}
    >
      <div className="w-full h-full flex flex-col items-center justify-center gap-4">
        <button
          className="absolute top-0 left-0 m-4 text-white"
          onClick={goHome}
        >
          Home
        </button>
        <button
          className="absolute top-0 right-0 m-4 text-white"
          onClick={onEditTimer}
        >
          Edit Timer
        </button>
        <TimerDisplay
          timeLeft={timeLeft}
          currentRound={currentRound}
          totalRounds={timerConfig.rounds}
          initialTime={
            isHighIntensity
              ? timerConfig.highIntensity
              : timerConfig.lowIntensity
          }
        />
        <div className="flex items-center justify-center gap-4 landscape:justify-between landscape:absolute landscape:w-full landscape:bottom-0 landscape:p-4">
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
