import { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { IntervalTimer } from '../types/IntervalTimer';
import { TimerConfigContext } from './TimerConfigProvider';

const EditTimer = () => {
  const { timerConfig, setTimerConfig } = useContext(TimerConfigContext);
  const navigate = useNavigate();
  const [newConfig, setNewConfig] = useState<IntervalTimer>(timerConfig);

  const onSave = () => {
    setTimerConfig(newConfig);
    goToHome();
  };

  const goToHome = () => {
    navigate('/');
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
          <button onClick={goToHome}>Cancel</button>
          <button onClick={onSave}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default EditTimer;
