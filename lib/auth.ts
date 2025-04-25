import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

export interface User {
  id: number;
  name: string;
  email: string;
  bio?: string;
  skills?: string[];
  location?: string;
  profile_image?: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

export const authService = {
  async register(data: {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
    bio?: string;
    skills?: string[];
    location?: string;
  }): Promise<AuthResponse> {
    const response = await axios.post(`${API_URL}/register`, data);
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }
    return response.data;
  },

  async login(data: { email: string; password: string }): Promise<AuthResponse> {
    const response = await axios.post(`${API_URL}/login`, data);
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }
    return response.data;
  },

  async logout(): Promise<void> {
    const token = localStorage.getItem('token');
    if (token) {
      await axios.post(
        `${API_URL}/logout`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      localStorage.removeItem('token');
    }
  },

  async getCurrentUser(): Promise<User | null> {
    const token = localStorage.getItem('token');
    if (!token) return null;

    try {
      const response = await axios.get(`${API_URL}/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      localStorage.removeItem('token');
      return null;
    }
  },

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  },
}; 