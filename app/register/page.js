"use client";
import React, { useState } from "react";

const Register = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const [responseMessage, setResponseMessage] = useState(null);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          password_confirmation: formData.password_confirmation,
        }),
      });

      const data = await response.json();
      // setResponseMessage("Registration successful!");
      console.log("Server Response:", data);

      setFormData({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
      });
    } catch (error) {
      console.error("Error:", error.message);
      setResponseMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-center text-[#D9F27E]">
          Create an Account
        </h2>
        {responseMessage && (
          <div className="text-center text-sm text-red-500 mb-4">
            {responseMessage}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleOnChange}
              placeholder="Enter your name"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleOnChange}
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
              value={formData.password}
              onChange={handleOnChange}
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
              name="password_confirmation"
              value={formData.password_confirmation}
              onChange={handleOnChange}
              placeholder="Enter your confirm password"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#D9F27E] text-white py-2 px-4 hover:bg-[#cbe767] rounded-lg  transition"
          >
            Register
          </button>
        </form>
        <p className="text-sm text-center text-gray-600 mt-4">
          Already have an account? 
           <a href="/login" className="text-blue-600 hover:underline">
             Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
