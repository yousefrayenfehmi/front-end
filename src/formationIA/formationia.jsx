import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MultiActionAreaCard from './card'; // Adjust the import path as necessary
import './card.css'; // Import your CSS file
import Navbar from "../navbar/navbar"
import Section2 from "../section/section2"
import Footer from "../contact/contact"
import { json } from 'react-router-dom';
import env from "dotenv"
function App() {
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
    <Section2 img="img/formation.jpg" titre="Formez vos collaborateurs aux outils d’intelligence artificielle générative"  para="Nos formations personnalisées pour tous niveaux  couvrent les fondamentaux et les applications avancées. Augmentez votre productivité, améliorez la qualité de votre travail et innovez dans vos projets grâce à nos formations IA." />
    <div className="App">
      <code>{}</code>
    <h1>Nos parcours de formation à l’intelligence artificielle générative</h1>
      <div className="card-container">
        {formationGenerale.map(formation => (
          <div key={formation.id} className="card-item">
            <MultiActionAreaCard titre={formation.titre} para={formation.description} prix={formation.prixenligne} prixpresentielle={formation.prixpresentielle} />
          </div>
        ))}
      </div>
    </div>
    <div className="App">
      
    <h1>Nos formations d'intelligence artificielle pour de métiers spécifiques</h1>
      <div className="card-container">
        {formationspecifier.map(formation => (
          <div key={formation.id} className="card-item">
            <MultiActionAreaCard titre={formation.titre} para={formation.description} prix={formation.prixenligne} prixpresentielle={formation.prixpresentielle} />
          </div>
        ))}
      </div>
    </div>
      <Footer />
    </div>
  );
}

export default App;
