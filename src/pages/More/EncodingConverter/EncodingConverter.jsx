import { useState } from "react";
import Search from "../../../components/Search";
import PolluxEvmAddress from "./PolluxEvmAddress";
import Base64EncodeDecode from "./Base64EncodeDecode";
import Base58EncodeDecode from "./Base58EncodeDecode";
import PublickeyAddress from "./PublickeyAddress";
import PrivateKeyPublicKey from "./PrivateKeyPublicKey";

const EncodingConverter = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const menuItems = [
    "POLLUX - EVM Address",
    "Base64 Encode / Decode",
    "Base58Check Encode / Decode",
    "Public Key - Address",
    "Private Key - Public Key & Address",
  ];

  const renderActiveComponent = () => {
    switch (activeIndex) {
      case 0:
        return <PolluxEvmAddress />;
      case 1:
        return <Base64EncodeDecode />;
      case 2:
        return <Base58EncodeDecode />;
      case 3:
        return <PublickeyAddress />;
      case 4:
        return <PrivateKeyPublicKey />;
      default:
        return null;
    }
  };

  return (
    <div>
      {/* Search */}
      <div className="w-full flex items-center justify-center">
        <div className="w-full max-w-4xl">
          <Search />
        </div>
      </div>

      <p>Encoding Converter</p>
      <div className="flex flex-row items-center space-x-8 py-4">
        {menuItems.map((item, index) => (
          <p
            key={index}
            className={`rounded-xl font-medium px-4 py-2 cursor-pointer ${
              activeIndex === index
                ? "text-black bg-[#36D900]"
                : "text-[#486042] bg-[#0B2901]"
            }`}
            onClick={() => setActiveIndex(index)}
          >
            {item}
          </p>
        ))}
      </div>

      {/* Render Active Component */}
      <div>
        {renderActiveComponent()}
      </div>
    </div>
  );
};

export default EncodingConverter;
