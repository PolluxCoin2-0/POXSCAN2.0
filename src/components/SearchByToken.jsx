
const SearchByToken = ({ placeholder = "Search by token", onChange, value }) => {
  return (
    <div className="flex flex-row items-center space-x-2 my-4 py-[10px] px-4 border-[1px] border-[#B9BDB8] rounded-2xl">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="#B9BCB8"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="bg-transparent outline-none placeholder:text-white placeholder:text-opacity-70 flex-grow"
      />
    </div>
  );
};

export default SearchByToken;
