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

import './VerRespuesta.css';

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

  respuesta_Larga() {
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

  respuesta_Corta() {
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

  seleccion_simple() {
    
    return (
      //<PieChart pieData={pData}/>
      null
    )
  }

  QuestionType(type) {
    switch(type) {
      case 'seleccionSimple':
        return <seleccion_simple/>;
      case 'seleccionMultiple':
        return null;
      case 'respuestaLarga':
        return <respuesta_Larga/>;
      case 'respuestaCorta':
        return <respuesta_Corta/>;
      default:
        return;
    }
  }

  

  render() {

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
          <PieChart pieData={pData}/>
          <BarChart barData={bData}/>
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