import { useState } from "react";
import Search from "./Search";
import Transaction from "./Transaction";
import ContractTab from "../pages/Blockchain/Contracts/ContractTab";

const AccountContractDetails = () => {
  const [activeTab, setActiveTab] = useState("Transactions"); // State to track the active tab

  const renderActiveComponent = () => {
    switch (activeTab) {
      case "Transactions":
        return <Transaction />;
      case "Contract":
        return <ContractTab />;
      case "Transfers":
        return <Transaction />;
      default:
        return null;
    }
  };

  return (
    <div className="text-white ">
      {/* Search */}
      <div className="py-6">
        <Search />
      </div>

      {/* Account */}
      <div className="pb-6">
        <p className="pb-4 text-xl font-medium">Account</p>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
          <div className="flex flex-row justify-center items-center space-x-4">
            <div className="flex flex-row items-center space-x-4 border-[1px] border-[#434343] rounded-xl py-2 px-2">
              <span className="block sm:hidden">
                {`PHDBDNMJdfbmfdnvj`.slice(0, 15)}...
              </span>
              <span className="hidden sm:block">
                PHDBDNMJdfbmfdnvjkdshfjjhfksfbsjhkdhfjkashfgjkasdfhdjgg
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#37DD00"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
                />
              </svg>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.0}
              stroke="#37DD00"
              className="size-9 border-[1px] border-[#434343] rounded-xl p-1 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z"
              />
            </svg>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center space-x-0 md:space-x-16 mt-4 lg:mt-0">
            <div>
              <p className="text-white pb-1 text-sm">Recent Activity (UTC)</p>
              <p className="text-white font-medium text-sm">
                2024-11-26T03:20:45.556Z
              </p>
            </div>

            <div className="mt-4 md:mt-0">
              <p className="text-white pb-1 text-sm text-start lg:text-end">
                Created on (UTC)
              </p>
              <p className="text-white font-medium text-sm text-start lg:text-end">
                {" "}
                2024-11-26T03:20:45.556Z
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* uvi token contract */}
      <div>
        <p className="inline border-[1px] border-[#434343] rounded-lg py-1 px-4 bg-lightGreen font-medium">
          Uvi Token Contract
        </p>

        {/* Uvitoken contract and calling overview */}
        <div className="flex flex-col lg:flex-row w-full mt-6 space-x-0 lg:space-x-6">
          {/* uvitoken contract */}
          <div className="w-full lg:w-[60%] border-[1px] border-[#434343] rounded-2xl p-3 md:p-5 bg-lightestGreen">
            <p className="text-xl font-semibold">Overview</p>

            <div className="flex flex-col md:flex-row items-start md:items-center space-x-8 md:space-x-[280px] pb-5 mt-5">
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
                <p className="text-white font-medium whitespace-nowrap">Name</p>
              </div>
              <div className="font-medium whitespace-nowrap text-lightestGray md:text-white">
                Uvi Token
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center space-x-8 md:space-x-[236px] pb-6 ">
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
                <p className="text-white font-medium whitespace-nowrap">
                  Total Assets
                </p>
              </div>
              <div className="font-medium whitespace-nowrap text-lightestGray md:text-white">
                $0.00 (0 POX)
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center space-x-8 md:space-x-[233px] pb-5">
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
                <p className="text-white font-medium whitespace-nowrap">
                  Transactions
                </p>
              </div>
              <div className="font-medium whitespace-nowrap text-lightestGray md:text-white">
                1949875
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center space-x-8 md:space-x-[269px] pb-5">
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
                <p className="text-white font-medium whitespace-nowrap ">
                  Creator
                </p>
              </div>
              <div className="font-medium text-lightestGray md:text-white  ">
                <p className="block md:hidden text-sm">PXSDcHzdQX99DmHgQvCGzvHbVV <br/>tZQEBJP/ at Txn / d3fe3dc36194e6c5c115989f113ad1275<br/>3a2990c7f8...</p>
                <p className="hidden md:block text-[15px]">PXSDcHzdQX99DmHgQvCGzvHbVVtZQEBJP/ at Txn / d3fe3dc36194e6c5c115989f113ad12753a2990c7f8...</p>
                
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center space-x-8 md:space-x-[125px] pb-5">
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
                <p className="font-medium whitespace-nowrap text-white">
                  Energy Consumption Ratio:
                </p>
              </div>
              <div className="font-medium whitespace-nowrap text-lightestGray md:text-white">
                578
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center space-x-8 md:space-x-[208px] pb-5">
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
                <p className="text-white font-medium whitespace-nowrap">
                  Creators Energy
                </p>
              </div>
              <div className="flex flex-row items-center text-lightestGray md:text-white">
                <p>578(</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#37DD00"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
                <p>180 </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#E96258"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
                  />
                </svg>
                <p>397)</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center space-x-8 md:space-x-[82px] pb-5">
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
                <p className="text-white font-medium whitespace-nowrap">
                  Extra Energy Consumption Factor
                </p>
              </div>
              <div className="font-medium whitespace-nowrap text-lightestGray md:text-white">
                Consumed: 549 / 182997
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center space-x-8 md:space-x-[160px] pb-5">
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
                <p className="text-white font-medium whitespace-nowrap">
                  Energy & Pollux Power
                </p>
              </div>
              <div className="font-medium whitespace-nowrap text-lightestGray md:text-white">
                <p className="hidden md:block">Energy Available 0 / Pollux Power: Voted 0/0</p>
                <p className="block md:hidden">Energy Available 0 / <br/>Pollux Power: Voted 0/0</p>
              </div>
            </div>
          </div>

          {/* calling overview */}
          <div className="w-full lg:w-[40%] border-[1px] border-[#434343] rounded-2xl p-3 md:p-5 bg-lightestGreen mt-6 lg:mt-0">
            <div>
              <div className="flex flex-col md:flex-row justify-between">
                <p className="text-xl font-semibold">Calling Overview</p>
                <p className="text-white font-normal whitespace-nowrap">
                  Only data within 24hrs is counted
                </p>
              </div>
              <div className="flex flex-col md:flex-row justify-between w-full mt-6 space-x-0 md:space-x-6">
                <div className="w-full md:w-[40%] border-[1px] border-[#434343] rounded-2xl p-5 bg-lightestGreen flex flex-col items-center py-6 md:py-12 space-y-2">
                  <p className="text-darkGreen text-2xl font-bold">39550</p>
                  <p className="text-white text-opacity-50">Total Calls</p>
                </div>
                <div className="w-full md:w-[60%] flex flex-row justify-between mt-2 md:mt-0">
                  <div className="space-y-2">
                    <p className="text-darkGreen font-semibold">
                      Top 5 Methods
                    </p>
                    <p className="text-white font-medium whitespace-nowrap text-sm">
                      0xNot Found
                    </p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-darkGreen font-semibold text-end">
                      Top 5 Methods
                    </p>
                    <p className="text-white font-medium whitespace-nowrap text-end text-sm">
                      100.00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex flex-col md:flex-row justify-between w-full mt-8 md:mt-6 space-x-0 md:space-x-6">
                <div className="w-full md:w-[40%] border-[1px] border-[#434343] rounded-2xl p-5 bg-lightestGreen flex flex-col items-center py-6 md:py-12 space-y-2">
                  <p className="text-darkGreen text-2xl font-bold">39550</p>
                  <p className="text-white text-opacity-50">Total Calls</p>
                </div>
                <div className="w-full md:w-[60%] flex flex-row justify-between mt-2 md:mt-0">
                  <div className="space-y-2">
                    <p className="text-darkGreen font-semibold">
                      TOP 5 Addresses
                    </p>
                    <p className="text-white whitespace-nowrap text-sm">
                      PKM5FZ...hp3Qb3
                    </p>
                    <p className="text-white whitespace-nowrap text-sm">
                      PKM5FZ...hp3Qb3
                    </p>
                    <p className="text-white whitespace-nowrap text-sm">
                      PKM5FZ...hp3Qb3
                    </p>
                    <p className="text-white whitespace-nowrap text-sm">
                      PKM5FZ...hp3Qb3
                    </p>
                    <p className="text-white whitespace-nowrap text-sm">
                      PKM5FZ...hp3Qb3
                    </p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-darkGreen font-semibold text-end">
                      Calls Proportion
                    </p>
                    <p className="text-white whitespace-nowrap text-end text-sm">
                      100.00
                    </p>
                    <p className="text-white whitespace-nowrap text-end text-sm">
                      100.00
                    </p>
                    <p className="text-white whitespace-nowrap text-end text-sm">
                      100.00
                    </p>
                    <p className="text-white whitespace-nowrap text-end text-sm">
                      100.00
                    </p>
                    <p className="text-white whitespace-nowrap text-end text-sm">
                      100.00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Transaction, Contract, Transfer Table */}
      <div className="mt-6 mb-6">
        <div className="flex flex-row items-center flex-wrap gap-x-4 gap-y-0 md:gap-x-4 md:flex-nowrap">
          <button
            onClick={() => setActiveTab("Transactions")}
            className={`text-md font-semibold px-6 py-[9px] rounded-lg ${
              activeTab === "Transactions"
                ? "text-black bg-[#37DD00]"
                : "text-white text-opacity-40 bg-[#0A2301]"
            }`}
          >
            Transactions
          </button>

          <button
            onClick={() => setActiveTab("Contract")}
            className={`text-md font-semibold px-8 py-[9px] rounded-lg ${
              activeTab === "Contract"
                ? "text-black bg-[#37DD00]"
                : "text-white text-opacity-40 bg-[#0A2301]"
            }`}
          >
            Contract
          </button>

          <button
            onClick={() => setActiveTab("Transfers")}
            className={`text-md font-semibold px-9 py-[9px] rounded-lg mt-4 md:mt-0 ${
              activeTab === "Transfers"
                ? "text-black bg-[#37DD00]"
                : "text-white text-opacity-40 bg-[#0A2301]"
            }`}
          >
            Transfers
          </button>
        </div>

        {/* Active Component */}
        <div className="mt-4">{renderActiveComponent()}</div>
      </div>
    </div>
  );
};

export default AccountContractDetails;
