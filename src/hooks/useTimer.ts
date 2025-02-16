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

  useEffect(() => {
    let interval: number;

    if (isActive) {
      interval = window.setInterval(() => {
        setTimeLeft((prevTime) => {
          const intervalTime = intervalPrecision / 1000;
          const newTime = prevTime - intervalTime;
          if (newTime <= 0) {
            audio.play();
            clearInterval(interval);
            if (isHighIntensity) {
              setIsHighIntensity(false);
              setTimeLeft(timerConfig.lowIntensity);
            } else {
              if (currentRound < timerConfig.rounds) {
                setCurrentRound(currentRound + 1);
                setIsHighIntensity(true);
                setTimeLeft(timerConfig.highIntensity);
              } else {
                setIsActive(false);
              }
            }
            return 0;
          }
          return newTime;
        });
      }, intervalPrecision);
    }

    return () => {
      if (interval) {
        console.log('CLEARING INTERVAL');
        clearInterval(interval);
      }
    };
  }, [timerConfig, currentRound, isActive, isHighIntensity, intervalPrecision]);

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
