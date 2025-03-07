import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Properties from "./Properties";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <Router>
      
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
