import { BrowserRouter, Route, Routes } from 'react-router';
import TimerConfigProvider from './components/TimerConfigProvider';
import AddPage from './pages/AddPage';
import HomePage from './pages/HomePage';
import TimerPage from './pages/TimerPage';

function App() {
  return (
    <BrowserRouter>
      <main className="min-h-screen p-0 m-0">
        <TimerConfigProvider>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/timer" element={<TimerPage />} />
            {/* <Route path="/edit" element={<EditTimer />} /> */}
            <Route path="/add" element={<AddPage />} />
          </Routes>
        </TimerConfigProvider>
      </main>
    </BrowserRouter>
  );
}

export default App;
