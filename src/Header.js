import React from 'react'
import "./Header.css"
import formimage from "./images/logo-white.png"

function Header() {
  return (
    <div className="header">
      <div className='headerInfo'>
        <img src={formimage} alt="Ucab Form Logo"/>
      </div>
      <div className='headerOption'>
        <a href='#'>Crear encuesta</a>
        <a href='#'>Ver resultados</a>
      </div>
      <div className='headerUser'>
      </div>
    </div>
  )
}

export default Header;