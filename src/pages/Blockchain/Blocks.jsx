import Search from "../../components/Search"
import Transaction from "../../components/Transaction"
import BlocksrewardImg from "../../assets/BlocksrewardImg.svg";
import NumberOfBlocksImg from "../../assets/NumberOfBlocksImg.svg";
import StatsOnBurnedPOXImg from "../../assets/StatsOnBurnedPOXImg.svg";
import { formatNumberWithCommas } from "../../utils/formatNumberWithCommas";

const Blocks = () => {
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
             <p className="text-white text-opacity-50 font-medium text-sm pb-3">Number of Blocks</p>
             <div className="flex flex-row items-center justify-between px-2">
              <div className="flex flex-row items-center space-x-4">
                <img src={NumberOfBlocksImg} alt="number-of-blocks-img" />
                <div className="">
                  <p className="text-white text-opacity-50 text-sm pb-1">Latest</p>
                  <p className="text-white font-medium">{formatNumberWithCommas(45455652)}</p>
                </div>
              </div>
              <div>
              <p className="text-white text-opacity-50 text-sm pb-1">Last 24hr</p>
              <p className="text-white font-medium">{"+"+formatNumberWithCommas(55652)}</p>
              </div>
             </div>
            </div>

            <div className="reusable-box px-6 py-4 ">
             <p className="text-white text-opacity-50 font-medium text-sm pb-3">Blocks Reward</p>
             <div className="flex flex-row items-center justify-between px-2">
              <div className="flex flex-row items-center space-x-4">
                <img src={BlocksrewardImg} alt="number-of-blocks-img" />
                <div className="">
                  <p className="text-white text-opacity-50 text-sm pb-1">Total</p>
                  <p className="text-white font-medium ">{formatNumberWithCommas(45455652)} POX</p>
                  <p className="text-white font-medium text-opacity-70">= ${formatNumberWithCommas(45452)}</p>
                </div>
              </div>
              <div>
              <p className="text-white text-opacity-50 text-sm pb-1">Last 24hr</p>
              <p className="text-white font-medium">{formatNumberWithCommas(55652)} POX</p>
              <p className="text-white font-medium text-opacity-70">= ${formatNumberWithCommas(45452)}</p>
              </div>
             </div>
            </div>

            <div className="reusable-box px-6 py-4 ">
             <p className="text-white text-opacity-50 font-medium text-sm pb-3">Stats on Burned POX</p>
             <div className="flex flex-row items-center justify-between px-2">
              <div className="flex flex-row items-center space-x-4">
                <img src={StatsOnBurnedPOXImg} alt="number-of-blocks-img" />
                <div className="">
                  <p className="text-white text-opacity-50 text-sm pb-1">Total</p>
                  <p className="text-white font-medium ">{formatNumberWithCommas(45455652)} POX</p>
                  <p className="text-white font-medium text-opacity-70">= ${formatNumberWithCommas(45452)}</p>
                </div>
              </div>
              <div>
              <p className="text-white text-opacity-50 text-sm pb-1">Last 24hr</p>
              <p className="text-white font-medium">{formatNumberWithCommas(55652)} POX</p>
              <p className="text-white font-medium text-opacity-70">= ${formatNumberWithCommas(45452)}</p>
              </div>
             </div>
            </div>
        </div>

    {/* Tranasctions */}
    <div className="overflow-x-auto pb-6">
      <Transaction />
      </div>
      </div>
  )
}

export default Blocks