import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import PostAddIcon from '@mui/icons-material/PostAdd';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import SendIcon from '@mui/icons-material/Send';





function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="mailto:dslotin@gmail.com">
        Daniel Slotin
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



export default function TextPost() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      title: data.get('title'),
      description: data.get('description'),
      publlished: data.get('publlished'),
      img: data.get('img'),

      
    });
  };

  return (
   
      <Container component="main" maxWidth="m">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <PostAddIcon/>
          </Avatar>
          <Typography component="h1" variant="h5">
            New post
          </Typography>
          <Box   component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}
         
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="title"
              label="Title"
              name="title"
              defaultValue="Blog post #"
            />
            <TextField
              margin="normal"
              multiline
              fullWidth
              name="description"
              label="Description"
              id="description"
              rows={6}
              defaultValue="Text Description"             
            />
          <Stack id="img" direction="row" alignItems="center" spacing={3} sx={{ mt: 3, mb: 3 }} color='#00213b'>
            <Button variant="contained" component="label" color="secondary" >
              Upload Photo
              <input hidden accept="image/*" multiple type="file" />
            </Button>
              <PhotoCamera size="large" />
          </Stack>
          <Stack direction="row" spacing={2} >
            <Button 
            type="submit"
            variant="contained"
             fullWidth 
             endIcon={<SendIcon />} sx={{ mt: 7, mb: 4 }} 
             color="secondary"
             >
              Send post
            </Button>
           </Stack>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
  
  );
}