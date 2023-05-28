import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";


        const Post = (props) => {
            return (
              
              <div className="frame" id="post">
            <img src={props.img} id="picture_frame" style={{ width: '15%', height: '5%' }} alt="" />
            <h3>{props.title}</h3>
            <p>{props.description}
              <br />
              <br />
              <br />Publlished {props.publlished} by Israel
            </p>
            <Stack direction="row" spacing={8}>
                   <Button variant="contained" color="success">
                    <Link to={`/posts/${props.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                      Go to post
                    </Link>
                   </Button>
            </Stack>
          </div>
            )
          }

  export default Post;
  