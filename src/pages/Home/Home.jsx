import Search from "../../components/Search";
import PoxLogo from "../../assets/PoxLogo.svg";
import SulLogo from "../../assets/SulLogo.svg";
import UsdxLogo from "../../assets/UsdxLogo.svg";
import UviLogo from "../../assets/UviLogo.svg";

const Home = () => {
  return (
    <div className="min-h-screen text-white mt-12">
      <div className="flex flex-col items-center">
        <p className="text-white font-bold text-5xl text-center pb-6">
          Explore Pox Blockchain
        </p>
        {/* Search */}
        <div className="flex flex-row items-center space-x-4 w-[45%] mr-12">
          <div className="bg-[#151515] border-[1px] border-[#434343] rounded-full w-auto px-6 py-2">
            <p className="text-[#FFFFFF] opacity-70 whitespace-nowrap">
              Total Block
            </p>
            <p className="font-medium text-center">2.23B</p>
          </div>
          <Search />
        </div>

        {/* Treanding Search div */}
        <div className="flex flex-row justify-center items-center space-x-4 my-6 text-lg">
          <p>Trending Search:</p>
          <div className="flex items-center space-x-2"><img src={PoxLogo} alt="pox-logo" className="w-9 h-9 "/><p>POX</p></div>
          <div className="flex items-center space-x-2"><img src={UsdxLogo} alt="usdx-logo" className="w-8 h-8"/><p>USDX</p></div>
          <div className="flex items-center space-x-2"><img src={UviLogo} alt="uvil-logo" className="w-8 h-8"/><p>UVI</p></div>
          <div className="flex items-center space-x-2"><img src={SulLogo} alt="sul-logo" className="w-8 h-8"/><p></p>SUL</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
