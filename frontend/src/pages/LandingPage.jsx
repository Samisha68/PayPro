import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CreditCard, DollarSign, Shield } from 'lucide-react';

// Define Heading component
const Heading = ({ label, className }) => (
  <h1 className={`text-4xl lg:text-6xl font-bold mb-4 ${className}`}>{label}</h1>
);

// Define SubHeading component
const SubHeading = ({ label, className }) => (
  <h2 className={`text-xl lg:text-2xl mb-8 ${className}`}>{label}</h2>
);

export default function LandingPage() {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-300 text-white">
      {/* Navbar */}
      <nav className="bg-black bg-opacity-50 backdrop-blur-md w-full py-4 shadow-md px-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-white">PayPro</div>
          <div className="flex space-x-4">
            <button
              onClick={() => navigate('/dashboard')}
              className="text-white hover:text-blue-300 transition-colors"
            >
              Dashboard
            </button>
            <button
              onClick={() => navigate('/sendmoney')}
              className="text-white hover:text-blue-300 transition-colors"
            >
              Transfer Money
            </button>
            <button
              onClick={() => navigate('/signin')}
              className="text-white hover:text-blue-300 transition-colors"
            >
              Sign In
            </button>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <div className="container mx-auto px-4 py-20 flex flex-col items-center text-center">
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <Heading label="Welcome to PayPro" className="text-white" />
          <SubHeading label="Your seamless and secure payment experience starts here." className="text-white" />
          <button
            onClick={() => navigate('/signin')}
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Let's Begin
            <ArrowRight className="ml-2" />
          </button>
        </div>

        {/* Features section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white bg-opacity-20 backdrop-blur-md p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <CreditCard className="text-4xl mb-4 text-blue-500" />
            <h3 className="text-xl font-semibold mb-2 text-blue-700">Easy Payments</h3>
            <p className="text-gray-900">Make payments with just a few clicks. Fast, simple, and secure.</p>
          </div>
          <div className="bg-white bg-opacity-20 backdrop-blur-md p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <DollarSign className="text-4xl mb-4 text-green-500" />
            <h3 className="text-xl font-semibold mb-2 text-green-700">Low Fees</h3>
            <p className="text-gray-900">Enjoy competitive rates and low transaction fees on all your transfers.</p>
          </div>
          <div className="bg-white bg-opacity-20 backdrop-blur-md p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <Shield className="text-4xl mb-4 text-purple-500" />
            <h3 className="text-xl font-semibold mb-2 text-purple-700">Secure Transactions</h3>
            <p className="text-gray-900">Your security is our top priority. All transactions are encrypted and protected.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
