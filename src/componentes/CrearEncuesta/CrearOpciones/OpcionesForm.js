import React from 'react'
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

function OpcionesForm(props){
  const [inputText,setInputText] = React.useState("");
  const handleInputText = (e) =>{
    setInputText(e.target.value);
  }

  const theme = createTheme({
    palette: {
      primary: {
        main: '#40b4e5',
        darker: '#1e566e',
      },
      neutral: {
        main: '#64748B',
        contrastText: '#fff',
      },
    },
  });

  const submit = (event) => {
    event.preventDefault();
    props.nuevaOpciones(inputText);
    setInputText("");
  };

  return(
      <form onSubmit={submit}>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          sx={{margin:'10px'}}
        >
          <TextField value = {inputText} onChange = {handleInputText} label={''} size="small"/>
          <ThemeProvider theme={theme}>
            <IconButton type = "submit" color="primary" size="large"><AddCircleIcon fontSize="inherit"/></IconButton>
          </ThemeProvider>
        </Grid>
      </form>
  );

}

export default OpcionesForm
