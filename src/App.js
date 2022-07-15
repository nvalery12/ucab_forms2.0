import './App.css';
import { useAuth } from './api/firebaseConfiguration';
import { ThemeProvider, createTheme } from '@mui/material/styles';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";
import CrearEncuesta from './componentes/CrearEncuesta/CrearEncuesta';
import PreguntaMatriz from './componentes/CrearEncuesta/PreguntaMatriz';
import VerEncuestas from './componentes/VerEncuestas/ListaEncuestas';
import UserConfig from './componentes/Configuracion-User/UserConfig';
import SolicitarCopia from './componentes/Mensaje-Final/SolicitarCopia';
import Header from './componentes/Header/Header';
import Login from './componentes/Login-Register/Login';
import VerRespuesta from './componentes/VerRespuesta/VerRespuesta'


export default function App() {
  const currentUser = useAuth();

  const theme = createTheme( {
    typography: {
      fontFamily: [
        'Poppins',
        'sans-serif'
      ].join(',')
    },
    palette: {
      primary: {
        light: '#66c3ea',
        main: '#40b4e5',
        dark: '#2c7da0',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ffd051',
        main: '#ffc526',
        dark: '#b2891a',
        contrastText: '#000',
      },
    }
  });

  return (
      <div className="App">
        <ThemeProvider theme={theme}>
          {(currentUser?.email) ? (
            <div className="">
              <Header />
              <UserConfig />
            </div>
          ) : (
            <Login/>
          )}
        </ThemeProvider>
      </div>
  );
}