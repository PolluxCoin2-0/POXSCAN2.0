import Search from "./Search";

const AccountDetails = () => {
  return (
    <div className="text-white ">

      {/* Search */}
      <div className="py-6">
        <Search />
      </div>


      {/*  */}
      <div>
        <p>Account</p>

        <div className="">
          <div>
            
          </div>

          <div>
            <p className="text-white">Recent Activity (UTC)</p>
            <p className="text-white font-medium">2024-11-26T03:20:45.556Z</p>
          </div>

          <div>
            <p className="text-white ">Created on (UTC)</p>
            <p className="text-white font-medium"> 2024-11-26T03:20:45.556Z</p>
          </div>
        </div>
      </div>
      </div>
  )
}

export default AccountDetails;