import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { AuthProvider } from './context/AuthContext';
import { LandingPage } from './pages/LandingPage';
import { B2BPage } from './pages/B2BPage';
import { TravelHospitalityPage } from './pages/TravelHospitalityPage';
import { CorporateDelegationPage } from './pages/CorporateDelegationPage';
import { RelocationSettlementPage } from './pages/RelocationSettlementPage';
import { PersonalLifestyleConcierge } from './pages/PersonalLifestyleConcierge';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { Dashboard } from './pages/Dashboard';
import { StaffLogin } from './pages/StaffLogin';
import { StaffDashboard } from './pages/StaffDashboard';

function ScrollToAnchor() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ScrollToAnchor />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/b2b" element={<B2BPage />} />
          <Route path="/travel-hospitality" element={<TravelHospitalityPage />} />
          <Route path="/corporate-delegation" element={<CorporateDelegationPage />} />
          <Route path="/relocation-settlement" element={<RelocationSettlementPage />} />
          <Route path="/personal-lifestyle" element={<PersonalLifestyleConcierge />} />
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
