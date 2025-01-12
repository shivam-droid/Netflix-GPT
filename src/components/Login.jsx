import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Header />
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/154a9550-ce07-4e28-819c-63185dd849f8/web/IN-en-20250106-TRIFECTA-perspective_27b02e7c-f668-4639-9e82-1a5485084b2a_small.jpg"
          alt="Netflix Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      {/* Form Container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-3/12 bg-black bg-opacity-70 text-white rounded-lg p-8">
          <h1 className="text-4xl font-bold mb-12 ml-20 mt-6">Sign In</h1>
          <form className="flex flex-col space-y-10 items-center">
            <input
              type="email"
              placeholder="Email Address"
              className="p-3 w-64 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <input
              type="password"
              placeholder="Password"
              className="p-3 w-64 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <button className="p-3 w-64 bg-red-600 text-white rounded hover:bg-red-700">
              Sign In
            </button>
            <span className="text-gray-300 pb-12">
              New to Netflix?{" "}
              <strong className="text-white cursor-pointer">Sign up now.</strong>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
