"use client";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const UpdateTask = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    status: "pending",
    due_date: "",
  });
  const { slug } = useParams();
  const router = useRouter();
  console.log(slug);
  useEffect(() => {
    const fetchTask = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/tasks/${slug}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setFormData(response.data.data);
      } catch (error) {
        console.error("Error fetching task:", error);
      }
    };

    fetchTask();
  }, [slug]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      const response = await axios.put(
        `http://127.0.0.1:8000/api/tasks/${slug}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.data) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
        router.push("/dashboard");
      }
    } catch (error) {
      console.log("Error updating task:");
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-gradient-to-br from-white to-gray-50 shadow-lg rounded-lg p-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Update Task</h2>
      <form onSubmit={handleSubmit}>
        {/* Task Name */}
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-600"
          >
            Task Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData?.name}
            onChange={handleChange}
            className="mt-2 block w-full rounded-lg border border-gray-300 bg-gray-50 py-2 px-4 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter task name"
            required
          />
        </div>

        {/* Description */}
        <div className="mb-5">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-600"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData?.description}
            onChange={handleChange}
            className="mt-2 block w-full rounded-lg border border-gray-300 bg-gray-50 py-2 px-4 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter task description"
            rows="4"
          />
        </div>

        {/* Status */}
        <div className="mb-5">
          <label
            htmlFor="status"
            className="block text-sm font-medium text-gray-600"
          >
            Status
          </label>
          <select
            id="status"
            name="status"
            value={formData?.status}
            onChange={handleChange}
            className="mt-2 block w-full rounded-lg border border-gray-300 bg-gray-50 py-2 px-4 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          >
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
          </select>
        </div>

        {/* Due Date */}
        <div className="mb-5">
          <label
            htmlFor="due_date"
            className="block text-sm font-medium text-gray-600"
          >
            Due Date
          </label>
          <input
            type="date"
            id="due_date"
            name="due_date"
            value={formData?.due_date}
            onChange={handleChange}
            className="mt-2 block w-full rounded-lg border border-gray-300 bg-gray-50 py-2 px-4 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-[#D9F27E] text-white py-3 px-6 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300"
          >
            Update Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateTask;
