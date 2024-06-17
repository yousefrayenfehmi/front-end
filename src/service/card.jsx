import * as React from 'react';
import { useInView } from 'react-intersection-observer';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './cards.css'; // Assurez-vous de créer ce fichier CSS
import { Link} from 'react-router-dom';
export default function MediaCard(props) {
  const { ref, inView } = useInView({
    triggerOnce: true, // L'animation ne se déclenche qu'une seule fois
    threshold: 0.1,   // Déclencher quand 10% de la carte est visible
  });

  return (
    <Card ref={ref} className={`custom-card ${inView ? 'animated-card' : ''}`}>
      <CardMedia
        className="card-media"
        image={props.img}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
                  </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.para}
        </Typography>
      </CardContent>
      <CardActions>
        <a href={props.url}><Button size="small" className="custom-button">En savoir plus</Button></a>
      </CardActions>
    </Card>
  );
}
