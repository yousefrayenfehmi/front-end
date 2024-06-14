import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './card.css';
export default function MultiActionAreaCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="img/formation.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.titre}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.para}
          </Typography>
        </CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {props.prix}€ en ligne
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {props.prixpresentielle}€ en presentielle
          </Typography>

      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Voir detaille
        </Button>
      </CardActions>
    </Card>
  );
}