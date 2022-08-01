import React from 'react'

//import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CancelIcon from '@mui/icons-material/Cancel';

function Opciones(props){

  const [checked, setChecked] = React.useState(false);

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const borrarOpcion = () => {
    props.borrarOpcion(props.id);
  };

  const handleChecked = () =>{
    setChecked(!checked)
    //console.log(checked);
  }

  const isChecked = () =>{
    if (checked)
      console.log(props.opcion);
    return true;
  }

  return(
    <div>
      <Checkbox
      checked = {checked}
      {...label}
      onChange = {handleChecked}
      />
      <span>{props.opcion}</span>
      <IconButton>
        <CancelIcon onClick = {borrarOpcion}/>
      </IconButton>
    </div>
  );

}

export default Opciones
