import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";
import { BrowserRouter as Router, Navigate, Outlet, Route, Routes } from "react-router-dom";
import AuthPage from './componentes/AuthPage';
import CrearEncuesta from './componentes/CrearEncuesta/CrearEncuesta';
import Header from './componentes/Header/Header';
import { FormProvider } from './componentes/hooks/useForm';
import { UserProvider } from './componentes/hooks/useUser';
import Login from './componentes/Login-Register/Login';
import ResponderEncuestas from './componentes/ResponderEncuesta/ResponderEncuesta';
import UnAuthPage from './componentes/UnAuthPage';
import VerEncuestas from './componentes/VerEncuestas/ListaEncuestas';
import VerRespuestas from './componentes/VerRespuesta/VerRespuesta';
import UserConfig from './componentes/Configuracion-User/UserConfig';

export default function App() {

  const theme = createTheme({
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
                <Route path="/login" element={<Login />} />
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
                      <VerEncuestas />
                    </>
                  }
                />
                <Route
                path="/forms/edit/:id"
                element={
                  <FormProvider>
                    <Header />
                    <CrearEncuesta />
                  </FormProvider>
                }
              />
              <Route
                path="/forms/edit/answers/:id"
                element={
                  <FormProvider>
                    <Header />
                    <VerRespuestas />
                  </FormProvider>
                }
              />
              <Route
                path="/manage"
                element={<>
                    <Header />
                    <UserConfig />
                    </>
                }
              />
              </Route>
              <Route path="/forms/answer/:id" element={<>
              <Header />
              <ResponderEncuestas /></>} />
            </Routes>
          </Router>
        </UserProvider>
      </ThemeProvider>
    </div>
  );
}