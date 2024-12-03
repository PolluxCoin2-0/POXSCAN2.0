import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./layout/Navbar";
import AppRoutes from "./AppRoutes";
import Footer from "./layout/Footer";

function App() {
  return (
    <div className="bg-black min-h-screen relative">
      <Router>
        <div className="px-4 lg:px-8 xl:px-28 2xl:px-52">
          <Navbar />
          <AppRoutes />
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
