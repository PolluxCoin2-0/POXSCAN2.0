import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import TransactionDetails from "./components/TransactionDetails";
import Node from "./pages/Blockchain/Node";
import Blocks from "./pages/Blockchain/Blocks";
import Transactions from "./pages/Blockchain/Transactions";
import Transfers from "./pages/Blockchain/Transfers";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/transactiondetails" element={<TransactionDetails />} />
      <Route path="/blockchain/node" element={<Node />} />
      <Route path="/blockchain/blocks" element={<Blocks />} />
      <Route path="/blockchain/transactions" element={<Transactions/>}/>
      <Route path="/blockchain/transfers" element={<Transfers/>}/>
      {/* Add more routes here as needed */}
    </Routes>
  );
};

export default AppRoutes;
