import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';

export default function CustomCard(props) {
  const cardStyle = {
    borderRadius: '10px',
    padding: '16px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '300px', // Large width
    maxWidth: '600px', // Max width for responsiveness
    height: '120px', // Small height
    margin: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  };

  const cardHeaderStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const chipStyle = {
    backgroundColor: '#f0f0f0',
    color: 'blue',
    fontSize: '12px',
  };

  return (
    <Card style={cardStyle}>
      <CardContent>
        <div style={cardHeaderStyle}>
          <Typography variant="h6" component="div">
            {props.title}
          </Typography>
          <Chip label="À venir" style={chipStyle} />
        </div>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
