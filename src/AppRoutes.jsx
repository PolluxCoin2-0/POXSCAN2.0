import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import TransactionDetails from "./components/TransactionDetails";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/transactiondetails" element={<TransactionDetails />} />
      {/* Add more routes here as needed */}
    </Routes>
  );
};

export default AppRoutes;
