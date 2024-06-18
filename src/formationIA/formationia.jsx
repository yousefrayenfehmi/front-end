// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MultiActionAreaCard from './card'; // Adjust the import path as necessary
import './card.css'; // Import your CSS file
import Navbar from "../navbar/navbar";
import Footer from "../contact/contact";
import Firstshow from './firstshow';

function Form() {
  const [formation, setFormation] = useState([]);
  const [formationGenerale, setFormGenerale] = useState([]);
  const [formationspecifier, setFormSpecifier] = useState([]);

  useEffect(() => {
    axios.get(import.meta.env.VITE_REACT_API_URL)
      .then(response => {
        console.log(response.data.rows); // Vérifiez le type de response.data
        if (Array.isArray(response.data.rows)) {
          const data = response.data.rows;
          setFormation(data);
          setFormGenerale(data.filter(x => x.type_formation === "gènèrale"));
          setFormSpecifier(data.filter(x => x.type_formation !== "gènèrale"));
        } else {
          console.error('Error: Response data is not an array');
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (

    <div>

      <Navbar />
      <div>
        <Firstshow />
      </div>

      <div className="App " style={{ marginTop: '150px' }}>
        <h1 className='section-title' id='section-title'  >Nos formations générales</h1>
        <div className="card-container">
          {formationGenerale.map(formation => (
            <div key={formation.id} className="card-item">
              <MultiActionAreaCard 
                titre={formation.titre} 
                para={formation.description} 
                prix={formation.prixenligne} 
                prixpresentielle={formation.prixpresentielle} 
              />
            </div>
          ))}
        </div>
      </div>
      <div className="App">
        <h1 className='section-title'>Nos formations d'intelligence artificielle pour de métiers spécifiques</h1>
        <div className="card-container">
          {formationspecifier.map(formation => (
            <div key={formation.id} className="card-item">
              <MultiActionAreaCard 
                titre={formation.titre} 
                para={formation.description} 
                prix={formation.prixenligne} 
                prixpresentielle={formation.prixpresentielle} 
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Form;
