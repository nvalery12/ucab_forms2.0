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
import VerEncuestas from './componentes/VerEncuestas/ListaEncuestas';
import UserConfig from './componentes/Configuracion-User/UserConfig';
import Header from './componentes/Header/Header';
import Login from './componentes/Login-Register/Login';


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
        light: '#579bb9',
        main: '#2e83a8',
        dark: '#205b75',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ffd051',
        main: '#ffc526',
        dark: '#ffd051',
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
              <CrearEncuesta/>
            </div>
          ) : (
            <Login/>
          )}
        </ThemeProvider>
      </div>
  );
}