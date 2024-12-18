import Search from "../../components/Search";
import PoxLogo from "../../assets/PoxLogo.svg";
import SulLogo from "../../assets/SulLogo.svg";
import UsdxLogo from "../../assets/UsdxLogo.svg";
import UviLogo from "../../assets/UviLogo.svg";
import TotalAccounts from "../../assets/TotalAccounts.svg";
import TotalTransactions from "../../assets/TotalTransactions.svg";
import TotalTransferVolume from "../../assets/TotalTransferVolume.svg";
import TvlCurrent from "../../assets/TvlCurrent.svg";
import { formatNumberWithCommas } from "../../utils/formatNumberWithCommas";
import Transaction from "../../components/Transaction";

const Home = () => {
  // Data for blocks to avoid repetition
  const blockData = [
    {
      image: TotalAccounts,
      title: "Total Accounts",
      value: 23467567235,
      change: "+120",
    },
    {
      image: TotalTransactions,
      title: "Total Transactions",
      value: 23467567235,
      change: "+120",
    },
    {
      image: TvlCurrent,
      title: "TVL (Current)",
      value: 23467567235,
      change: "+120",
    },
    {
      image: TotalTransferVolume,
      title: "Total Transfer Volume",
      value: 23467567235,
      change: "+120",
    },
  ];

  // Trending search data
  const trendingData = [
    { logo: PoxLogo, label: "POX" },
    { logo: UsdxLogo, label: "USDX" },
    { logo: UviLogo, label: "UVI" },
    { logo: SulLogo, label: "SUL" },
  ];

  const TokensData = [
    {
      logo: PoxLogo,
      label: "POX",
      acounts: 23454523564,
      transactions: 734756734,
    },
    {
      logo: UsdxLogo,
      label: "USDX",
      acounts: 23454523564,
      transactions: 734756734,
    },
    {
      logo: UviLogo,
      label: "UVI",
      acounts: 23454523564,
      transactions: 734756734,
    },
    {
      logo: SulLogo,
      label: "SUL",
      acounts: 23454523564,
      transactions: 734756734,
    },
  ];

  return (
    <div className="min-h-screen text-white mt-10">
      <div className="flex flex-col items-center">
        <p className="text-white font-bold text-2xl md:text-5xl text-center pb-4">
          Explore Pox Blockchain
        </p>

        {/* Search Section */}
        <div className="flex flex-col md:flex-row items-center md:space-x-4 w-full md:w-[45%] mr-0 md:mr-20 mt-2 space-y-4 md:space-y-0">
  <div className="bg-[#151515] border-[1px] border-[#434343] rounded-full w-full md:w-auto px-6 py-2 flex flex-col items-center">
    <p className="text-[#FFFFFF] opacity-70 whitespace-nowrap text-center">
      Total Block
    </p>
    <p className="font-medium text-center">2.23B</p>
  </div>
  <Search />
        </div>

        {/* Trending Search Section */}
        <div className="flex flex-col md:flex-row md:items-center md:space-x-6 my-6">
  {/* Header */}
  <p className="text-xl font-semibold text-gray-200 mb-4 md:mb-0 whitespace-nowrap">
    Trending Search:
  </p>

  {/* Grid for Trending Items */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6 w-full">
    {trendingData.map((item, index) => (
      <div
        key={index}
        className="flex items-center p-2 space-x-4"
      >
        <img
          src={item.logo}
          alt={`${item.label}-logo`}
          className="w-10 h-10 rounded-full"
        />
        <p className="text-gray-300 font-medium truncate">
          {item.label}
        </p>
      </div>
    ))}
  </div>
        </div>

        {/* Blocks Section */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-6 my-6">
          {blockData.map((block, index) => (
            <div
              key={index}
              className="reusable-box px-6 py-4 flex justify-between items-center space-x-6 text-sm"
            >
              <div className="flex items-center space-x-6">
                <img src={block.image} alt={block.title} className="w-8 h-8" />
                <div>
                  <p className="pb-1 text-white text-opacity-50">
                    {block.title}
                  </p>
                  <p className="font-medium">
                    {formatNumberWithCommas(block.value)}
                  </p>
                </div>
              </div>
              <div>
                <p className="pb-1 text-white text-opacity-50 whitespace-nowrap">24 hrs</p>
                <p className="font-medium">{block.change}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Current/ MaxTPS / Nodes / Total Tokens / Total Contracts */}
        <div
          className="w-full flex items-center justify-around rounded-2xl my-2 px-6 py-4"
          style={{
            background:
              "linear-gradient(90deg, #080808 -5.16%, #1A3013 10.61%, #165401 47.09%, #0E2A05 89.55%, #080808 108.19%)",
          }}
        >
          <p className="text-opacity-50 text-white">
            Current / MaxTPS:{" "}
            <span className="text-opacity-100 text-white">0/1000</span>
          </p>
          <p className="text-opacity-50 text-white">
            Nodes: <span className="text-opacity-100 text-white">32</span>
          </p>
          <p className="text-opacity-50 text-white">
            Total Token: <span className="text-opacity-100 text-white">10</span>
          </p>
          <p className="text-opacity-50 text-white">
            Total Contracts:{" "}
            <span className="text-opacity-100 text-white">85</span>
          </p>
        </div>
        
      </div>
      <div className="grid grid-cols-[100%] 2xl:grid-cols-[70%_28%] gap-6 my-4">
        <div className="grid grid-cols-[100%] lg:grid-cols-[78%_20%] gap-6 bg-[#151515] border-[1px] border-[#434343] rounded-3xl px-6 py-5 shadow-lg">
          <div>
            <div className="flex flex-row items-center space-x-4 rounded-l-xl bg-gradient-to-r from-[#124202] via-[#124202] to-[#151515] px-2 py-2 w-40">
              <img src={PoxLogo} alt="pox-logo" className="w-9 h-9" />
              <div>
                <p className="font-semibold text-xl">POX</p>
                <p className="font-medium text-base">$0.1201</p>
              </div>
            </div>
            {/* Graph */}
            <div></div>
          </div>

          <div>
            {/* Market Cap */}
            <div className="flex flex-row items-center justify-between mb-4">
              <div>
                <p className="text-white text-opacity-50 text-sm font-medium pb-1">
                  Market Cap
                </p>
                <p>$ 4.75M</p>
              </div>
              <div>
                <p className="text-white text-opacity-50 text-sm font-medium pb-1">
                  Volume (24hr)
                </p>
                <p>164.98%</p>
              </div>
            </div>
            {/* Supply / Staked / BandWidth */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between lg:flex-col">
            <div className="bg-gradient-to-r from-[#124202] via-[#124202] to-[#151515] px-4 py-2 w-52 rounded-l-xl mb-2">
              <p className="text-white text-opacity-50 text-sm font-medium pb-2">
                Supply
              </p>
              <p>{formatNumberWithCommas(4634673)} POX</p>
            </div>
            <div className="bg-gradient-to-r from-[#124202] via-[#124202] to-[#151515] px-4 py-2 w-52 rounded-l-xl mb-2">
              <p className="text-white text-opacity-50 text-sm font-medium pb-2">
                Staked
              </p>
              <p>{formatNumberWithCommas(4634673)}</p>
            </div>
            <div className="bg-gradient-to-r from-[#124202] via-[#124202] to-[#151515] px-4 py-2 w-52 rounded-l-xl mb-2">
              <p className="text-white text-opacity-50 text-sm font-medium pb-2">
                Bandwidth:{" "}
                <span className="text-white ">
                  {formatNumberWithCommas(4634673)}
                </span>
              </p>
              <p className="text-white text-opacity-50 text-sm font-medium pb-2">
                Energy:{" "}
                <span className="text-white ">
                  {formatNumberWithCommas(4634673)}
                </span>
              </p>
            </div>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
        <div className="bg-[#151515] border-[1px] border-[#434343] rounded-3xl px-6 py-5 shadow-lg min-w-[350px]">
          {/* Header Section */}
          <div className="flex flex-row items-center justify-between mb-4">
            <p className="text-sm font-bold text-white whitespace-nowrap">
              Project Leaderboard
            </p>
            <div className="flex flex-row items-center cursor-pointer hover:opacity-80 transition-opacity">
              <p className="text-sm font-medium text-[#37DD00]">View More</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#37DD00"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </div>

          {/* Table Header */}
          <div className="flex flex-row items-center justify-between  bg-[#434343] py-2 px-2 rounded-xl mb-4">
            <p className="text-sm font-semibold text-gray-100">Project Name</p>
            <p className="text-sm font-semibold text-gray-100">Accounts</p>
            <p className="text-sm font-semibold text-gray-100">Transactions</p>
          </div>

          {/* Tokens Data */}
          <div className="space-y-2">
            {TokensData.map((item, index) => (
              <div
                key={index}
                className="flex flex-row items-center justify-between hover:bg-[#232323] px-0 py-1 rounded-lg transition-colors cursor-pointer"
              >
                {/* Project Name and Logo */}
                <div className="flex items-center space-x-3">
                  <img
                    src={item.logo}
                    alt={`${item.label}-logo`}
                    className="w-9 h-9 rounded-full shadow-md"
                  />
                  <p className="text-base font-medium text-white">
                    {item.label}
                  </p>
                </div>

                {/* Accounts */}
                <p className="text-sm font-medium text-gray-300">
                  {formatNumberWithCommas(item?.acounts)}
                </p>

                {/* Transactions */}
                <p className="text-sm font-medium text-gray-300">
                  {formatNumberWithCommas(item?.transactions)}
                </p>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>

      {/* Transactions */}
      <div className="overflow-x-auto pb-6">
         {/* Header Section */}
    <div className="flex flex-row items-center justify-start space-x-5 px-0 md:px-0 md:justify-between md:space-x-0 py-4 min-w-[600px]">
      <h1 className="text-xl font-bold text-white">Transactions</h1>
      <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
        <span className="text-sm font-medium text-[#37DD00]">View More</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#37DD00"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
    </div>
      <Transaction />
      </div>
    </div>
  );
};

export default Home;
