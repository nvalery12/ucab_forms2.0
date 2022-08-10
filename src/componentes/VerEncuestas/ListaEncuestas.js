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
  const [loadingUserForms, setLoadingUserForms] = useState(true);

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

    const handleAnswers = (form) => {
      navigate("/forms/edit/answers/"+form.id);
    }

    const formularios = (e) =>{
        return <div className="column" id={e.id}>
        <button className='btnViewEncuesta' onClick={()=>{handleAnswers(e)}}>
          <img className='form-picture' src={Ejemplo} alt='Ejemplo de ejemplo' />
        </button>
        <div className="title-box" >
          <span className='form-title'>{e.title}</span>
          <IconButton className="info-btn" onClick={()=>{handleEdit(e.id)}}>
            <InfoIcon className='info-icon'/>
          </IconButton>
          
        </div>
      </div>
    };

  return (
    <div className='row'>
      {
        userForms.map((e) => (
          formularios(e)
        ))
      }
    </div>
  );
}