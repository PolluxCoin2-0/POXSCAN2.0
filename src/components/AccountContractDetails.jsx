import Search from "./Search";

const AccountContractDetails = () => {
  return (
    <div className="text-white ">

      {/* Search */}
      <div className="py-6">
        <Search />
      </div>

  {/* Account */}
      <div className="pb-6">
        <p className="pb-4 text-xl font-medium">Account</p>
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row justify-center items-center space-x-4">
            <div className="flex flex-row items-center space-x-4 border-[1px] border-[#434343] rounded-xl py-2 px-2">
              <p className="text-base text-white font-medium ">PHDBDNMJdfbmfdnvjkdshfjjhfksfbsjhkdhfjkashfgjkasdfhdjgg</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#37DD00" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
              </svg>
           </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.0} stroke="#37DD00" className="size-9 border-[1px] border-[#434343] rounded-xl p-1 cursor-pointer">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z" />
            </svg>
            </div>

        <div className="flex flex-row items-center space-x-16">
          <div>
            <p className="text-white pb-1 text-sm">Recent Activity (UTC)</p>
            <p className="text-white font-medium text-sm">2024-11-26T03:20:45.556Z</p>
          </div>

          <div>
            <p className="text-white pb-1 text-sm text-end">Created on (UTC)</p>
            <p className="text-white font-medium text-sm text-end"> 2024-11-26T03:20:45.556Z</p>
          </div>
          </div>
        </div>
      </div>
      </div>
  )
}

export default AccountContractDetails;