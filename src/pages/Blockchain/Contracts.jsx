import Search from "../../components/Search";
import Transaction from "../../components/Transaction";
import ContractImg from "../../assets/ContractImg.svg";
import VerifiedContractImg from "../../assets/VerifiedContractImg.svg";
import { formatNumberWithCommas } from "../../utils/formatNumberWithCommas";
import { useState } from "react";

const Contracts = () => {
  const [changedVerifiedContractComponent, setChangedVerifiedContractComponent] = useState(true);
  const togglechangedVerifiedContractComponent = (isOverview) => {
    setChangedVerifiedContractComponent(isOverview);
  };

  return (
    <div className="mt-10">
      {/* Search */}
      <div className="w-full flex items-center justify-center">
        <div className="w-full max-w-4xl ">
          <Search />
        </div>
      </div>

      {/* Blocks */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10 mb-6 w-[80%] mx-auto">
        <div className="reusable-box px-3 md:px-6 py-4 ">
          <p className="text-white text-opacity-50 font-medium text-sm md:text-md pb-3">
          Contracts
          </p>
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center space-x-2 md:space-x-4">
              <img src={ContractImg} alt="number-of-blocks-img" className="w-12"/>
              <div className="">
                <p className="text-white text-opacity-50 text-xs md:text-sm pb-1">
                  Total
                </p>
                <p className="text-white font-medium text-xs md:text-sm">
                  {formatNumberWithCommas(50)}
                </p>
              </div>
            </div>
            <div>
              <p className="text-white text-opacity-50 text-xs md:text-sm pb-1">
                Yesterday
              </p>
              <p className="text-white font-medium text-xs md:text-sm">
                {"+" + formatNumberWithCommas(0)}
              </p>
            </div>
          </div>
        </div>

        <div className="reusable-box px-3 md:px-6 py-4 ">
          <p className="text-white text-opacity-50 font-medium text-sm md:text-md pb-3">
          Verified Contracts
          </p>
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center space-x-2 md:space-x-4">
              <img src={VerifiedContractImg} alt="number-of-blocks-img" className="w-14"/>
              <div className="">
                <p className="text-white text-opacity-50 text-xs md:text-sm pb-1">
                  Total
                </p>
                <p className="text-white font-medium text-xs md:text-sm ">
                  {formatNumberWithCommas(58)}
                </p>
              
              </div>
            </div>
            <div>
              <p className="text-white text-opacity-50 text-xs md:text-sm pb-1">
                Yesterday
              </p>
              <p className="text-white font-medium text-xs md:text-sm">
                {formatNumberWithCommas(0)}
              </p>
              
            </div>
          </div>
        </div>

      
      </div>

      {/* Tranasctions */}
      <div className="overflow-x-auto pb-6">
        {/* Header Section */}
        <div className="flex flex-row items-center justify-start space-x-5 md:justify-between md:space-x-0 py-4 min-w-[600px]">
          <h1 className="text-xl font-bold text-white">Transactions</h1>
          <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
            <div className="flex flex-row items-center space-x-4 pb-2">
              <button
                onClick={() => togglechangedVerifiedContractComponent(true)}
                className={`text-sm font-semibold px-6 py-[9px] rounded-lg ${
                  changedVerifiedContractComponent
                    ? "text-black bg-[#37DD00]"
                    : "text-white text-opacity-40 bg-[#0A2301]"
                }`}
              >
               Verified Contracts
              </button>
              <button
                onClick={() => togglechangedVerifiedContractComponent(false)}
                className={`text-sm font-semibold px-6 py-[9px] rounded-lg ${
                  !changedVerifiedContractComponent
                    ? "text-black bg-[#37DD00]"
                    : "text-white text-opacity-40 bg-[#0A2301]"
                }`}
              >
               All Contracts
              </button>
            </div>
          </div>

          {/* Pox20 transfer and pox transfer */}
        </div>
        {changedVerifiedContractComponent ? (
          <div>
            <Transaction />
          </div>
        ) : (
          <div>
            <Transaction />
          </div>
        )}
      </div>
    </div>
  );
};

export default Contracts;
