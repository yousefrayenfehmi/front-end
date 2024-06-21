import * as React from 'react';
import { useInView } from 'react-intersection-observer';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard(props) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cardStyle = {
    maxWidth: '345px',
    backgroundColor: 'white', // Fond blanc pour la carte
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    overflow: 'hidden',
    marginBottom: '20px',
    transition: 'transform 0.3s ease-in-out',
    transform: inView ? 'translateY(0)' : 'translateY(5px)',
  };

  const mediaStyle = {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    borderRadius: '8px',
    margin: 'auto',
    display: 'block',
  };

  const contentStyle = {
    flex: '1',
    padding: '16px',
  };

  const buttonStyle = {
    color: '#1976d2',
    textDecoration: 'none',
    cursor: 'pointer',
  };

  return (
    <Card ref={ref} style={cardStyle}>
      <CardMedia
        style={mediaStyle}
        image={props.img}
        title={props.title}
      />
      <div style={contentStyle}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.para}
          </Typography>
        </CardContent>
        <CardActions>
          <a href={props.url} style={buttonStyle}><Button size="small">En savoir plus</Button></a>
        </CardActions>
      </div>
    </Card>
  );
}
