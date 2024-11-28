
const Search = () => {
  return (
    <div className="relative w-full text-gray-600">
      {/* Search Input */}
      <input
        className="w-full border-2 border-gray-300 bg-white h-12 pl-12 pr-4 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
        type="search"
        name="search"
        placeholder="Search by token / Account / Contract / Pox Hash / Block"
      />
      {/* Search Icon */}
      <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-500">
        <svg
          className="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35M17 10A7 7 0 1 0 3 10a7 7 0 0 0 14 0z"
          />
        </svg>
      </span>
    </div>
  );
};

export default Search;
