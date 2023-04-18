import "./App.css";
import BlazeScreenshot from "./Components/BlazeScreenshot";
import Doubts from "./Components/Doubts";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import WhyBlaze from "./Components/WhyBlaze";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Download from "./Components/Download";
function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={[
            <Home key="home" />,
            <WhyBlaze key="whyblaze" />,
            <BlazeScreenshot key="blazescreenshot" />,
            <Doubts key="doubts" />,
            <Footer key="footer" />,
          ]}
        />
        <Route
          path="/screenshot"
          element={[
            <Navbar key="navbar" />,
            <BlazeScreenshot key="blazescreenshot" />,
            <Footer key="footer" />,
          ]}
        />
        <Route
          path="/download"
          element={[<Download key="download" />, <Footer key="footer" />]}
        />
        <Route
          path="/features"
          element={[
            <Navbar key="navbar" />,
            <WhyBlaze key="whyblaze" />,
            <Doubts key="doubts" />,
            <Footer key="footer" />,
          ]}
        />
      </Routes>
    </>
  );
}

export default App;
