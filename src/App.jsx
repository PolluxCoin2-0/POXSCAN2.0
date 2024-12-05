import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./layout/Navbar";
import AppRoutes from "./AppRoutes";
import Footer from "./layout/Footer";

function App() {
  return (
    <div className="bg-black min-h-screen relative">
      <Router>
        <div className="px-4 lg:px-8 xl:px-28 2xl:px-52">
          <Navbar />
           {/* Toast container */}
           <ToastContainer
            position="top-center"
            autoClose={3000}
            theme="dark"
            newestOnTop={true}
            pauseOnFocusLoss
            toastClassName="custom-toast"
          />
          <AppRoutes />
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
