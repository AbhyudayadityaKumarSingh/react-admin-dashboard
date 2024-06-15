import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import CalendarPage from './pages/Calendar';
import Kanban from './pages/Kanban';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/kanban" element={<Kanban />} />
      </Routes>
    </Router>
  );
}

export default App;
