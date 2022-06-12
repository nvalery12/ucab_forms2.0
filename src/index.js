import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import CrearEncuesta from './pages/CrearEncuesta';
import Index from './pages/Index';
import Respuestas from './pages/Respuestas';
import reportWebVitals from './reportWebVitals';

import ReactDOM from "react-dom/client";
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
// import your route components too

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/respuestas-encuesta" element={<Respuestas />} />
      <Route path="/crear-encuesta" element={<CrearEncuesta />} />
    </Routes>
  </BrowserRouter >


);



// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
