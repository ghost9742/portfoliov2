import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Work from "./components/Work";

// import { Routes, Route } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
      </Routes>
      {/* <Routes basename="/portfoliov2">
        <Route path="/portfoliov2" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
      </Routes> */}
    </div>
  );
}

export default App;
