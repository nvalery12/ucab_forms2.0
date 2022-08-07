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