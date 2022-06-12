import {
    BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title,
    Tooltip
} from 'chart.js';
import faker from 'faker';
import React from 'react';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Bar Chart',
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Dataset 2',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

class CardsRespuesta extends React.Component {

    render() {
        return (
            <div className="contenido">
                {/* Seccion 1 */}


                <div className="container pt-5">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <h3>Cantidad de respuestas</h3>
                                </div>
                                <div className="card-body">
                                    <div className="form-check form-switch">
                                        <label className="form-check-label" htmlFor="flexSwitchCheckChecked">No se aceptan mas respuestas </label>
                                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* seccion 2 */}
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
                                                <canvas id="chart_pregunta_1">
                                                </canvas>
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
                                                <canvas id="chart_pregunta_2"></canvas>
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
                                                <canvas id="chart_pregunta_3"></canvas>
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
                        <div className="col col-md-4"><button type="button" className="btn btn-warning">Exportar Excell</button></div>
                        <div className="col col-md-4"><button type="button" className="btn btn-warning">Volver inicio</button></div>
                    </div>
                </div>

            </div>
        );
    }
}

export default CardsRespuesta;

