import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { authService } from '@/lib/auth';

export function SignupForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    bio: '',
    skills: [] as string[],
    location: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await authService.register(formData);
      router.push('/dashboard');
    } catch (err) {
      setError('Error creating account. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-[#030303] mb-6 text-center">Create Account</h2>
      
      {error && (
        <div className="bg-red-50 text-red-500 p-3 rounded-md mb-4">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-[#030303] mb-1">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-[#D4C9BE] rounded-md focus:outline-none focus:ring-2 focus:ring-[#123458]"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[#030303] mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
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
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-[#D4C9BE] rounded-md focus:outline-none focus:ring-2 focus:ring-[#123458]"
            required
          />
        </div>

        <div>
          <label htmlFor="password_confirmation" className="block text-sm font-medium text-[#030303] mb-1">
            Confirm Password
          </label>
          <input
            type="password"
            id="password_confirmation"
            name="password_confirmation"
            value={formData.password_confirmation}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-[#D4C9BE] rounded-md focus:outline-none focus:ring-2 focus:ring-[#123458]"
            required
          />
        </div>

        <div>
          <label htmlFor="bio" className="block text-sm font-medium text-[#030303] mb-1">
            Bio (Optional)
          </label>
          <textarea
            id="bio"
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-[#D4C9BE] rounded-md focus:outline-none focus:ring-2 focus:ring-[#123458]"
            rows={3}
          />
        </div>

        <div>
          <label htmlFor="location" className="block text-sm font-medium text-[#030303] mb-1">
            Location (Optional)
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-[#D4C9BE] rounded-md focus:outline-none focus:ring-2 focus:ring-[#123458]"
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-[#123458] hover:bg-[#123458]/90 text-white"
          disabled={loading}
        >
          {loading ? 'Creating account...' : 'Sign Up'}
        </Button>
      </form>

      <div className="mt-4 text-center">
        <p className="text-sm text-[#030303]">
          Already have an account?{' '}
          <a href="/login" className="text-[#123458] hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
} 