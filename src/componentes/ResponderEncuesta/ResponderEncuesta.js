import React from "react";
import { useState, useEffect, useCallback } from "react";
import './ResponderEncuesta.css'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from "@mui/material/TextField";
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import esLocale from "date-fns/locale/es";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { useUser } from "../hooks/useUser";
import { useParams } from "react-router-dom";
import { getFormOnce } from "../../api/forms";
import { LinearProgress } from "@mui/material";


export default function ResponderEncuestas() {
  const [selectedDateInicio, setSelectedDateInicio] = React.useState(null);
  const [selectedDateFin, setSelectedDateFin] = React.useState(null);
  const {id: formId} = useParams();
  const [form, setForm] = useState(null);
  const [response, setResponse] = useState({});
  const [answers, setAnswers] = useState();
  const [loading, setLoading] = useState(true);
  const { user} = useUser();

  const initializeAnswers = useCallback((questions) => {
    const answers = {};

    questions.forEach((question) => {
      if (question.type === "Multimedia") {
        answers[question.id] = [];
      } else if (question.type === "Selección multiple") {
        answers[question.id] = question.opciones[0];
      } else {
        answers[question.id] = "";
      }
    });

    setAnswers(answers);
  }, []);

  useEffect(() => {
    
    const getForm = async () => {
      const form = await getFormOnce(formId);
      if (form) {
        if (form.settings.onlyOneResponse && !user) {
          setForm(form);
          return setLoading(false);
        }

        setForm(form);
        initializeAnswers(form.questions);

      }
      setLoading(false);
    };

    getForm();
  }, [formId, initializeAnswers, user]);

  if (loading) {
    return (
      <Box>
        <LinearProgress />
      </Box>
    );
  }

  const handleInput = (pregunta) => (e) => {
    setAnswers(...answers,[pregunta.id] = e);
  }

  const select_type_answer = (pregunta) =>{
    switch (pregunta.type) {
      case "Respuesta Corta":
        return <Box
            component="form"
            className = "boxResponder question"
            noValidate
            autoComplete="off"
            sx={{paddingBottom: "10px"}}
          >
            <Stack sx={{display:'flex'}}>
              <p className='DescripcionPregunta'>{pregunta.title}</p>
              <FormControl>
              <TextField id="outlined-basic" inputProps={{ maxLength: 100 }} className="RespuestaCorta" variant="outlined" onChange={handleInput(pregunta)}/>
              </FormControl>
            </Stack>
          </Box>
       case "Respuesta Larga":
         return <Box
            component="form"
            className = "boxResponder question"
            noValidate
            autoComplete="off"
            sx={{paddingBottom: "10px"}}
          >
            <Stack sx={{display:'flex'}}>
              <p className='DescripcionPregunta'>{pregunta.title}</p>
              <FormControl>
                <TextareaAutosize className="RespondTextArea" sx={{margin: "5px 10px"}} maxRows={3} minRows={3}/>
              </FormControl>
            </Stack>
          </Box>
       case "Selección simple":
         return <Box
          component="form"
          className = "boxResponder question"
          noValidate
          autoComplete="off"
          sx={{paddingBottom: "10px"}}
        >
          <Stack sx={{display:'flex'}}>
            <p className='DescripcionPregunta'>{pregunta.title}</p>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                className="PreguntaSeleccion"
              >
                {pregunta.opciones.map((opcion) =>(
                  <FormControlLabel value={opcion} control={<Radio />} label={opcion} />)
                )}
                
              </RadioGroup>
            </FormControl>
          </Stack>
        </Box>
       case "Selección multiple":
         return <Box
            component="form"
            className = "boxResponder question"
            noValidate
            autoComplete="off"
            sx={{paddingBottom: "10px"}}
          >
            <Stack sx={{display:'flex'}}>
              <p className='DescripcionPregunta'>{pregunta.title}</p>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  className="PreguntaSeleccion"
                >
                  {pregunta.opciones.map((element)=>(
                    <FormControlLabel control={<Checkbox />} label={element} />
                  ))}
                  
                </RadioGroup>
              </FormControl>
            </Stack>
          </Box>
       case  "Fecha":
         return <Box
            component="form"
            className = "boxResponder question"
            noValidate
            autoComplete="off"
            sx={{paddingBottom: "10px"}}
          >
            <Stack sx={{display:'flex'}}>
              <p className='DescripcionPregunta'>{pregunta.title}</p>
              <FormControl>
                <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale = {esLocale}>
                  <DateTimePicker
                    value={selectedDateInicio}
                    onChange={(newValue) => {
                      setSelectedDateInicio(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} style = {{width: '100%', margin: '0 auto', marginTop: '3px', marginBottom: '10px', borderRadius: '4px'}} size="small"/>}
                  />
                </LocalizationProvider>
              </FormControl>
            </Stack>
          </Box>
       case "Multimedia":
         return <Box
            component="form"
            className = "boxResponder question"
            noValidate
            autoComplete="off"
            sx={{paddingBottom: "10px"}}
          >
            <Stack sx={{display:'flex'}}>
              <p className='DescripcionPregunta'>{pregunta.title}</p>
              <FormControl>
                <input className="RespuestaArchivo" type='file' />
              </FormControl>
            </Stack>
          </Box>
      default:
        console.log("Nothing");
        console.log(pregunta);
    }
  }


  return (
    <div className="">
      {form.questions.map((pregunta)=> (
        select_type_answer(pregunta)
      ))}
      
    </div>
  )
}