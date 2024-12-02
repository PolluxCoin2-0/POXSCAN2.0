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
    {/* Header Section */}
    <div className="flex flex-row items-center justify-start space-x-5 px-0 md:px-6 md:justify-between md:space-x-0 py-4 min-w-[600px]">
      <h1 className="text-2xl font-bold text-white">Transactions</h1>
      <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
        <span className="text-sm font-medium text-[#37DD00]">View More</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#37DD00"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
    </div>

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
              <p>{txn.block}</p>
            </div>
            <p className="truncate text-center text-[#B3B3B3] cursor-pointer">
              {`${txn.hash.slice(0, 10)}...${txn.hash.slice(-10)}`}
            </p>
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
