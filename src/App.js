//import logo from './logo.svg';
import './App.css';
import CrearEncuesta from './componentes/CrearEncuesta/CrearEncuesta.js';
// import Logo from './styles/resource/logo-white.png';
import Header from './Header.js';


function App() {
  return (
    <div className="App">
      <Header />

      <CrearEncuesta/>
    </div>
  );
}

export default App;
