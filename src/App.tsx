import Timer from './components/Timer';
import TimerConfigProvider from './components/TimerConfigProvider';

function App() {
  return (
    <main className="w-screen h-screen flex items-center justify-center">
      <TimerConfigProvider>
        <Timer />
      </TimerConfigProvider>
    </main>
  );
}

export default App;
