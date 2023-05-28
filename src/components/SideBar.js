import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



class SideBar extends Component {
  render() {
  return (
    <div className="right">
      <Typography component="h3" variant="h3">
      Latest
      </Typography>
      
      <Typography variant="button" display="block" gutterBottom>
        <Button variant="contained" color="secondary" sx={{ mt: 1, mb: 1 }} >
              <Link to={`/posts/1`} style={{ textDecoration: 'none', color: 'inherit' }}>
              Blog post 1#
              </Link>
        </Button>
      </Typography>
      
      <Typography variant="button" display="block" gutterBottom>
        <Button variant="contained" color="secondary" sx={{ mt: 1, mb: 1 }} >
              <Link to={`/posts/2`} style={{ textDecoration: 'none', color: 'inherit' }}>
              Blog post 2#
              </Link>
        </Button>     
      </Typography>
      <Typography variant="button" display="block" gutterBottom>
        <Button variant="contained" color="secondary" sx={{ mt: 1, mb: 1 }} >
              <Link to={`/posts/3`} style={{ textDecoration: 'none', color: 'inherit' }}>
              Blog post 3#
              </Link>
        </Button>
      </Typography>

      <p>________________________</p>

      <Typography component="h3" variant="h3">
      Popular
      </Typography>

      <Typography variant="button" display="block" gutterBottom>
        <Button variant="contained" color="secondary" sx={{ mt: 1, mb: 1 }} >
              <Link to={`/posts/3`} style={{ textDecoration: 'none', color: 'inherit' }}>
              Blog post 3#
              </Link>
        </Button>
      </Typography>

      <Typography variant="button" display="block" gutterBottom>
        <Button variant="contained" color="secondary" sx={{ mt: 1, mb: 1 }} >
              <Link to={`/posts/1`} style={{ textDecoration: 'none', color: 'inherit' }}>
              Blog post 1#
              </Link>
        </Button>
      </Typography>
      
      <Typography variant="button" display="block" gutterBottom>
        <Button variant="contained" color="secondary" sx={{ mt: 1, mb: 1 }} >
              <Link to={`/posts/2`} style={{ textDecoration: 'none', color: 'inherit' }}>
              Blog post 2#
              </Link>
        </Button>     
      </Typography>

    </div>
  );
}
}
export default SideBar;

