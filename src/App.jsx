import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./home/home";
import Cl from "./calender/calender"; // Import the Cl component
import Form from "./formationIA/formationia"
import Conference from "./coference/conference";
import Audit from "./audit & conseil/audit&conseil";
import Firstshow from "./formationIA/firstshow";
import Showft from "./formationIA/showformationtime";
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Use 'element' prop to specify the component */}
          <Route path="/cale" element={<Cl />} /> {/* Use 'element' prop to specify the component */}
          <Route  path="/formation" element={<Form />} />
          <Route  path="/cof" element={<Conference />} />    
          <Route  path="/audit" element={<Audit />} />    
          <Route  path="/first" element={<Firstshow />} />    

        </Routes>
      </div>
    </Router>
  );
}

export default App;