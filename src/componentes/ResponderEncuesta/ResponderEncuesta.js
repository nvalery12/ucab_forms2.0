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

  // const select_type = (pregunta) =>{
  //   switch (pregunta.type) {
  //     case value:
        
  //       break;
    
  //     default:
  //       break;
  //   }
  // }


  return (
    <div className="">
      {/*EJEMPLO DE RESPUESTA PARA SELECCION SIMPLE*/}
      <Box
        component="form"
        className = "box question"
        noValidate
        autoComplete="off"
        sx={{paddingBottom: "10px"}}
      >
        <Stack sx={{display:'flex'}}>
          <p className='DescripcionPregunta'>Nombre de la pregunta</p>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              className="PreguntaSeleccion"
            >
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="otres" control={<Radio />} label="Otres" />
            </RadioGroup>
          </FormControl>
        </Stack>
      </Box>
      {/*EJEMPLO DE RESPUESTA PARA SELECCION MULTIPLE*/}
      <Box
        component="form"
        className = "box question"
        noValidate
        autoComplete="off"
        sx={{paddingBottom: "10px"}}
      >
        <Stack sx={{display:'flex'}}>
          <p className='DescripcionPregunta'>Nombre de la pregunta</p>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              className="PreguntaSeleccion"
            >
              <FormControlLabel control={<Checkbox />} label="Leclerc" />
              <FormControlLabel control={<Checkbox />} label="Verstappen" />
              <FormControlLabel control={<Checkbox />} label="Latifi" />
            </RadioGroup>
          </FormControl>
        </Stack>
      </Box>
      {/*EJEMPLO DE RESPUESTA PARA FECHA*/}
      <Box
        component="form"
        className = "box question"
        noValidate
        autoComplete="off"
        sx={{paddingBottom: "10px"}}
      >
        <Stack sx={{display:'flex'}}>
          <p className='DescripcionPregunta'>Nombre de la pregunta</p>
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
      {/*EJEMPLO DE RESPUESTA PARA MULTIMEDIA*/}
      <Box
        component="form"
        className = "box question"
        noValidate
        autoComplete="off"
        sx={{paddingBottom: "10px"}}
      >
        <Stack sx={{display:'flex'}}>
          <p className='DescripcionPregunta'>Nombre de la pregunta</p>
          <FormControl>
            <input className="RespuestaArchivo" type='file' />
          </FormControl>
        </Stack>
      </Box>
      {/*EJEMPLO DE RESPUESTA PARA RESPUESTA LARGA*/}
      <Box
        component="form"
        className = "box question"
        noValidate
        autoComplete="off"
        sx={{paddingBottom: "10px"}}
      >
        <Stack sx={{display:'flex'}}>
          <p className='DescripcionPregunta'>Nombre de la pregunta</p>
          <FormControl>
            <TextareaAutosize className="RespondTextArea" sx={{margin: "5px 10px"}} maxRows={3} minRows={3}/>
          </FormControl>
        </Stack>
      </Box>
      {/*EJEMPLO DE RESPUESTA PARA RESPUESTA CORTA*/}
      <Box
        component="form"
        className = "box question"
        noValidate
        autoComplete="off"
        sx={{paddingBottom: "10px"}}
      >
        <Stack sx={{display:'flex'}}>
          <p className='DescripcionPregunta'>Nombre de la pregunta</p>
          <FormControl>
          <TextField id="outlined-basic" inputProps={{ maxLength: 100 }} className="RespuestaCorta" variant="outlined" />
          </FormControl>
        </Stack>
      </Box>
    </div>
  )
}