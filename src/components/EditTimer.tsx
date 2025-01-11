import { useContext, useState } from 'react';
import { IntervalTimer } from '../types/IntervalTimer';
import { TimerConfigContext } from './TimerConfigProvider';

type Props = {
  closeEditTimer: () => void;
};

const EditTimer = ({ closeEditTimer }: Props) => {
  const { timerConfig, setTimerConfig } = useContext(TimerConfigContext);

  const [newConfig, setNewConfig] = useState<IntervalTimer>(timerConfig);

  const onSave = () => {
    setTimerConfig(newConfig);
    closeEditTimer();
  };

  return (
    <div className="flex flex-col gap-4 w-screen h-screen absolute bg-slate-600 items-center justify-center">
      <div className="flex flex-col gap-4 w-80">
        <input
          type="text"
          value={newConfig.name}
          onChange={(e) => setNewConfig({ ...newConfig, name: e.target.value })}
        />
        <input
          type="number"
          value={newConfig.highIntensity}
          onChange={(e) =>
            setNewConfig({
              ...newConfig,
              highIntensity: Number(e.target.value),
            })
          }
        />
        <input
          type="number"
          value={newConfig.lowIntensity}
          onChange={(e) =>
            setNewConfig({
              ...newConfig,
              lowIntensity: Number(e.target.value),
            })
          }
        />
        <input
          type="number"
          value={newConfig.rounds}
          onChange={(e) =>
            setNewConfig({ ...newConfig, rounds: Number(e.target.value) })
          }
        />
        <div className="flex items-center justify-center gap-4">
          <button onClick={() => closeEditTimer()}>Cancel</button>
          <button onClick={onSave}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default EditTimer;
