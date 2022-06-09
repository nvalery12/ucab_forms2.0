import React from 'react';

import './CrearEncuesta.css';
import OpcionesForm from './CrearOpciones/OpcionesForm.js';
import Opciones from './CrearOpciones/Opciones.js';

import Stack from '@mui/material/Stack';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import IconButton from '@mui/material/IconButton';
//import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import DateRangeIcon from '@mui/icons-material/DateRange';
import ImageIcon from '@mui/icons-material/Image';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import CancelIcon from '@mui/icons-material/Cancel';

import Box from '@mui/material/Box';

function PreguntaSeleccion(props){

  const [openModal, setOpenModal] = React.useState(false);
  const [openDespliegue, setOpenDespliegue] = React.useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleDespliegue = () => setOpenDespliegue(!openDespliegue);

  const handleCloseModal = () => setOpenModal(false);

  const borrarPregunta = () => {
    props.borrarPregunta(props.id);
  };

  const [listaOpciones, setListaOpciones] = React.useState([]);

  const nuevaOpciones = (opcion) => {
     setListaOpciones([opcion, ...listaOpciones]);
   };

   const borrarOpcion = (id) => {
     const listaFiltrada = listaOpciones.filter((e, index) => index !== id);
     setListaOpciones(listaFiltrada);
   };

  return(
    <div>
        <Box

        className = "question"
        noValidate
        autoComplete="off"
        >
          <Stack spacing = {3}>
              <p className = "type_answer">Seleccion Multiple</p>
              <IconButton sx = {{position:'absolute',right: '5%',color: "green"}} onClick = {handleOpenModal}>
                <BuildCircleIcon fontSize="large" sx = {{color: "green"}}/>
              </IconButton>
              <IconButton sx = {{position:'absolute',right: '2%',color: "green"}} onClick = {borrarPregunta}>
                <CancelIcon fontSize="large" sx = {{color: "green"}}/>
              </IconButton>
          </Stack>
          <OpcionesForm nuevaOpciones = {nuevaOpciones} />
          <div>
            {
              listaOpciones.map((e,index) =>(
                <Opciones
                 opcion={e}
                 borrarOpcion={borrarOpcion}
                 id={index}
                />
              ))
            }
          </div>
        </Box>
        <Modal
          open={openModal}
          onClose={handleCloseModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
            <Box
            component="form"
            className = "Select_type_answer"
            noValidate
            autoComplete="off"
            >
              <List
                sx={{borderRadius: "20px",width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                  <ListSubheader component="div" id="nested-list-subheader">
                    Tipo de Pregunta
                  </ListSubheader>
                }
              >
              <ListItemButton>
                <ListItemIcon>
                  <RadioButtonCheckedIcon/>
                </ListItemIcon>
                <ListItemText primary = "Selección simple"/>
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <CheckBoxIcon/>
                </ListItemIcon>
                <ListItemText primary = "Selección multiple"/>
              </ListItemButton>
              <ListItemButton onClick = {handleDespliegue}>
                <ListItemText primary = "Despliegue" />
                {openDespliegue ? <ExpandLess/> : <ExpandMore/>}
              </ListItemButton>
              <Collapse in={openDespliegue} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="Respuesta Corta" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="Respuesta Larga" />
                  </ListItemButton>
                </List>
              </Collapse>
              <ListItemButton>
                <ListItemIcon>
                  <DateRangeIcon/>
                </ListItemIcon>
                <ListItemText primary = "Fecha"/>
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <ImageIcon/>
                </ListItemIcon>
                <ListItemText primary = "Multimedia"/>
              </ListItemButton>
              </List>

            </Box>
        </Modal>
    </div>
  );

}

export default PreguntaSeleccion;
