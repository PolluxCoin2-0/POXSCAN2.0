import { toast } from "react-toastify";

const PolluxEvmAddress = () => {
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
        <p className="text-white/80 mb-2 font-semibold text-lg">Pox Address</p>
        <textarea
          name="polluxevmaddress"
          id="polluxevmaddress1"
          rows={10}
          className="w-full resize-none bg-[#151515] outline-none text-white border border-[#434343] rounded-xl px-6 py-4"
          placeholder="Enter one or more POLLUX addresses with each address on a separate line, starting with the letter 'P'"
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
        {/* Convert Button - Forward */}
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

        {/* Convert Button - Backward */}
        <div className="inline-flex items-center space-x-2 bg-[#CDCFCC] rounded-xl px-6 py-2 font-semibold hover:scale-105 transition-transform duration-300 ease-in-out">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="black"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
          </svg>
          <button className="text-black">Convert</button>
        </div>

        {/* Reset Button */}
        <button className="bg-[#D4FFBF] text-black rounded-xl px-12 py-2 font-semibold hover:scale-105 transition-transform duration-300 ease-in-out">
          Reset
        </button>
      </div>

      {/* Right Section */}
      <div className="flex-1 relative">
        <p className="text-white/80 mb-2 font-semibold text-lg">Ethereum Virtual Machine (EVM) Address</p>
        <textarea
          name="polluxevmaddress"
          id="polluxevmaddress2"
          rows={10}
          className="w-full resize-none bg-[#151515] outline-none text-white border border-[#434343] rounded-xl px-6 py-4"
          placeholder="Enter one or more POLLUX addresses with each address on a separate line, starting with the letter 'P'"
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

export default PolluxEvmAddress;
