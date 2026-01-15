import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { LandingPage } from './pages/LandingPage';
import { B2BPage } from './pages/B2BPage';
import { TravelHospitalityPage } from './pages/TravelHospitalityPage';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { Dashboard } from './pages/Dashboard';
import { StaffLogin } from './pages/StaffLogin';
import { StaffDashboard } from './pages/StaffDashboard';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/b2b" element={<B2BPage />} />
          <Route path="/travel-hospitality" element={<TravelHospitalityPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/staff/login" element={<StaffLogin />} />
          <Route path="/staff/dashboard" element={<StaffDashboard />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
