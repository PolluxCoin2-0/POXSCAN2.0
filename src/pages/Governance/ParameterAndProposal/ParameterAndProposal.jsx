import { useState } from "react";
import Search from "../../../components/Search"
import ParameterTable from "./ParameterTable";
import ProposalTable from "./ProposalTable";

const ParameterAndProposal = () => {
  const [changedParameterToProposalComponent, setChangedParameterToProposalComponent] = useState(true);
  
  const togglechangedOverViewEventComponent = (isOverview) => {
    setChangedParameterToProposalComponent(isOverview);
  };
  return (
    <div className="text-white">
  {/* Search */}
  <div className="w-full flex items-center justify-center">
        <div className="w-full max-w-4xl">
          <Search />
        </div>
      </div>

       {/* ParaGraph */}
       <div
        className="rounded-3xl py-4 px-9 my-6"
        style={{
          background:
            "linear-gradient(90deg, #090909 -13.43%, #124202 65.03%, #080808 112.34%)",
        }}
      >
        <p className="text-xl font-medium pb-2">Parameters & Proposals</p>
        <p className="pb-4">The committee is made up of 27 super representatives (SRs) who are responsible for modifying
           dynamic parameters such as block rewards and transaction fees on the network.</p>
        <ul className="list-disc text-white text-opacity-50">
          <li className="pb-1">
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

      <div className="">
        <div className="flex flex-row items-center space-x-6 pb-2">
        <button
          onClick={() => togglechangedOverViewEventComponent(true)}
          className={`text-sm font-semibold px-6 py-[9px] rounded-lg ${
            changedParameterToProposalComponent
              ? "text-black bg-[#37DD00]"
              : "text-white text-opacity-30 bg-[#0A2301]"
          }`}
        >
          Network Parameters
        </button>
        <button
          onClick={() => togglechangedOverViewEventComponent(false)}
          className={`text-sm font-semibold px-6 py-[9px] rounded-lg ${
            !changedParameterToProposalComponent
              ? "text-black bg-[#37DD00]"
              : "text-white text-opacity-30 bg-[#0A2301]"
          }`}
        >
         Committee Proposals
        </button>
        </div>
      </div>

      {
        changedParameterToProposalComponent ? <ParameterTable/> : <ProposalTable/>
      }
      </div>
  )
}

export default ParameterAndProposal