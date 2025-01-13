import { useNavigate, useParams } from 'react-router';
import TimerForm from '../components/TimerForm';
import { UpdateIntervalTimer } from '../types/IntervalTimer';
import { TimerStorageClient } from '../utils/timerStorageClient';

const EditPage = () => {
  const navigate = useNavigate();
  const { timerId } = useParams();
  if (!timerId) {
    navigate('/');
    return null;
  }
  const existingConfig = TimerStorageClient.getTimer(+timerId);

  const goBackToTimer = () => {
    navigate(`/timer/${timerId}`);
  };

  const onSave = (newConfig: UpdateIntervalTimer) => {
    TimerStorageClient.updateTimer(newConfig);
    goBackToTimer();
  };

  const onCancel = () => {
    goBackToTimer();
  };

  return (
    <main className=" min-h-screen p-4 sm:p-8 bg-gradient-to-br from-purple-300 to-blue-300">
      <div className="flex flex-col bg-white/90 rounded-lg p-4">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-slate-900 drop-shadow-lg">
          Edit the timer
        </h1>
        <TimerForm
          existingConfig={existingConfig}
          onSave={onSave}
          onCancel={onCancel}
          type="edit"
        />
      </div>
    </main>
  );
};

export default EditPage;
