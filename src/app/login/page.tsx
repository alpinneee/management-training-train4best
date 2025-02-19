"use client";
import { useState } from "react";
import Navbar from "@/components/common/Navbar";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex h-screen bg-white">
      {/* Kiri */}
      <div
        className="w-1/2 text-white flex flex-col justify-center items-center p-10 relative bg-cover bg-center animate-[slideInLeft_0.5s_ease-out]"
        style={{
          clipPath: "ellipse(100% 80% at 0% 50%)",
          backgroundColor: "#00008B"
        }}
      >
        <img src="/img/LogoT4B.png" alt="Logo" className="absolute top-5 left-5 w-32 animate-[slideInLeft_0.7s_ease-out]" />
        <img src="/img/illustration.svg" alt="Illustration" className="w-2/3 mb-5 animate-[slideInLeft_0.9s_ease-out]" />
        <h2 className="text-2xl font-bold animate-[slideInLeft_1.1s_ease-out]">Welcome To Train4best.</h2>
        <p className="mt-2 animate-[slideInLeft_1.3s_ease-out]">Customer Service: +62 821-3023-7117</p>
      </div>
      {/* Kanan */}
      <div className="w-1/2 flex flex-col justify-center items-center p-10">
        <h2 className="text-3xl font-semibold text-gray-700 animate-[slideInRight_0.5s_ease-out]">Sign In</h2>
        <p className="text-gray-500 mb-5 animate-[slideInRight_0.7s_ease-out]">Login to your account</p>

        <form className="w-full max-w-md">
          <div className="mb-4 animate-[slideInRight_0.9s_ease-out]">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 bg-gray-200 text-black placeholder-gray-600 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4 animate-[slideInRight_1.1s_ease-out]">
            <label className="block text-gray-700">Password</label>
            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-2 bg-gray-200 text-black placeholder-gray-600 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2"
                onClick={() => {
                  const input = document.querySelector('input[type="password"]') as HTMLInputElement;
                  if (input) {
                    input.type = input.type === 'password' ? 'text' : 'password';
                  }
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center mb-4 animate-[slideInRight_1.3s_ease-out]">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="appearance-none w-4 h-4 border border-gray-400 rounded-sm bg-transparent checked:bg-blue-500 checked:border-blue-500 focus:outline-none"
              />
              <span className="ml-2 text-gray-700">Remember me</span>
            </label>
            <a href="#" className="text-blue-600">Forgot Password?</a>
          </div>
          <button type="submit" className="w-full bg-blue-900 text-white py-2 rounded-lg mb-3 animate-[slideInRight_1.5s_ease-out]">
            Login
          </button>
          <button
            type="button"
            className="w-full py-2 rounded-md bg-gray-300 text-gray-600 hover:bg-gray-400 transition mt-4 animate-[slideInRight_1.7s_ease-out]"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
