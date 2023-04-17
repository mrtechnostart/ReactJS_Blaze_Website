import './App.css';
import BlazeScreenshot from './Components/BlazeScreenshot';
import Doubts from './Components/Doubts';
import Home from './Components/Home';
import Footer from './Components/Footer'
import WhyBlaze from './Components/WhyBlaze';
import { Route,Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Download from './Components/Download';
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={[<Home/>,<WhyBlaze/>,<BlazeScreenshot/>,<Doubts/>,<Footer/>]}/>
      <Route path="/screenshot" element={[<Navbar/>,<BlazeScreenshot/>,<Footer/>]}/>
      <Route path="/download" element={[<Download/>,<Footer/>]}/>
      <Route path="/features" element={[<Navbar/>,<WhyBlaze/>,<Doubts/>,<Footer/>]}/>
    </Routes>
    </>
  );
}

export default App;
