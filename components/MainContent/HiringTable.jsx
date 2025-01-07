import React from "react";
import flag1 from "../../assets/main-content/flag/australia.svg";
import flag2 from "../../assets/main-content/flag/lebanon.svg";
import flag3 from "../../assets/main-content/flag/croatia.svg";
import flag4 from "../../assets/main-content/flag/uk.svg";
import flag5 from "../../assets/main-content/flag/iceland.svg";
import flag6 from "../../assets/main-content/flag/india.svg";
import filters from "../../assets/main-content/flag/Filter.svg";
import add from "../../assets/main-content/flag/Add.svg";
import ellipse from "../../assets/main-content/flag/Ellipse 5.svg";

const HiringTable = () => {
  const data = [
    {
      name: "Luhutan Imin",
      id: "L8RQSC",
      type: "Employee",
      icon: flag1,
      country: "Australia",
      license: "1/5",
      status: "Draft",
      color: "pink",
    },
    {
      name: "Robert Fox",
      id: "N9KMON",
      type: "Global Payroll",
      icon: flag6,
      country: "India",
      license: "4/5",
      status: "New Hire",
      color: "purple",
    },
    {
      name: "Eleanor Pena",
      id: "K8LOVN",
      type: "Contractor",
      icon: flag5,
      country: "Iceland",
      license: "4/5",
      status: "New Hire",
      color: "blue",
    },
    {
      name: "Leslie Alexander",
      id: "K8LOVN",
      type: "Employee",
      icon: flag2,
      country: "Lebanon",
      license: "3/5",
      status: "Draft",
      color: "orange",
    },
    {
      name: "Devon Lane",
      id: "DH5FXE",
      type: "Employee",
      icon: flag4,
      country: "United Kingdom",
      license: "4/5",
      status: "New Hire",
      color: "blue",
    },
    {
      name: "Jenny Wilson",
      id: "AKXS6T",
      type: "Contractor",
      icon: flag3,
      country: "Croatia",
      license: "3/5",
      status: "Draft",
      color: "orange",
    },
  ];
  return (
    <div className="p-6 mt-6 rounded-md bg-white ">
      <div className="">
        <div className="flex flex-wrap justify-between items-center mb-4">
          <div className="flex flex-wrap space-x-4 bg-[#F9FAF5] h-[48px] py-2 rounded-lg px-3">
            <button className="bg-white px-3 py-1.5 rounded-lg text-sm font-semibold text-[#393C43]">
              All hires{" "}
              <span className="bg-[#FCCE44] text-[10px] px-1  py-0.5 rounded ml-1">
                60
              </span>
            </button>
            <button className="text-[#393C43] text-[14px] px-3 py-1.5 rounded-full text-sm font-medium">
              Employees <span className="bg-white px-1 py-0.5 rounded">10</span>
            </button>
            <button className="text-[#393C43] text-[14px] px-3 py-1.5 rounded-full text-sm font-medium">
              Global Payroll{" "}
              <span className="bg-white px-1 py-0.5 rounded">10</span>
            </button>
            <button className="text-[#393C43] text-[14px] px-3 py-1.5 rounded-full text-sm font-medium">
              Contractors{" "}
              <span className="bg-white px-1 py-0.5 rounded">20</span>
            </button>
            <button className="text-[#393C43] text-[14px] px-3 py-1.5 rounded-full text-sm font-medium">
              Direct Employees{" "}
              <span className="bg-white px-1 py-0.5 rounded">20</span>
            </button>
          </div>
          <div className="flex space-x-4">
            <button className="flex items-center gap-1 bg-[#D9F27E] text-black font-medium px-4 py-2 rounded-lg shadow hover:bg-[#b9d359] text-sm">
            <img src={add} alt="" /> <span className="text-[#222222] font-medium">Add New</span>
            </button>
            <button className="flex items-center gap-1 bg-[#F9FAF5] h-[48px]  px-4 py-2 rounded-lg  hover:bg-gray-100 text-sm">
              <img src={filters} alt="" /> <span className="text-[#70747B] font-medium">Filters</span>
            </button>
          </div>
        </div>

        {/* Table Section */}
        <div className="overflow-x-auto bg-white p-4 rounded-lg">
          <table className="w-full text-left text-gray-700 rounded-lg overflow-hidden ">
            <thead className="text-sm capitalize text-[#393C43]">
              <tr>
                <th className="py-4 px-5 flex items-center gap-3 border-l border-t border-b first:rounded-l-lg">
                  <input type="checkbox" className="form-checkbox h-4 w-4" />
                  Name
                </th>
                <th className="py-4 px-5 border-t border-b">Employment ID</th>
                <th className="py-4 px-5 border-t border-b">Type of hire</th>
                <th className="py-4 px-5 border-t border-b">Country</th>
                <th className="py-4 px-5 border-t border-b">License use</th>
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
                    <input type="checkbox" className="form-checkbox h-4 w-4" />
                    <div className="w-10 h-10 rounded overflow-hidden shadow">
                      <img
                        src={`https://i.pravatar.cc/150?img=${index}`}
                        alt="avatar"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="font-medium">{row.name}</span>
                  </td>
                  <td className="py-4 px-5">{row.id}</td>
                  <td className="py-4 px-5">{row.type}</td>
                  <td className="py-4 px-5 flex items-center gap-2">
                    <img src={row.icon} alt="" className="w-5 h-5" />
                    {row.country}
                  </td>
                  <td className="py-4 px-5">
                    <div className="flex items-center gap-2">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="h-2 rounded-full"
                          style={{
                            width: `${(parseInt(row.license[0]) / 5) * 100}%`,
                            backgroundColor: row.color, // Inline dynamic color
                          }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-500 block">
                        {row.license}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-5 flex items-center justify-end">
                    <div
                      className={` flex gap-1.5 px-3 py-2 rounded text-xs font-medium ${
                        row.status === "New Hire"
                          ? "bg-[#D9F27E] text-black"
                          : "bg-[#FCCE44] text-white"
                      }`}
                    >
                      <img src={ellipse} alt="" />{row.status}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HiringTable;
