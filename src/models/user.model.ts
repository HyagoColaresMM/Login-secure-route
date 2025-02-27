export interface User {
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
