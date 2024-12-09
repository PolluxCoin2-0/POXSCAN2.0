import Search from "./Search";
import PoxLogo from '../assets/PoxLogo.svg';
import SulLogo from "../assets/SulLogo.svg";
import UsdxLogo from "../assets/UsdxLogo.svg";
import UviLogo from "../assets/UviLogo.svg";
import BlocksReward from "../assets/BlocksrewardImg.svg";
import SearchByToken from "./SearchByToken";
import { useState } from "react";
import Transaction from "./Transaction";

const ProducerDetails = () => {
  const [transactionsToggleButton, setTransactionsToggleButton] = useState(false);

  const toggleShowAll = () => { 
    setTransactionsToggleButton((prev) => !prev);
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

        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row justify-center items-center space-x-4">
            <div className="flex flex-row items-center space-x-4 border-[1px] border-[#434343] rounded-2xl py-2 px-2">
              <p className="text-base text-white font-medium ">PHDBDNMJdfbmfdnvjkdshfjjhfksfbsjhkdhfjkashfgjkasdfhdjgg</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#37DD00" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
</svg>

            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.0} stroke="#37DD00" className="size-9 border-[1px] border-[#434343] rounded-md p-1 cursor-pointer">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z" />
</svg>

          </div>

<div className="flex flex-row items-center space-x-16">
          <div>
            <p className="text-white pb-1 text-sm text-end">Recent Activity (UTC)</p>
            <p className="text-white font-medium text-sm text-end">2024-11-26T03:20:45.556Z</p>
          </div>

          <div>
            <p className="text-white pb-1 text-sm text-end">Created on (UTC)</p>
            <p className="text-white font-medium text-sm text-end"> 2024-11-26T03:20:45.556Z</p>
          </div>
          </div>
        </div>
      </div>

      {/* Account Details */}
      <div className="grid grid-cols-1 xl:grid-cols-[40%_60%] gap-4">
        {/* First Column >>> Account Data */}
      <div className="bg-[#151515] border-[1px] border-[#434343] rounded-3xl px-6 py-5 my-3 shadow-lg">
        <p className="text-[#36DB00] font-bold text-4xl">$86.625</p>
        <p className="pt-2 pb-4 text-white font-medium text-xl">886.62 POX</p>

        <div className="fle flex-col">
        <div className="flex flex-col items-start md:flex-row md:items-center space-x-0 md:space-x-[270px] pb-[18px]">
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
            <p className="text-white font-medium">Name</p>
            </div>

            <div className="flex flex-row items-center space-x-4">
              <p className="text-white text-sm font-medium px-2 py-1">
             rockblack
              </p>
              </div>
        </div>

        <div className="flex flex-col items-start md:flex-row md:items-center space-x-0 md:space-x-[254px] pb-[18px]">
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
            <p className="text-white font-medium">Website</p>
            </div>

            <div className="flex flex-row items-center space-x-4">
              <p className="text-white text-sm font-medium px-2 py-1">
              https://www.rockblack.com
              </p>
              </div>
        </div>

        <div className="flex flex-col items-start md:flex-row md:items-center space-x-0 md:space-x-[144px] pb-[18px]">
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
            <p className="text-white font-medium whitespace-nowrap">Block Count / Efficiency</p>
            </div>

            <div className="flex flex-row items-center space-x-4">
              <p className="text-white text-sm font-medium px-2 py-1">
              244988/99.89
              </p>
              </div>
        </div>

        <div className="flex flex-col items-start md:flex-row md:items-center space-x-0 md:space-x-[154px] pb-[18px]">
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
            <p className="text-white font-medium">Round Ranking/ Votes</p>
            </div>

            <div className="flex flex-row items-center space-x-4">
              <p className="text-white text-sm font-medium px-4 py-2 border-[1px] border-[#434343] rounded-lg">
              3/993842
              </p>
              </div>
        </div>

        <div className="flex flex-col items-start md:flex-row md:items-center space-x-0 md:space-x-[154px] pb-[18px]">
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
            <p className="text-white font-medium">POX Staked / Balance</p>
            </div>

            <div className="flex flex-row items-center space-x-4">
              <p className="text-white text-sm font-medium px-4 py-2">
              1000.00 POX  /   883.25 POX
              </p>
              </div>
        </div>

        <div className="flex flex-col items-start md:flex-row md:items-center space-x-0 md:space-x-[230px] pb-[18px]">
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
            <p className="text-white font-medium">Transactions:</p>
            </div>

            <div className="flex flex-row items-center space-x-4">
              <p className="text-white text-sm font-medium px-2 py-1">
              578
              </p>
              </div>
        </div>

        <div className="flex flex-col items-start md:flex-row md:items-center space-x-0 md:space-x-[252px] pb-[18px]">
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
            <p className="text-white font-medium">Transfers:</p>
            </div>

            <div className="flex flex-row items-center space-x-0 text-white text-sm font-medium">
  <p className="">578 (</p>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2.0}
    stroke="#37DD00"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
    />
  </svg>
  <p>&nbsp;180&nbsp;</p>

  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2.0}
    stroke="#E96258"
    className="w-5 h-5"
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

        <div className="flex flex-col items-start md:flex-row md:items-center space-x-0 md:space-x-[230px] pb-[18px]">
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
            <p className="text-white font-medium">Bandwidth:</p>
            </div>

            <div className="flex flex-row items-center space-x-4">
              <p className="text-white text-sm font-medium px-2 py-1">
              Consumed: 549 /  182997
              </p>
              </div>
        </div>

        <div className="flex flex-col items-start md:flex-row md:items-center space-x-0 md:space-x-[260px] pb-[18px]">
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
            <p className="text-white font-medium">Energy:</p>
            </div>

            <div className="flex flex-row items-center space-x-4">
              <p className="text-white text-sm font-medium px-2 py-1">
              Consumed: 168161 /  3379969
              </p>
              </div>
        </div>

        <div className="flex flex-col items-start md:flex-row md:items-center space-x-0 md:space-x-[275px] pb-[18px]">
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
            <p className="text-white font-medium">Votes:</p>
            </div>

            <div className="flex flex-row items-center space-x-4">
              <p className="text-white text-sm font-medium px-2 py-1">
              Voted:  1000  / 1000
              </p>
              </div>
        </div>

        <div className="flex flex-col items-start md:flex-row md:items-center space-x-0 md:space-x-[130px]">
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
            <p className="text-white font-medium whitespace-nowrap">Claimable Voting Rewards:</p>
            </div>

            <div className="flex flex-row items-center space-x-4">
              <p className="text-white text-sm font-medium px-2 py-1 whitespace-nowrap">
              390.347486 POX
              </p>
              </div>
        </div>
        </div>
      </div>

      {/* Second Column >>> Current Ranking, Current Votes, Reward Distribution */}
      <div className="w-full">
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-[#151515] border-[1px] border-[#434343] rounded-3xl px-6 py-5 my-3 shadow-lg">
        <div className="flex flex-row items-center space-x-2 pb-4">
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
            <p className="text-white font-medium">Current Ranking</p>
            </div>

            <p className="bg-[#37DD00] text-black rounded-xl inline font-bold px-4 py-[5px] text-xl">3</p>
            <div className="flex flex-row justify-end">
              <img src={BlocksReward} alt="" />
            </div>

            <div className="pt-6">
              <div className="h-2 bg-[#287E0D] border-[1px] border-[#434343] rounded-lg"></div>
              <div className="flex flex-row items-center justify-between text-white font-semibold">
                <p>1</p>
                <p>2</p>
              </div>
            </div>
        </div>

        <div className="bg-[#151515] border-[1px] border-[#434343] rounded-3xl px-6 py-5 my-3 shadow-lg">
            <div className="flex flex-row items-center space-x-2 pb-5">
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
            <p className="text-white font-medium">Current Votes</p>
            </div>

            <p className="bg-[#37DD00] text-black rounded-xl inline font-bold px-4 py-2 text-base">265261</p>

        </div>

        <div className="bg-[#151515] border-[1px] border-[#434343] rounded-3xl px-6 py-5 my-3 shadow-lg">
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
            <p className="text-white font-medium">Reward Distribution</p>
            </div>

            <div className="flex flex-row items-center justify-between">
              <div>
                <div className="flex flex-row items-center space-x-1">
                  <p className="text-[#F25E5B] font-semibold">90%</p>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.0} stroke="#F25E5B" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                   </svg>

                </div>
                <p className="text-sm">Voters</p>
              </div>

              <div>
                <div className="flex flex-row items-center space-x-1">
                  <p className="text-[#37DD00] font-semibold">10%</p>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.0} stroke="#37DD00" className="size-6">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181" />
                   </svg>

                </div>
                <p className="text-sm">SR Rewards</p>
              </div>
            </div>
        </div>
      </div>

        {/* Wallet , Portfolio, Approval */}
        <div className="bg-[#151515] border-[1px] border-[#434343] rounded-3xl px-6 py-5 my-3 shadow-lg">
          <div className="flex flex-row items-center space-x-6">
            <button className="px-4 bg-white font-bold text-black rounded-md py-2">
              Wallet (3)
            </button>
            <button className="text-white text-opacity-20 bg-[#3E423C] px-4 py-2 rounded-md font-bold">
            Portfolio(0)
            </button>
            <button className="text-white text-opacity-20 bg-[#3E423C] px-4 py-2 rounded-md font-bold">
             Approval(0)
            </button>
          </div>

          {/* Search */}
         <SearchByToken/>
          {/* POX */}
          <div className="flex flex-row items-center justify-between pb-5">
            <div className="flex flex-row items-center space-x-2">
              <img src={PoxLogo} alt="pox-logo" />
              <p className="text-white font-medium">Pollux(POX)</p>
            </div>

            <div>
              <p className="text-white pb-[2px] text-sm">883.252028</p>
              <p className="text-white text-sm">≈ $0.095134</p>
            </div>
          </div>

          {/* USDX */}
          <div className="flex flex-row items-center justify-between pb-5">
            <div className="flex flex-row items-center space-x-2">
              <img src={UsdxLogo} alt="pox-logo" className="w-7 h-7"/>
              <div>
              <p className="text-white font-medium pb-[2px]">Pollux USD (USDX) </p>
              <p className="text-white font-medium">PSTv3ZweeCRHd5cmxoL3dTTbSKGgtYZ5cm</p>
              </div>
            </div>

            <div>
              <p className="text-white pb-[2px] text-sm">883.252028</p>
              <p className="text-white text-sm">≈ $0.095134</p>
            </div>
          </div>

          {/* UVI */}
          <div className="flex flex-row items-center justify-between pb-5">
            <div className="flex flex-row items-center space-x-2">
              <img src={UviLogo} alt="pox-logo" />
              <div>
              <p className="text-white font-medium pb-[2px]">UVI TOKEN (UVI)</p>
              <p className="text-white font-medium">PSTv3ZweeCRHd5cmxoL3dTTbSKGgtYZ5cm</p>
              </div>
            </div>

            <div>
              <p className="text-white pb-[2px] text-sm">883.252028</p>
              <p className="text-white text-sm">≈ $0.095134</p>
            </div>
          </div>

          {/* SULAANA */}
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center space-x-2">
              <img src={SulLogo} alt="pox-logo" className=""/>
              <div>
              <p className="text-white font-medium pb-[2px]">SULAANA TOKEN(SUL)</p>
              <p className="text-white font-medium">PSTv3ZweeCRHd5cmxoL3dTTbSKGgtYZ5cm</p>
              </div>
            </div>

            <div>
              <p className="text-white pb-[2px] text-sm">883.252028</p>
              <p className="text-white text-sm">≈ $0.095134</p>
            </div>
          </div>
        </div>
      </div>

      </div>

      {/* Buttons >> Transactions and Transfers */}
      <div className="my-4">
      <div className="flex flex-row items-center space-x-6 pb-2">
        <button
          onClick={() => toggleShowAll(true)}
          className={`text-sm font-semibold px-6 py-[9px] rounded-lg ${
            transactionsToggleButton
              ? "text-black bg-[#37DD00]"
              : "text-white text-opacity-30 bg-[#0A2301]"
          }`}
        >
         Transactions
        </button>
        <button
          onClick={() => toggleShowAll(false)}
          className={`text-sm font-semibold px-6 py-[9px] rounded-lg ${
            !transactionsToggleButton
              ? "text-black bg-[#37DD00]"
              : "text-white text-opacity-30 bg-[#0A2301]"
          }`}
        >
          Transfers
        </button>
        </div>
        <div className="pt-4">
          {
            transactionsToggleButton ? <Transaction/> : <Transaction/>
          }
        </div>
      </div>
      </div>
  )
}

export default ProducerDetails;