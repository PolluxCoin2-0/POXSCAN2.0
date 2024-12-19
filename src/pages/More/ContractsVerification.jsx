import Search from "../../components/Search"
import ContractsVerificationImg from "../../assets/ContractsVerification.svg";
const ContractsVerification = () => {
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
       <img src={ContractsVerificationImg} alt="broadcasttransaction-img" className="w-[6%]" />
       <div>
         <p className="text-white/80 font-medium pb-4 text-lg">Contracts Verification</p>
         <ul className="list-disc">
         <li className="text-white/80 pb-4">Contract verification is the matching of the smart contract code you write with the smart contract code posted on the blockchain network to check the authenticity and transparency of the smart 
         contract.You can validate your smart contract on Polluxcoin by uploading the smart contract file.</li>

         <li className="text-white/80 pb-4">Contract verification is the matching of the smart contract code you write with the smart contract code posted on the blockchain network to check the authenticity and transparency of the smart 
         contract.You can validate your smart contract on Polluxcoin by uploading the smart contract file.</li>

         <li className="text-white/80">Contract verification is the matching of the smart contract code you write with the smart contract code posted on the blockchain network to check the authenticity and transparency of the smart 
         contract.You can validate your smart contract on Polluxcoin by uploading the smart contract file.</li>
         </ul>
       </div>
   </div>

   <div className="bg-[#151515] border-[1px] border-[#434343] rounded-3xl px-6 py-4 mb-8">
      <p className="text-white/80 font-bold text-lg px-6">Contracts Verification</p>

      <div className="flex flex-row items-start justify-between text-white/80 space-x-8 bg-[#151515] p-6 rounded-lg shadow-md">
  {/* Left Column */}
  <div className="flex flex-col space-y-8 grow">
    <div>
      <p className="mb-2 text-base font-medium">Contract Address</p>
      <input
        type="text"
        className="w-full px-4 py-2 border border-[#434343] bg-transparent rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:ring-1 focus:border-none focus:ring-[#36881C]"
        placeholder="Enter token name"
      />
    </div>
    <div>
      <p className="mb-2 text-base font-medium">Compiler</p>
      <input
        type="text"
        className="w-full px-4 py-2 border border-[#434343] bg-transparent rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:ring-1 focus:border-none focus:ring-[#36881C]"
        placeholder="Enter token name"
      />
    </div>
    <div>
      <p className="mb-2 text-base font-medium">Optimization</p>
      <input
        type="text"
        className="w-full px-4 py-2 border border-[#434343] bg-transparent rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:ring-1 focus:border-none focus:ring-[#36881C]"
        placeholder="Enter token name"
      />
    </div>
  </div>

  {/* Right Column */}
  <div className="flex flex-col space-y-8 grow">
    <div>
      <p className="mb-2 text-base font-medium">Contract Name</p>
      <input
        type="text"
        className="w-full px-4 py-2 border border-[#434343] bg-transparent rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:ring-1 focus:border-none focus:ring-[#36881C]"
        placeholder="Enter token name"
      />
    </div>
    <div>
      <p className="mb-2 text-base font-medium">License</p>
      <input
        type="text"
        className="w-full px-4 py-2 border border-[#434343] bg-transparent rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:ring-1 focus:border-none focus:ring-[#36881C]"
        placeholder="Enter token name"
      />
    </div>
    <div>
      <p className="mb-2 text-base font-medium">Runs</p>
      <input
        type="text"
        className="w-full px-4 py-2 border border-[#434343] bg-transparent rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:ring-1 focus:border-none focus:ring-[#36881C]"
        placeholder="Enter token name"
      />
    </div>
  </div>
      </div>
      <div className="flex flex-row items-center justify-center py-2">
      <div className="flex flex-row items-center space-x-8">
      <div className="flex flex-row items-center justify-center space-x-6 w-48
      space-y-2 px-4 py-2 border-2 border-dashed border-gray-500 rounded-lg cursor-pointer hover:bg-gray-700/50 hover:border-gray-400 transition-all" 
     onClick={() => document.getElementById("fileInput").click()}
>
  {/* Icon */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2.5}
    stroke="currentColor"
    className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
    />
  </svg>

  {/* Text */}
  <p className="text-base font-medium text-gray-300 group-hover:text-white transition-colors">
    Choose File
  </p>

  {/* Hidden Input */}
  <input
    type="file"
    id="fileInput"
    className="hidden"
    onChange={(e) => console.log(e.target.files)} // Handle file selection here
  />
</div>

        <button className="rounded-xl bg-[#37DD00] py-3 px-6 font-semibold hover:scale-105 transition-all delay-100 ease-in-out">Deploy and Publish</button>
      </div>
      </div>
      </div>
    </div>
  )
}

export default ContractsVerification