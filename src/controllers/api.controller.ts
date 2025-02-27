import { Request, Response, NextFunction } from 'express';

interface AuthenticatedRequest extends Request {
  user: User;
}

interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  description?: string;
  role?: string;
  registrationNumber?: string;
  department?: string;
  photoUrl?: string;
}

// Exemplo de dados que só podem ser acessados por usuários autenticados
const secureData = [
  { id: 1, name: 'A 1', role: 'protegida', department: 'Finance' },
  { id: 2, name: 'B 2', role: 'sensível', department: 'HR' },
  { id: 3, name: 'C 3', role: 'restritos', department: 'IT' }
];

export const getSecureData = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // O usuário já foi autenticado pelo middleware
    const user = (req as any).user as User;
    
    // Filtrar dados específicos para o departamento do usuário
    const filteredData = secureData.filter(data => data.department === user.department);
    
    res.status(200).json({
      message: 'Dados protegidos recuperados com sucesso',
      requestedBy: user.email,
      data: filteredData
    });
  } catch (error) {
    next(error);
  }
};