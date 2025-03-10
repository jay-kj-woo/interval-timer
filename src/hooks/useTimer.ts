import { useCallback, useEffect, useState } from 'react';
import bellSound from '../assets/boxingBellFX.mp3';
import { IntervalTimer } from '../types/IntervalTimer';
interface Props {
  timerConfig: IntervalTimer;
  intervalPrecision?: number;
}

const useTimer = ({ timerConfig, intervalPrecision = 100 }: Props) => {
  const [timeLeft, setTimeLeft] = useState(timerConfig.highIntensity);
  const [isHighIntensity, setIsHighIntensity] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [currentRound, setCurrentRound] = useState(1);
  const [audio] = useState(new Audio(bellSound));

  const playAudio = useCallback(() => {
    if (!audio.ended) {
      audio.load();
    }
    audio.play();
  }, [audio]);

  const handleNextTimerValue = useCallback(() => {
    if (isHighIntensity) {
      setIsHighIntensity(false);
      return timerConfig.lowIntensity;
    }

    if (currentRound < timerConfig.rounds) {
      setCurrentRound(currentRound + 1);
      setIsHighIntensity(true);
      return timerConfig.highIntensity;
    }

    setIsHighIntensity(true);
    setCurrentRound(1);
    setIsActive(false);

    return timerConfig.highIntensity;
  }, [currentRound, isHighIntensity, timerConfig]);

  useEffect(() => {
    let interval: number;

    if (isActive) {
      interval = window.setInterval(() => {
        setTimeLeft((prevTime) => {
          const intervalTime = intervalPrecision / 1000;
          const newTime = prevTime - intervalTime;
          if (newTime > 0) return newTime;

          playAudio();
          clearInterval(interval);

          return handleNextTimerValue();
        });
      }, intervalPrecision);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [handleNextTimerValue, intervalPrecision, isActive, playAudio]);

  const onResetTimer = useCallback(() => {
    setIsActive(false);
    setIsHighIntensity(true);
    setTimeLeft(timerConfig.highIntensity);
    setCurrentRound(1);
  }, [timerConfig]);

  const toggleTimer = useCallback(() => {
    setIsActive(!isActive);
  }, [isActive]);

  return {
    timeLeft,
    onResetTimer,
    toggleTimer,
    currentRound,
    isActive,
    isHighIntensity,
  };
};

export default useTimer;
