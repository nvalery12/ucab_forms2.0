import { Link } from "react-router-dom";

const Index = () => (
  <div className="App">
    {/* <!-- Navbar  --> */}
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="m-auto">
          <img
            src="https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo.svg"
            alt=""
            width="30"
            height="24"
          />
          <Link to="/" className="navbar-brand">
            UCAB form
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="me-auto">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link active">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/crear-encuesta" className="nav-link ">
                  Crear Encuesta
                </Link>
              </li>
              <li className="nav-item"></li>
              <li className="nav-item">
                <Link to="/respuestas-encuesta" className="nav-link">
                  Encuestas
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/crear-encuesta" className="nav-link">
                  Iniciar sesion
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>

    {/* <!-- Seccion 1  --> */}

    <div className="container pt-5">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h3>Ucab forms </h3>
            </div>
            <div className="card-body"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Index;
