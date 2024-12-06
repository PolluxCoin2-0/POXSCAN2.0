import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import TransactionDetails from "./components/TransactionDetails";
import Node from "./pages/Blockchain/Node";
import Blocks from "./pages/Blockchain/Blocks";
import Transactions from "./pages/Blockchain/Transactions";
import Transfers from "./pages/Blockchain/Transfers";
import BlockDetails from "./components/BlockDetails";
import AccountDetails from "./components/AccountDetails";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/transactiondetails" element={<TransactionDetails />} />
      <Route path="/blockchain/node" element={<Node />} />
      <Route path="/blockchain/blocks" element={<Blocks />} />
      <Route path="/blockchain/transactions" element={<Transactions/>}/>
      <Route path="/blockchain/transfers" element={<Transfers/>}/>
      <Route path="/blockchain/block/blockdetails" element={<BlockDetails />} />
      <Route path="/accountdetails" element={<AccountDetails />} />
      {/* Add more routes here as needed */}
    </Routes>
  );
};

export default AppRoutes;
