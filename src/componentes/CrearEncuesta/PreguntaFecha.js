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

import Box from '@mui/material/Box';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import esLocale from "date-fns/locale/es";
import TextField from '@mui/material/TextField';

function PreguntaFecha(props){

  const [openModal, setOpenModal] = React.useState(false);
  const [openDespliegue, setOpenDespliegue] = React.useState(false);

  const [selectedDate, setSelectedDate] = React.useState(null);

  const handleOpenModal = () => setOpenModal(true);
  const handleDespliegue = () => setOpenDespliegue(!openDespliegue);

  const handleCloseModal = () => setOpenModal(false);

  const borrarPregunta = () => {
    props.borrarPregunta(props.id);
  };

  return (
    <div>
        <Box
        component="form"
        className = "question"
        noValidate
        autoComplete="off"
        >
          <Stack spacing = {3}>
              <p className = "type_answer">Fecha</p>
              <IconButton sx = {{position:'absolute',right: '5%',color: "green"}} onClick = {handleOpenModal}>
                <BuildCircleIcon fontSize="large" sx = {{color: "green"}}/>
              </IconButton>
              <IconButton sx = {{position:'absolute',right: '2%',color: "green"}} onClick = {borrarPregunta}>
                <CancelIcon fontSize="large" sx = {{color: "green"}}/>
              </IconButton>
              <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale = {esLocale}>
                <DatePicker
                  disabled
                  label="Introducir fecha"
                  value={selectedDate}
                  onChange={(newValue) => {
                    setSelectedDate(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
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

export default PreguntaFecha
