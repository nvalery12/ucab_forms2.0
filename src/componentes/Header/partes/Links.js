import * as React from 'react'
import '../Header.css'
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";
// import CrearEncuesta from '../../CrearEncuesta/CrearEncuesta';
// import VerEncuestas from '../../VerEncuestas/ListaEncuestas';

export default function Links() {

  return (
    <div className='headerOption'>
      <a href='0#'>Crear encuesta</a>
      <a href='0#'>Ver encuestas</a>
    </div>
  );
}

{/*
<Router>
  <nav>
    <Link to="/"> Home </Link>
    <Link to="/about"> About </Link>
    <Link to="/profile"> Profile </Link>
  </nav>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="*" element={<ErrorPage />} />
  </Routes>
  <div> Foooter </div>
</Router>
*/}