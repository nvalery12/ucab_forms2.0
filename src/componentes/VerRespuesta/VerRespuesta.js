import React, { useState, Component, PropTypes, useEffect, useMemo } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import BarChart from './graficas/BarChart';
import Histogram from './graficas/Histogram';
import PieChart from './graficas/PieChart';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import PrintIcon from '@mui/icons-material/Print';
import Button from '@mui/material/Button';
import { useForm } from '../hooks/useForm';
import { useNavigate } from "react-router-dom";
import { deleteForm, getUserForms, getCollaborationForms } from '../../api/forms';
import { useUser } from '../hooks/useUser';
import { ConstructionOutlined } from '@mui/icons-material';

import './VerRespuesta.css';

/* Este codigo retorna un arreglo de n valores float que son
    los porcentajes de respuesta para cada opcion de una pregunta que recibe
    Funciona? No lo se. Tiene sentido? Probablemente no. Lo haria de nuevo? Jamas.
    Resumen: Recibe un documento de question, cicla sobre responses y verifica el 
    tipo de pregunta, cuenta las respuestas, las suma en un arreglo, divide, opera y chao.
    No se como implementarlo con lo demas, auxilio
function countSelections() {

  [form, questions, respons] = useForm();

  const q = questions;

  let totalmuestra = 0;
  // for (const q of questions) {
  for (const r of response) {
    let counts = [];
    const ids = Object.keys(response.answer);
    for (const o of q.opciones) {
      counts.push(0);
    }
    for (let i = 0; i < ids.length; i++) {
      if (response.answer[ids[i]] == q.id) {
        switch (q.type) {
          case "Selección simple":
            for (let i = 0; i < r.length; i++) {
              for (let i = 0; i < q.opciones.length; i++) {
                if (r === q.opciones[i]) {
                  counts[i]++;
                }
              }
            }
            break;

          case "Selección múltiple":
            for (let i = 0; i < r.length; i++) {
              if (r.includes(q.opciones[i])) {
                counts[i]++;
              }
            }
            break;
        }
      }
    }
  }
  totalmuestra++;
  for (let i = 0; i < counts.length; i++) {
    counts[o] = counts[o] / totalmuestra * 100;
  }
  //return counts;



  return data.maps(x => x);
}
*/


export default function VerRespuestas() {

  const user = useUser();
  const navigate = useNavigate();
  const [userForms, setUserForms] = useState([]);
  const [collaborationForms, setCollaborationForms] = useState([]);
  const [loadingUserForms, setLoadingUserForms] = useState(true);
  const [loadingCollaborationForms, setLoadingCollaborationForms] = useState(true);

  useEffect(() => {
    const unsubscribeUserForms = getUserForms(user.id, (forms) => {
      
      setUserForms(forms);
      setLoadingUserForms(false);
    });

    return () => {
      unsubscribeUserForms();
    };
  }, [user]);

  if (loadingUserForms) {
    return (
      <div className='spinner'></div>
    )      
  }

  const formularios = () =>{
    let encuestas = [];
    console.log('angy <3')
    for (let i = 0; i < userForms.length; i++) {  
      let form = userForms[i];
      console.log(form);
      for (let j = 0; j < form.length; j++) {  
        let question = form[j];
        console.log(question);
      }
    }
    return encuestas;
  };


/*  const resultadosBarChart = () => {

    const data = Array(questions[1].opciones.length);


    console.log(questions[1].opciones.length);
    //console.log(question[1].opciones);

    for (var i = 0; i < questions[1].opciones.length; i++) {
      //console.log(question[1].opciones);
    }
    /*data.push({
      name: question[1].opciones,
      value: 0
    });


    return data.maps(x => x);
  }*/

  const respuesta_Larga = () => {
    return (
      <Box
        component="form"
        className="box question"
        noValidate
        autoComplete="off"
        sx={{ paddingBottom: "10px" }}
      >
        <Stack sx={{ display: 'flex' }}>
          <p className='DescripcionPregunta'>{/*Pregunta*/}</p>
          <div className="email_answer">
            {(() => {
              for (var i = 0; i < 10; i++) {
                <>
                  <span>{/*Respuesta*/}</span>
                </>
              }
            })()}
          </div>
        </Stack>
      </Box>
    )
  }

  const respuesta_Corta = () => {
    return (
      <Box
        component="form"
        className="box question"
        noValidate
        autoComplete="off"
        sx={{ paddingBottom: "10px" }}
      >
        <Stack sx={{ display: 'flex' }}>
          <p className='DescripcionPregunta'>{/*Pregunta*/}</p>
          <div className="email_answer">
            {(() => {
              for (var i = 0; i < 10; i++) {
                <>
                  <span>{/*Respuesta*/}</span>
                </>
              }
            })()}
          </div>
        </Stack>
      </Box>
    )
  }

  const seleccion_simple = () => {

    return (
      //<PieChart pieData={pData}/>
      null
    )
  }

  const QuestionType = (type) => {
    switch (type) {
      case 'seleccionSimple':
        return <seleccion_simple />;
      case 'seleccionMultiple':
        return null;
      case 'respuestaLarga':
        return <respuesta_Larga />;
      case 'respuestaCorta':
        return <respuesta_Corta />;
      default:
        return;
    }
  }

  const pData = [
    {
      name: "Apple",
      value: 54.85
    },
    {
      name: "Samsung",
      value: 47.91
    },
    {
      name: "Redmi",
      value: 16.85
    },
    {
      name: "One Plus",
      value: 16.14
    },
    {
      name: "Others",
      value: 10.25
    }
  ];

  const bData = [
    { name: 'Geeksforgeeks', students: 400 },
    { name: 'Technical scripter', students: 700 },
    { name: 'Geek-i-knack', students: 200 },
    { name: 'Geek-o-mania', students: 1000 }
  ];

  return (
    <div>
      <div id="divToPrint" className="mt4" sx={{
        backgroundColor: '#f5f5f5',
        width: '210mm',
        minHeight: '297mm',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}>
        <Box
          component="form"
          className="box question"
          noValidate
          autoComplete="off"
          sx={{ paddingBottom: "10px" }}
        >
          <Stack sx={{ display: 'flex' }}>
            <p className='DescripcionPregunta'>Respondiron:</p>
            <div className="email_answer">
              <span>example@example.com</span>
              <span>example@example.com</span>
              <span>example@example.com</span>
            </div>
          </Stack>
        </Box>
        {formularios()} 
        <PieChart pieData={pData} />
        <BarChart barData={bData} />
        {(() => {
          for (var i = 0; i < 10; i++) {
            {/* {this.QuestionType(type)} */ }
          }
        })()}
      </div>

    </div>
  );
}