import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Deployments from "./pages/Deployments";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.success("Deployed successfully!");
toast.error("Deployment failed. Please try again.");
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/deployments" element={<Deployments />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
