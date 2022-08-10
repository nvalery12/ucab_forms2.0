import { QuestionMarkSharp } from '@mui/icons-material';
import React from 'react';
import BarChart from './graficas/BarChart'
import Histogram from './graficas/Histogram'
import PieChart from './graficas/PieChart'

import './VerRespuesta.css';

const VerRespuesta = () => {
  return (
    <div>
      VerRespuesta
      <BarChart />
      <Histogram />
      <PieChart />
    </div>

  )
}

export default VerRespuesta

for(let i of questions.length) {
  for (let z = 0; z < responses.length; z++) {
    const element = responses[z];
    element.answer[questions[i].id]
  }  
};
