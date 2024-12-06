import { useState } from "react";
import Search from "./Search";
import { copyToClipboard } from "../utils/CopyFunction";

const TransactionDetails = () => {
    const ConfirmedSRs=[
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
    ]

    const [showAllSRs, setShowAllSRs] = useState(false);
    const [showsResourcedConsumed, setShowsResourcedConsumed] = useState(false);
    const [changedOverViewEventComponent, setChangedOverViewEventComponent] = useState(true);

    const toggleShowAll = () => { 
      setShowAllSRs((prev) => !prev);
    };

    const toggleShowAllResourceConsumed = () => { 
        setShowsResourcedConsumed((prev) => !prev);
      };

      const togglechangedOverViewEventComponent = (isOverview) => {
        setChangedOverViewEventComponent(isOverview);
      };
  
    return (
    <div>
      {/* Search Section */}
      <Search />

      {/* Transaction Details Heading */}
      <div className="py-6">
        <p className="text-white text-lg md:text-2xl font-semnibold">
          Transactions Details
        </p>
        <div className="flex flex-col space-y-4 space-x-0 lg:flex-row lg:items-center lg:space-x-6 lg:space-y-0 py-4">
        <p className="text-white border-[1px] border-gray-500 border-opacity-50 px-3 py-1 rounded-xl whitespace-nowrap">
  Account:{" "}
  <span className="hidden xl:inline text-[#37DD00] font-semibold">
    gdghdjfhdfgueuyrtuhruityeuihjndfbjbgsehy
  </span>
  <span className="inline xl:hidden text-[#37DD00] font-semibold">
    {`gdghdjfhdfgueuyrtuhruityeuihjndfbjbgsehy`.slice(0, 10) +
      "..." +
      `gdghdjfhdfgueuyrtuhruityeuihjndfbjbgsehy`.slice(-10)}
  </span>
</p>

          <p className="text-white">
            Transferred:{" "}
            <span className="font-semibold bg-[#242d2248] px-3 py-2 rounded-lg border-[1px] border-[#434343]">
              0.0000001POX
            </span>
          </p>
          <p className="text-white border-[1px] border-gray-500 border-opacity-50 px-3 py-1 rounded-xl">
            To:
            <span className="hidden lg:inline text-[#37DD00] font-semibold">
    gdghdjfhdfgueuyrtuhruityeuihjndfbjbgsehy
  </span>
  <span className="inline lg:hidden text-[#37DD00] font-semibold">
    {`gdghdjfhdfgueuyrtuhruityeuihjndfbjbgsehy`.slice(0, 10) +
      "..." +
      `gdghdjfhdfgueuyrtuhruityeuihjndfbjbgsehy`.slice(-10)}
  </span>
          </p>
        </div>

        <div className="bg-[#151515] border-[1px] border-[#434343] rounded-3xl px-6 py-5 my-3 shadow-lg">
            <div className="flex flex-row items-center space-x-0 md:space-x-80 pb-6">
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
            <p className="text-white font-medium">Hash</p>
            </div>

            <div className="flex flex-row space-x-2">
              <p className="hidden xl:inline text-white font-medium">
                6a1020975a919383887ed0b0a8c0ecae4c09e65c5ab09984b4e77da677fe225f
              </p>
              <p className="inline xl:hidden text-white font-medium">
                {
                  `6a1020975a919383887ed0b0a8c0ecae4c09e65c5ab09984b4e77da677fe225f`.slice(0,8) + "..." + `6a1020975a919383887ed0b0a8c0ecae4c09e65c5ab09984b4e77da677fe225f`.slice(-8)
                }
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
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
              {ConfirmedSRs.slice(0,4).map((sr, index) => (
                <p
                  key={index}
                  className="text-white text-sm md:text-base font-medium bg-[#242D22] rounded-xl py-1 px-2 truncate"
                >
                  {sr}
                </p>
              ))}
              </div>
              {
                showAllSRs ? <svg onClick={toggleShowAll} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-5 cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
              </svg>
              :
                 <svg  onClick={toggleShowAll} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-5 cursor-pointer">
                 <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
                 </svg>
              }
              {
                showAllSRs && (
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
                )
              }
              </div>
          </div>
        </div>

        <div className="flex flex-row items-center space-x-24 md:space-x-80 pb-6">
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
            <p className="text-white font-medium">Result</p>
            </div>

              <p className="text-[#175900] text-sm font-semibold bg-[#37DD00] px-2 py-1 rounded-lg">
               SUCCESS
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

        <div className="flex flex-col items-start lg:flex-row lg:items-center space-x-0 lg:space-x-[165px]">
          <div className="flex flex-row items-center space-x-2 pb-2 lg:pb-0">
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
            <p className="text-white font-medium">Resources Consumed & Fee</p>
            </div>

            <div className="flex flex-row items-center space-x-2">
              <div className="relative flex flex-row items-center text-white space-x-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <p className="text-white text-base font-medium bg-transparent border-[1px] border-[#434343] px-4 py-1 rounded-lg">
              0 POX
              </p>
              <p className="text-white text-base font-medium bg-transparent border-[1px] border-[#434343] px-4 py-1 rounded-lg">
              267 Bandwidth
              </p>
              <p className="text-white text-base font-medium bg-transparent border-[1px] border-[#434343] px-4 py-1 rounded-lg">
               0 Energy
              </p>
              </div>
              {
                showsResourcedConsumed ? <svg onClick={toggleShowAllResourceConsumed} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-5 cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
              </svg>
              :
                 <svg  onClick={toggleShowAllResourceConsumed} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-5 cursor-pointer">
                 <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
                 </svg>
              }
              {
                showsResourcedConsumed && (
                    <div className="absolute top-20 md:top-10 left-0 bg-white rounded-2xl p-2">
                        <div className="flex flex-col items-start space-y-2 md:space-y-0 md:flex-row md:items-center space-x-0 md:space-x-16 pb-2 justify-between">
                            <p className="text-[#175A00] text-sm p-0">POX_CONSUMED</p>
                            <p className="bg-black rounded-xl p-2 whitespace-nowrap text-xs">0 (POX BURNED FOR RESOURCES)</p>
                        </div>

                        <div className="flex flex-col items-start space-y-2 md:space-y-0 md:flex-row md:items-center space-x-0 md:space-x-16 pb-2 justify-between">
                            <p className="text-[#175A00] text-sm p-0">BANDWIDTH_CONSUMED_TOTAL</p>
                            <p className="bg-black rounded-xl p-2 whitespace-nowrap text-xs">267 (POX BURNED FOR RESOURCES)</p>
                        </div>
                    </div>
                )
              }
              </div>
          </div>
        </div>
        </div>
      </div>

      {/* Overview and Event Logs */}
      <div className="mb-6">
        <div className="flex flex-row items-center space-x-6 pb-2">
        <button
          onClick={() => togglechangedOverViewEventComponent(true)}
          className={`text-sm font-semibold px-6 py-[9px] rounded-lg ${
            changedOverViewEventComponent
              ? "text-black bg-[#37DD00]"
              : "text-white text-opacity-30 bg-[#0A2301]"
          }`}
        >
          Overview
        </button>
        <button
          onClick={() => togglechangedOverViewEventComponent(false)}
          className={`text-sm font-semibold px-6 py-[9px] rounded-lg ${
            !changedOverViewEventComponent
              ? "text-black bg-[#37DD00]"
              : "text-white text-opacity-30 bg-[#0A2301]"
          }`}
        >
          Event Logs
        </button>
        </div>

        {/* Overview div or event logs div */}
        <div className="bg-[#151515] border-[1px] border-[#434343] rounded-3xl px-6 py-5 my-3 shadow-lg">
            {/* Overview Div */}
            {
                changedOverViewEventComponent ? (
                    <div>
                    <div className="flex flex-row items-center space-x-[120px] md:space-x-96 pb-6">
                      <div className="flex flex-row items-center space-x-2">
                        <p className="text-white font-medium">Value</p>
                        </div>
            
                          <p className="text-white font-medium">
                           0.000112
                          </p>
                    </div>
            
                    <div className="flex flex-row items-center space-x-16 md:space-x-[330px] pb-6">
                      <div className="flex flex-row items-center space-x-2">
                        <p className="text-white font-medium">POX Transfer </p>
                        </div>
            
                          <p className="text-white font-medium">
                           0.000112
                          </p>
                    </div>
            
                    <div className="flex flex-row items-center space-x-16 md:space-x-80 pb-6">
                      <div className="flex flex-row items-center space-x-2">
                        <p className="text-white font-medium">Method Calling</p>
                        </div>
            
                          <p className="text-white font-medium">
                          TransactionTrigger
                          </p>
                    </div>
            
                    <div className="flex flex-col items-start xl:flex-row xl:items-center space-x-0 xl:space-x-80 pb-6">
                      <div className="flex flex-row items-center space-x-2 pb-2 xl:pb-0">
                        <p className="text-white font-medium">Token Transfer</p>
                        </div>
            
                          <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row items-start md:items-center space-x-0 md:space-x-4">
                            <div className="flex flex-row items-center space-x-2 border-[1px] border-[#434343] px-4 py-1 rounded-xl">
                                <p className="text-white">From</p>
                                <p className="hidden md:inline text-[#37DD00] font-semibold">sdghsdrhighsdihgiersgiehuiiyhi</p>
                                <p className="inline md:hidden text-[#37DD00] font-semibold">
                                  {`sdghsdrhighsdihgiersgiehuiiyhi`.slice(0,8) + "..." + `sdghsdrhighsdihgiersgiehuiiyhi`.slice(-8)}
                                </p>
                                <svg
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
                              d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
                            />
                          </svg>
                            </div>
            
                            <div className="flex flex-row items-center space-x-2 border-[1px] border-[#434343] px-4 py-1 rounded-xl">
                                <p className="text-white">To</p>
                                <p className="hidden md:inline text-[#37DD00] font-semibold">sdghsdrhighsdihgiersgiehuiiyhi</p>
                                <p className="inline md:hidden text-[#37DD00] font-semibold">
                                  {`sdghsdrhighsdihgiersgiehuiiyhi`.slice(0,9) + "..." + `sdghsdrhighsdihgiersgiehuiiyhi`.slice(-9)}
                                </p>
                                <svg
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
                              d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
                            />
                          </svg>
                            </div>
                          </div>
                    </div>
            
                    <div className="flex flex-row items-center space-x-28 md:space-x-[350px]">
                      <div className="flex flex-row items-center space-x-2">
                        <p className="text-white font-medium">All Transfer</p>
                        </div>
            
                          <p className="text-white font-medium">
                          No Other Transfers
                          </p>
                    </div>
                    </div>
                ) :(
                    <div className="flex flex-row items-center space-x-0 md:space-x-96">
                      <div className="flex flex-row items-center space-x-2">
                        <p className="text-white font-medium">All Logs</p>
                        </div>
            
                          <p className="text-white font-medium">
                          There is no logs available yet
                          </p>
                    </div>
                )
            }
        </div>
      </div>
    </div>
  );
};

export default TransactionDetails;
