import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { Bar, Doughnut, Pie } from "react-chartjs-2";

import { Link } from "react-router-dom";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => 1),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => 1),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export const data2 = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};
export const data3 = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};
const Respuestas = () => (
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
                <Link to="/crear-encuesta" className="nav-link ">
                  Crear Encuesta
                </Link>
              </li>
              <li className="nav-item"></li>
              <li className="nav-item">
                <Link to="/respuestas-encuesta" className="nav-link active">
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
              <h3>Cantidad de respuestas</h3>
            </div>
            <div className="card-body">
              <div className="form-check form-switch">
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckChecked"
                >
                  No se aceptan mas respuestas{" "}
                </label>
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckChecked"
                  checked
                />
              </div>
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
              <h3>Personas que respondieron </h3>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
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
              <h3>Pregunta 1 </h3>
            </div>
            <div className="card-body">
              <div className="row justify-content-center">
                <div className="col col-md-5 align-self-center">
                  <div>
                    <Bar options={options} data={data} />{" "}
                  </div>
                </div>
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
              <h3>Pregunta 2 </h3>
            </div>
            <div className="card-body">
              <div className="row justify-content-center">
                <div className="col col-md-5 align-self-center">
                  <div>
                    <Doughnut data={data2} />{" "}
                  </div>
                </div>
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
              <h3>Pregunta 3 </h3>
            </div>
            <div className="card-body">
              <div className="row justify-content-center">
                <div className="col col-md-5 align-self-center">
                  <div>
                    <Pie data={data3} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* <!-- Seccion 6  --> */}
    <div className="container pt-5 pb-3">
      <div className="row justify-content-between">
        <div className="col col-md-4">
          <button type="button" className="btn btn-warning">
            Exportar Excell
          </button>
        </div>
        <div className="col col-md-4">
          <button type="button" className="btn btn-warning">
            Volver inicio
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Respuestas;
