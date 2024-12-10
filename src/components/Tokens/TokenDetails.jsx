import { useState } from "react";
import Search from "../Search";
import Transaction from "../Transaction";
import SulImg from "../../assets/SulLogo.svg";

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
  className="flex flex-row items-center space-x-4 bg-[#151515] rounded-3xl px-4 py-6 my-6 relative"
  style={{
    boxShadow: "inset 0 6px 10px rgba(255, 255, 255, 0.2)", // Inner white shadow on top
  }}
>
  <img src={SulImg} alt="sul-logo" className="w-28" />
  <div className="flex flex-col space-y-3">
    <p className="font-semibold text-2xl text-white">Sulaana Token (SUL)</p>
    <p className="border-[#434343] border-2 px-4 py-1 rounded-xl max-w-fit text-white">PRC20</p>
    <p className="text-sm text-gray-300">
      Sulaana is the AI-powered blockchain encyclopedia, bringing accurate,
      decentralized knowledge to life on the blockchain. Explore a world of
      information where every article is AI-enhanced, dynamic, and
      community-driven.
    </p>
  </div>

  <button className="rounded-3xl bg-gradient-to-r from-[#8923B4] to-[#3B0F4E] w-56 px-5 py-3 text-lg font-semibold text-white"
   style={{
    boxShadow: "inset 0 6px 10px rgba(255, 255, 255, 0.2)", // Inner white shadow on top
  }}>
    Get Airdrop of Sulaana Token
  </button>
      </div>


      {/* OVERVIEW, BASIC INFO and MORE */}
      <div className="grid grid-cols-3 gap-6">
        <div>
            <p className="text-white text-xl font-bold pb-4">Overview</p>
            <div className="bg-[#151515] border-[#434343] border-[1px] rounded-3xl p-4">
                <div className="flex flex-row items-center justify-between pb-4">
                    <div>
                        <p className="text-lg font-semibold">0.09550 UVI</p>
                        <p>
                            <span className="text-sm text-[#37DD00]">
                        (+0.02%)
                        </span>
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
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#37DD00" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
</svg>
                   </div>
                 </div>
                 <div className="flex flex-row items-center justify-between pb-4">
                    <p className="">Issuer</p>
                   <div className="flex flex-row items-center space-x-2">
                    <p className="">Pkkdjfldk4sgd54sdgsgg</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#37DD00" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
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

                 <div className="flex flex-row items-center justify-between pb-1">
                    <p className="">Social Profiles:</p>
                    <div>
                        {/* Telegram */}
{/* Twitter */}

{/* facebook */}

{/* Instagram */}
{/* Youtube */}
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
      <div className="overflow-x-auto pb-6">
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
        <Transaction />
      </div>
    </div>
  );
};

export default TokenDetails;
