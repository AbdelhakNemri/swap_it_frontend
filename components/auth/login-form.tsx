import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { authService } from '@/lib/auth';

export function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await authService.login({ email, password });
      router.push('/dashboard');
    } catch (err) {
      setError('Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-[#030303] mb-6 text-center">Login</h2>
      
      {error && (
        <div className="bg-red-50 text-red-500 p-3 rounded-md mb-4">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[#030303] mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-[#D4C9BE] rounded-md focus:outline-none focus:ring-2 focus:ring-[#123458]"
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-[#030303] mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-[#D4C9BE] rounded-md focus:outline-none focus:ring-2 focus:ring-[#123458]"
            required
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-[#123458] hover:bg-[#123458]/90 text-white"
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Login'}
        </Button>
      </form>

      <div className="mt-4 text-center">
        <p className="text-sm text-[#030303]">
          Don't have an account?{' '}
          <a href="/signup" className="text-[#123458] hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
} 