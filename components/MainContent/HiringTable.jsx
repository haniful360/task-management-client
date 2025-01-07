"use client";
import React, { useState, useEffect } from "react";
import filters from "../../assets/main-content/flag/Filter.svg";
import add from "../../assets/main-content/flag/Add.svg";
import ellipse from "../../assets/main-content/flag/Ellipse 5.svg";
import Image from "next/image";

const HiringTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/tasks");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
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
              {data.length}
            </span>
          </button>
          {/* Additional Buttons */}
        </div>
        <div className="flex space-x-4">
          <button className="flex items-center gap-1 bg-[#D9F27E] text-black font-medium px-4 py-2 rounded-lg shadow hover:bg-[#b9d359] text-sm">
            <img src={add} alt="" />
            <span className="text-[#222222] font-medium">Add New</span>
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
              <th className="py-4 px-5 flex items-center border-t border-r border-b rounded-r-lg">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {data.map((row, index) => (
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

                <td className="py-4 px-5 flex items-center justify-end">
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HiringTable;
