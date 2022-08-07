import React from 'react'

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
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Box from '@mui/material/Box';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import esLocale from "date-fns/locale/es";
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import {saveQuestion} from '../../api/questions';

function PreguntaFecha(props){

  const [openModal, setOpenModal] = React.useState(false);
  const [openDespliegue, setOpenDespliegue] = React.useState(false);

  const [selectedDate, setSelectedDate] = React.useState(null);

  const handleOpenModal = () => setOpenModal(true);
  const handleDespliegue = () => setOpenDespliegue(!openDespliegue);

  const handleCloseModal = () => setOpenModal(false);

  const cambiarPregunta = (event ) =>{
    props.cambiarPregunta(props.id,event.currentTarget.id)
    handleCloseModal()
  }

  const handleInput = (event) =>{
    props.pregunta.title = event.target.value;
    saveQuestion(props.form,props.pregunta);
  }

  const borrarPregunta = () => {
    props.borrarPregunta(props.pregunta);
  };

  return (
    <div>
        <Box
        component="form"
        className = "box question"
        noValidate
        autoComplete="off"
        sx={{paddingBottom: "10px"}}
        >
          <Stack spacing = {3}>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              className = "questionTitle"
            >
              <p className = "type_answer">Fecha</p>
              <IconButton sx = {{position:'absolute',right: '5%',color: "#fff"}} onClick = {handleOpenModal}>
                <BuildCircleIcon fontSize="large" sx = {{color: "#ffc526"}}/>
              </IconButton>
              <IconButton sx = {{position:'absolute',right: '1%',color: "green"}} onClick = {borrarPregunta}>
                <CancelIcon fontSize="large" sx = {{color: "#ffc526"}}/>
              </IconButton>
            </Grid>
              <TextField
                required
                id="filled-required"
                label="Titulo de la pregunta"
                defaultValue={props.pregunta.title}
                style = {{width: '97%', marginLeft:'10px'}}
                size="small"
                variant="filled"
                onChange = {handleInput}
              />
              <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale = {esLocale}>
              <DateTimePicker
                // disabled
                label="Introducir fecha"
                value={selectedDate}
                onChange={(newValue) => {
                  setSelectedDate(newValue);
                }}
                renderInput={(params) => <TextField {...params} style = {{width: '97%', marginLeft:'10px'}} size="small"/>}
              />
              </LocalizationProvider>
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
              <ListItemButton id = "Selección simple" onClick = {cambiarPregunta}>
                <ListItemIcon>
                  <RadioButtonCheckedIcon/>
                </ListItemIcon>
                <ListItemText primary = "Selección simple"/>
              </ListItemButton>
              <ListItemButton id = "Selección multiple" onClick = {cambiarPregunta}>
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
                  <ListItemButton id = "Respuesta Corta" onClick = {cambiarPregunta} sx={{ pl: 4 }}>
                    <ListItemText primary="Respuesta Corta" />
                  </ListItemButton>
                  <ListItemButton id = "Respuesta Larga" onClick = {cambiarPregunta} sx={{ pl: 4 }}>
                    <ListItemText primary="Respuesta Larga" />
                  </ListItemButton>
                </List>
              </Collapse>
              <ListItemButton id = "Fecha" onClick = {cambiarPregunta}>
                <ListItemIcon>
                  <DateRangeIcon/>
                </ListItemIcon>
                <ListItemText primary = "Fecha"/>
              </ListItemButton>
              <ListItemButton id = "Multimedia" onClick = {cambiarPregunta}>
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

export default PreguntaFecha
