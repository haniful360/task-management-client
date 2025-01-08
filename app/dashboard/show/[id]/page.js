"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const ShowTask = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `http://127.0.0.1:8000/api/tasks/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Stop loading when request completes
      }
    };
    fetchData();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin h-8 w-8 border-4 border-gray-300 border-t-transparent rounded-full mb-4"></div>
          {/* <p className="text-gray-600">Loading...</p> */}
        </div>
      </div>
    );
  }

  return (
   <div className="max-w-2xl mx-auto mt-20">
     <div className="bg-white rounded-lg shadow-lg p-6 space-y-4 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-800">{data?.name}</h2>

      {/* Description */}
      <p className="text-gray-600 text-sm">{data?.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi enim incidunt voluptate perspiciatis. Earum, nisi? Quo eligendi corporis culpa voluptatibus sit quisquam illum. Sint ut aspernatur dicta inventore perferendis, voluptates porro facilis praesentium ea voluptatum, exercitationem ratione harum nam dolorem eos numquam ducimus dolor incidunt explicabo vero nobis. Debitis quisquam sapiente ut fugit officiis ea excepturi, dignissimos quam quo voluptatum fuga dolorum iure doloremque pariatur voluptatem explicabo vero sed odio placeat. Ea fugiat dolore distinctio mollitia quidem iusto consequuntur? Totam dolor architecto officiis sed voluptas iusto qui itaque dicta, quisquam, necessitatibus reprehenderit voluptatibus? Quibusdam, rem. A corporis alias animi esse!</p>

      {/* Due Date */}
      <div className="flex items-center space-x-2">
        <span className="text-sm font-medium text-gray-500">Due Date:</span>
        <span className="text-sm font-semibold text-gray-800">
          {data?.due_date}
        </span>
      </div>

      {/* Status */}
      <div className="flex items-center space-x-2">
        <span className="text-sm font-medium text-gray-500">Status:</span>
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${
            data?.status === "approved"
              ? "bg-green-100 text-green-800"
              : "bg-yellow-100 text-yellow-800"
          }`}
        >
          {data?.status}
        </span>
      </div>
    </div>
   </div>
  );
};

export default ShowTask;
