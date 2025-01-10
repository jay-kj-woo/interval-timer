import Timer from './components/Timer';

function App() {
  const defaultTimer = {
    highIntensity: 10,
    lowIntensity: 5,
    rounds: 2,
  };

  return (
    <main className="w-screen h-screen flex items-center justify-center">
      <Timer intervalTimer={defaultTimer} />
    </main>
  );
}

export default App;
