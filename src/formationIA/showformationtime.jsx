import React, { useEffect, useState } from 'react';
import Navbar from '../navbar/navbar';
import Footer from '../contact/contact';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const Showft = () => {
  const [formation, setFormation] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fonction pour récupérer l'ID à partir des paramètres de l'URL
    const searchParams = new URLSearchParams(window.location.search);
    const id = searchParams.get('id');

    if (id) {
      const fetchFormation = async () => {
        try {
          const response = await axios.get(`${import.meta.env.VITE_REACT_API_URL1}/formationid/${id}`);
          console.log(response.data.rows);
          setFormation(response.data.rows);
          setLoading(false);
        } catch (error) {
          console.error('Erreur lors de la récupération de la formation:', error);
          setError('Erreur lors de la récupération de la formation');
          setLoading(false);
        }
      };

      fetchFormation();
    } 
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Les date disponible</h1>
      <Footer />
    </div>
  );
};

export default Showft;
