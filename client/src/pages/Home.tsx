import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Home: React.FC = () => {
  const { isAuthenticated, user } = useAuth();

  return (
    <div className="card">
      <h1>Bem-vindo ao Sistema de Autenticação</h1>
      <p>Este é um exemplo de aplicação com autenticação e rotas protegidas.</p>
      
      {isAuthenticated ? (
        <div>
          <p>Olá, {user?.name}! Você está logado e pode acessar os dados protegidos.</p>
          <Link to="/secure-data">
            <button>Ver Dados Protegidos</button>
          </Link>
          <Link to="/profile">
            <button>Ver Perfil</button>
          </Link>
        </div>
      ) : (
        <div>
          <p>Faça login ou registre-se para acessar os dados protegidos.</p>
          <div style={{ display: 'flex', gap: '10px' }}>
            <Link to="/login">
              <button>Login</button>
            </Link>
            <Link to="/register">
              <button>Registrar</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;