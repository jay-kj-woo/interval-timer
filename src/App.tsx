import { BrowserRouter, Route, Routes } from 'react-router';
import EditTimer from './components/EditTimer';
import Timer from './components/Timer';
import TimerConfigProvider from './components/TimerConfigProvider';

function App() {
  return (
    <BrowserRouter>
      <main className="w-screen h-screen flex items-center justify-center">
        <TimerConfigProvider>
          <Routes>
            <Route index element={<Timer />} />
            <Route path="/edit" element={<EditTimer />} />
          </Routes>
        </TimerConfigProvider>
      </main>
    </BrowserRouter>
  );
}

export default App;
