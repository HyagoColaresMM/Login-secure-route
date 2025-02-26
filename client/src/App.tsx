import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import SecureData from './pages/SecureData';
import { useAuth } from './context/AuthContext';

const App: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={!isAuthenticated ? <Login /> : <Navigate to="/secure-data" />} />
          <Route path="/register" element={!isAuthenticated ? <Register /> : <Navigate to="/secure-data" />} />
          <Route 
            path="/secure-data" 
            element={isAuthenticated ? <SecureData /> : <Navigate to="/login" />} 
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;