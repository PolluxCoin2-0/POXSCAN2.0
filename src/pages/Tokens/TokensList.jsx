import { Link } from "react-router-dom";
import SULIMG from "../../assets/SulLogo.svg";
const TokensList = () => {
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
        <p className="text-left">#</p>
        <p className="text-center">Token</p>
        <p className="text-center">Price</p>
        <p className="text-center">Change(24hr)</p>
        <p className="text-center">Volume(24hr)</p>
        <p className="text-center">Circulating Market Cap</p>
        <p className="text-center">Token Holder</p>
        <p className="text-center">Operation</p>
      </div>

      {/* Transactions Rows */}
      <div className="mt-4 space-y-3">
        {transactions.map((txn, index) => (
          <div
            key={index}
            className="grid grid-cols-8 gap-4 text-sm text-white bg-opacity-85 p-4 rounded-xl hover:shadow-lg hover:bg-[#222222] transition-all"
          >
            <div className="flex items-center gap-4">
              <Link to="/blockchain/block/blockdetails">{txn.block}</Link>
            </div>
            <Link to="/tokendetails" className="text-[#B3B3B3] cursor-pointer">
             <div className="flex flex-row items-center space-x-2">
                 <img src={SULIMG} alt="" />
                <div>
                 <p className="text-white font-medium text-base">SULAANA </p>
                 <p className="">Lorem ipsum dolor sit amet.</p>
                </div>
             </div>
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

export default TokensList;
