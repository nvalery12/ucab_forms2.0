import './App.css';
import { useAuth } from './api/firebaseConfiguration';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";
import CrearEncuesta from './componentes/CrearEncuesta/CrearEncuesta';
import VerEncuestas from './componentes/VerEncuestas/ListaEncuestas';
import UserConfig from './componentes/Configuracion-User/UserConfig';
import Header from './componentes/Header/Header';
import Login from './componentes/Login-Register/Login';


export default function App() {
  const currentUser = useAuth();

  return (
      <div className="App">
        {(currentUser?.email) ? (
          <div className="">
            <Header />
            <VerEncuestas/>
          </div>
        ) : (
          <Login/>
        )}
      </div>
  );
}