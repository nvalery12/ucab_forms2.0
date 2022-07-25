import * as React from 'react';
import './Restricciones.css'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import esLocale from "date-fns/locale/es";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function Restricciones() {
  const [selectedDateInicio, setSelectedDateInicio] = React.useState(null);
  const [selectedDateFin, setSelectedDateFin] = React.useState(null);

  return (
    <div className='parentBox'>
      <Box
        component="form"
        className = "boxRestriction question"
        noValidate
        autoComplete="off"
        sx={{paddingBottom: "10px"}}
      >
        <Stack sx={{display:'flex'}}>
          <p className = "type_restriction">Aplicar multiple veces</p>
          <input
            className="restriction-input"
            placeholder='Introduzca número de veces'
            type="number"
          />
        </Stack>
      </Box>
      <Box
        component="form"
        className = "boxRestriction question"
        noValidate
        autoComplete="off"
        sx={{paddingBottom: "10px"}}
      >
        <p className = "type_restriction">Tipo de restricción</p>
        <RadioGroup
          row
          sx={{display:'flex', justifyContent:'center', alignItems:'center', color:'black'}}
        >
          <FormControlLabel value="totalidad" control={<Radio />} label="Totalidad" />
          <FormControlLabel value="instancias" control={<Radio />} label="Instancias" />
        </RadioGroup>
      </Box>
      <Box
        component="form"
        className = "boxRestriction question"
        noValidate
        autoComplete="off"
        sx={{paddingBottom: "10px"}}
      >
        <Stack sx={{display:'flex'}}>
          <p className = "type_restriction">Rango de fechas</p>
          <RadioGroup defaultValue="no" row sx={{display:'flex', justifyContent:'center', alignItems:'center', color:'black'}}>
            <FormControlLabel value="si" label="Si" control={<Radio />} />
            <FormControlLabel value="no" label="No" control={<Radio />} />
          </RadioGroup>
          <span className='subquiestion-title'>Inicio</span>
          <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale = {esLocale}>
            <DateTimePicker
              // disabled
              
              value={selectedDateInicio}
              onChange={(newValue) => {
                setSelectedDateInicio(newValue);
              }}
              renderInput={(params) => <TextField {...params} style = {{width: '95%', margin: '0 auto', marginTop: '3px', marginBottom: '10px', borderRadius: '4px'}} size="small"/>}
            />
          </LocalizationProvider>
          <span className='subquiestion-title'>Fin</span>
          <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale = {esLocale}>
            <DateTimePicker
              // disabled
              
              value={selectedDateFin}
              onChange={(newValue) => {
                setSelectedDateFin(newValue);
              }}
              renderInput={(params) => <TextField {...params} style = {{width: '95%', margin: '0 auto', marginTop: '3px', marginBottom: '10px', borderRadius: '4px'}} size="small"/>}
            />
          </LocalizationProvider>
        </Stack>
      </Box>
      <Box
        component="form"
        className = "boxRestriction question"
        noValidate
        autoComplete="off"
        sx={{paddingBottom: "10px"}}
      >
        <Stack sx={{display:'flex'}}>
          <p className = "type_restriction">Restricción de ubicación</p>
          <RadioGroup defaultValue="no" row sx={{display:'flex', justifyContent:'center', alignItems:'center', color:'black'}}>
            <FormControlLabel value="si" label="Si" control={<Radio />} />
            <FormControlLabel value="no" label="No" control={<Radio />} />
          </RadioGroup>
          <span className='subquiestion-title'>Pais</span>
          <input
            className="restriction-input"
            placeholder='Introduzca el pais'
            type="text"
          />
          <span className='subquiestion-title'>Estado</span>
          <input
            className="restriction-input"
            placeholder='Introduzca el estado'
            type="text"
          />
          <span className='subquiestion-title'>Ciudad</span>
          <input
            className="restriction-input"
            placeholder='Introduzca la ciudad'
            type="text"
          />
        </Stack>
      </Box>
    </div>
  )
}