import React,{useState} from 'react';
import './CrearEncuesta.css';
import {useMemo} from 'react';
import { useLocation } from "react-router-dom"

//import Pregunta from './Pregunta.js';
import PreguntaForm from './PreguntaForm.js';
import PreguntaLargaCorta from './PreguntaLargaCorta.js';
import PreguntaSeleccion from './PreguntaSeleccion.js';
import PreguntaMultimedia from './PreguntaMultimedia.js';
import PreguntaFecha from './PreguntaFecha.js';
import Restricciones from './RestriccionesEncuesta/Restricciones';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';import Button from '@mui/material/Button';
import { LinearProgress } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import { useUser } from '../hooks/useUser';
import { useForm } from '../hooks/useForm';
import {deleteForm,saveForm} from '../../api/forms';
import { useNavigate } from "react-router-dom";
import debounce from "lodash.debounce";
import { deleteQuestion, insertQuestion } from '../../api/questions';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const style = {
  overflowX: 'auto',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: '#efefef',
  border: '2px solid #000',
  boxShadow: 24,
  borderRadius: '15px',
  backgroundColor: '#efefef'
};

function CrearEncuesta(){
  const user = useUser();
  const { form, setForm, questions, setQuestions, loading } = useForm();
  const navigate = useNavigate();

  
  const [open, setOpen] = React.useState(false);

  const handleOpen = (e) => {
    e.preventDefault();
    setOpen(true);
    console.log(questions);
  };
  const handleClose = (e) => {
    e.preventDefault();
    setOpen(false);
  };

  const nuevaPregunta = (pregunta) => {
     const newQuestion = {index: pregunta.index, type: pregunta.type, title: "",opciones:[]};
     if (newQuestion!="") {
      pregunta.id = insertQuestion(form.id, newQuestion);
     }
     //console.log(listaPreguntas);
   };

   const cambiarPregunta = (id,newQuestion) =>{
     console.log(newQuestion);
     const cambioPregunta = questions.filter((e,index) =>{
       if (index === id){
         e.tipo_pregunta = newQuestion
       }
       return e
     });
     setQuestions(cambioPregunta);
   }

   const borrarPregunta = (pregunta) => {
     deleteQuestion(form.id,pregunta.id);
   };

   const select_type_answer = (pregunta,index) =>{
     switch (pregunta.type) {
       case "Respuesta Corta":
         return <PreguntaLargaCorta
                  pregunta={pregunta}
                  borrarPregunta={borrarPregunta}
                  id={pregunta.id}
                  cambiarPregunta={cambiarPregunta}
                  form = {form.id}
                 />
        case "Respuesta Larga":
          return <PreguntaLargaCorta
                   pregunta={pregunta}
                   borrarPregunta={borrarPregunta}
                   id={pregunta.id}
                   cambiarPregunta={cambiarPregunta}
                   form = {form.id}
                  />
        case "Selección simple":
          return <PreguntaSeleccion
                   pregunta={pregunta}
                   borrarPregunta={borrarPregunta}
                   id={pregunta.id}
                   cambiarPregunta={cambiarPregunta}
                   form = {form.id}
                  />
        case "Selección multiple":
          return <PreguntaSeleccion
                   pregunta={pregunta}
                   borrarPregunta={borrarPregunta}
                   id={pregunta.id}
                   cambiarPregunta={cambiarPregunta}
                   form = {form.id}
                  />
        case  "Fecha":
          return <PreguntaFecha
                    pregunta={pregunta}
                    borrarPregunta={borrarPregunta}
                    id={pregunta.id}
                    cambiarPregunta={cambiarPregunta}
                    form = {form.id}
                   />
        case "Multimedia":
          return <PreguntaMultimedia
                    pregunta={pregunta}
                    borrarPregunta={borrarPregunta}
                    id={pregunta.id}
                    cambiarPregunta={cambiarPregunta}
                    form = {form.id}
                   />
       default:
         console.log("Nothing");
         console.log(pregunta);
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
  // const sampleLocation = useLocation();

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
          questions.map((pregunta,index) =>(
            select_type_answer(pregunta,index)
          ))
        }
        <PreguntaForm idPregunta = {questions.length} nuevaPregunta = {nuevaPregunta}/>
        </div>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="flex-end"
          className='btnEncuesta'
        >
          <Button color='secondary' variant="outlined" startIcon={<DeleteIcon/>} onClick={handleDelete}>
            Borrar
          </Button>
           <Button variant="contained" onClick={handleOpen} endIcon={<SendIcon/>}>Enviar</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="child-modal-title"
            aria-describedby="child-modal-description"
          >
             <Box className="modal-question-matriz" sx={{ ...style}}>
              <span>Link encuesta:</span>
              <span id="linkEncuesta">{`http://localhost:3000/forms/answer/${form.id}`}</span>
              <Button variant="contained" startIcon={<ContentCopyIcon/>}>Copiar</Button>
            </Box> 
          </Modal> 
        </Grid>
    </div>
  );
}

export default CrearEncuesta;