import React from 'react'
import './CrearEncuesta.css';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function btnCrearEncuesta() {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#ffc526',
        darker: '#fff',
      },
      secondary: {
        main: '#000 ',
        contrastText: '#fff',
      },
    },
  });

  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="flex-end"
        className='btnEncuesta'
      >
        <ThemeProvider theme={theme}>
          <Button color='secondary' variant="outlined" startIcon={<DeleteIcon />}>
            Borrar
          </Button>
          <Button variant="contained" endIcon={<SendIcon />}>
            Enviar
          </Button>
        </ThemeProvider>
      </Grid>
    </div>
  );
}
