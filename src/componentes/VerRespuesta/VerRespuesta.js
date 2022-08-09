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
import { db } from "./firebaseConfiguration";

import './VerRespuesta.css';

const responsesRef = db.collection('forms').doc('IDform').get().collection('responses');
const questionsRef = db.collection('forms').doc('IDform').get().collection('questions');

const responsesFromMail = await responsesRef.where('author', '==', 'Correo');

export default class VerRespuestas extends Component {
  constructor(props) {
    super(props);
  }



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
      })
    ;
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
              for (const iterator of object) {
                <FormControlLabel value={</>} control={<Radio />} label={</>}/>
              }
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
              for (const iterator of object) {
                <FormControlLabel control={<Checkbox />} label={</>} />            
              }

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