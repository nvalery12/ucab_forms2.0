import React from 'react';
import './CrearEncuesta.css';
import {useMemo} from 'react';


//import Pregunta from './Pregunta.js';
import PreguntaForm from './PreguntaForm.js';
import PreguntaLargaCorta from './PreguntaLargaCorta.js';
import PreguntaSeleccion from './PreguntaSeleccion.js';
import PreguntaMultimedia from './PreguntaMultimedia.js';
import PreguntaFecha from './PreguntaFecha.js';
import Restricciones from './RestriccionesEncuesta/Restricciones';
import BCrearEncuesta from './btnCrearEncuesta';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';import Button from '@mui/material/Button';
import { LinearProgress } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import { borderRadius } from '@mui/system';
import { useUser } from '../hooks/useUser';
import { useForm } from '../hooks/useForm';
import {deleteForm,saveForm} from '../../api/forms';
import { useNavigate } from "react-router-dom";
import debounce from "lodash.debounce";

const style = {
  overflowX: 'auto',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: '#efefef',
  border: '2px solid #000',
  boxShadow: 24,
  width: '80%',
  height: '90%',
  borderRadius: '25px'
};

function CrearEncuesta(){
  const user = useUser();
  const { form, setForm, loading } = useForm();
  const navigate = useNavigate();

  const [listaPreguntas, setListaPreguntas] = React.useState([]);
  const [open, setOpen] = React.useState(false);

  const handleOpen = (e) => {
    e.preventDefault();
    setOpen(true);
  };
  const handleClose = (e) => {
    e.preventDefault();
    setOpen(false);
  };

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

   const handleDelete = () => {
    deleteForm(form.id);
    navigate("/dashboard");
   }

   const debouncedSave = useMemo(() => {
    return debounce((form) => {
      saveForm(form);
    }, 1500);
  }, []);

  const handleChange = (field) => (e) => {
    const value = e.target.value;
    const newForm = { ...form, [field]: value };

    debouncedSave(newForm);
    setForm(newForm);
  };

   if (loading) {
    return (
      <Box>
        <LinearProgress />
      </Box>
    );
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
                <TextField style = {{marginLeft: '2%'}}
                  id="title_encuesta" label="Titulo de la Encuesta" variant="standard" value={form.title} 
                  InputProps={{ style: {width: '97%',fontSize: 40 } }} 
                  onChange={handleChange("title")}/>
                <TextField
                  style = {{marginLeft: '2%',width:"95%",marginBottom:'2%'}}
                  id="outlined-multiline-flexible"
                  label="Descripcion de la encuesta"
                  multiline
                  maxRows={4}
                  value={form.description}
                  onChange={handleChange("description")}
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
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="flex-end"
          className='btnEncuesta'
        >
          <Button color='secondary' variant="outlined" startIcon={<DeleteIcon />} onClick={handleDelete}>
            Borrar
          </Button>
          <Button variant="contained" onClick={handleOpen} endIcon={<SendIcon />}/>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="child-modal-title"
            aria-describedby="child-modal-description"
          >
            <Box className="modal-question-matriz" sx={{ ...style, width: '80%' }}>
              <Restricciones/>
            </Box>
          </Modal>
        </Grid>
    </div>
  );
}

export default CrearEncuesta;


// <PreguntaLargaCorta
//  pregunta={e}
//  borrarPregunta={borrarPregunta}
//  id={index}
// />
