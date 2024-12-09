import { useState } from "react";
import { toast } from "react-toastify";
import Loader from "../../../components/Loader";
const readContract = [
  {
    id: 1,
    title: "admin",
    viewTitle: "View",
    placeholder: "Enter",
  },
  {
    id: 2,
    title: "getReferralRewards",
    viewTitle: "Send",
    placeholder: "account_address*",
  },
  {
    id: 3,
    title: "referrals",
    viewTitle: "Send",
    placeholder: "account_address*",
  },
  {
    id: 4,
    title: "startTime",
    viewTitle: "View",
    placeholder: "Enter",
  },
  {
    id: 5,
    title: "uviToken",
    viewTitle: "View",
    placeholder: "Enter",
  },
  // Add more sections as needed
];

const ReadContract = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isView, setIsView] = useState(false);

  const handleToggle = (id) => {
    // If the clicked section is already open, toggle it off. Otherwise, open the clicked section
    if (isOpen === id) {
      setIsOpen(null); // Close it
    } else {
      setIsOpen(id); // Open clicked section
    }
  };

  const handleView = () => {
    setIsView(!isView);
  };

  // const handleChange = (event) => {
  //   setInputValue(event.target.value);
  // };

  const handleCopy = (issueTime) => {
    navigator.clipboard.writeText(issueTime);
    toast.success(" copied!");
  };

  return (
    <div className="">
      <div className="flex flex-row justify-end space-x-2">
        <p className="font-medium">[Expand]</p>
        <p className="font-medium">[Reset]</p>
      </div>

      {readContract.map((data, index) => {
        return (
          <div key={index}>
            <div className="border-mid-light-gray rounded-[23px] bg-green-gradient mt-6">
              <div className="flex flex-row justify-between p-4 bg-text-bg-gray border-b-2 border-[#676767] border-opacity-20">
                <p className="text-md text-white font-medium">
                  {index + 1}. {data.title}
                </p>
                <p
                  className="text-2xl"
                  onClick={() => handleToggle(data.id)}
                  style={{ cursor: "pointer" }}
                >
                  {isOpen === data.id ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 15.75 7.5-7.5 7.5 7.5"
                      />
                    </svg>
                  )}
                </p>
              </div>

              <div className="flex justify-end space-x-5 p-3">
                <p
                  className="text-xl"
                  onClick={() => handleCopy("DOMAIN_SEPARATOR")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#37DD00"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
                    />
                  </svg>
                </p>
                <p
                  className="text-xl"
                  onClick={() =>
                    handleCopy(
                      "http://localhost:5173/tokendetailpage/PSTv3ZweeCRHd5cmxoL3dTTbSKGgtYZ5cm"
                    )
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#37DD00"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                    />
                  </svg>
                </p>
              </div>

              {isOpen === data.id && (
                <div className="pb-1">
                  <div className="flex flex-col space-y-4 ml-5 mb-6">
                    {/* Display address just above the View button */}
                    {isView && (
                      <p className="mt-1 text-lg font-bold">
                        {data.id === 1 && (
                          <p className="text-lg text-white">
                            <Loader />
                          </p>
                        )}
                        {data.id === 2 && (
                          <input
                            type="text"
                            className="border-[1px] border-[#434343] rounded-xl py-2 px-4 bg-[#D9D9D9] bg-opacity-15 w-[90%] placeholder:text-white placeholder:font-normal text-[16px]"
                            placeholder={data.placeholder}
                          />
                        )}
                        {data.id === 3 && (
                          <input
                            type="text"
                            className="border-[1px] border-[#434343] rounded-xl py-2 px-4 bg-[#D9D9D9] bg-opacity-15 w-[90%] placeholder:text-white placeholder:font-normal text-[16px]"
                            placeholder={data.placeholder}
                          />
                        )}
                        {data.id === 4 && (
                          <p className="text-lg text-white">
                             <Loader />
                          </p>
                        )}
                        {data.id === 5 && (
                          <p className="text-lg text-white">
                             <Loader />
                          </p>
                        )}
                      </p>
                    )}

                    {/* View Button */}
                    <p
                      className="border-[1px] border-light-gray rounded-md px-0 py-1 w-[70px] bg-white text-black text-md font-medium text-center"
                      onClick={handleView}
                      style={{ cursor: "pointer" }}
                    >
                      {data.viewTitle}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ReadContract;
