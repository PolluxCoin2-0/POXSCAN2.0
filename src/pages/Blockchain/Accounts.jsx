import Search from "../../components/Search"
import Transaction from "../../components/Transaction"
import ActiveAccountsImg from "../../assets/ActiveAccounts.svg";
import NumberOfAccountsImg from "../../assets/NumberOfAccounts.svg";
import PoxHolderImg from "../../assets/PoxHolder.svg";
import { formatNumberWithCommas } from "../../utils/formatNumberWithCommas";

const Accounts = () => {
  return (
    <div className="mt-10">
    {/* Search */}
      <div className="w-full flex items-center justify-center">
    <div className="w-full max-w-4xl ">
    <Search/>
    </div>
    </div>

    {/* Blocks */}
    <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10 mb-6">
            <div className="reusable-box px-6 py-4 ">
             <p className="text-white text-opacity-50 font-medium text-sm pb-3">POX Holder</p>
             <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center space-x-4">
                <img src={PoxHolderImg} alt="number-of-blocks-img" />
                <div className="">
                  <p className="text-white text-opacity-50 text-sm pb-1">Holders</p>
                  <p className="text-white font-medium">{formatNumberWithCommas(45455652)}</p>
                </div>
              </div>
              <div>
              <p className="text-white text-opacity-50 text-sm pb-1">Pecentage</p>
              <p className="text-white font-medium">10%</p>
              </div>
             </div>
            </div>

            <div className="reusable-box px-6 py-4 ">
             <p className="text-white text-opacity-50 font-medium text-sm pb-3">Number of Accounts</p>
             <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center space-x-4">
                <img src={NumberOfAccountsImg} alt="number-of-blocks-img" />
                <div className="">
                  <p className="text-white text-opacity-50 text-sm pb-1">Total</p>
                  <p className="text-white font-medium ">{formatNumberWithCommas(45455652)} POX</p>
                </div>
              </div>
              <div>
              <p className="text-white text-opacity-50 text-sm pb-1">Last 24hr</p>
              <p className="text-white font-medium">{formatNumberWithCommas(55652)} POX</p>
              </div>
             </div>
            </div>

            <div className="reusable-box px-6 py-4 ">
             <p className="text-white text-opacity-50 font-medium text-sm pb-3">Active Accounts</p>
             <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center space-x-4">
                <img src={ActiveAccountsImg} alt="number-of-blocks-img" />
                <div className="">
                  <p className="text-white text-opacity-50 text-sm pb-1">Daily Active Accounts</p>
                  <p className="text-white font-medium ">{formatNumberWithCommas(45455652)} POX</p>
                </div>
              </div>
              <div>
              <p className="text-white text-opacity-50 text-sm pb-1">Last 24hr</p>
              <p className="text-white font-medium">{formatNumberWithCommas(55652)}</p>
              </div>
             </div>
            </div>
        </div>

    {/* Tranasctions */}
    <div className="overflow-x-auto pb-6">
       {/* Header Section */}
    <div className="flex flex-row items-center justify-start space-x-5 px-0 md:px-6 md:justify-between md:space-x-0 py-4 min-w-[600px]">
      <h1 className="text-2xl font-bold text-white">Transactions</h1>
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
  )
}

export default Accounts;