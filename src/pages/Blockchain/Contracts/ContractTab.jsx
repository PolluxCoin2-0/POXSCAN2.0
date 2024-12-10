import { useState } from "react";
import Code from "./Code";
import ReadContract from "./ReadContract";
import WriteContract from "./WriteContract";
import SearchByToken from "../../../components/SearchByToken";

const Contract = () => {
  const [activeTab, setActiveTab] = useState("Code"); // State to track the active tab

  const renderActiveComponent = () => {
    switch (activeTab) {
      case "Code":
        return <Code />;
      case "Read Contract":
        return <ReadContract />;
      case "Write Contract":
        return <WriteContract />;
      default:
        return null;
    }
  };
  return (
    <div className="mt-6 mb-6 border-[1px] border-[#434343] rounded-2xl p-5 bg-lightestGreen"
    style={{
      background: "radial-gradient(at center, #0F180F, #0F0F0F)", // Radial gradient from the center
    }}>
    <div className="flex flex-row justify-between items-center "
   >
        <div className="flex flex-row items-center space-x-4 pb-2">
          <button
            onClick={() => setActiveTab("Code")}
            className={`text-md font-semibold px-12 py-[7px] rounded-lg ${
              activeTab === "Code"
                ? "text-black bg-white"
                : "text-lightestGray text-opacity-40 bg-lightGray"
            }`}
          >
            Code
          </button>

          <button
            onClick={() => setActiveTab("Read Contract")}
            className={`text-md font-semibold px-6 py-[7px] rounded-lg ${
              activeTab === "Read Contract"
                ? "text-black bg-white"
                : "text-lightestGray text-opacity-40 bg-lightGray"
            }`}
          >
            Read Contract
          </button>

          <button
            onClick={() => setActiveTab("Write Contract")}
            className={`text-md font-semibold px-6 py-[7px] rounded-lg ${
              activeTab === "Write Contract"
                ? "text-black bg-white"
                : "text-lightestGray text-opacity-40 bg-lightGray"
            }`}
          >
            Write Contract
          </button>
        </div>

       {/* search by token */}
      <div className="flex flex-row items-center space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
          />
        </svg>
        <div>
           <SearchByToken/>
        </div>
      </div>

      
    </div>
     {/* Active Component */}
     <div className="mt-4">{renderActiveComponent()}</div>
    </div>
  );
};

export default Contract;
