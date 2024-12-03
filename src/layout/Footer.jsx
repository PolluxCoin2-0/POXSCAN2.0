import PoxLogo from "../assets/NavLogo.svg";
import Discord from "../assets/Discord.svg";
import Twitter from "../assets/Twitter.svg";
import Telegram from "../assets/Telegram.svg";
import Instagram from "../assets/Instagram.svg";

const Footer = () => {
  return (
    <footer className="bg-[#151515] text-white py-10 px-4 lg:px-8 xl:px-28 2xl:px-52">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-opacity-75">
        {/* Logo and Social Media */}
        <div>
          <img src={PoxLogo} alt="poxscan-logo" className="w-32 mb-4" />
          <p className="text-sm mb-4">Follow Us on Social Media:</p>
          <div className="flex items-center space-x-4">
            <img
              src={Discord}
              alt="discord-logo"
              className="w-10 h-10 cursor-pointer hover:scale-110 transform transition duration-200"
            />
            <img
              src={Twitter}
              alt="twitter-logo"
              className="w-10 h-10 cursor-pointer hover:scale-110 transform transition duration-200"
            />
            <img
              src={Telegram}
              alt="telegram-logo"
              className="w-10 h-10 cursor-pointer hover:scale-110 transform transition duration-200"
            />
            <img
              src={Instagram}
              alt="instagram-logo"
              className="w-10 h-10 cursor-pointer hover:scale-110 transform transition duration-200"
            />
          </div>
          <p className="text-xs mt-6">Copyright © 2024 Polluxcoin</p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Polluxcoin Explorer</h3>
          <ul className="space-y-2">
            <li className="hover:text-gray-300 cursor-pointer">Polluxcoin Network</li>
            <li className="hover:text-gray-300 cursor-pointer">Wallet</li>
            <li className="hover:text-gray-300 cursor-pointer">Extension</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Developer</h3>
          <ul className="space-y-2">
            <li className="hover:text-gray-300 cursor-pointer">Developer Hub</li>
            <li className="hover:text-gray-300 cursor-pointer">Github</li>
            <li className="hover:text-gray-300 cursor-pointer">Java-pox</li>
            <li className="hover:text-gray-300 cursor-pointer">Github Docs</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <ul className="space-y-2">
            <li className="hover:text-gray-300 cursor-pointer">Privacy Policy</li>
            <li className="hover:text-gray-300 cursor-pointer">Terms of Service</li>
          </ul>
        </div>

        <div className="">
          <h3 className="text-lg font-semibold mb-4">Support & Help</h3>
          <ul className="space-y-2">
            <li className="hover:text-gray-300 cursor-pointer">Support Center</li>
            <li className="hover:text-gray-300 cursor-pointer">Contact Us</li>
            <li className="hover:text-gray-300 cursor-pointer">Advertise</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
