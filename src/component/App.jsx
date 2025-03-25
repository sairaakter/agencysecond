import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { useEffect, useState } from "react";
import {
  Route,
  HashRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import "../style/Global.css";
import Layout from "./Layout";
import About from "./pages/About";
import Carear from "./pages/Carear";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Process from "./pages/Process";
import Servic from "./pages/Servic";
import Work from "./pages/Work";

function App() {
  const [progress, setProgress] = useState(0);

  return (
    <Router>
      <LoadingBar
        color="#9EFF00"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Layout>
        <PageTracker setProgress={setProgress} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Servic" element={<Servic />} />
          <Route path="/Work" element={<Work />} />
          <Route path="/Process" element={<Process />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Carear" element={<Carear />} />
        </Routes>
      </Layout>
    </Router>
  );
}

function PageTracker({ setProgress }) {
  const location = useLocation();

  useEffect(() => {
    setProgress(10); // Start loading
    const timer = setTimeout(() => setProgress(100), 500); // Finish after delay
    return () => clearTimeout(timer);
  }, [location, setProgress]);

  return null;
}

export default App;
