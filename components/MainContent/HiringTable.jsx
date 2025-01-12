"use client";
import React, { useState, useEffect } from "react";
import filters from "../../assets/main-content/flag/Filter.svg";
import add from "../../assets/main-content/flag/Add.svg";
import ellipse from "../../assets/main-content/flag/Ellipse 5.svg";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import Swal from "sweetalert2";

const HiringTable = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!token) {
          throw new Error("No token found. Please log in.");
        }

        const response = await axios.get("http://127.0.0.1:8000/api/tasks", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setTasks(response.data.data);
        setLoading(false);
      } catch (error) {
        setError(error.response?.data?.message || error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleTaskDelete = async (taskSlug) => {
    const token = localStorage.getItem("token");

    // Show confirmation dialog first
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        const response = await axios.delete(
          `http://127.0.0.1:8000/api/tasks/${taskSlug}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response);

        if (response.data) {
          const updatedTask = tasks?.filter((task) => task.slug !== taskSlug);
          setTasks(updatedTask);

          Swal.fire({
            title: "Deleted!",
            text: "Your task has been deleted.",
            icon: "success",
          });
        }
      } catch (error) {
        console.error("Error deleting task:", error);
      }
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin h-8 w-8 border-4 border-gray-300 border-t-transparent rounded-full mb-4"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="p-6 mt-6 rounded-md bg-white ">
      <div className="flex flex-wrap justify-between items-center mb-4">
        <div className="flex flex-wrap space-x-4 bg-[#F9FAF5] h-[48px] py-2 rounded-lg px-3">
          <button className="bg-white px-3 py-1.5 rounded-lg text-sm font-semibold text-[#393C43]">
            All hires
            <span className="bg-[#FCCE44] text-[10px] px-1 py-0.5 rounded ml-1">
              {tasks.length}
            </span>
          </button>
          {/* Additional Buttons */}
        </div>
        <div className="flex space-x-4">
          <button className="flex items-center gap-1 bg-[#D9F27E] text-black font-medium px-4 py-2 rounded-lg shadow hover:bg-[#b9d359] text-sm">
            <img src={add} alt="" />
            <Link href="dashboard/addtask">
              <span className="text-[#222222] font-medium">Add New</span>
            </Link>
          </button>
          <button className="flex items-center gap-1 bg-[#F9FAF5] h-[48px] px-4 py-2 rounded-lg hover:bg-gray-100 text-sm">
            <img src={filters} alt="" />
            <span className="text-[#70747B] font-medium">Filters</span>
          </button>
        </div>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto bg-white p-4 rounded-lg">
        <table className="w-full text-left text-gray-700 rounded-lg overflow-hidden">
          <thead className="text-sm capitalize text-[#393C43]">
            <tr>
              <th className="py-4 px-5 flex items-center gap-3 border-l border-t border-b first:rounded-l-lg">
                <input type="checkbox" className="form-checkbox h-4 w-4" />
                Name
              </th>
              <th className="py-4 px-5 border-t border-b">Description</th>
              <th className="py-4 px-5 border-t border-b">Due Date</th>
              <th className="py-4 px-5 border-t border-b"> Status</th>
              <th className="py-4 px-5 flex justify-center border-t border-r border-b rounded-r-lg">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {tasks.map((row, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                } hover:bg-[#F9FAF5] transition-colors`}
              >
                <td className="py-4 px-5 flex items-center gap-3">
                  <span className="font-medium">{row.name}</span>
                </td>

                <td className="py-4 px-5">{row.description}</td>
                <td className="py-4 px-5">{row.due_date}</td>

                <td className="py-4 px-5 flex items-center">
                  <div
                    className={`flex gap-1.5 px-3 py-2 rounded text-xs font-medium ${
                      row.status === "approved"
                        ? "bg-[#D9F27E] text-black"
                        : "bg-[#FCCE44] text-white"
                    }`}
                  >
                    <Image src={ellipse} alt="" />
                    {row.status}
                  </div>
                </td>
                <td className="py-4 px-5">
                  <div className="flex space-x-2 justify-end">
                    {/* Show Button */}
                    <Link href={`dashboard/show/${row.slug}`}>
                      <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-3 py-1.5 rounded-lg text-sm transition duration-300">
                        Show
                      </button>
                    </Link>

                    {/* Update Button */}
                    <Link href={`dashboard/update/${row.slug}`}>
                      <button className="bg-green-500 hover:bg-green-600 text-white font-medium px-3 py-1.5 rounded-lg text-sm transition duration-300">
                        Update
                      </button>
                    </Link>

                    {/* Delete Button */}
                    <button
                      onClick={() => handleTaskDelete(row.slug)}
                      className="bg-red-500 hover:bg-red-600 text-white font-medium px-3 py-1.5 rounded-lg text-sm transition duration-300"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HiringTable;
