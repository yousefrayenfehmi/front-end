import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MultiActionAreaCard from './card'; // Adjust the import path as necessary
import './card.css'; // Import your CSS file
import Navbar from "../navbar/navbar";
import Footer from "../contact/contact";
import Firstshow from './firstshow';
import CustomCard from './customcard';

function Form() {
  const [formation, setFormation] = useState([]);
  const [formationGenerale, setFormGenerale] = useState([]);
  const [formationspecifier, setFormSpecifier] = useState([]);
  const [formationavenir, setFormAvenir] = useState([]);

  useEffect(() => {
    axios.get("https://backend-weld-chi.vercel.app/formation")
      .then(response => {
        console.log(response.data.rows); // Vérifiez le type de response.data
        if (Array.isArray(response.data.rows)) {
          const data = response.data.rows;
          setFormation(data);
          setFormAvenir(data.filter(x => x.disponibilite === false));
          setFormGenerale(data.filter(x => x.type_formation === "gènèrale" && x.disponibilite === true));
          setFormSpecifier(data.filter(x => x.type_formation !== "gènèrale" && x.disponibilite === true));
          console.log("jfdskf" + formationavenir);
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
      <div className="App" style={{ marginTop: '150px' }}>
        <h1 className='section-title' id='section-title'>Nos formations générales</h1>
        <div className="card-container">
          {formationGenerale.map(formation => (
            <div key={formation.id} className="card-item">
              <MultiActionAreaCard
               id={formation.id}
                titre={formation.titre}
                para={formation.description}
                prix={formation.prixenligne}
                prixpresentielle={formation.prixpresentielle}
                duree={formation.duree}
                img={formation.img}
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
                id={formation.id}
                titre={formation.titre}
                para={formation.description}
                prix={formation.prixenligne}
                prixpresentielle={formation.prixpresentielle}
                duree={formation.duree}
                img={formation.img}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="App">
        <h1 className='section-title'>Nos formations à venir</h1>
        <div className="card-container">
          {formationavenir.map(x => (
            <div key={x.id} className="card-item">
              <CustomCard
                title={x.titre}
                description={"ChatGPT et l'IA au service des " + x.titre}
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
