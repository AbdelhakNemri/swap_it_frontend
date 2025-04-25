export const API_CONFIG = {
  baseURL: 'http://localhost:8000', // Laravel's default port
  endpoints: {
    auth: {
      login: '/auth/login',
      register: '/auth/register',
      logout: '/auth/logout',
    },
    items: {
      list: '/items',
      create: '/items',
      update: '/items/:id',
      delete: '/items/:id',
    },
    trades: {
      list: '/trades',
      create: '/trades',
      update: '/trades/:id',
      delete: '/trades/:id',
    },
    user: {
      profile: '/user',
      update: '/user/profile',
    }
  },
}; 