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
import Restricciones from './componentes/CrearEncuesta/RestriccionesEncuesta/Restricciones';
import Header from './componentes/Header/Header';
import Login from './componentes/Login-Register/Login';
import VerRespuesta from './componentes/VerRespuesta/VerRespuesta';
import btnCrearEncuesta from './componentes/CrearEncuesta/btnCrearEncuesta';
import { Navigate, Outlet, Route, Routes, BrowserRouter as Router } from "react-router-dom";
import AuthPage from './componentes/AuthPage';
import UnAuthPage from './componentes/UnAuthPage';
import {UserProvider} from './componentes/hooks/useUser';
import {FormProvider} from './componentes/hooks/useForm';
import ListaEncuestas from './componentes/VerEncuestas/ListaEncuestas';

export default function App() {

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
        <UserProvider>
          <Router>
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route
            element={
              <UnAuthPage>
                <Outlet />
              </UnAuthPage>
            }
          >
            <Route path="/login" element={<Login/>} />
          </Route>
          <Route
            element={
              <AuthPage>
                <Outlet />
              </AuthPage>
            }
          >
            <Route
              path="/dashboard"
              element={
                <>
                  <Header />
                  <ListaEncuestas/>
                </>
              }
            />
            </Route>
            <Route
              path="/forms/edit/:id"
              element={
                <FormProvider>
                  <CrearEncuesta />
                </FormProvider>
              }
            />
          </Routes>
          </Router>
        </UserProvider>
      </div>
  );
}