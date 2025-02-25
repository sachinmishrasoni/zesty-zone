'use client';

import { useRouter } from 'next/navigation';
import { useState, FormEvent } from 'react';

const SignUpPage = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  // Handle form submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Basic form validation
    if (!name || !email || !password || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Fake registration logic (replace with actual logic)
    if (email === 'test@example.com') {
      setError('Email is already in use');
      return;
    }

    // Simulate a successful registration (replace with actual registration logic)
    router.push('/login'); // Redirect to login page after successful sign up
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-yellow-200 via-orange-200 to-yellow-300">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-xl shadow-lg transform transition-all hover:scale-105 duration-300">
        {/* ZestyZone Logo */}
        <div className="text-center mb-6">
          <h2 className="text-4xl font-extrabold text-yellow-600">ZestyZone</h2>
          <p className="text-xl text-gray-700">Create your zesty account!</p>
        </div>

        {/* Error message */}
        {error && <p className="text-red-500 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 p-4 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all"
              placeholder="Enter your full name"
            />
          </div>

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

          <div>
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-2 p-4 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all"
              placeholder="Confirm your password"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-3 px-4 bg-yellow-600 text-white font-semibold rounded-md shadow-lg hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-all"
            >
              Sign Up
            </button>
          </div>
        </form>

        <div className="text-center text-sm text-gray-600">
          Already have an account?{' '}
          <a href="/login" className="font-medium text-yellow-600 hover:text-yellow-500">
            Log in here
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
