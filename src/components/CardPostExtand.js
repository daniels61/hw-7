import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { Link } from "react-router-dom";


export default function CardPostExtand(props) {
  return (
    <div style={{ display: '', justifyContent: 'center' }}>
    <Card sx={{ maxWidth: 1000, marginTop: 4,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',}}
    >
      <CardMedia
        component="img"
        alt=""
        height="500"
        image={props.img}
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        {props.title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
             {props.description}
        </Typography>
        <br></br>
        <Typography paragraph>
             {props.extand}
        </Typography>
        <Typography variant="body1" color="text.secondary">
            Publlished {props.publlished} by Israel
        </Typography>
      
      </CardContent>
      <CardActions>
      <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
            <Button variant="contained" color="secondary">
            <Link to={`/`} style={{ textDecoration: 'none', color: 'inherit' }}>
              Back home
            </Link>
            </Button>
      </CardActions>
    </Card>
    <br/>
    </div>
  );
}