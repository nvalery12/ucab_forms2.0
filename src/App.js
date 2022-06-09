//import logo from './logo.svg';
import './App.css';
import CrearEncuesta from './componentes/CrearEncuesta/CrearEncuesta.js';
import Logo from './styles/resource/logo-white.png';
//import Header from './Header.js';


function App() {
  return (
    <div className="App">
      <div className = "header" >
        <img src={Logo} alt="logo" width="410" height="110" />
      </div>

      <CrearEncuesta/>
    </div>
  );
}

export default App;
