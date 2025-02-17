import { BrowserRouter, Route, Routes } from 'react-router';
import AddPage from './pages/AddPage';
import EditPage from './pages/EditPage';
import HomePage from './pages/HomePage';
import TimerPage from './pages/TimerPage';

function App() {
  return (
    <BrowserRouter basename={import.meta.env.VITE_BASE_URL}>
      <main className="min-h-screen p-0 m-0">
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/timer/:timerId" element={<TimerPage />} />
          <Route path="/edit/:timerId" element={<EditPage />} />
          <Route path="/add" element={<AddPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
