import React from 'react';
import './CrearEncuesta.css';


//import Pregunta from './Pregunta.js';
import PreguntaForm from './PreguntaForm.js';
import PreguntaLargaCorta from './PreguntaLargaCorta.js';
import PreguntaSeleccion from './PreguntaSeleccion.js';
import PreguntaMultimedia from './PreguntaMultimedia.js';
import PreguntaFecha from './PreguntaFecha.js';
import BCrearEncuesta from './btnCrearEncuesta';
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

   const select_type_answer = (pregunta,index) =>{
     switch (pregunta.tipo_pregunta) {
       case "Respuesta Corta":
         return <PreguntaLargaCorta
                  pregunta={pregunta}
                  borrarPregunta={borrarPregunta}
                  id={index}
                 />
        case "Respuesta Larga":
          return <PreguntaLargaCorta
                   pregunta={pregunta}
                   borrarPregunta={borrarPregunta}
                   id={index}
                  />
        case "Selección simple":
          return <PreguntaSeleccion
                   pregunta={pregunta}
                   borrarPregunta={borrarPregunta}
                   id={index}
                  />
        case "Selección multiple":
          return <PreguntaSeleccion
                   pregunta={pregunta}
                   borrarPregunta={borrarPregunta}
                   id={index}
                  />
        case  "Fecha":
          return <PreguntaFecha
                    pregunta={pregunta}
                    borrarPregunta={borrarPregunta}
                    id={index}
                   />
        case "Multimedia":
          return <PreguntaMultimedia
                    pregunta={pregunta}
                    borrarPregunta={borrarPregunta}
                    id={index}
                   />
       default:
         console.log("Nothing");
     }
   }

  return(
    <div>
        <Box
        component="form"
        className = "box title_encuesta"
        noValidate
        autoComplete="off"
        >
            <Stack spacing = {3}>
                <TextField style = {{marginLeft: '2%'}}  id="title_encuesta" label="Titulo de la Encuesta" variant="standard" InputProps={{ style: {width: '97%',fontSize: 40 } }} />
                <TextField
                  style = {{marginLeft: '2%',width:"95%",marginBottom:'2%'}}
                  id="outlined-multiline-flexible"
                  label="Descripcion de la encuesta"
                  multiline
                  maxRows={4}
                />
            </Stack>
        </Box>
        <div>
        {
          listaPreguntas.map((pregunta,index) =>(
            select_type_answer(pregunta,index)
          ))
        }
        <PreguntaForm nuevaPregunta = {nuevaPregunta}/>
        </div>
        <BCrearEncuesta/>
    </div>
  );
}

export default CrearEncuesta;


// <PreguntaLargaCorta
//  pregunta={e}
//  borrarPregunta={borrarPregunta}
//  id={index}
// />
