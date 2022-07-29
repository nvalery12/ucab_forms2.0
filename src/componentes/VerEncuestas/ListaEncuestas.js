import * as React from 'react';
import './ListaEncuestas.css';
import Ejemplo from '../../resources/ejemplo.jpg';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '10px',
  border: '3px solid #40b4e5',
  boxShadow: 24,
  p: 4,
};


export default function ListaEncuestas() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="row">
      <div className="column">
        <button className='btnViewEncuesta'>
          <img className='form-picture' src={Ejemplo} alt='Ejemplo de ejemplo'/>
        </button>
        <div className="title-box">
          <span className='form-title'>Hello darknest my old friend</span>
          <IconButton className="info-btn" onClick={handleOpen}>
            <InfoIcon className='info-icon'/>
          </IconButton>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Titulo de la encuesta
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Descripcion<br/>Fecha creada<br/>Numero de respuestas
              </Typography>
            </Box>
          </Modal>
        </div>
      </div>
    </div> 
  );
}