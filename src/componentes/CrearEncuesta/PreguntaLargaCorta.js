import React from 'react';

import './CrearEncuesta.css';

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
import TextField from '@mui/material/TextField';
//import { styled } from '@mui/material/styles';

function PreguntaLargaCorta(props){

  const [openModal, setOpenModal] = React.useState(false);
  const [openDespliegue, setOpenDespliegue] = React.useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleDespliegue = () => setOpenDespliegue(!openDespliegue);

  const handleCloseModal = () => setOpenModal(false);

  const borrarPregunta = () => {
    props.borrarPregunta(props.id);
  };

  // const ColorBOX = styled(Box)(({theme}) =>({
  //   boxSizing: "border-box",
  //
  //   position: "relative",
  //   display: "block",
  //   width: "1136px",
  //   height: "auto",
  //   marginLeft: "auto",
  //   marginRight: "auto",
  //   marginTop: "5%",
  //
  //   background: "#FFFFFF",
  //   borderLeft: "11px solid #047732",
  //   boxShadow: "5px 4px 0px rgba(0, 0, 0, 0.25)",
  //   borderRadius: "20px",
  // }))

  return (
    <div>
        <Box
        component="form"
        className = "question"
        noValidate
        autoComplete="off"
        >
          <Stack spacing = {3}>
              <p className = "type_answer">{props.pregunta.tipo_pregunta}</p>
              <IconButton sx = {{position:'absolute',right: '5%',color: "green"}} onClick = {handleOpenModal}>
                <BuildCircleIcon fontSize="large" sx = {{color: "green"}}/>
              </IconButton>
              <IconButton sx = {{position:'absolute',right: '2%',color: "green"}} onClick = {borrarPregunta}>
                <CancelIcon fontSize="large" sx = {{color: "green"}}/>
              </IconButton>
              <TextField
                style = {{marginLeft: '2%',marginBottom:'2%'}}
                id="outlined-multiline-flexible"
                label="Descripcion de la encuesta"
                multiline
                maxRows={4}
                variant="standard"
                InputProps={{style: {width: '92%', borderBottom: '3px solid green'}}}
              />

          </Stack>
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
              <ListItemButton onClick = {handleCloseModal}>
                <ListItemIcon>
                  <RadioButtonCheckedIcon/>
                </ListItemIcon>
                <ListItemText primary = "Selección simple"/>
              </ListItemButton>
              <ListItemButton onClick = {handleCloseModal}>
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
                  <ListItemButton sx={{ pl: 4 }} onClick = {handleCloseModal}>
                    <ListItemText primary="Respuesta Corta" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }} onClick = {handleCloseModal}>
                    <ListItemText primary="Respuesta Larga" />
                  </ListItemButton>
                </List>
              </Collapse>
              <ListItemButton onClick = {handleCloseModal}>
                <ListItemIcon>
                  <DateRangeIcon/>
                </ListItemIcon>
                <ListItemText primary = "Fecha"/>
              </ListItemButton>
              <ListItemButton onClick = {handleCloseModal}>
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

export default PreguntaLargaCorta;
