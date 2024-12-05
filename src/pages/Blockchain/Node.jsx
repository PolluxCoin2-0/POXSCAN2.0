import Search from "../../components/Search"
import Nodes from "../../assets/Nodes.svg";
import Regions from "../../assets/Regions.svg";
import Globe from "../../components/Blockchain/Globe";

const Node = () => {
  return (
    <div>
        <p className="text-white text-xl font-medium py-6">Nodes</p>
        <div className="grid grid-cols-1 md:grid-cols-[30%_70%] gap-6">
            <div className="bg-gradient-to-r from-[#071C00] via-black to-black flex flex-row items-center justify-between gap-4 border-[1px] rounded-xl border-[#434343] px-2 md:px-6 py-2">
                <div className="flex flex-row items-center space-x-4">
                    <img src={Nodes} alt="nodes-img" className="w-8 h-8"/>
                    <div>
                        <p className="text-white text-opacity-70 text-sm">Nodes</p>
                        <p className="text-white font-semibold text-base">83</p>
                    </div>
                </div>

                <div className="flex flex-row items-center space-x-4">
                    <img src={Regions} alt="nodes-img" className="w-8 h-8"/>
                    <div>
                        <p className="text-white text-opacity-70 text-sm whitespace-nowrap">Countries/ Regions</p>
                        <p className="text-white font-semibold text-base">83</p>
                    </div>
                </div>
            </div>
            <Search/>
        </div>

        <p className="text-white text-xl font-medium py-6">
            Distribution
        </p>

        <div className="bg-[#151515] border-[1px] border-[#434343] rounded-3xl px-6 py-5 my-3 shadow-lg">
            <Globe/>
        </div>
    </div>
  )
}

export default Node