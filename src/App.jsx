import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./home/home";
import Cl from "./calender/calender"; // Import the Cl component
import Formation from "./formationIA/formationia"
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Use 'element' prop to specify the component */}
          <Route path="/cale" element={<Cl />} /> {/* Use 'element' prop to specify the component */}
          <Route  path="/formation" element={<Formation />} />       
        </Routes>
      </div>
    </Router>
  );
}

export default App;