import { useState, useEffect, useMemo } from 'react';
import './ListaEncuestas.css';
import Ejemplo from '../../resources/ejemplo.jpg';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import { deleteForm, getUserForms, getCollaborationForms } from '../../api/forms';
import { useUser } from '../hooks/useUser';
import { ConstructionOutlined } from '@mui/icons-material';

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
  const user = useUser();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [userForms, setUserForms] = useState([]);
  const [collaborationForms, setCollaborationForms] = useState([]);
  const [loadingUserForms, setLoadingUserForms] = useState(true);
  const [loadingCollaborationForms, setLoadingCollaborationForms] =
    useState(true);

    useEffect(() => {
      const unsubscribeUserForms = getUserForms(user.id, (forms) => {
        
        setUserForms(forms);
        setLoadingUserForms(false);
      });
  
      return () => {
        unsubscribeUserForms();
      };
    }, [user]);


  const handleEdit = (id) => {
    navigate("/forms/edit/" + id);
  }

    
    
    
    if (loadingUserForms) {
      return (
        <div className='spinner'></div>
      )      
    }

    const formularios = () =>{
      let encuestas = [];
      for (let i = 0; i < userForms.length; i++) {  
        let form = userForms[i];
        encuestas.push(<div className="column" id={i}>
          <button className='btnViewEncuesta' data={form.id}>
            <img className='form-picture' src={Ejemplo} alt='Ejemplo de ejemplo'/>
          </button>
          <div className="title-box" >
            <span className='form-title'>{form.title}</span>
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
                  {form.title}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Descripcion: {form.description}<br/>Fecha creada: {form.createAt}<br/>Numero de respuestas: {form.responses}
                </Typography>
              </Box>
            </Modal>
          </div>
        </div>)
      }
      return encuestas;
    };

  return (
    <div className='row'>
      {
        formularios()
      }
    </div>
  );
}