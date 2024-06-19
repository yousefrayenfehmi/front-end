import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './card.css';

export default function MultiActionAreaCard(props) {
  return (
    <Card className="custom-card">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="img/formation.jpg"
          alt="formation image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.titre}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.para}
          </Typography>
        </CardContent>
        <Typography gutterBottom variant="h6" component="div" className="price-info">
          {props.duree} <span className="large-blue-point">.</span> {props.prix}€ en ligne <span className="large-blue-point">.</span> {props.prixpresentielle}€ en présentiel
        </Typography>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Voir détaille
        </Button>
      </CardActions>
    </Card>
  );
}
