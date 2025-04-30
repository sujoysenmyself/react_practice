import { Route, Routes, Link } from "react-router";
import Home from "./components/Home";
import About from "./components/About";
import PageNowFound from "./components/PageNowFound";

function App() {
  return (
    <>

    <Link to="/">Home</Link>
    <br />
    <Link to="/about">About</Link>
    <br /><br />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<PageNowFound />} />
        </Routes>
    </>
  );
}

export default App;
