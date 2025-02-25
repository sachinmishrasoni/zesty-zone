'use client';
import React, { useState } from 'react';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle the newsletter subscription logic here
    console.log(`Subscribed with: ${email}`);
  };

  return (
    <section className="bg-yellow-600 py-12 text-center">
      <div className="max-w-screen-lg mx-auto">
        <h3 className="text-2xl font-semibold text-white mb-4">Subscribe to our Newsletter</h3>
        <p className="text-white mb-6">Stay updated with the latest blog posts and promotions.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="px-4 py-2 rounded-lg"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="ml-4 px-6 py-2 bg-white text-yellow-600 rounded-lg"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSignup;
