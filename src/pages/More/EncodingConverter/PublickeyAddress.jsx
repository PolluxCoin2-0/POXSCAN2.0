import { toast } from "react-toastify";

const PublickeyAddress = () => {
  const copyToClipboard = (id) => {
    const textarea = document.getElementById(id);
    if (textarea) {
      textarea.select();
      document.execCommand("copy");
      toast.success("Copied to clipboard!");
    }
  };

  return (
    <div className="bg-[#151515] border border-[#434343] rounded-3xl px-8 py-6 flex flex-col lg:flex-row items-center justify-evenly gap-8 mt-2 mb-8">
      {/* Left Section */}
      <div className="flex-1 relative">
        <p className="text-white/80 mb-2 font-semibold text-lg pb-4">Public Key</p>
        <textarea
          name="polluxevmaddress"
          id="polluxevmaddress1"
          rows={10}
          className="w-full resize-none bg-[#151515] outline-none text-white border border-[#434343] rounded-xl px-6 py-4"
          placeholder="Enter one or more hexadecimal strings with each string on a separate line."
        ></textarea>
        <button
          onClick={() => copyToClipboard("polluxevmaddress1")}
          className="absolute bottom-4 right-4 bg-transparent text-white/50 rounded-lg px-4 py-1 font-semibold"
        >
          Copy
        </button>
      </div>

      {/* Buttons Section */}
      <div className="flex flex-col items-center space-y-4">

        {/* Convert Button - Backward */}
        <div className="inline-flex items-center space-x-2 bg-[#CDCFCC] rounded-xl px-6 py-2 font-semibold hover:scale-105 transition-transform duration-300 ease-in-out">
          <button className="text-black">Convert</button>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="black"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>
        </div>

        {/* Reset Button */}
        <button className="bg-[#D4FFBF] text-black rounded-xl px-12 py-2 font-semibold hover:scale-105 transition-transform duration-300 ease-in-out">
          Reset
        </button>
      </div>

      {/* Right Section */}
      <div className="flex-1 relative">
       <div className="flex flex-row items-center space-x-4 pb-4">
        <button className="bg-white/80 text-black font-semibold px-4 py-2 rounded-xl">
        Address (Base58Check)
        </button>

        <button className="bg-white/80 text-black font-semibold px-4 py-2 rounded-xl">
        Address (EVM)
        </button>

        <button className="bg-white/80 text-black font-semibold px-4 py-2 rounded-xl">
        Address (Hex String)(0)
        </button>
       </div>
        <textarea
          name="polluxevmaddress"
          id="polluxevmaddress2"
          rows={10}
          className="w-full resize-none bg-[#151515] outline-none text-white border border-[#434343] rounded-xl px-6 py-4"
          placeholder="Default encoding format of POX addresses."
        ></textarea>
        <button
          onClick={() => copyToClipboard("polluxevmaddress2")}
          className="absolute bottom-4 right-4 bg-transparent text-white/50 rounded-lg px-4 py-1 font-semibold"
        >
          Copy
        </button>
      </div>
    </div>
  );
};

export default PublickeyAddress;
