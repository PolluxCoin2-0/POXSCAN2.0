import { Link } from "react-router-dom";
import AnimatedCube from "../components/AnimatedCube";

const Transaction = () => {
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

    {/* Table Section */}
    <div className="bg-[#151515] border border-[#434343] rounded-3xl py-6 px-4 w-full min-w-[1000px]"
      style={{
        background: "radial-gradient(at center, #0F180F, #0F0F0F)", // Radial gradient from the center
      }}>
      {/* Table Header */}
      <div className="grid grid-cols-8 gap-4 text-sm font-semibold text-[#A3A3A3] bg-[#222222] rounded-xl px-4 py-3">
        <p className="text-left">Block</p>
        <p className="text-center">Hash</p>
        <p className="text-center">Time</p>
        <p className="text-center">Type</p>
        <p className="text-center">From</p>
        <p className="text-center">To</p>
        <p className="text-center">Token</p>
        <p className="text-center">Result</p>
      </div>

      {/* Transactions Rows */}
      <div className="mt-4 space-y-3">
        {transactions.map((txn, index) => (
          <div
            key={index}
            className="grid grid-cols-8 gap-4 text-sm text-white bg-opacity-85 p-4 rounded-xl hover:shadow-lg hover:bg-[#222222] transition-all"
          >
            <div className="flex items-center gap-4">
              <AnimatedCube />
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
            <p
              className={`font-semibold text-center ${
                txn.result === "Success" ? "text-green-500" : "text-red-500"
              }`}
            >
              {txn.result}
            </p>
          </div>
        ))}
      </div>
    </div>
  </>
);
};

export default Transaction;
