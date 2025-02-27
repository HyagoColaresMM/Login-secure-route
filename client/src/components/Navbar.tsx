import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar: React.FC = () => {
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <nav className="nav">
      <div className="nav-brand">
        <Link to="/" className="nav-brand-link">
          Auth Demo
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        
        {isAuthenticated ? (
          <>
            <Link to="/secure-data" className="nav-link">Dados Seguros</Link>
            <span className="nav-user">Olá, {user?.name}</span>
            <button 
              onClick={logout}
              className="nav-logout-button"
            >
              Sair
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/register" className="nav-link">Registrar</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
