import React from 'react'
import { logout } from '../../api/firebaseConfiguration';
import "./Header.css"
import formimage from "../../resources/logo-white.png"
import btnlogout from "../../resources/logout.png"

export default function Encuestas() {

  async function handleLogout() {
    try {
      await logout();
    } catch {
      alert("Error!");
    }
  }

  return (
    <div className="header">
      <div className='headerInfo'>
        <img src={formimage} alt="Ucab Form Logo"/>
      </div>
      <div className='headerOption'>
        <a href='0#'>Crear encuesta</a>
        <a href='0#'>Ver resultados</a>
      </div>
      <div className='headerUser'>
        <button onClick={handleLogout}><img src={btnlogout} alt="" /></button>
      </div>
    </div>
  )
}
