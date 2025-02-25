'use client';

import { useRouter } from 'next/navigation';
import { useState, FormEvent } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  // Handle form submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Basic form validation
    if (!email || !password) {
      setError('Please fill in both fields');
      return;
    }

    // Fake authentication logic (replace with actual logic)
    if (email === 'test@example.com' && password === 'password123') {
      router.push('/dashboard'); // Redirect to dashboard on success
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-yellow-200 via-orange-200 to-yellow-300">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-xl shadow-lg transform transition-all hover:scale-105 duration-300">
        {/* ZestyZone Logo */}
        <div className="text-center mb-6">
          <h2 className="text-4xl font-extrabold text-yellow-600">ZestyZone</h2>
          <p className="text-xl text-gray-700">Welcome back to your flavor zone!</p>
        </div>

        {/* Error message */}
        {error && <p className="text-red-500 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 p-4 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 p-4 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-5 w-5 text-yellow-600 focus:ring-yellow-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="/forgot-password" className="font-medium text-yellow-600 hover:text-yellow-500">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-3 px-4 bg-yellow-600 text-white font-semibold rounded-md shadow-lg hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-all"
            >
              Log in
            </button>
          </div>
        </form>

        <div className="text-center text-sm text-gray-600">
          Don&apos;t have an account?{' '}
          <a href="/signup" className="font-medium text-yellow-600 hover:text-yellow-500">
            Sign up here
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
