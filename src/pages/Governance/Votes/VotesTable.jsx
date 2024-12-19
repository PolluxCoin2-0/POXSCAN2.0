import { useState } from "react";
import { Link } from "react-router-dom";

const VotesTable = () => {
  const [showingMyVotes, setShowingMyVotes] = useState(false);

  const toggleMyVotes = () => {
    setShowingMyVotes((prev) =>!prev);
  };
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
    <div className="bg-[#151515] border-[1px] border-[#434343] rounded-3xl px-6 py-5 my-3 shadow-lg">
    <div className="grid grid-cols-2 gap-6 ">
      <div className="flex flex-row items-center space-x-6">
        <p>Only the first 41 records are displayed.</p>
        <div className="flex flex-row items-center space-x-2 border-[1px] border-[#B9BDB8]/70 rounded-3xl p-2 grow">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#B9BCB8" className="size-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
        <input 
        type="text"
        placeholder="Search by Contract Account/Name"
        className="bg-transparent placeholder:text-white/70 placeholder:text-sm w-full outline-none" />
        </div>
      </div>

      <div className="flex flex-row items-center justify-end space-x-4">
        <div className="flex flex-row items-center space-x-2">
            <p className="text-[#FF8484] font-semibold text-base">Reset</p>
            <p className="bg-white/10 px-[10px] py-[3px] rounded-lg font-semibold">?</p>
            <p className="font-semibold">Quick Vote</p>
        </div>
        <p className="text-white font-medium text-babase">Available Votes: 1200</p>
        <div className="flex flex-row items-center space-x-4">
            <button className="bg-[#114202] rounded-lg px-5 py-1 font-semibold text-base">Vote</button>
            <button className="bg-white/10 rounded-lg px-4 py-1 font-semibold text-base text-white/70"
            onClick={toggleMyVotes}
            >Cancel</button>
        </div>
      </div>
      </div>

      {/* TABLE HEADER and TABLE DATA */}
      {/* Table Header */}
      <div className="grid grid-cols-9 gap-4 text-sm font-semibold text-[#A3A3A3] bg-[#222222] rounded-xl px-4 py-3 mt-4">
        <p className="text-left">SR No</p>
        <p className="text-center">Address</p>
        <p className="text-center">Ranking</p>
        <p className="text-center">Real Time Votes</p>
        <p className="text-center">Vote Percentage</p>
        <p className="text-center">Productivity</p>
        <p className="text-center">Reward Distributed</p>
        <p className="text-center">APR</p>
        <p className="text-center">My Votes</p>
      </div>

       {/* Votes Rows */}
       <div className="mt-4 space-y-3">
        {transactions.map((txn, index) => (
          <div
            key={index}
            className="grid grid-cols-9 gap-4 text-sm text-white bg-opacity-85 p-4 rounded-xl hover:shadow-lg hover:bg-[#222222] transition-all"
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
            <p className="text-center">{txn.token}</p>
            <p className="text-center">{txn.result}</p>
            <p className={`font-semibold text-center`}>{showingMyVotes? (
              <div className="flex flex-row items-center justify-around space-x-4 -mt-[6px]">
                <p>Max</p>
               <p className="text-[#FF8484] font-bold text-2xl cursor-pointer">-</p>
               <p className="bg-white/10 px-4 py-1 rounded-lg">0</p>
               <p className="text-[#37DD00] font-bold text-2xl cursor-pointer">+</p>
              </div>
            ):0}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default VotesTable