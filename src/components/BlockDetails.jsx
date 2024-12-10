import { useState } from "react";
import Search from "./Search";
import Transaction from "./Transaction";

const BlockDetails = () => {
  const ConfirmedSRs = [
    "hfghsgdfhhs",
    "hfghsgdfhhs",
    "hfghsgdfhhs",
    "hfghsgdfhhs",
    "hfghsgdfhhs",
    "hfghsgdfhhs",
    "hfghsgdfhhs",
    "hfghsgdfhhs",
    "hfghsgdfhhs",
    "hfghsgdfhhs",
    "hfghsgdfhhs",
    "hfghsgdfhhs",
    "hfghsgdfhhs",
    "hfghsgdfhhs",
    "hfghsgdfhhs",
    "hfghsgdfhhs",
  ];
  const [showAllSRs, setShowAllSRs] = useState(false);
  const [showTransactionsInternalTxns, setShowTransactionsInternalTxns] =
    useState(false);

  const toggleShowAll = () => {
    setShowAllSRs((prev) => !prev);
  };

  const toggleTransactionsinternalTxns = (isOverview) => {
    setShowTransactionsInternalTxns(isOverview);
  };

  return (
    <div className="">
      {/* Search */}
      <div className="py-6">
        <Search />
      </div>

      {/* Block Details */}
      <div className="pb-4">
        <p className="font-medium text-xl pb-4 text-white">Block Details</p>
        <div className="flex flex-row flex-wrap items-center space-x-4">
          <p className="text-white border-[1px] border-gray-500 border-opacity-50 px-3 py-1 rounded-xl whitespace-nowrap">
            Block:
            <span className="text-[#37DD00] font-semibold"> #12345</span>
          </p>
          <p className="text-white bg-[#242D22] px-3 py-[6px] rounded-lg border-[1px] border-[#434343] text-sm">
            Producer: rockblack
          </p>
          <div className="flex flex-row items-center space-x-2 mt-2 md:mt-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3.5}
              stroke="white"
              className="size-6 border-[1px] border-[#434343] bg-[#242D22] rounded-md p-1 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3.5}
              stroke="white"
              className="size-6 border-[1px] border-[#434343] bg-[#242D22] rounded-md p-1 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Block Hash and Total Consumption */}
      <div className="grid grid-cols-1 xl:grid-cols-[70%_30%] gap-4">
        <div className="bg-[#151515] border-[1px] border-[#434343] rounded-3xl px-6 py-5 my-3 shadow-lg">
          <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:items-center space-x-0 md:space-x-[280px] pb-6">
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
                Block Hash
              </p>
            </div>

            <div className="flex flex-row space-x-2">
              <p className="hidden xl:inline text-white font-medium">
                6a1020975a919383887ed0b0a8c0ecae4c09e65c5ab09984b4e77da677fe225f
              </p>
              <p className="inline xl:hidden text-white font-medium">
                {`6a1020975a919383887ed0b0a8c0ecae4c09e65c5ab09984b4e77da677fe225f`.slice(
                  0,
                  8
                ) +
                  "..." +
                  `6a1020975a919383887ed0b0a8c0ecae4c09e65c5ab09984b4e77da677fe225f`.slice(
                    -8
                  )}
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#37DD00"
                className="size-6 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
                />
              </svg>
            </div>
          </div>

          <div className="flex flex-col xl:flex-row xl:items-center space-x-0 xl:space-x-[250px] pb-6">
            <div className="flex flex-row items-center space-x-2 pb-2 xl:pb-0">
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
              <p className="text-white font-medium">Confirmed SRs</p>
            </div>

            <div className="flex flex-row items-center space-x-2">
              <p className="text-white font-medium bg-[#242D22] rounded-xl py-1 px-2">
                19
              </p>
              <div className="relative flex flex-row items-center text-white space-x-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {ConfirmedSRs.slice(0, 4).map((sr, index) => (
                    <p
                      key={index}
                      className="text-white text-sm md:text-base font-medium bg-[#242D22] rounded-xl py-1 px-2 truncate"
                    >
                      {sr}
                    </p>
                  ))}
                </div>
                {showAllSRs ? (
                  <svg
                    onClick={toggleShowAll}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="white"
                    className="size-5 cursor-pointer"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 15.75 7.5-7.5 7.5 7.5"
                    />
                  </svg>
                ) : (
                  <svg
                    onClick={toggleShowAll}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="white"
                    className="size-5 cursor-pointer"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                )}
                {showAllSRs && (
                  <div className="absolute top-20 md:top-10 left-0 bg-white rounded-2xl grid grid-cols-2 md:grid-cols-4 p-2 w-full">
                    {ConfirmedSRs.map((sr, index) => (
                      <p
                        key={index}
                        className="font-medium text-[#175A00] rounded-xl py-1 px-4 truncate z-10"
                      >
                        {sr}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-row items-center space-x-24 md:space-x-72 pb-6">
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
              <p className="text-white font-medium">Block Size</p>
            </div>

            <p className="text-white">
              2152 Bytes (Upper Limit: 2,000,000 Bytes)
            </p>
          </div>

          <div className="flex flex-row items-center space-x-[100px] md:space-x-[325px] pb-6">
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
              <p className="text-white font-medium">Block</p>
            </div>

            <p className="text-white text-base font-medium bg-transparent border-[1px] border-[#434343] px-4 py-1 rounded-lg">
              151514
            </p>
          </div>

          <div className="flex flex-col items-start md:flex-row md:items-center space-x-0 md:space-x-80 pb-6">
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
              <p className="text-white font-medium">Status</p>
            </div>

            <div className="flex flex-row items-center space-x-6">
              <p className="text-[#175900] text-sm font-semibold bg-[#37DD00] px-2 py-1 rounded-lg">
                Confirmed
              </p>
              <p className="text-white font-medium">Confirmed By 20 Blocks</p>
            </div>
          </div>

          <div className="flex flex-col items-start md:flex-row md:items-center space-x-0 md:space-x-[324px] pb-6">
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
              <p className="text-white font-medium">Time</p>
            </div>

            <div className="flex flex-row items-center space-x-4">
              <p className="text-white text-sm font-medium px-2 py-1">
                1 Hour ago | Mon Nov 25 2024
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:items-center space-x-0 md:space-x-[240px] pb-6">
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
                Parent Block Hash
              </p>
            </div>

            <div className="flex flex-row space-x-2">
              <p className="hidden xl:inline text-white font-medium">
                6a1020975a919383887ed0b0a8c0ecae4c09e65c5ab09984b4e77da677fe225f
              </p>
              <p className="inline xl:hidden text-white font-medium">
                {`6a1020975a919383887ed0b0a8c0ecae4c09e65c5ab09984b4e77da677fe225f`.slice(
                  0,
                  8
                ) +
                  "..." +
                  `6a1020975a919383887ed0b0a8c0ecae4c09e65c5ab09984b4e77da677fe225f`.slice(
                    -8
                  )}
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#37DD00"
                className="size-6 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
                />
              </svg>
            </div>
          </div>

          <div className="flex flex-col items-start md:flex-row md:items-center space-x-0 md:space-x-[254px]">
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
              <p className="text-white font-medium">Version Number</p>
            </div>

            <div className="flex flex-row items-center space-x-4">
              <p className="text-white text-sm font-medium px-2 py-1">1</p>
            </div>
          </div>
        </div>

        <div className="bg-[#151515] border-[1px] border-[#434343] rounded-3xl px-6 py-5 my-3 shadow-lg">
          <p className="text-white font-bold text-xl pb-8">Total Consumption</p>
          <div className="flex flex-row justify-between items-center pb-6">
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
              <p className="text-white font-medium">POX Burned</p>
            </div>
            <p className="text-white font-medium text-base">359881</p>
          </div>

          <div className="flex flex-row justify-between items-center pb-6">
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
              <p className="text-white font-medium">Bandwidth</p>
            </div>
            <p className="text-white font-medium text-base">359881</p>
          </div>

          <div className="flex flex-row justify-between items-center">
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
              <p className="text-white font-medium">Energy</p>
            </div>
            <p className="text-white font-medium text-base">359881</p>
          </div>
        </div>
      </div>

      {/* Transactions and Internal Trxns */}
      <div className="flex flex-row items-center space-x-4 py-6">
        <button
          onClick={() => toggleTransactionsinternalTxns(true)}
          className={`text-sm font-semibold px-6 py-[9px] rounded-lg ${
            showTransactionsInternalTxns
              ? "text-black bg-[#37DD00]"
              : "text-white text-opacity-30 bg-[#0A2301]"
          }`}
        >
          Transactions
        </button>

        <button
          onClick={() => toggleTransactionsinternalTxns(false)}
          className={`text-sm font-semibold px-6 py-[9px] rounded-lg ${
            !showTransactionsInternalTxns
              ? "text-black bg-[#37DD00]"
              : "text-white text-opacity-30 bg-[#0A2301]"
          }`}
        >
          Internal Txns
        </button>
      </div>

      {/* Transactions and Internal Trxns Component */}
      <div className="pb-6">
        {showTransactionsInternalTxns ? <div className="overflow-x-auto pb-6"> <Transaction/> </div> : <div className="overflow-x-auto pb-6"> <Transaction/> </div>}
      </div>
    </div>
  );
};

export default BlockDetails;
