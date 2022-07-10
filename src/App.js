import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useAuth } from './api/firebaseConfiguration';
import './App.css';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";
import PreguntaMatriz from './componentes/CrearEncuesta/PreguntaMatriz';
import Login from './componentes/Login-Register/Login';


export default function App() {
  const currentUser = useAuth();

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
        {(currentUser?.email) ? (
          <div className="">
            {/* <Header /> */}
            <PreguntaMatriz />
          </div>
        ) : (
          <Login />
        )}
      </ThemeProvider>
    </div>
  );
}