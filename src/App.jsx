import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import TurfDetails from './pages/TurfDetails';
import Booking from './pages/Booking';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import TurfOwnerLogin from './pages/TurfOwnerLogin';
import TurfOwnerDashboard from './pages/TurfOwnerDashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [admin, setAdmin] = useState(null);
  const [isOwnerLoggedIn, setIsOwnerLoggedIn] = useState(false);
  const [owner, setOwner] = useState(null);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header 
          isLoggedIn={isLoggedIn} 
          user={user} 
          setIsLoggedIn={setIsLoggedIn}
          isAdminLoggedIn={isAdminLoggedIn}
          admin={admin}
          setIsAdminLoggedIn={setIsAdminLoggedIn}
          isOwnerLoggedIn={isOwnerLoggedIn}
          owner={owner}
          setIsOwnerLoggedIn={setIsOwnerLoggedIn}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/turf/:id" element={<TurfDetails />} />
          <Route path="/booking/:id" element={<Booking />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} setUser={setUser} />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin/login" element={<AdminLogin setIsAdminLoggedIn={setIsAdminLoggedIn} setAdmin={setAdmin} />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/turf-owner/login" element={<TurfOwnerLogin setIsOwnerLoggedIn={setIsOwnerLoggedIn} setOwner={setOwner} />} />
          <Route path="/turf-owner/dashboard" element={<TurfOwnerDashboard />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;