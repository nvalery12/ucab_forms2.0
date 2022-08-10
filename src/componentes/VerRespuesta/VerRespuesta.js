import React, {Component, PropTypes} from 'react';
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

import './VerRespuesta.css';

export default function VerRespuestas() {
  const {form, questions, response} = useForm();

  function countSelections(){
    let totalmuestra = 0;
    for (const q of questions) {
      for (const r of response) {
        let counts = [];
        const ids = Object.keys(response.answer);
        for (const o of q.opciones) {
          counts.push(0);
        }
        for (let i=0 ; i<Object.keys(response.answer).length ; i++) {
          if(response.answer[ids[i]] == q.id){
            switch (q.type) {
              case "Selección simple":
                for(let i=0 ; i < r.length ; i++){
                  for (let i = 0; i < q.opciones.length; i++) {
                    if(r===q.opciones[i]){
                      counts[i]++;
                    }
                  }
                }
                break;
                
              case "Selección múltiple":
                for(let i=0 ; i < r.length ; i++){
                  if(r.includes(q.opciones[i])){
                    counts[i]++;
                  }
                }
                break;
              }
            }
          }
        }
      }
      totalmuestra++;
      for (let i=0 ; i<counts.length ; i++) {
        counts[o] = counts[o]/totalmuestra*100;
      }
      return counts;
  }

  // function estadisticasSeleccionMultiple(q,r,totalMuestra,counts){
  //   // for (const o of q.opciones) {
  //   //   counts[o] = counts[o]/totalMuestra*100;
  //   // }
  //   return counts;
  // }

  // function estadisticasSeleccionSimple(q,r,totalMuestra,counts){
  //   for (const o of q.opciones) {
  //     counts[o] = counts[o]/totalMuestra*100;
  //   }
  //   return counts;
  // }


  printDocument() {
    const input = document.getElementById('divToPrint');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF("p", "mm", "a4");
        var width = pdf.internal.pageSize.getWidth();
        var height = pdf.internal.pageSize.getHeight();
        pdf.addImage(imgData, 'JPEG', 0, 0, width, height);
        pdf.save("resultados.pdf");
      });
  }

  respuesta_Larga(response) {
    return (
      <Box
        component="form"
        className = "box question"
        noValidate
        autoComplete="off"
        sx={{paddingBottom: "10px"}}
        >
        <Stack sx={{display:'flex'}}>
          <p className='DescripcionPregunta'>{/*Pregunta*/}</p>
          <div className="email_answer">
            {(() => {
              for(var i=0;i<10;i++) {
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

  respuesta_Corta(response) {
    return (
      <Box
        component="form"
        className = "box question"
        noValidate
        autoComplete="off"
        sx={{paddingBottom: "10px"}}
        >
        <Stack sx={{display:'flex'}}>
          <p className='DescripcionPregunta'>{/*Pregunta*/}</p>
          <div className="email_answer">
            {(() => {
              for(var i=0;i<10;i++) {
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

  seleccion_Simple(response){
    return(
      <Box
        component="form"
        className = "box question"
        noValidate
        autoComplete="off"
        sx={{paddingBottom: "10px"}}
      >
        <Stack sx={{display:'flex'}}>
          <p className='DescripcionPregunta'>{}</p>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              className="PreguntaSeleccion"
            >
              <FormControlLabel value={/**/} control={<Radio />} label={/**/}/>
            </RadioGroup>
          </FormControl>
        </Stack>
      </Box>
    )
  }

  seleccion_Multiple(){
    return (
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
                <FormControlLabel control={<Checkbox />} label={/**/} />

            </RadioGroup>
          </FormControl>
        </Stack>
      </Box>
    )
  }


  Logica(){
    for (const r of responsesFromMail) {
      for (const q of questionsRef) {
        if(r.idDocument==q.id){
          switch (q.type) {
            case "Selección simple":
              
            break;
  
            case "Selección múltiple":
              
            break;
  
            case "Fecha":
              
            break;
  
            case "Multimedia":
              
            break;
          
            default:
              break;
          }
        }
      }
    }
  }

  // QuestionType(type) {
  //   switch(type) {
  //     case 'seleccionSimple':
  //       return null;
  //     case 'seleccionMultiple':
  //       return null;
  //     case 'respuestaLarga':
  //       return <respuesta_Larga/>;
  //     case 'respuestaCorta':
  //       return <respuesta_Corta/>;
  //     default:
  //       return;
  //   }
  // }

  render() {
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
            className = "box question"
            noValidate
            autoComplete="off"
            sx={{paddingBottom: "10px"}}
            >
            <Stack sx={{display:'flex'}}>
              <p className='DescripcionPregunta'>Respondiron:</p>
              <div className="email_answer">
                <span>example@example.com</span>
                <span>example@example.com</span>
                <span>example@example.com</span>
              </div>
            </Stack>
          </Box>
          {(() => {
            for(var i=0;i<10;i++) {
              {/* {this.QuestionType(type)} */}
            }
          })()}
        </div>
        <div className="mb5">
          <Button onClick={this.printDocument} id='btnPrint' variant="contained" color='secondary' sx={{height:'40px'}} startIcon={<PrintIcon />}>
            Imprimir
          </Button>
        </div>
      </div>
    );
  }
}