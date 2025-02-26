import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar: React.FC = () => {
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <nav className="nav">
      <div className="nav-brand">
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
          Auth Demo
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        
        {isAuthenticated ? (
          <>
            <Link to="/secure-data">Dados Seguros</Link>
            <span style={{ marginLeft: '20px' }}>Olá, {user?.name}</span>
            <button 
              onClick={logout}
              style={{ 
                background: 'transparent', 
                border: 'none', 
                color: 'white',
                cursor: 'pointer',
                padding: '0',
                fontSize: '16px'
              }}
            >
              Sair
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Registrar</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;