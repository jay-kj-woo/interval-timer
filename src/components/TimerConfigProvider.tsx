import { createContext, ReactNode, useState } from 'react';
import { IntervalTimer } from '../types/IntervalTimer';

export const TimerConfigContext = createContext<{
  timerConfig: IntervalTimer;
  setTimerConfig: (timerConfig: IntervalTimer) => void;
}>({
  timerConfig: {
    name: '',
    highIntensity: 0,
    lowIntensity: 0,
    rounds: 0,
  },
  setTimerConfig: () => {},
});

const TimerConfigProvider = ({ children }: { children: ReactNode }) => {
  const [timerConfig, setTimerConfig] = useState<IntervalTimer>({
    name: '',
    highIntensity: 0,
    lowIntensity: 0,
    rounds: 0,
  });

  return (
    <TimerConfigContext.Provider value={{ timerConfig, setTimerConfig }}>
      {children}
    </TimerConfigContext.Provider>
  );
};

export default TimerConfigProvider;
