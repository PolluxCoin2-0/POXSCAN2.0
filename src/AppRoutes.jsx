import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import TransactionDetails from "./components/TransactionDetails";
import Node from "./pages/Blockchain/Node";
import Blocks from "./pages/Blockchain/Blocks";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/transactiondetails" element={<TransactionDetails />} />
      <Route path="/blockchain/node" element={<Node />} />
      <Route path="/blockchain/blocks" element={<Blocks />} />
      {/* Add more routes here as needed */}
    </Routes>
  );
};

export default AppRoutes;
