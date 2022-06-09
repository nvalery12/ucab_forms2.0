import React from 'react';
import './CrearEncuesta.css';


//import Pregunta from './Pregunta.js';
import PreguntaForm from './PreguntaForm.js';
import PreguntaLargaCorta from './PreguntaLargaCorta.js';
//import PreguntaSeleccion from './PreguntaSeleccion.js';

import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function CrearEncuesta(){

  const [listaPreguntas, setListaPreguntas] = React.useState([]);

  const nuevaPregunta = (pregunta) => {
     setListaPreguntas([pregunta, ...listaPreguntas]);
   };

   const borrarPregunta = (id) => {
     const listaFiltrada = listaPreguntas.filter((e, index) => index !== id);
     setListaPreguntas(listaFiltrada);
   };

  return(
    <div>
        <Box
        component="form"
        className = "title_encuesta"
        noValidate
        autoComplete="off"
        >
            <Stack spacing = {3}>
                <TextField style = {{marginLeft: '2%'}}  id="title_encuesta" label="Titulo de la Encuesta" variant="standard" InputProps={{ style: {width: '60%',fontSize: 40 } }} />
                <TextField
                  style = {{marginLeft: '2%',width:"92%",marginBottom:'2%'}}
                  id="outlined-multiline-flexible"
                  label="Descripcion de la encuesta"
                  multiline
                  maxRows={4}
                />
            </Stack>
        </Box>
        <PreguntaForm nuevaPregunta = {nuevaPregunta}/>
        <div>
        {
          listaPreguntas.map((e,index) =>(
            <PreguntaLargaCorta
             pregunta={e}
             borrarPregunta={borrarPregunta}
             id={index}
            />
          ))
        }
        </div>
    </div>
  );
}

export default CrearEncuesta;
