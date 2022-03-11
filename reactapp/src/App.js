import { Routes, Route, Navigate } from 'react-router';
import './App.css';
import Signup from './common/Signup';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Navigate to="/login" replace/>} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
