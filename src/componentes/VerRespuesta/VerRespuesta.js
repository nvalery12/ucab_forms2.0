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
import { Autorenew, ConstructionOutlined } from '@mui/icons-material';
import { LinearProgress } from '@mui/material';

import './VerRespuesta.css';



export default function VerRespuestas() {

  const user = useUser();
  const navigate = useNavigate();
  const { form, questions, responses,loading} = useForm();

  const respuesta_Larga = (pregunta,respuesta) => {
    return (
      <Box
        component="form"
        className="box question"
        noValidate
        autoComplete="off"
        sx={{ paddingBottom: "10px" }}
      >
        <Stack sx={{ display: 'flex' }}>
          <p className='DescripcionPregunta'>{pregunta.title}</p>
          <div className="email_answer">
            {(() => {
              
                  <span>{respuesta.answer[pregunta.id]}</span>
            })()}
          </div>
        </Stack>
      </Box>
    )
  }

  const respuesta_Corta = (pregunta,respuesta) => {
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
                  <span>{respuesta.answer[pregunta.id]}</span>
            })()}
          </div>
        </Stack>
      </Box>
    )
  }

  const seleccion_simple = (pregunta) => {

    return (
      //<PieChart pieData={pData}/>
      null
    )
  }


  const responsestype = (pregunta,respuesta) =>{
    switch (pregunta.type) {
      case 'seleccionSimple':
        return <seleccion_simple />;
      case 'seleccionMultiple':
        return null;
      case 'Respuesta Larga':
        return respuesta_Larga(pregunta,respuesta);
      case 'Respuesta Corta':
        return respuesta_Corta(pregunta,respuesta);
      default:
        return;
    }
  }
  const QuestionType = (pregunta) => {
    responses.map((e)=>(
      responsestype(pregunta,e)
    ))
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

  const autor = (respuesta) =>{
    return <span>{respuesta.autor}</span>
  }

  

  if (loading) {
    return (
      <Box>
        <LinearProgress />
      </Box>
    );
  }

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
              {responses.map((e) => ( autor(e)))}
            </div>
          </Stack>
        </Box>
        <PieChart pieData={pData} />
        <BarChart barData={bData} />
        {questions.map((pregunta)=> (QuestionType(pregunta)))}
      </div>

    </div>
  );
}