import React, { useState } from 'react';

const DarkSignupPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    
    // Validate terms agreement
    if (!formData.agreeToTerms) {
      alert('You must agree to the terms and conditions');
      return;
    }
    
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    alert('Account created successfully!');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-600 rounded-full filter blur-3xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute top-40 -right-40 w-80 h-80 bg-blue-600 rounded-full filter blur-3xl opacity-20 animate-bounce-slow"></div>
        <div className="absolute -bottom-40 left-1/4 w-80 h-80 bg-indigo-600 rounded-full filter blur-3xl opacity-20 animate-ping-slow"></div>
        <div className="absolute top-1/2 right-1/4 w-60 h-60 bg-teal-500 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
        
        {/* Floating circles */}
        <div className="absolute top-1/4 left-1/3 w-12 h-12 border-4 border-purple-400 rounded-full opacity-30 floating"></div>
        <div className="absolute top-2/3 left-1/4 w-8 h-8 border-4 border-blue-400 rounded-full opacity-30 floating" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-10 h-10 border-4 border-pink-400 rounded-full opacity-30 floating" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        <div className="bg-gray-800 bg-opacity-70 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-gray-700">
          <div className="text-center mb-8">
            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center glow">
                <span className="text-2xl font-bold">L</span>
              </div>
            </div>
            <h1 className="text-3xl font-bold text-white mt-4">Create Account</h1>
            <p className="text-gray-400 mt-2">Join us to access exclusive features</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 transition duration-300"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 transition duration-300"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 transition duration-300"
                placeholder="Create a password"
                required
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 transition duration-300"
                placeholder="Confirm your password"
                required
              />
            </div>

            <div className="flex items-center">
              <input
                id="agreeToTerms"
                name="agreeToTerms"
                type="checkbox"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-600 rounded bg-gray-700"
                required
              />
              <label htmlFor="agreeToTerms" className="ml-2 block text-sm text-gray-300">
                I agree to the <a href="#" className="text-purple-400 hover:text-purple-300">Terms and Conditions</a>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition duration-300 transform hover:-translate-y-1 shadow-lg btn-glow"
            >
              Create Account
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-400">
              Already have an account?{' '}
              <a href="#" className="text-purple-400 font-medium hover:text-purple-300 transition duration-300">
                Sign in
              </a>
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Lumina. All rights reserved.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.3; }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 0.2; }
          50% { transform: scale(1.5); opacity: 0.1; }
          100% { transform: scale(1); opacity: 0.2; }
        }
        @keyframes float {
          0% { transform: translate(0, 0px); }
          50% { transform: translate(0, -15px); }
          100% { transform: translate(0, 0px); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 8s infinite;
        }
        .animate-ping-slow {
          animation: ping-slow 10s infinite;
        }
        .floating {
          animation: float 6s ease-in-out infinite;
        }
        .glow {
          box-shadow: 0 0 20px rgba(138, 43, 226, 0.5);
        }
        .btn-glow {
          box-shadow: 0 0 15px rgba(138, 43, 226, 0.7);
        }
        .btn-glow:hover {
          box-shadow: 0 0 20px rgba(138, 43, 226, 0.9);
        }
      `}</style>
    </div>
  );
};

export default DarkSignupPage;