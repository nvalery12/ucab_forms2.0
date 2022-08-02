import React from 'react';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from 'recharts';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';


const App = () => {

  // Sample data
  const data = [
    { name: 'Geeksforgeeks', students: 400 },
    { name: 'Technical scripter', students: 700 },
    { name: 'Geek-i-knack', students: 200 },
    { name: 'Geek-o-mania', students: 1000 }
  ];


  return (
    <Box
      component="form"
      className="boxResponder question"
      noValidate
      autoComplete="off"
      sx={{ paddingBottom: "10px" }}
    >
      <Stack sx={{ display: 'flex' }}>
      <p className='DescripcionPregunta'>Probabilidad de que noelio pase Seminario</p>
        <BarChart 
          className='charts'
          width={600} 
          height={600} 
          data={data}
        >
          <Bar dataKey="students" fill="green" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
        </BarChart>
      </Stack>
    </Box>

  );
}

export default App;