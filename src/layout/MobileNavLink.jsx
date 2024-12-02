import { useState } from 'react';

export const MobileNavLink = ({ label, hasDropdown = false, dropdownItems = [], index, isDropdownOpen, toggleDropdown }) => {
  return (
    <div className="flex flex-col space-y-4">
      {/* Main Link Item */}
      <div
        className="flex flex-row justify-between items-center text-[#73E74D] cursor-pointer hover:bg-gray-700 p-2 rounded-md transition-all duration-300"
        onClick={hasDropdown ? toggleDropdown : null} // Toggle dropdown if it has items
      >
        <span className="text-base font-bold">{label}</span>
        {hasDropdown && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-5 h-5 ml-2 transform transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} // Arrow rotates when dropdown is open
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 9l-7.5 7.5-7.5-7.5"
            />
          </svg>
        )}
      </div>

      {/* Dropdown Menu */}
      {hasDropdown && isDropdownOpen && (
        <div className="flex flex-col pl-6 space-y-3 pt-2 transition-all duration-300 ease-in-out max-h-[500px] overflow-auto">
          {dropdownItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="text-[#73E74D] font-semibold text-base hover:bg-gray-600 p-1 rounded-md transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};
