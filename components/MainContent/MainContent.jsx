import React from "react";
import document from "../../assets/main-content/document.svg";
import user from "../../assets/main-content/user.svg";
import sms from "../../assets/main-content/sms.svg";
import circle from "../../assets/main-content/circle.svg";
import trend from "../../assets/main-content/trendup.svg";
import exportIcon from "../../assets/main-content/export.svg";
import HiringTable from "./HiringTable";

const MainContent = () => {
  const cards = [
    {
      icon: user,
      dot: circle,
      title: "Total Applied",
      value: "920",
      description: "Total Applied last year were 780 candidates",
      trendValue: "+2.68%",
    },
    {
      icon: sms,
      dot: circle,
      title: "Total Invitations",
      value: "54",
      description: "Total invitation last year were 1025 employee",
      trendValue: "+4.87%",
    },
    {
      icon: document,
      dot: circle,
      title: "Total Hiring",
      value: "84",
      description: "Total hiring year were 72 hiring",
      trendValue: "+9.12%",
    },
  ];
  return (
    <section className="bg-[#F9FAF5] p-6 min-h-screen">
      <div>
        <div className="">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-lg font-bold text-[18px] text-[#393C43]">
                Open Hiring
              </h1>
              <p className="text-sm text-[#70747B] text-[14px] ">
                Overview of your company's various hirings
              </p>
            </div>
            <div className="">
              <button className="flex items-center justify-center gap-2 bg-[#D9F27E] hover:bg-[#c0d76e] w-[154px] h-[48px] text-white px-4 py-2 rounded-lg shadow">
                <img src={exportIcon} alt="" />
                <span className="text-[#222222] text-[14px] font-medium">
                  Export Report
                </span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card, index) => (
              <div key={index} className="bg-white shadow-sm rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center ">
                    <div>
                      <img src={card.icon} alt="" />
                    </div>
                    <div className="ml-4">
                      <h2 className="text-sm font-semibold text-[16px] text-gray-700">
                        {card.title}
                      </h2>
                    </div>
                  </div>
                  <div className="cursor-pointer">
                    <img src={card.dot} alt="" />
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-3xl font-semibold text-gray-800 text-[42px]">
                      {card.value}
                    </p>
                    <p className="text-[14px] max-w-[162px] text-[#70747B] mt-2">
                      {card.description}
                    </p>
                  </div>
                  <div className="flex flex-col items-end mt-6">
                    <span className="text-[#70747B] text-[12px]">
                      Last month
                    </span>
                    <div className="flex items-center gap-1 mt-1 bg-[#F9FAF5] py-2 px-3 rounded-lg text-sm text-[16px]">
                      <img src={trend} alt="trend" />
                      <span className="text-[#222222] text-[16px]">
                        {card.trendValue}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <HiringTable />
    </section>
  );
};

export default MainContent;
