import { useNavigate } from 'react-router';
import TimerForm from '../components/TimerForm';
import { CreateIntervalTimer } from '../types/IntervalTimer';
import { TimerStorageClient } from '../utils/timerStorageClient';

const AddPage = () => {
  const navigate = useNavigate();

  const goBackToHome = () => {
    navigate('/');
  };

  const onSave = (newConfig: CreateIntervalTimer) => {
    TimerStorageClient.saveTimer(newConfig);
    goBackToHome();
  };

  const onCancel = () => {
    goBackToHome();
  };

  return (
    <main className=" min-h-screen p-4 sm:p-8 bg-gradient-to-br from-purple-300 to-blue-300">
      <div className="flex flex-col bg-white/90 rounded-lg p-4">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-slate-900 drop-shadow-lg">
          Add a new timer
        </h1>
        <TimerForm onSave={onSave} onCancel={onCancel} type="create" />
      </div>
    </main>
  );
};

export default AddPage;
