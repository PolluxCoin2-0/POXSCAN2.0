import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./layout/Navbar";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <div className="bg-black px-4 lg:px-8 xl:px-28 2xl:px-52 min-h-screen relative">
      <Router>
        <Navbar />
        <AppRoutes />
      </Router>
    </div>
  );
}

export default App;
