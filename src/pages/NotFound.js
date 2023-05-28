import React from 'react';
import Typography from '@mui/material/Typography';

function NotFound() {
  return (
    <div>
       <Typography component="h5" variant="h5">
       404 - Page Not Found
      </Typography>
      
      <Typography paragraph>
      The requested page could not be found.
      <b>Call to Daniel to fix the Problem</b>
      </Typography>
      

      <p>
      </p>
    </div>
  );
}

export default NotFound;
