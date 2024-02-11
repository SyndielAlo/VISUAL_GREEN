import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const Notifications = ({ data }) => {
  const getNotificationColor = (value, high, optimal, low) => {
    if (value > high) {
      return 'red';
    } else if (value < low) {
      return 'blue';
    } else {
      return 'green';
    }
  };

  return (
    <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}>
      {Object.entries(data).map(([key, { value, high, optimal, low }]) => (
        <Paper
          key={key}
          elevation={3}
          sx={{
            backgroundColor: getNotificationColor(value, high, optimal, low),
            color: 'white',
            padding: '10px',
            marginBottom: '10px',
            width: '300px',
          }}
        >
          <Typography variant="subtitle1" gutterBottom>
            {`${key.toUpperCase()}: ${value}`}
          </Typography>
          <Typography variant="body2">
            {`High: ${high}, Optimal: ${optimal}, Low: ${low}`}
          </Typography>
        </Paper>
      ))}
    </div>
  );
};

export default Notifications;
