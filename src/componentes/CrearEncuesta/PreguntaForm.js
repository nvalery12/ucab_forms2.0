import React from "react";
import { v4 as uuidv4 } from 'uuid';
import Button from '@mui/material/Button';

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
import IconButton from '@mui/material/IconButton';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';

function PreguntaForm(props){

  const [openModal, setOpenModal] = React.useState(false);
  const [openDespliegue, setOpenDespliegue] = React.useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleDespliegue = () => setOpenDespliegue(!openDespliegue);

  const handleCloseModal = (event) => {
    //console.log(event.currentTarget.id);
    if (event.currentTarget.id !== undefined){
      props.nuevaPregunta({id: uuidv4(), tipo_pregunta: event.currentTarget.id});
    }
    setOpenModal(false)
  };

  const submit = (event) => {
    event.preventDefault();
    handleOpenModal();
    //props.nuevaPregunta({id: uuidv4()});
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: '#ffc526',
        darker: '#1e566e',
      },
      secondary: {
        main: '#fff',
        contrastText: '#fff',
      },
    },
  });

  return (
    <form onSubmit = {submit}>
        <ThemeProvider theme={theme}>
          <Button type = "submit" variant="contained" color='primary' sx = {{display: 'block', m: '20px auto', width:'150px'}}>
            <AddCircleOutlineOutlinedIcon fontSize="large" color="secondary" sx={{display: 'block', m: '0 auto'}}/>
          </Button>
        </ThemeProvider>
        
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
              <ListItemButton id = 'Selección simple'  onClick = {handleCloseModal}>
                <ListItemIcon>
                  <RadioButtonCheckedIcon/>
                </ListItemIcon>
                <ListItemText primary = "Selección simple"/>
              </ListItemButton>
              <ListItemButton id = 'Selección multiple' onClick = {handleCloseModal}>
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
                  <ListItemButton id = 'Respuesta Corta' sx={{ pl: 4 }} onClick = {handleCloseModal}>
                    <ListItemText primary="Respuesta Corta" />
                  </ListItemButton>
                  <ListItemButton id = 'Respuesta Larga' sx={{ pl: 4 }} onClick = {handleCloseModal}>
                    <ListItemText primary="Respuesta Larga" />
                  </ListItemButton>
                </List>
              </Collapse>
              <ListItemButton id = 'Fecha' onClick = {handleCloseModal}>
                <ListItemIcon>
                  <DateRangeIcon/>
                </ListItemIcon>
                <ListItemText primary = "Fecha"/>
              </ListItemButton>
              <ListItemButton id = 'Multimedia' onClick = {handleCloseModal}>
                <ListItemIcon>
                  <ImageIcon/>
                </ListItemIcon>
                <ListItemText primary = "Multimedia"/>
              </ListItemButton>
              </List>

            </Box>
        </Modal>
    </form>
  )
}

export default PreguntaForm
