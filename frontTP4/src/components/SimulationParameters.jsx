import React, {useContext} from 'react';
import TableTimeProb from "./TableTimeProb.jsx";
import {ContextoSimulacion} from "../contexts/ContextoSimulacion.jsx";

const SimulationParameters = () => {

    const {dispatch} = useContext(ContextoSimulacion);

    return (
        <div className="container-fluid">
            <div className="row d-flex justify-content-center mt-4">
                <div className="col-12 ">
                    <div className="card">
                        <div className="card-body">
                            <TableTimeProb></TableTimeProb>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row d-flex justify-content-center mt-2">
                <div className="col-6 d-flex flex-column">
                    <div className="card">
                        <div className="card-body">
                            <div className="row d-flex justify-content-center">
                                Intervalos de tiempo medio
                            </div>
                            <div className="row d-flex justify-content-center">
                                <div className="col-6 d-flex flex-column text-center">
                                    <label>Tiempo en menos</label>
                                    <input type="number" className="form-control" defaultValue={5} min={0}
                                    onChange={()=>{dispatch({ type: 'setTimeMin', value:parseFloat(event.target.value)})}}
                                    />
                                </div>
                                <div className="col-6 d-flex flex-column text-center">
                                    <label>Tiempo en mas</label>
                                    <input type="number" className="form-control" defaultValue={5} min={0}
                                    onChange={()=>{dispatch({ type: 'setTimeMax', value:parseFloat(event.target.value)})}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6 d-flex flex-column">
                    <div className="card">
                        <div className="card-body">
                            <div className="row d-flex justify-content-center">
                                Parametros trabajos C
                            </div>
                            <div className="row d-flex justify-content-center">
                                <div className="col-6 d-flex flex-column text-center">
                                    <label>Minutos post inicio</label>
                                    <input type="number" className="form-control" defaultValue={15} min={1}
                                    onChange={()=>{dispatch({ type: 'setTimeInitTC', value:parseFloat(event.target.value)})}}/>
                                </div>
                                <div className="col-6 d-flex flex-column text-center">
                                    <label>Minutos pre final</label>
                                    <input type="number" className="form-control" defaultValue={15} min={1}
                                    onChange={()=>{dispatch({ type: 'setTimeEndTC', value:parseFloat(event.target.value)})}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row d-flex justify-content-center mt-2">
                <div className="col-12 d-flex justify-content-center">
                    <div className="card">
                        <div className="card-body">
                            <div className="row d-flex justify-content-center">
                                <div className="col-12 text-center">
                                    Parametros tecnicos de la simulacion
                                </div>
                            </div>
                            <div className="row d-flex justify-content-center">
                                <div className="col-4 d-flex flex-column text-center">
                                    <label>Cantidad de tiempo</label>
                                    <input type="number" className="form-control" defaultValue={100} min={1}
                                    onChange={()=>{dispatch({ type: 'setCantTimeSim', value:parseFloat(event.target.value)})}}/>
                                </div>
                                <div className="col-4 d-flex flex-column text-center">
                                    <label>Hora inicio</label>
                                    <input type="number" className="form-control" defaultValue={50} min={1}
                                    onChange={()=>{dispatch({ type: 'setInitTimeView', value:parseFloat(event.target.value)})}}/>
                                </div>
                                <div className="col-4 d-flex flex-column text-center">
                                    <label>Cantidad iteraciones</label>
                                    <input type="number" className="form-control" defaultValue={50} min={1}
                                    onChange={()=>{dispatch({ type: 'setCantSimIterations', value:parseFloat(event.target.value)})}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row d-flex justify-content-center mt-2">
                <div className="col-2">
                    <button type="button" className="btn btn-success">Simular</button>
                </div>
            </div>
        </div>
    );
};

export default SimulationParameters;