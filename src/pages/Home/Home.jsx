import Search from "../../components/Search"

const Home = () => {
  return (
    <div className="min-h-screen text-white mt-12">
      <div className="flex flex-col items-center">
        <p>Explore pox Blockchain</p>
        {/* Search */}
        <div className="flex flex-row items-center space-x-6">
          <div className="bg-[#151515] border-2 border-[#434343] rounded-3xl">
          <p className="text-[#FFFFFF] opacity-70">Total Block</p>
          <p className="font-medium text-center">2.23B</p>
          </div>
          <Search/>
        </div>
      </div>
    </div>
  )
}

export default Home