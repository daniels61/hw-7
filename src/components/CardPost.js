import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";



export default function CardPost(props) {
  return (
    <div style={{ display: '', justifyContent: 'center' }}>
    <Card sx={{ maxWidth: 500, marginTop: 4,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',}}
    >
      <CardMedia
        component="img"
        alt=""
        height="120"
        image={props.img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
             {props.description}
        </Typography>
        <br></br>
        <Typography variant="body1" color="text.secondary">
            Publlished {props.publlished} by Israel
        </Typography>
      
      </CardContent>
      <CardActions>
        
        <Button size="medium" color='secondary'>Share</Button>
        <Button size="medium" color='secondary'>
        <Link to={`/posts/${props.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          Learn More
          </Link>
          </Button>
      </CardActions>
    </Card>
    <br/>
    </div>
  );
}