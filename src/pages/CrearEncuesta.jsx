import { Link } from "react-router-dom";
const CrearEncuesta = () => (
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
                <Link to="/" className="nav-link ">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/crear-encuesta" className="nav-link active">
                  Crear Encuesta
                </Link>
              </li>
              <li className="nav-item"></li>
              <li className="nav-item">
                <Link to="/respuestas-encuesta" className="nav-link ">
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
              <h3>Titulo de la encuesta</h3>
              <h6>Descripcion de la encuesta</h6>
            </div>
            <div className="card-body">
              Iniciar sesion ipsum dolor sit amet consectetur adipisicing elit.
              Neque maiores rem adipisci sit. Animi nobis corporis nam esse.
              Neque facere expedita architecto officia doloribus placeat
              maiores, necessitatibus itaque ratione doloremque.
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- Seccion 2  --> */}
    <div className="container pt-5">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h3>Pregunta 1 </h3>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Pregunta 1
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Pregunta 1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- Seccion 3  --> */}
    <div className="container pt-5">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h3>Pregunta 2 </h3>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Pregunta 2
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Pregunta 2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- Seccion 4  --> */}
    <div className="container pt-5">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h3>Pregunta 3 </h3>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Pregunta 3
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Pregunta 3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- Seccion 5  --> */}
    <div className="container pt-5">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h3>Pregunta 4 </h3>
            </div>
            <div className="card-body">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Default checkbox
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Default checkbox
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Default checkbox
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                  checked
                />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  Checked checkbox
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- Seccion 6  --> */}
    <div className="container pt-5">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h3>Pregunta 5 </h3>
            </div>
            <div className="card-body">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Default radio
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  checked
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Default checked radio
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- Seccion 7  --> */}
    <div className="container pt-5">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h3>Pregunta 6 </h3>
            </div>
            <div className="card-body">
              <label htmlFor="customRange1" className="form-label">
                Example range
              </label>
              <input
                className="form-control mb-4"
                type="date"
                name="a"
                id="flexRadioDefault1"
              />
              <label htmlFor="customRange1" className="form-label">
                Example range
              </label>
              <input type="range" className="form-range" id="customRange1" />
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- Seccion 8  --> */}
    <div className="container pt-5">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h3>Pregunta 7 </h3>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label
                  htmlFor="exampleFormControlSelect1"
                  className="form-label"
                >
                  Example select
                </label>
                <select className="form-control" id="exampleFormControlSelect1">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- Seccion 9  --> */}
    <div className="container pt-5">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h3>Pregunta 8 </h3>
            </div>
            <div className="card-body">
              <div className="form-group">
                <div className="mb-3">
                  <label htmlFor="formFile" className="form-label">
                    Default file input example
                  </label>
                  <input className="form-control" type="file" id="formFile" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container pt-5 pb-3">
      <div className="row justify-content-between">
        <div className="col col-md-4">
          <button type="button" className="btn btn-warning">
            Volver
          </button>
        </div>
        <div className="col col-md-4">
          <button type="button" className="btn btn-warning">
            Siguiente
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default CrearEncuesta;
