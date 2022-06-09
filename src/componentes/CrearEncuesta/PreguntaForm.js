import React from "react";
import { v4 as uuidv4 } from 'uuid';
import Button from '@mui/material/Button';

function PreguntaForm(props){

  const submit = (event) => {
    event.preventDefault();
    props.nuevaPregunta({id: uuidv4()});
  };

  return (
    <form onSubmit = {submit}>
        <Button type = "submit" variant="contained" sx = {{display: 'block', m: 'auto'}}>
          Crear pregunta
        </Button>
    </form>
  )
}

export default PreguntaForm
