
const VotesTable = () => {
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
            <button className="bg-white/10 rounded-lg px-4 py-1 font-semibold text-base text-white/70">Cancel</button>
        </div>
      </div>
      </div>

      {/* TABLE HEADER and TABLE DATA */}
      
    </div>
  )
}

export default VotesTable