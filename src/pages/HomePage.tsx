import { ChevronRightIcon, PlusIcon } from '@heroicons/react/24/solid';
import { Link, useNavigate } from 'react-router';
import { TimerStorageClient } from '../utils/timerStorageClient';

const HomePage = () => {
  const existingTimers = TimerStorageClient.getTimers();
  const navigate = useNavigate();

  return (
    <main className="flex flex-col min-h-screen p-4 sm:p-8 bg-gradient-to-br from-purple-700 to-blue-500">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-white drop-shadow-lg">
        Select a Timer
      </h1>
      <div className="flex flex-1 ">
        <ul className="w-full flex flex-col gap-4">
          {existingTimers.map((timer) => (
            <Link key={timer.name} to={`/timer/${timer.id}`} className="block">
              <div className="bg-white/90 hover:bg-white transition-colors duration-300 transform hover:scale-105 rounded-md">
                <div className="flex justify-between items-center py-4 px-5">
                  <div className="flex items-center space-x-3">
                    <div>
                      <h2 className="text-lg font-semibold text-gray-800">
                        {timer.name}
                      </h2>
                      <p className="text-sm text-gray-600">
                        high: {timer.highIntensity}s - low: {timer.lowIntensity}
                        s | {timer.rounds} rounds
                      </p>
                    </div>
                  </div>
                  <ChevronRightIcon className="text-purple-500 w-6 h-6" />
                </div>
              </div>
            </Link>
          ))}
        </ul>
      </div>
      <button
        onClick={() => navigate('/add')}
        className="mb-10 border border-yellow-400  bg-yellow-400 rounded-md px-4 py-2 flex items-center justify-center gap-2 "
      >
        <PlusIcon className="w-6 h-6" />
        Add New Timer
      </button>
    </main>
  );
};

export default HomePage;
