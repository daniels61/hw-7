import { createTheme } from "@mui/material/styles";
import { grey } from '@mui/material/colors';
import { red } from "@mui/material/colors";




// A custom theme for this app
const theme = createTheme({
    
    palette: {
      primary: {
        main: grey[600],
      },
      secondary: {
        main: "#00213b",
      },
      error: {
        main: red.A400,
      },
      background: {
        default: grey[300], 
      },
    },
  });
  
  export default theme;