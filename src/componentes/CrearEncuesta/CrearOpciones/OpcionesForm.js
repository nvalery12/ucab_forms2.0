import React from 'react'

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import Box from '@mui/material/Box';

function OpcionesForm(props){

  const [inputText,setInputText] = React.useState("");

  const handleInputText = (e) =>{
    setInputText(e.target.value);
  }

  const submit = (event) => {
    event.preventDefault();
    props.nuevaOpciones(inputText);
    setInputText("");
  };

  return(
      <form onSubmit={submit}>
          <Box sx = {{position: 'relative',display: 'block',m:'auto',width:'45%'}}>
            <TextField value = {inputText} onChange = {handleInputText}/>
            <Button type = "submit">Agregar opcion</Button>
          </Box>
      </form>
  );

}

export default OpcionesForm
