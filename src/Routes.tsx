// src/AppRoutes.jsx
import { Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Results from './pages/Results';

function AppRoutes() {
  return (
    <Routes>
      {/* Layout as the parent route */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} /> {/* Home is the default route */}
        <Route path="quiz" element={<Quiz />} />
        <Route path="result" element={<Results />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
