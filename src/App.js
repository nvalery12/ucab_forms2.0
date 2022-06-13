import './App.css';
import { useAuth } from './api/firebaseConfiguration';
import CrearEncuesta from './componentes/CrearEncuesta/CrearEncuesta.js';
import Header from './componentes/Header/Header';
import Login from './componentes/Login-Register/Login';


export default function App() {
  const currentUser = useAuth();

  return (
    <div className="App">
      {(currentUser?.email) ? (
        <div className="">
          <Header />
          <CrearEncuesta/>
        </div>
      ) : (
        <Login/>
      )}
    </div>
  );
}