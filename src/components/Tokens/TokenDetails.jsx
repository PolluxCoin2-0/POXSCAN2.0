import { useState } from "react";
import Search from "../Search";
import Transaction from "../Transaction";
import SulImg from "../../assets/SulLogo.svg";
import TwitterSocialIcon from "../../assets/TwitterSocialIcon.svg";
import InstagramSocialIcon from "../../assets/InstagramSocialIcon.svg";
import TelegramSocialIcon from "../../assets/TelegramSocialIcon.svg";
import YoutubeSocialIcon from "../../assets/YoutubeSocialIcon.svg";
import FacebookSocialIcon from "../../assets/FacebookSocialIcon.svg";

const TokenDetails = () => {
  const [isTokenTransfers, setIsTokenTransfers] = useState(true);

  const toggleShowAll = () => {
    setIsTokenTransfers((prev) => !prev);
  };

  return (
    <div className="text-white">
      <div className="">
        <Search />
      </div>

      <div
        className="flex flex-col space-y-2 items-center md:space-y-0 md:flex-row md:space-x-4 md:justify-between bg-[#151515] rounded-3xl px-4 py-6 my-6 relative"
        style={{
          boxShadow: "inset 0 6px 10px rgba(255, 255, 255, 0.2)", // Inner white shadow on top
        }}
      >
        <img src={SulImg} alt="sul-logo" className="w-28" />
        <div className="flex flex-col space-y-3">
          <p className="font-semibold text-2xl text-white">
            Sulaana Token (SUL)
          </p>
          <p className="border-[#434343] border-2 px-4 py-1 rounded-xl max-w-fit text-white">
            PRC20
          </p>
          <p className="text-sm text-gray-300 text-justify whitespace-break-spaces md:max-w-md lg:max-w-xl xl:max-w-full">
            Sulaana is the AI-powered blockchain encyclopedia, bringing
            accurate, decentralized knowledge to life on the blockchain. Explore
            a world of information where every article is AI-enhanced, dynamic,
            and community-driven.
          </p>
        </div>

        <button
          className="rounded-3xl bg-gradient-to-r from-[#8923B4] to-[#3B0F4E] w-56 px-5 py-3 text-lg font-semibold text-white transition-transform transform hover:scale-105"
          style={{
            boxShadow: "inset 0 6px 10px rgba(255, 255, 255, 0.2)", // Inner white shadow on top
          }}
        >
          Get Airdrop of Sulaana Token
        </button>
      </div>

      {/* OVERVIEW, BASIC INFO and MORE */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div>
          <p className="text-white text-xl font-bold pb-4">Overview</p>
          <div className="bg-[#151515] border-[#434343] border-[1px] rounded-3xl p-4">
            <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:items-center md:justify-between pb-4">
              <div>
                <p className="text-lg font-semibold">0.09550 UVI</p>
                <p>
                  <span className="text-sm text-[#37DD00]">(+0.02%)</span>
                  ≈$18,771,885.317
                </p>
              </div>
              <button className="bg-[#37DD00] rounded-xl text-black px-4 py-1 font-medium">
                Reputation : OK
              </button>
            </div>
            <div className="flex flex-row items-center justify-between pb-5">
              <p className="">Total Supply</p>
              <p className="">49225545454</p>
            </div>
            <div className="flex flex-row items-center justify-between pb-5">
              <p className="">Circulating Supply</p>
              <p className="">492255545</p>
            </div>
            <div className="flex flex-row items-center justify-between pb-5">
              <p className="">Total Market Cap</p>
              <p className="">4922553365</p>
            </div>
            <div className="flex flex-row items-center justify-between pb-2">
              <p className="">Circulating Market Cap</p>
              <p className="">492254524</p>
            </div>
          </div>
        </div>

        <div>
          <p className="text-white text-xl font-bold pb-4">Basic Info</p>
          <div className="bg-[#151515] border-[#434343] border-[1px] rounded-3xl p-4">
            <p className="text-white text-xl font-bold pb-4">UVI info</p>
            <div className="flex flex-row items-center justify-between pb-4">
              <p className="">Contract</p>
              <div className="flex flex-row items-center space-x-2">
                <p className="">Pkkdjfldk4sgd54sdgsgg</p>
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
            </div>
            <div className="flex flex-row items-center justify-between pb-4">
              <p className="">Issuer</p>
              <div className="flex flex-row items-center space-x-2">
                <p className="">Pkkdjfldk4sgd54sdgsgg</p>
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
            </div>
            <div className="flex flex-row items-center justify-between pb-4">
              <p className="">Issuing Time</p>
              <p className="">2024-02-14 10:06:26 (UTC)</p>
            </div>
            <div className="flex flex-row items-center justify-between pb-4">
              <p className="">Decimal</p>
              <p className="">www skskk pdf</p>
            </div>

            <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:items-center md:justify-between pb-0">
              <p className="">Social Profiles:</p>
              <div className="flex flex-row items-center space-x-3">
                {/* Twitter */}
                <img src={TwitterSocialIcon} alt="twitter-icon" className="w-8 h-8 cursor-pointer hover:scale-110" />
                {/* Telegram */}
                <img src={TelegramSocialIcon} alt="telegram-icon" className="w-8 h-8 cursor-pointer hover:scale-110" />
                {/* facebook */}
                <img src={FacebookSocialIcon} alt="facebook-icon"  className="w-8 h-8 cursor-pointer hover:scale-110"/>
                {/* Instagram */}
                <img src={InstagramSocialIcon} alt="instagram-icon" className="w-8 h-8 cursor-pointer hover:scale-110" />
                {/* Youtube */}
                <img src={YoutubeSocialIcon} alt="youtube-icon" className="w-8 h-8 cursor-pointer hover:scale-110" />
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="text-white text-xl font-bold pb-4">More</p>
          <div className="bg-[#151515] border-[#434343] border-[1px] rounded-3xl p-4">
            <p className="text-white text-xl font-bold pb-4">UVI</p>
            <div className="flex flex-row items-center justify-between pb-6">
              <p className="">Holders</p>
              <p className="">49225</p>
            </div>
            <div className="flex flex-row items-center justify-between pb-6">
              <p className="">Total Transfer Coutn</p>
              <p className="">49225</p>
            </div>
            <div className="flex flex-row items-center justify-between pb-6">
              <p className="">Transfers (24h)</p>
              <p className="">49225</p>
            </div>
            <div className="flex flex-row items-center justify-between pb-4">
              <p className="">Trading Volume (24h)</p>
              <p className="">49225</p>
            </div>
          </div>
        </div>
      </div>

      {/* TOKEN TRANSFERS AND HOLDERS */}
      <div className=" pb-6">
        {/* Header Section */}
        <div className="min-w-[600px] py-6">
          <div className="flex items-center gap-5 cursor-pointer hover:opacity-80 transition-opacity">
            <button
              onClick={() => toggleShowAll()}
              className={`text-sm font-semibold px-6 py-[9px] rounded-lg ${
                isTokenTransfers
                  ? "text-black bg-[#37DD00]"
                  : "text-white text-opacity-30 bg-[#0A2301]"
              }`}
            >
              Token Transfers
            </button>
            <button
              onClick={() => toggleShowAll()}
              className={`text-sm font-semibold px-6 py-[9px] rounded-lg ${
                !isTokenTransfers
                  ? "text-black bg-[#37DD00]"
                  : "text-white text-opacity-30 bg-[#0A2301]"
              }`}
            >
              Holders
            </button>
          </div>
        </div>
        <div>
          {
       !isTokenTransfers && (
       <div className="grid grid-cols-1 xl:grid-cols-[74%_25%] xl:gap-3">
        <div className="bg-[#151515] border-[1px] border-[#434343] rounded-3xl px-6 py-5 my-3 shadow-lg">

    </div>
    <div className="bg-[#151515] border-[1px] border-[#434343] rounded-3xl px-6 py-5 my-3 shadow-lg">
<p className="font-medium pb-4">Asset Breakdown by Holders</p>
<div className="flex flex-row items-center space-x-4 pb-4">
  <div className="bg-[#CE619D] rounded-lg h-8 w-8"></div>
  <p>Top 1~10 holders: 27.66%</p>
</div>

<div className="flex flex-row items-center space-x-4 pb-4">
  <div className="bg-[#54A6FD] rounded-lg h-8 w-8"></div>
  <p>Top 11~50 holders: 9.74%</p>
</div>

<div className="flex flex-row items-center space-x-4 pb-4">
  <div className="bg-[#F47387] rounded-lg h-8 w-8"></div>
  <p>Top 51~100 holders: 5.03%</p>
</div>

<div className="flex flex-row items-center space-x-4 pb-4">
  <div className="bg-[#7F88E3] rounded-lg h-8 w-8"></div>
  <p>Top 101~500 holders: 12.87%</p>
</div>

<div className="flex flex-row items-center space-x-4 pb-4">
  <div className="bg-[#F7BE3D] rounded-lg h-8 w-8"></div>
  <p>Top 501~ ∞ holders: 44.70%</p>
</div>
    </div>
  </div>
)
          }
          <div className="overflow-x-auto">
        <Transaction />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenDetails;
