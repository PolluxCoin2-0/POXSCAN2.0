import CodeEditor from "./CodeEditor";

const Code = () => {
  return (
    <div>
      <p className="text-lg font-semibold">
        Contract Source Code Verified (Perfect match){" "}
      </p>
      <div className="flex flex-row justify-between w-full mt-8">
        <div className="w-[50%]  space-y-3">
          <div className="flex flex-row item-center space-x-[281px]">
            <p className="text-lightestGray font-medium text-[17px]">
              Contract Name
            </p>
            <p className="font-medium text-[17px]">Uvi Token</p>
          </div>

          <div className="flex flex-row item-center space-x-[297px]">
            <p className="text-lightestGray font-medium text-[17px]">
              Optimization
            </p>
            <p className="font-medium text-[17px]">No</p>
          </div>

          <div className="flex flex-row item-center space-x-[300px]">
            <p className="text-lightestGray font-medium text-[17px]">
              Audit Report
            </p>
            <p className="font-medium text-[17px]">
              No audit report yet (Submit here)
            </p>
          </div>
        </div>

        <div className="w-[50%] space-y-3">
          <div className="flex flex-row item-center space-x-[250px]">
            <p className="text-lightestGray font-medium text-[17px]">
              Compiler Version
            </p>
            <p className="font-medium text-[17px] text-nowrap">
              solidity pollux_v0.8.23+commit.5f1834b{" "}
            </p>
          </div>

          <div className="flex flex-row item-center space-x-[326px]">
            <p className="text-lightestGray font-medium text-[17px]">License</p>
            <p className="font-medium text-[17px]">MIT license</p>
          </div>
        </div>
      </div>

      {/* code editor */}
      <div className="bg-lightMidGray mt-6 rounded-2xl p-5 space-y-2">
        <p className="text-lg font-semibold">Contract Code</p>
        <p className="text-md font-semibold">Uvi Token</p>
        <div className="flex flex-row space-x-4 items-center">
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
              d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z"
            />
          </svg>
        </div>
        
        {/* CODE SNIPPETS */}
        <div>
            <CodeEditor/>
        </div>
      </div>
    </div>
  );
};

export default Code;
