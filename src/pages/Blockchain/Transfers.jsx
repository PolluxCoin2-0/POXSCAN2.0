import Search from "../../components/Search"
import Transaction from "../../components/Transaction"
import TxnCountImg from "../../assets/TxnCountImg.svg";
import TransferVolumeImg from "../../assets/TransferVolumeImg.svg";
import { formatNumberWithCommas } from "../../utils/formatNumberWithCommas";

const Transfers = () => {
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
            <div className="reusable-box px-3 md:px-6 py-4 ">
             <p className="text-white text-opacity-50 font-medium text-sm md:text-md pb-3">Transfer Count</p>
             <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center space-x-2 md:space-x-4">
                <img src={TxnCountImg} alt="number-of-blocks-img"/>
                <div className="">
                  <p className="text-white text-opacity-50 text-xs md:text-sm pb-1">Total</p>
                  <p className="text-white font-medium text-xs md:text-sm">{formatNumberWithCommas(45455652)}</p>
                </div>
              </div>
              <div>
              <p className="text-white text-opacity-50 text-xs md:text-sm pb-1">Yesterday</p>
              <p className="text-white font-medium text-xs md:text-sm">{"+"+formatNumberWithCommas(55652)}</p>
              </div>
             </div>
            </div>

            <div className="reusable-box px-3 md:px-6 py-4 ">
             <p className="text-white text-opacity-50 font-medium text-sm md:text-md pb-3">Transfer Volume</p>
             <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center space-x-2 md:space-x-4">
                <img src={TransferVolumeImg} alt="number-of-blocks-img"/>
                <div className="">
                  <p className="text-white text-opacity-50 text-xs md:text-sm pb-1">Total</p>
                  <p className="text-white font-medium text-xs md:text-sm ">{formatNumberWithCommas(45455652)} POX</p>
                  <p className="text-white font-medium text-opacity-70 text-xs md:text-sm">= ${formatNumberWithCommas(45452)}</p>
                </div>
              </div>
              <div>
              <p className="text-white text-opacity-50 text-xs md:text-sm pb-1">Yesterday</p>
              <p className="text-white font-medium text-xs md:text-sm">{formatNumberWithCommas(55652)} POX</p>
              <p className="text-white font-medium text-opacity-70 text-xs md:text-sm">= ${formatNumberWithCommas(45452)}</p>
              </div>
             </div>
            </div>

            <div className="reusable-box px-6 py-4 ">
            <p className="text-center text-white font-bold text-xl">Banner</p>
            </div>
        </div>

    {/* Tranasctions */}
    <div className="overflow-x-auto pb-6">
      <Transaction />
      </div>
      </div>
  )
}

export default Transfers;