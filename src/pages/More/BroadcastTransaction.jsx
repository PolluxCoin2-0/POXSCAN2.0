import Search from "../../components/Search"
import BroadcastTranactionImg from "../../assets/BroadcastTransaction.svg";

const BroadcastTransaction = () => {
  return (
    <div>
       {/* Search */}
       <div className="w-full flex items-center justify-center">
        <div className="w-full max-w-4xl">
          <Search />
        </div>
      </div>

      <div
        className="rounded-3xl py-8 px-9 my-6 flex flex-row items-center space-x-16"
        style={{
          background:
            "linear-gradient(90deg, #090909 -13.43%, #124202 65.03%, #080808 112.34%)",
        }}>
          <img src={BroadcastTranactionImg} alt="broadcasttransaction-img" />
          <div>
            <p className="text-white/80 font-medium pb-4 text-lg">Broadcast Transaction</p>
            <p className="text-white/80">This page allows you to paste a Signed Raw Transaction in hex format (i.e. characters 0-9, a-f) and broadcast it over the POLLUX network.</p>
          </div>
      </div>

      <div className="bg-[#151515] border-[1px] border-[#434343] rounded-3xl px-6 py-4 mb-6">
        <p className="text-white/80 font-bold text-lg pb-6">Broadcast Transaction</p>
        <p className="text-white/80 font-medium pb-4">Token Name</p>
        <textarea name="broadcastTransaction" id="broadcastTransaction" rows={10}
        className="w-full resize-none bg-[#151515] outline-none text-white border-[1px] border-[#434343] rounded-3xl px-6 py-4"
        placeholder="Enter signed transaction hex">
        </textarea>

        <div className="flex justify-center items-center mt-4">
        <button className="rounded-xl bg-[#37DD00] py-2 px-6 font-semibold hover:scale-105 transition-all delay-100 ease-in-out">Upload Transaction</button>
        </div>
      </div>
    </div>
  )
}

export default BroadcastTransaction