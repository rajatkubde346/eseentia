import React, { useState } from 'react';

const LoginModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [view, setView] = useState<'login' | 'signup' | 'forgot'>('login');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-sm mx-4 p-6 relative animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-2xl"
          aria-label="Close"
        >
          ×
        </button>
        <div className="mb-6 flex justify-center space-x-4">
          <button
            className={`font-semibold text-lg pb-1 border-b-2 transition-colors duration-200 ${view === 'login' ? 'border-primary-600 text-primary-600' : 'border-transparent text-gray-500 hover:text-primary-600'}`}
            onClick={() => setView('login')}
          >
            Sign In
          </button>
          
        </div>
        {view === 'login' && (
          <>
            <h2 className="text-xl font-bold mb-4 text-center">Sign in to your account</h2>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-600"
              />
              <input
                type="password"
                placeholder="Password"
                required
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-600"
              />
              <button
                type="submit"
                className="w-full bg-primary-600 text-white py-2 rounded hover:bg-primary-700 transition-colors"
              >
                Login
              </button>
            </form>
            <div className="flex justify-between mt-4 text-sm">
              <button
                className="text-primary-600 hover:underline"
                onClick={() => setView('forgot')}
                type="button"
              >
                Forgot password?
              </button>
              <button
                className="text-primary-600 hover:underline"
                onClick={() => setView('signup')}
                type="button"
              >
                Sign up
              </button>
            </div>
          </>
        )}
        {view === 'signup' && (
          <>
            <h2 className="text-xl font-bold mb-4 text-center">Create your account</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-600"
              />
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-600"
              />
              <input
                type="password"
                placeholder="Password"
                required
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-600"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                required
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-600"
              />
              <button
                type="submit"
                className="w-full bg-primary-600 text-white py-2 rounded hover:bg-primary-700 transition-colors"
              >
                Sign Up
              </button>
            </form>
            <div className="flex justify-between mt-4 text-sm">
              <button
                className="text-primary-600 hover:underline"
                onClick={() => setView('login')}
                type="button"
              >
                Already have an account?
              </button>
            </div>
          </>
        )}
        {view === 'forgot' && (
          <>
            <h2 className="text-xl font-bold mb-4 text-center">Reset your password</h2>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-600"
              />
              <button
                type="submit"
                className="w-full bg-primary-600 text-white py-2 rounded hover:bg-primary-700 transition-colors"
              >
                Send reset link
              </button>
            </form>
            <div className="flex justify-between mt-4 text-sm">
              <button
                className="text-primary-600 hover:underline"
                onClick={() => setView('login')}
                type="button"
              >
                Back to login
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginModal; 