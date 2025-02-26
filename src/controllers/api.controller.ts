import { Request, Response, NextFunction } from 'express';

// Exemplo de dados que só podem ser acessados por usuários autenticados
const secureData = [
  { id: 1, name: 'Dado confidencial 1', value: 'Informação protegida' },
  { id: 2, name: 'Dado confidencial 2', value: 'Conteúdo sensível' },
  { id: 3, name: 'Dado confidencial 3', value: 'Dados restritos' }
];

export const getSecureData = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // O usuário já foi autenticado pelo middleware
    const user = (req as any).user;
    
    // Podemos usar as informações do usuário para personalizar a resposta ou filtrar dados
    // Por exemplo, poderíamos filtrar dados específicos para este usuário
    
    res.status(200).json({
      message: 'Dados protegidos recuperados com sucesso',
      requestedBy: user.email,
      data: secureData
    });
  } catch (error) {
    next(error);
  }
};