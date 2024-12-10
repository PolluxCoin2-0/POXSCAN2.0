import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import TransactionDetails from "./components/TransactionDetails";
import Node from "./pages/Blockchain/Node";
import Blocks from "./pages/Blockchain/Blocks";
import Transactions from "./pages/Blockchain/Transactions";
import Transfers from "./pages/Blockchain/Transfers";
import Contracts from "./pages/Blockchain/Contracts";
import BlockDetails from "./components/BlockDetails";
import ProducerDetails from "./components/ProducerDetails";
import AccountContractDetails from "./components/AccountContractDetails";
import AccountDetails from "./components/AccountDetails";
import Accounts from "./pages/Blockchain/Accounts";
import Tokens from "./pages/Tokens/Tokens";
import TokenDetails from "./components/Tokens/TokenDetails";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/transactiondetails" element={<TransactionDetails />} />
      <Route path="/blockchain/node" element={<Node />} />
      <Route path="/blockchain/blocks" element={<Blocks />} />
      <Route path="/blockchain/accounts" element={<Accounts/>} />
      <Route path="/blockchain/transactions" element={<Transactions/>}/>
      <Route path="/blockchain/transfers" element={<Transfers/>}/>
      <Route path="/blockchain/contracts" element={<Contracts/>}/>
      <Route path="/blockchain/block/blockdetails" element={<BlockDetails />} />
      <Route path="/producerdetails" element={<ProducerDetails />} />
      <Route path="/accountdetails" element={<AccountDetails />} />
      <Route path="/accountcontractdetails" element={<AccountContractDetails/>}/>
      <Route path="/tokens" element={<Tokens/>}/>
      <Route path="/tokendetails" element={<TokenDetails/>}/>
      {/* Add more routes here as needed */}
    </Routes>
  );
};

export default AppRoutes;
