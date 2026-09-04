import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AITravelPlanner from './pages/AITravelPlanner';
import ActivityDetail from './pages/ActivityDetail';
import HotelPage from './pages/HotelPage';
import FlightPage from './pages/FlightPage';
import BusPage from './pages/BusPage';
import AirportTransferPage from './pages/AirportTransferPage';
import CarRentalPage from './pages/CarRentalPage';
import RetrieveBookingPage from './pages/RetrieveBookingPage';
import FlightSearchResultsPage from './pages/FlightSearchResultsPage';
import FlightBookingPage from './pages/FlightBookingPage';
import BusSearchResultsPage from './pages/BusSearchResultsPage';
import BusBookingPage from './pages/BusBookingPage';
import PaymentPage from './pages/PaymentPage';
import MyBookingsPage from './pages/MyBookingsPage';
import AdminDashboard from './pages/AdminDashboard';
import AuthModal from './components/AuthModal';
import Footer from './components/Footer';

const ROUTE_MAP = {
  '': 'xperience',
  'hotel': 'hotel',
  'flight': 'flight',
  'bus': 'bus',
  'airport-transfer': 'airport-transfer',
  'car-rental': 'car-rental',
  'xperience': 'xperience',
  'ai-planner': 'ai-planner',
  'retrieve-booking': 'retrieve-booking',
  'flight-search': 'flight-search',
  'flight-booking': 'flight-booking',
  'bus-search': 'bus-search',
  'bus-booking': 'bus-booking',
  'payment': 'payment',
  'my-bookings': 'my-bookings',
  'admin': 'admin',
};

function getPageFromHash() {
  const hash = window.location.hash.replace('#', '').split('?')[0];
  return ROUTE_MAP[hash] || 'xperience';
}

function App() {
  const [currentPage, setCurrentPage] = useState(getPageFromHash);
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login');
  const [user, setUser] = useState(null);

  // Sync URL hash → state when browser back/forward
  useEffect(() => {
    const onHashChange = () => {
      const page = getPageFromHash();
      setCurrentPage(page);
      if (page !== 'activity-detail') setSelectedActivity(null);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigateTo = (page) => {
    setSelectedActivity(null);
    setCurrentPage(page);
    window.location.hash = page === 'xperience' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectActivity = (activity) => {
    setSelectedActivity(activity);
    setCurrentPage('activity-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setSelectedActivity(null);
    setCurrentPage('xperience');
    window.location.hash = '';
  };

  const openAuth = (mode) => { setAuthMode(mode); setIsAuthOpen(true); };
  const handleLoginSuccess = (userData) => { setUser(userData); setIsAuthOpen(false); };
  const handleLogout = () => setUser(null);

  const isCheckoutPage = ['flight-booking', 'bus-booking', 'payment'].includes(currentPage);
  const isAdminPage = currentPage === 'admin';

  return (
    <div className="app">
      {!isCheckoutPage && !isAdminPage && (
        <Navbar
          user={user}
          onOpenAuth={openAuth}
          onLogout={handleLogout}
          currentPage={currentPage}
          onNavigate={navigateTo}
        />
      )}

      <main>
        {currentPage === 'hotel'            && <HotelPage />}
        {currentPage === 'flight'           && <FlightPage onNavigate={navigateTo} />}
        {currentPage === 'bus'              && <BusPage />}
        {currentPage === 'airport-transfer' && <AirportTransferPage />}
        {currentPage === 'car-rental'       && <CarRentalPage />}
        {currentPage === 'xperience'        && <Home setCurrentPage={navigateTo} onSelectActivity={handleSelectActivity} />}
        {currentPage === 'ai-planner'       && <AITravelPlanner setCurrentPage={navigateTo} />}
        {currentPage === 'retrieve-booking' && <RetrieveBookingPage />}
        {currentPage === 'flight-search'    && <FlightSearchResultsPage onNavigate={navigateTo} />}
        {currentPage === 'flight-booking'   && <FlightBookingPage />}
        {currentPage === 'bus-search'       && <BusSearchResultsPage />}
        {currentPage === 'bus-booking'      && <BusBookingPage />}
        {currentPage === 'payment'          && <PaymentPage />}
        {currentPage === 'my-bookings'      && <MyBookingsPage />}
        {currentPage === 'admin'            && <AdminDashboard onExit={() => navigateTo('xperience')} />}
        {currentPage === 'activity-detail'  && selectedActivity && (
          <ActivityDetail activity={selectedActivity} onBack={handleBackToHome} />
        )}
      </main>

      {!isCheckoutPage && !isAdminPage && <Footer />}

      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        initialMode={authMode}
        onLoginSuccess={handleLoginSuccess}
      />
    </div>
  );
}

export default App;
