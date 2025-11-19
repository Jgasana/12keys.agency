import { useState, useEffect } from 'react';
import { AuthProvider } from './context/AuthContext';
import { LandingPage } from './pages/LandingPage';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { Dashboard } from './pages/Dashboard';
import { StaffLogin } from './pages/StaffLogin';

type Route = 'home' | 'login' | 'signup' | 'dashboard' | 'staff-login';

function App() {
  const [currentRoute, setCurrentRoute] = useState<Route>('home');

  useEffect(() => {
    const handleNavigation = () => {
      const path = window.location.pathname;
      if (path === '/login') setCurrentRoute('login');
      else if (path === '/signup') setCurrentRoute('signup');
      else if (path === '/dashboard') setCurrentRoute('dashboard');
      else if (path === '/staff-login') setCurrentRoute('staff-login');
      else setCurrentRoute('home');
    };

    handleNavigation();
    window.addEventListener('popstate', handleNavigation);
    return () => window.removeEventListener('popstate', handleNavigation);
  }, []);

  const renderRoute = () => {
    switch (currentRoute) {
      case 'login':
        return <Login />;
      case 'signup':
        return <Signup />;
      case 'dashboard':
        return <Dashboard />;
      case 'staff-login':
        return <StaffLogin />;
      default:
        return <LandingPage />;
    }
  };

  return (
    <AuthProvider>
      {renderRoute()}
    </AuthProvider>
  );
}

export default App;
