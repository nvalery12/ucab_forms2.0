import React from "react";

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
                                        <label className="form-check-label" for="flexSwitchCheckChecked">No se aceptan mas respuestas </label>
                                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* seccion 2 */}
                <div class="container pt-5">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card">
                                <div class="card-header">
                                    <h3>Pregunta 1 </h3>
                                </div>
                                <div class="card-body">
                                    <div class="row justify-content-center">

                                        <div class="col col-md-5 align-self-center">
                                            <div>
                                                <canvas id="chart_pregunta_1">
                                                    <chart_pregunta_1 />
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
                <div class="container pt-5">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card">
                                <div class="card-header">
                                    <h3>Pregunta 2 </h3>
                                </div>
                                <div class="card-body">
                                    <div class="row justify-content-center">

                                        <div class="col col-md-5 align-self-center">
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
                <div class="container pt-5">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card">
                                <div class="card-header">
                                    <h3>Pregunta 3 </h3>
                                </div>
                                <div class="card-body">
                                    <div class="row justify-content-center">

                                        <div class="col col-md-5 align-self-center">
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
                <div class="container pt-5 pb-3">
                    <div class="row justify-content-between">
                        <div class="col col-md-4"><button type="button" class="btn btn-warning">Exportar Excell</button></div>
                        <div class="col col-md-4"><button type="button" class="btn btn-warning">Volver inicio</button></div>
                    </div>
                </div>
                {/* Chart Js  */}
                <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js" charset="utf-8"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
                {

                }
            </div>
        );
    }
}

export default CardsRespuesta;

