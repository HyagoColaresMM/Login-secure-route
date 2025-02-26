import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

interface SecureDataItem {
  id: number;
  name: string;
  value: string;
}

interface SecureDataResponse {
  message: string;
  requestedBy: string;
  data: SecureDataItem[];
}

const SecureData: React.FC = () => {
  const [data, setData] = useState<SecureDataItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  const { token } = useAuth();

  useEffect(() => {
    const fetchSecureData = async () => {
      try {
        setLoading(true);
        
        const response = await axios.get<SecureDataResponse>(
          'http://localhost:3003/api/secure/data',
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );
        
        setData(response.data.data);
        setError(null);
      } catch (err: any) {
        setError(err.response?.data?.message || 'Erro ao carregar dados');
        console.error('Error fetching secure data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchSecureData();
  }, [token]);

  if (loading) {
    return (
      <div className="card">
        <h2>Dados Protegidos</h2>
        <p>Carregando dados...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="card">
        <h2>Dados Protegidos</h2>
        <div className="error">
          <p>Erro ao carregar dados: {error}</p>
          <p>Verifique se o servidor backend está rodando e se você está autenticado.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="card">
      <h2>Dados Protegidos</h2>
      <p>Estes dados só estão disponíveis para usuários autenticados.</p>
      
      {data.length === 0 ? (
        <p>Nenhum dado encontrado.</p>
      ) : (
        <div>
          {data.map((item) => (
            <div key={item.id} className="data-item">
              <h3>{item.name}</h3>
              <p>{item.value}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SecureData;