import { Request, Response, NextFunction } from 'express';
import { User } from '../models/user.model';

// In-memory user storage (replace with a database in production)
const users: User[] = [];

// Get user profile
export const getProfile = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = (req as any).user;
        const userData = users.find(u => u.id === user.id);
        
        if (!userData) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({
            user: {
                id: userData.id,
                name: userData.name,
                email: userData.email,
                createdAt: userData.createdAt,
                description: userData.description,
                role: userData.role,
                registrationNumber: userData.registrationNumber,
                department: userData.department,
                photoUrl: userData.photoUrl
            }
        });
    } catch (error) {
        next(error);
    }
};

// Update user profile
export const updateProfile = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = (req as any).user;
        const userData = users.find(u => u.id === user.id);
        
        if (!userData) {
            return res.status(404).json({ message: 'User not found' });
        }

        const { name, email, description, role, registrationNumber, department, photoUrl } = req.body;

        // Update user data
        if (name) userData.name = name;
        if (email) userData.email = email;
        if (description) userData.description = description;
        if (role) userData.role = role;
        if (registrationNumber) userData.registrationNumber = registrationNumber;
        if (department) userData.department = department;
        if (photoUrl) userData.photoUrl = photoUrl;

        res.status(200).json({
            message: 'User updated successfully',
            user: {
                id: userData.id,
                name: userData.name,
                email: userData.email,
                createdAt: userData.createdAt,
                description: userData.description,
                role: userData.role,
                registrationNumber: userData.registrationNumber,
                department: userData.department,
                photoUrl: userData.photoUrl
            }
        });
    } catch (error) {
        next(error);
    }
};