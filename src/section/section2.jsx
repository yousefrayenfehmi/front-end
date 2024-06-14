import React,{ useState } from 'react';
import './HeroSection.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
const Section2 = (props) => {
  const [hovered, setHovered] = useState(false);
  
  return (
    <div className="hero-container mt-10">
      <div className="hero-content">
      <h1>{props.titre}</h1>
      <p>{props.para}</p>
      <Stack direction="row" spacing={2}>
      <Link to="/cale" target="_blank"><Button variant="contained" endIcon={hovered?<ArrowForwardIcon/>:<ArrowOutwardIcon/>} onMouseEnter={()=>{
            setHovered(true)
      }} onMouseLeave={()=>{
        setHovered(false)
      }}>
      Prendre rendez-vous
      </Button>
      </Link>
    </Stack>
     
      </div>

      <div className="hero-image-container">
        <img src={props.img} alt="Hero" className="hero-image" />
      </div>
    </div>
  );
};

export default Section2;
