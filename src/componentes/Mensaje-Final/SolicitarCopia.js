import React from 'react'
import './SolicitarCopia.css'
import Box from '@mui/material/Box';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';

const SolicitarCopia = () => {
  return (
    <Box className='box-msg'>
      <h2>¿Desea recibir una copia de esta encuesta a su correo?</h2>
      <span>Correo al que desea enviar la copia</span>
      <div className='containerChangeEmail'>
        <span>ejemplo@gmail.com</span>
        <a href="0#">Cambiar</a>
      </div>
      <div className="containerBtnEmail">
      <Button className='btnSendCopy' variant="contained" endIcon={<SendIcon />}>
        Enviar
      </Button>
      </div>
    </Box>
  )
}

export default SolicitarCopia