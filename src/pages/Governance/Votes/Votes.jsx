import Search from "../../../components/Search"
import { formatNumberWithCommas } from "../../../utils/formatNumberWithCommas"
import VotesTable from "./VotesTable"

const Votes = () => {
  return (
    <div className="text-white">
       {/* Search */}
       <div className="w-full flex items-center justify-center">
        <div className="w-full max-w-4xl">
          <Search />
        </div>
      </div>

      {/* Blocks */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10 mb-6">
        <div className="reusable-box px-6 py-4">
          <p className="text-white text-opacity-50 font-medium text-base pb-3">
          Votes
          </p>
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center space-x-4">
              <div>
                <p className="text-white text-opacity-50 text-sm pb-1">
                Real-time total votes this round
                </p>
                <p className="text-white font-medium">
                45455 (+)
                </p>
              </div>
            </div>
            <div>
              <p className="text-white text-opacity-50 text-sm pb-1">
              Most votes gained this round
              </p>
              <p className="text-white font-medium">
              SENDBOX
              </p>
            </div>
          </div>
        </div>

        <div className="reusable-box px-6 py-4">
          <div className="flex flex-row items-center space-x-6 pb-3">
          <p className="text-white text-opacity-50 font-medium text-base">
          My Account
          </p>
          <button className="bg-white text-black font-bold py-1 px-2 rounded-lg text-sm hover:bg-white/80">
            Connect Wallet
          </button>
          </div>
          <div className="flex flex-row items-center justify-between">
            <div className="">
                <p className="text-white text-opacity-50 text-sm pb-1">Available POX Balance</p>
                <p className="text-white font-medium">
                  {formatNumberWithCommas(45455652)}
                </p>
            </div>

            <div>
              <p className="text-white text-opacity-50 text-sm pb-1">
              Available Votes / Total Votes
              </p>
              <p className="text-white font-medium">
                {formatNumberWithCommas(55652)}
              </p>
            </div>

            <div>
              <p className="text-white text-opacity-50 text-sm pb-1">
              Claimable POX Rewards
              </p>
              <p className="text-white font-medium">
                {formatNumberWithCommas(55652)}
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Votes Table */}
      <VotesTable/>
    </div>
  )
}

export default Votes