import React from 'react'
import HoneyPic from '../../../resources/WhatsApp Image 2022-06-11 at 2.02.32 PM.jpeg'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Divider from '@mui/material/Divider';
import DeleteIcon from '@mui/icons-material/Delete';

const CuentaConfig = () => {

  return (
    <div>
      <h1 id='titulo-config'>Configuración de cuenta</h1>
      <form action="">
        <Divider sx={{marginBottom:'10px'}}/>
        <span className='subtutilos-config'>Foto de perfil</span>
        <div className="userConfig user-avatar">
          <Avatar alt="Honey Maria" src={HoneyPic} sx={{ width: 120, height: 120 }}/>
          <Button variant="contained" color='primary' sx={{margin:'0px 5px 0px 30px'}}>Subir</Button>
          <Button variant="outlined" sx={{ margin:'0px 5px'}}>Eliminar</Button>
        </div>
        <Divider sx={{marginBottom:'10px'}}/>
        <span className='subtutilos-config'>Datos del usuario</span>
        <div className="userConfig user-datos">
          <div className="Udatos user-nombre">
            <span>Nombres:</span>
            <input className='user-data-input'/>
          </div>
          <div className="Udatos user-apellido">
            <span>Apellidos:</span>
            <input className='user-data-input'/>
          </div>
          <div className="Udatos user-fechaNac">
            <span>Fecha de nacimiento:</span>
            <input className='user-data-input'/>
          </div>
          <div className="Udatos user-genero">
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Genero</FormLabel>
            <RadioGroup
              row
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="female" control={<Radio />} label="Femenino" />
              <FormControlLabel value="male" control={<Radio />} label="Masculino" />
              <FormControlLabel value="other" control={<Radio />} label="Otros" />
            </RadioGroup>
          </FormControl>
          </div>
        </div>
        <Divider sx={{marginBottom:'10px'}}/>
        <span className='subtutilos-config'>Vincular cuentas</span>
        <div className="userConfig user-cuentasExternas">
        </div>
        <Divider sx={{marginBottom:'10px'}}/>
        <span className='subtutilos-config'>Eliminar cuenta</span>
        <div className="userConfig user-eliminarCuenta">
          <div className="text-eliminar">
            <p>Al eliminar la cuenta se borrara toda su información</p>
          </div>
            <Button id='btnDelete-User' variant="contained" color='secondary' sx={{color: '#12100c', height:'40px',display: 'flex', justifyContent: 'flex-end'}} startIcon={<DeleteIcon />}>
              Eliminar
            </Button>
        </div>
      </form>
    </div>
  )
}

export default CuentaConfig