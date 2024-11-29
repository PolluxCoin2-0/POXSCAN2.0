import { useState } from "react";
import CompanyLogo from "../assets/NavLogo.svg";
import WhitePoxLogo from "../assets/whiteLogoPox.svg";
import { MobileNavLink } from "./MobileNavLink";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  // Toggle the dropdown or close it if it's already open
  const toggleDropdown = (index) => {
    setOpenDropdownIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const NavLink = ({ href, label, hasDropdown, dropdownItems }) => (
    <div className="relative group">
      {/* Main Link */}
      <a
        href={href}
        className="text-lg font-medium hover:text-green-500 transition-colors duration-200"
      >
        {label}
      </a>

      {/* Dropdown Menu */}
      {hasDropdown && (
        <div
          className="absolute left-0 top-6 hidden group-hover:flex flex-col bg-gray-600 bg-opacity-20 backdrop-blur-3xl text-white shadow-xl py-3
         px-4 rounded-lg border border-white/10 mt-2 whitespace-nowrap z-50"
        >
          {dropdownItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="text-sm py-2 px-4 hover:text-green-400 hover:bg-white/10 rounded-md transition-all duration-200"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="relative bg-black text-white">
      {/* Spotlight effect */}
      <div className="spotlight"></div>
      {/* For Desktop */}
      <div className=" hidden w-full lg:flex items-center justify-between py-4">
        <div className="flex items-center justify-around space-x-12">
          {/* Company Logo */}
          <img
            src={CompanyLogo}
            alt="Company Logo"
            className="h-8 w-auto cursor-pointer"
          />

          {/* Navbar Links */}
          <div className="hidden lg:flex lg:space-x-8 lg:pl-8 xl:space-x-16 ">
            <NavLink
              label="Blockchain"
              href="#"
              hasDropdown={true}
              dropdownItems={[
                { href: "#", label: "Node" },
                { href: "#", label: "Blocks" },
                { href: "#", label: "Transactions" },
                { href: "#", label: "Transfers" },
                { href: "#", label: "Accounts" },
                { href: "#", label: "Contracts" },
              ]}
            />
            <NavLink href="#" label="Tokens" />
            <NavLink
              href="#"
              label="Data"
              hasDropdown={true}
              dropdownItems={[
                { href: "#", label: "POX Supply" },
                { href: "#", label: "Rankings" },
              ]}
            />
            <NavLink
              href="#"
              label="Governance"
              hasDropdown={true}
              dropdownItems={[
                { href: "#", label: "Super Representatives" },
                { href: "#", label: "Votes" },
                { href: "#", label: "POX Staking Governance" },
                { href: "#", label: "Parameters & Proposals" },
              ]}
            />
            <NavLink
              href="#"
              label="More"
              hasDropdown={true}
              dropdownItems={[
                { href: "#", label: "Contracts Deployment" },
                { href: "#", label: "Contracts Verification" },
                { href: "#", label: "PRC20 Token Deployment" },
                { href: "#", label: "Encoding Converter" },
                { href: "#", label: "Broadcast Transaction" },
              ]}
            />
          </div>
        </div>
        <div className="flex flex-row items-center justify-end w-[30%]">
          {/* Right Actions */}
          <div className="flex items-center lg:space-x-2 xl:space-x-4">
            {/* Connect Wallet Button */}
            <button className="border-[#73E74D] border-[1px] cursor-pointer hover:bg-[#27211d] text-white py-2 px-4 rounded-3xl flex items-center space-x-2 transition-colors duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#73E74D"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"
                />
              </svg>
              <span className="text-[#73E74D] whitespace-nowrap">Connect Wallet</span>
            </button>

            {/* Notification Icon */}
            <button className="p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#73E74D"
                className="w-10 h-10 border-[#73E74D] border-2 rounded-full p-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
                />
              </svg>
            </button>

            {/* Secondary Logo */}
            <img
              src={WhitePoxLogo}
              alt="Company Logo"
              className="h-16 w-auto cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* For Mobile Screen */}
      <div className="flex flex-row justify-between items-center lg:hidden py-4">
  <img
    src={CompanyLogo}
    alt="Company Logo"
    className="h-8 w-auto cursor-pointer"
  />
  <button onClick={toggleMobileMenu} className="text-white p-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="#73E74D"
      className="w-8 h-8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
      />
    </svg>
  </button>
  {isMobileMenuOpen && (
    <div
      className="flex flex-col space-y-4 p-6 bg-[#73E74D] bg-opacity-5 text-white fixed top-16 left-0 bottom-0 w-64 transform transition-transform duration-300 ease-in-out"
      style={{ transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(-100%)' }}
    >
      <MobileNavLink
        label="Blockchain"
        hasDropdown={true}
        dropdownItems={[
          { href: "#", label: "Node" },
          { href: "#", label: "Blocks" },
          { href: "#", label: "Transactions" },
          { href: "#", label: "Transfers" },
          { href: "#", label: "Accounts" },
          { href: "#", label: "Contracts" },
        ]}
        index={0}
        isDropdownOpen={openDropdownIndex === 0} 
        toggleDropdown={() => toggleDropdown(0)} 
      />
       <MobileNavLink
        label="Tokens"
        hasDropdown={false}
        dropdownItems={[]}
        index={1}
        isDropdownOpen={openDropdownIndex === 1}
        toggleDropdown={() => toggleDropdown(1)}
      />
      <MobileNavLink
        label="Data"
        hasDropdown={true}
        dropdownItems={[
          { href: "#", label: "POX Supply" },
          { href: "#", label: "Rankings" },
        ]}
        index={2}
        isDropdownOpen={openDropdownIndex === 2}
        toggleDropdown={() => toggleDropdown(2)}
      />
      <MobileNavLink
        label="Governance"
        hasDropdown={true}
        dropdownItems={[
          { href: "#", label: "Super Representatives" },
          { href: "#", label: "Votes" },
          { href: "#", label: "POX Staking Governance" },
          { href: "#", label: "Parameters & Proposals" },
        ]}
        index={3}
        isDropdownOpen={openDropdownIndex === 3}
        toggleDropdown={() => toggleDropdown(3)}
      />
      <MobileNavLink
        label="More"
        hasDropdown={true}
        dropdownItems={[
          { href: "#", label: "Contracts Deployment" },
          { href: "#", label: "Contracts Verification" },
          { href: "#", label: "PRC20 Token Deployment" },
          { href: "#", label: "Encoding Converter" },
          { href: "#", label: "Broadcast Transaction" },
        ]}
        index={4}
        isDropdownOpen={openDropdownIndex ===4}
        toggleDropdown={() => toggleDropdown(4)}
      />
    </div>
  )}
      </div>

    </div>
  );
};

export default Navbar;
