import Search from "../../components/Search"
import PoxStakingGovernanceImg from "../../assets/PoxStakingImg.svg";
import { formatNumberWithCommas } from "../../utils/formatNumberWithCommas";
import VoteInElections from "../../assets/VoteInElections.svg";
import SecureTheNetwork from "../../assets/SecureTheNetwork.svg";
import ShareBlockRewards from "../../assets/ShareBlockRewards.svg";
import CalculateStakingReward from "../../assets/CalculateStakingReward.svg";

const PoxStakingGovernance = () => {
  return (
    <div className="text-white">
       {/* Search */}
       <div className="w-full flex items-center justify-center">
        <div className="w-full max-w-4xl">
          <Search />
        </div>
      </div>

      {/* POX STAKING GOVERNANCE */}
      <div className="px-6 py-4 mt-8 mb-4 flex flex-row items-center justify-between border-[1px] border-[#151515] rounded-3xl shadow-xl"
      style={{
        background: 'linear-gradient(90deg, rgba(9, 9, 9, 0.18) -13.43%, rgba(18, 66, 2, 0.18) 65.03%, rgba(8, 8, 8, 0.18) 112.34%)',
      }}>
        <div>
        <p className="font-bold text-4xl pb-4">POX Staking Governance</p>
        <p className="text-[#73787B] font-medium">POX Network adopts the DPoS consensus mechanism.  POX holders can
        contribute<br /> to POX's governance while enjoying an APY of up to <span className="text-white">4.15%.</span></p>

        <div className="flex flex-row items-center space-x-4 my-6">
        <div className="flex flex-row items-center space-x-2 bg-[#37DD00] text-black font-semibold px-3 py-2 rounded-xl cursor-pointer hover:scale-105">
        <button>
        Connect Wallet
        </button>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
         <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
        </svg>
        </div>

        <div className="flex flex-row items-center space-x-2 bg-white text-black font-semibold px-3 py-2 rounded-xl cursor-pointer hover:scale-105">
        <button>
         Stake
        </button>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
        </svg>
        </div>
        </div>
        </div>

        <div>
          <img src={PoxStakingGovernanceImg} alt="pox-staking-image" />
        </div>
      </div>

      {/* TOTAL POX STAKED, POX STAKING RATE, TOTAL POX REWARDS DISTRIBUTED, HIGHEST APY */}
      <div className="rounded-3xl bg-[#124202] py-6 flex flex-row justify-between px-10 items-center mb-10">
        <div>
          <p className="text-base text-white/50 inline-block pb-[2px]">Total POX Staked</p>
          <p className="font-bold">{formatNumberWithCommas(46834947894)}</p>
        </div>

        <div>
          <p className="text-base text-white/50 inline-block pb-[2px]">POX Staking Rate</p>
          <p className="font-bold">52.61 %</p>
        </div>

        <div>
          <p className="text-base text-white/50 inline-block pb-[2px]">Total POX Rewards Distributed</p>
          <p className="font-bold">{formatNumberWithCommas(46834947894)}</p>
        </div>

        <div>
          <p className="text-base text-white/50 inline-block pb-[2px]">Highest APY</p>
          <p className="font-bold">4.31%</p>
        </div>

      </div>

      {/* GOVERNANCE MODEL */}
      <div>
        <p className="font-bold text-4xl pb-1">Governance Model</p>
        <p className="text-[#91979D]">Open, transparent, and all on-chain</p>

        <div className="rounded-3xl bg-[#151615] py-8 px-10 my-6">
          <div className="flex flex-row items-center space-x-8 pb-12">
            <div>
              <img src={VoteInElections} alt="poxstaking-image" />
            </div>
            <div>
              <p className="font-medium pb-2 text-base">Vote in Elections</p>
              <p className="text-[#91979D]">POX, the native token of POX, can be staked by its holders to obtain POX Power which isused as votes in on-chain elections. 
                The 27 most-voted candidates will be responsible for producing blocks and packing transactions as POX's witnesses.</p>
            </div>
          </div>

          <div className="flex flex-row items-center space-x-8 pb-12">
            <div>
              <img src={SecureTheNetwork} alt="securethenetwork-image" />
            </div>
            <div>
              <p className="font-medium pb-2 text-base">Secure the Network</p>
              <p className="text-[#91979D]">POX, the native token of POX, can be staked by its holders to obtain POX Power which isused as votes in on-chain elections. 
                The 27 most-voted candidates will be responsible for producing blocks and packing transactions as POX's witnesses.</p>
            </div>
          </div>

          <div className="flex flex-row items-center space-x-8">
            <div>
              <img src={ShareBlockRewards} alt="shareblockrewards-image" />
            </div>
            <div>
              <p className="font-medium pb-2 text-base">Share Block Rewards</p>
              <p className="text-[#91979D]">POX, the native token of POX, can be staked by its holders to obtain POX Power which isused as votes in on-chain elections. 
                The 27 most-voted candidates will be responsible for producing blocks and packing transactions as POX's witnesses.</p>
            </div>
          </div>
        </div>
      </div>

{/* CONTRIBUTE TO GOVERNANCE */}
      <div className="my-10">
      <p className="font-bold text-4xl pb-1">Contribute to Governance</p>
      <p className="text-[#91979D] pb-6">Get voting rewards and free resources in return</p>
      <div className="flex flex-row items-center space-x-4">
      <p>A More Flexible and Efficient Staking Mechanism </p>
      <p className="border-[1px] border-[#37DD00] bg-[#124701] text-xs rounded-xl px-3 py-1 font-medium">2.0</p>
      </div>
      <div className="my-6 grid grid-cols-3 gap-6">
        <div className="bg-[#122F09] border-[1px] border-[#434343] rounded-3xl px-6 py-8 hover:bg-gradient-to-b from-[rgba(72,254,12,0.82)] to-[rgba(15,57,1,0.82)] group hover:scale-105 transition-all duration-400 ease-in-out">
          <p className="font-medium pb-4">Get POX Power for Governance</p>
          <p className="text-[#91979D] group-hover:text-white">By staking POX, you can obtain POX Power, 
          which can be used to vote for the SRs you support and earn rewards.</p>
        </div>

        <div className="bg-[#122F09] border-[1px] border-[#434343] rounded-3xl px-6 py-8 hover:bg-gradient-to-b from-[rgba(72,254,12,0.82)] to-[rgba(15,57,1,0.82)] group hover:scale-105 transition-all duration-400 ease-in-out">
          <p className="font-medium pb-4">Get Resources for Free Transactions</p>
          <p className="text-[#91979D] group-hover:text-white">By staking POX, you can obtain free resources on the network to cover the fee of transactions.
            The resources used will dynamically recover to the original amount after a certain period</p>
        </div>

        <div className="bg-[#122F09] border-[1px] border-[#434343] rounded-3xl px-6 py-8 hover:bg-gradient-to-b from-[rgba(72,254,12,0.82)] to-[rgba(15,57,1,0.82)] group hover:scale-105 transition-all duration-400 ease-in-out">
          <p className="font-medium pb-4">Delegate Idle Resources to Others</p>
          <p className="text-[#91979D] group-hover:text-white">You may delegate idle resources to others and can reclaim the resources anytime.</p>
        </div>
      </div>
      </div>

      <div className="mb-10">
        <p className="font-semibold text-lg pb-2">Calculate Your Staking Rewards</p>
        <div className="border-[1px] border-[#434343] bg-[#151615] rounded-3xl px-6 py-4">
          <p className="pb-2">I want to stake</p>
          <div className="flex flex-row items-center justify-between">
            <div className="space-y-4">
              <div className="flex flex-row items-center space-x-8 border-[1px] border-white rounded-xl py-2 px-4 bg-gradient-to-r from-[#13300A] via-[#36881C] to-[#3B961F]">
                <input type="text" className="bg-transparent outline-none" placeholder="10000"/>
                <p>POX</p>
              </div>
              <p className="pl-1">Est. Rewards <span className="text-[#37DD00] font-bold">+1,244.181000</span></p>
            </div>

            <div>
              <img src={CalculateStakingReward} alt="calculate-staking-reward-img" />
            </div>
          </div>
          <p className="text-[#73787B] pt-8 pb-2">* The estimated POX rewards here are calculated based on the staking duration selected and the POX amount entered. The actual APY and POX rewards may vary.</p>
          <div className="flex flex-row justify-center items-center my-6">
            <div className="inline-flex flex-row items-center space-x-2 bg-white text-black rounded-xl px-12 py-2 font-semibold cursor-pointer hover:scale-105 transition-all duration-400 ease-in-out">
          <button>Stake Now</button>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PoxStakingGovernance