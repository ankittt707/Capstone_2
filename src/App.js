import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Chat from './pages/Chat';
import Task from './pages/Task';
import Files from './pages/Files';
import Calendar from './pages/Calendar';
import User from './pages/User';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/Task" element={<Task />} />
        <Route path="/files" element={<Files />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/user" element={<User />} />
      </Route>
    </Routes>
  );
}

export default App;
