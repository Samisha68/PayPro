

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  return (
    <div className="max-w-sm mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg border border-gray-200">
      <div className="flex flex-col items-center mb-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Sign In</h1>
        <p className="text-gray-600 text-center">
          Enter your credentials to access your account
        </p>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
        <input
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          type="email"
          placeholder="johndoe@example.com"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          type="password"
          placeholder="••••••••"
        />
      </div>

      <button
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold p-3 rounded-md shadow-lg hover:from-purple-600 hover:to-blue-600 hover:shadow-xl transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-purple-300"
        onClick={async () => {
          const postData = {
            username,
            password,
          };
          try {
            const response = await axios.post("http://localhost:3000/api/v1/user/signin", postData);
            window.localStorage.setItem("Authorization", "Bearer " + response.data.token);
            navigate("/dashboard");
          } catch (error) {
            console.error("Sign in error:", error);
          }
        }}
      >
        Sign In
      </button>

      <div className="flex flex-col items-center mt-4">
        <p className="text-sm text-gray-600">
          Don't have an account? <a href="/signup" className="text-blue-600 font-semibold hover:underline">Sign Up</a>
        </p>
      </div>
    </div>
  );
}
