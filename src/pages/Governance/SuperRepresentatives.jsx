import Search from "../../components/Search";
import VoteImg from "../../assets/Vote.svg";
import SuperRepresentaativesImg from "../../assets/SuperRepresentative.svg";
import BlocksProducedImg from "../../assets/BlocksProduced.svg";
import { formatNumberWithCommas } from "../../utils/formatNumberWithCommas";
import Transaction from "../../components/Transaction";
import { useState } from "react";

const SuperRepresentatives = () => {
  const [selectedTab, setSelectedTab] = useState("Super Representatives");

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div>
      {/* Search */}
      <div className="w-full flex items-center justify-center">
        <div className="w-full max-w-4xl">
          <Search />
        </div>
      </div>

      {/* Blocks */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10 mb-6">
        <div className="reusable-box px-6 py-4">
          <p className="text-white text-opacity-50 font-medium text-sm pb-3">
            Vote
          </p>
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center space-x-4">
              <img src={VoteImg} alt="vote-img" />
              <div>
                <p className="text-white text-opacity-50 text-sm pb-1">
                  Total (Real Time)
                </p>
                <p className="text-white font-medium">
                  {formatNumberWithCommas(45455652)}
                </p>
              </div>
            </div>
            <div>
              <p className="text-white text-opacity-50 text-sm pb-1">
                Next Round
              </p>
              <p className="text-white font-medium">
                {"+" + formatNumberWithCommas(55652)}
              </p>
            </div>
          </div>
        </div>

        <div className="reusable-box px-6 py-4">
          <p className="text-white text-opacity-50 font-medium text-sm pb-3">
            Super Representatives
          </p>
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center space-x-4">
              <img
                src={SuperRepresentaativesImg}
                alt="super-respresentative-img"
              />
              <div>
                <p className="text-white text-opacity-50 text-sm pb-1">Total</p>
                <p className="text-white font-medium">
                  {formatNumberWithCommas(45455652)}
                </p>
              </div>
            </div>
            <div>
              <p className="text-white text-opacity-50 text-sm pb-1">
                Last 30D
              </p>
              <p className="text-white font-medium">
                {formatNumberWithCommas(55652)}
              </p>
            </div>
          </div>
        </div>

        <div className="reusable-box px-6 py-4">
          <p className="text-white text-opacity-50 font-medium text-sm pb-3">
            Blocks Produced
          </p>
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center space-x-4">
              <img src={BlocksProducedImg} alt="active-accounts-img" />
              <div>
                <p className="text-white text-opacity-50 text-sm pb-1">
                  Max. Sendbox
                </p>
                <p className="text-white font-medium">
                  {formatNumberWithCommas(45455652)}
                </p>
              </div>
            </div>
            <div>
              <p className="text-white text-opacity-50 text-sm pb-1">
                Min. FastPOX
              </p>
              <p className="text-white font-medium">
                {formatNumberWithCommas(55652)}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ParaGraph */}
      <div
        className="rounded-3xl py-4 px-9 my-0"
        style={{
          background:
            "linear-gradient(90deg, #090909 -13.43%, #124202 65.03%, #080808 112.34%)",
        }}
      >
        <ul className="list-disc text-white text-opacity-50">
          <li className="leading-loose">
            On the POLLUX network, all POX holders can apply to be SR candidates
            and have the chance to become SRs or SR partners.
          </li>

          <li className="leading-loose">
            Any POX holder can vote for SR candidates, among which the top 27
            most-voted candidates will become SRs, while the 28th to 127th will
            become SR partners.
          </li>

          <li>
            SRs are responsible for producing blocks and packing transactions,
            for which they receive voting rewards and block rewards; SR
            partners, on the other hand, only receive voting rewards without
            performing the aforementioned two tasks.
          </li>

          <li className="leading-loose">
            All SR candidates, SR partners and SRs have the right to initiate
            proposals to modify parameters on the POLLUX network.
          </li>
        </ul>
      </div>

      {/* Transactions */}
      <div className="pb-6">
        <div className="min-w-[600px] py-6">
          <div className="flex justify-between items-center gap-5">
            <h1 className="text-xl font-bold text-white">Transactions</h1>
            <div className="flex flex-row space-x-4">
              {["Super Representatives", "SR Partners", "SR Candidates"].map(
                (tab) => (
                  <button
                    key={tab}
                    onClick={() => handleTabChange(tab)}
                    className={`text-sm font-semibold px-6 py-[9px] rounded-lg cursor-pointer hover:opacity-80 transition-opacity ${
                      selectedTab === tab
                        ? "text-black bg-[#37DD00]"
                        : "text-white text-opacity-30 bg-[#0A2301]"
                    }`}
                  >
                    {tab}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
        <div>
          <div className="overflow-x-auto">
            <Transaction tab={selectedTab} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperRepresentatives;
