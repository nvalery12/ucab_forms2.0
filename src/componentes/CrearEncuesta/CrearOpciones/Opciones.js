import React from 'react'

//import TextField from '@mui/material/TextField';

import IconButton from '@mui/material/IconButton';
import CancelIcon from '@mui/icons-material/Cancel';

function Opciones(props){

  const borrarOpcion = () => {
    props.borrarOpcion(props.id);
  };

  return(
    <div>
      <span>{props.opcion}</span>
      <IconButton>
        <CancelIcon onClick = {borrarOpcion}/>
      </IconButton>
    </div>
  );

}

export default Opciones
