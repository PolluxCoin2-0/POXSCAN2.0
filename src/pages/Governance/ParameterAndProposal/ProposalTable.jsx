import { useState } from "react";
import { Link } from "react-router-dom";

const ProposalTable = () => {
  const [showModal, setShowModal] = useState(false);

      // Dummy data for transactions
      const transactions = [
        {
          block: "12345789",
          hash: "7f9b3e8e2f604110f3c2c42d756d21ead7b227b7536c9ff973792898c8463f9d",
          time: "12:34 PM",
          type: "Transfer",
          from: "0xUser1",
          to: "0xUser2",
          token: "ETH",
          result: "Success",
        },
        {
          block: "12346789",
          hash: "7f9b3e8e2f604110f3c2c42d756d21ead7b227b7536c9ff973792898c8463f9d",
          time: "1:45 PM",
          type: "Swap",
          from: "0xUser3",
          to: "0xUser4",
          token: "USDT",
          result: "Failed",
        },
        {
          block: "12346789",
          hash: "7f9b3e8e2f604110f3c2c42d756d21ead7b227b7536c9ff973792898c8463f9d",
          time: "1:45 PM",
          type: "Swap",
          from: "0xUser3",
          to: "0xUser4",
          token: "USDT",
          result: "Failed",
        },
        {
          block: "12346789",
          hash: "7f9b3e8e2f604110f3c2c42d756d21ead7b227b7536c9ff973792898c8463f9d",
          time: "1:45 PM",
          type: "Swap",
          from: "0xUser3",
          to: "0xUser4",
          token: "USDT",
          result: "Success",
        },
        {
          block: "12346789",
          hash: "7f9b3e8e2f604110f3c2c42d756d21ead7b227b7536c9ff973792898c8463f9d",
          time: "1:45 PM",
          type: "Swap",
          from: "0xUser3",
          to: "0xUser4",
          token: "USDT",
          result: "Failed",
        },
        {
          block: "12346789",
          hash: "7f9b3e8e2f604110f3c2c42d756d21ead7b227b7536c9ff973792898c8463f9d",
          time: "1:45 PM",
          type: "Swap",
          from: "0xUser3",
          to: "0xUser4",
          token: "USDT",
          result: "Success",
        },
        {
          block: "12346789",
          hash: "7f9b3e8e2f604110f3c2c42d756d21ead7b227b7536c9ff973792898c8463f9d",
          time: "1:45 PM",
          type: "Swap",
          from: "0xUser3",
          to: "0xUser4",
          token: "USDT",
          result: "Failed",
        },
        {
          block: "12346789",
          hash: "7f9b3e8e2f604110f3c2c42d756d21ead7b227b7536c9ff973792898c8463f9d",
          time: "1:45 PM",
          type: "Swap",
          from: "0xUser3",
          to: "0xUser4",
          token: "USDT",
          result: "Success",
        },
        {
          block: "12346789",
          hash: "7f9b3e8e2f604110f3c2c42d756d21ead7b227b7536c9ff973792898c8463f9d",
          time: "1:45 PM",
          type: "Swap",
          from: "0xUser3",
          to: "0xUser4",
          token: "USDT",
          result: "Failed",
        },
      ];
  
  return (
      <>     
    <div className="relative bg-[#151515] border-[1px] border-[#434343] rounded-3xl px-6 py-5 my-3 shadow-lg">
    {showModal&& 
    <div className="absolute inset-0 flex items-center justify-center backdrop-blur-sm rounded-3xl z-50 m-1">
      <ShowCommitteeProposalModal setShowModal={setShowModal}/>
      </div>
      }
      {/* Table Header */}
      <div className="grid grid-cols-7 gap-4 text-sm font-semibold text-[#A3A3A3] bg-[#222222] rounded-xl px-4 py-3">
        <p className="text-left">Number</p>
        <p className="text-center">Content</p>
        <p className="text-center">Proposer</p>
        <p className="text-center">Created / Expire on (Local)</p>
        <p className="text-center">Status</p>
        <p className="text-center">Upvotes / Total Votes</p>
        <p className="text-center">Operation</p>
      </div>

       {/* Votes Rows */}
       <div className="mt-4 space-y-2">
        {transactions.map((txn, index) => (
          <div
            key={index}
            className="grid grid-cols-7 text-sm text-white bg-opacity-85 p-4 rounded-3xl hover:shadow-lg hover:bg-[#222222] transition-all"
          >
            <div className="flex items-center gap-4">
              <Link to="/blockchain/block/blockdetails">{txn.block}</Link>
            </div>
            <Link to="/transactiondetails" className="truncate text-center text-[#B3B3B3] cursor-pointer">
              {`${txn.hash.slice(0, 10)}...${txn.hash.slice(-10)}`}
            </Link>
            <p className="text-center text-white text-opacity-70">{txn.time}</p>
            <p className="text-center">{txn.type}</p>
            <p className="truncate text-center">{txn.from}</p>
            <p className="truncate text-center">{txn.to}</p>
            <p className="text-center whitespace-nowrap cursor-pointer"
             onClick={() => setShowModal((prev) => !prev)}
            >View Details Committee Proposals</p>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default ProposalTable;


const ShowCommitteeProposalModal = ({ setShowModal }) => {
  return (
    <div className="border border-[#434343] rounded-3xl bg-[#151515] py-6 px-8 mx-auto max-w-4xl">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-6">
        <p className="font-semibold text-lg text-white">Committee Proposals</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3}
          stroke="white"
          className="w-6 h-6 cursor-pointer"
          onClick={() => setShowModal((prev) => !prev)}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>

      {/* Proposal Status */}
      <div className="flex items-center space-x-6 mb-6">
        <p className="font-medium text-white">#32 Proposal</p>
        <p className="text-[#161915] bg-[#37DD00] px-4 py-1 font-semibold rounded-lg text-sm">
          EXECUTED
        </p>
      </div>

      {/* Divider */}
      <div className="h-[1px] bg-[#434343] mb-6"></div>

      {/* Proposal Details */}
      <div className="space-y-4 text-white">
        <DetailRow title="Proposal Content:" value="The fee for updating account permission" />
        <DetailRow
          title="Proposal Address:"
          value="PDCMLsp9vSdK3YwP2ZUZELfvxN6uDsS8Db"
          isOverflow
        />
        <DetailRow title="Proposal Value:" value="1" />
        <DetailRow title="Expiration Time:" value="5 days ago" />
        <DetailRow title="Create Time:" value="5 days ago" />
        <DetailRow
          title="Approvals:"
          value="PBfYdDPqDtVijmtUwsu7PTw5gpHihY3skg,PDCMLsp9vSdK3YwP2ZUZELfvxN6....."
          isOverflow
        />
        <DetailRow title="State:" value="APPROVED" />
        <DetailRow title="Upvotes:" value="19" />
      </div>
    </div>
  );
};

/** Helper Component for a Detail Row */
const DetailRow = ({ title, value, isOverflow }) => {
  return (
    <div className="flex items-center justify-between">
      <p className="font-medium text-base">{title}</p>
      <p
        className={`font-medium text-base ${
          isOverflow ? "truncate overflow-auto" : ""
        }`}
      >
        {value}
      </p>
    </div>
  );
};
