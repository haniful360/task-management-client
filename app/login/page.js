"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Login = () => {
  // const [formData, setFormData] = useState({
  //   email: "",
  //   password: "",
  // });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState("");
  const router = useRouter();
  // const handleOnchange = (e) => {
  //   console.log(e.target.value);
  //   const { name, value } = e.target;
  //   console.log(name, value);
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      email,
      password,
      password_confirmation,
    };

    try {
      const response = await axios.post( "http://127.0.0.1:8000/api/login", formData);

      if (response.data) {
        router.push("/dashboard");
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div>
      <div className="bg-gray-100 flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-center text-[#D9F27E]">
            Login
          </h2>
          <form onSubmit={handleOnSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                name="password"
                onChange={(e) => setPassword_confirmation(e.target.value)}
                placeholder="Enter your password"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#D9F27E] text-white py-2 px-4 rounded-lg hover:bg-[#cbe767] transition"
            > Login
            </button>
          </form>
          <p className="text-sm text-center text-gray-600 mt-4">
            Don’t have an account?
            <Link href="/register" className="text-blue-600 hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
