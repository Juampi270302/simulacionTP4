import React, {useContext, useState, useReducer, useEffect} from 'react';
import TableTimeProb from "./TableTimeProb.jsx";
import {ContextoSimulacion} from "../contexts/ContextoSimulacion.jsx";

const SimulationParameters = () => {

    const {updateParams, params} = useContext(ContextoSimulacion);

    useEffect(() => {
        validateProb();
    }, [params.probTA, params.probTB, params.probTC, params.probTD]);
    useEffect(() => {
        validateHoraInicio();
    }, [params.initTimeView, params.cantTimeSim]);

    const initialState = {
        probMasUno: false,
        minMaxTC: false,
        minMinTC: false,
        horaInicioMax: false,
        probActual: 0
    };

    function reducer(errors, action) {
        switch (action.type) {
            case 'probMasUno':
                return {...errors, probMasUno: action.value};
            case 'minMaxTC':
                return {...errors, minMaxTC: action.value};
            case 'minMinTC':
                return {...errors, minMinTC: action.value};
            case 'horaInicioMax':
                return {...errors, horaInicioMax: action.value};
            case "probActual":
                return {...errors, probActual: action.value};
            default:
                throw new Error();
        }
    }

    const [errors, setErrors] = useReducer(reducer, initialState);

    const validateProb = () => {
        let sum = params.probTA + params.probTB + params.probTC + params.probTD;
        console.log(sum)
        if (sum !== 1) {
            setErrors({type: 'probMasUno', value: true});
            setErrors({type: 'probActual', value: sum});
        } else {
            setErrors({type: 'probMasUno', value: false});
        }
    }

    const validateHoraInicio = () => {
        if (params.initTimeView >= params.cantTimeSim) {
            setErrors({type: 'horaInicioMax', value: true});
        } else {
            setErrors({type: 'horaInicioMax', value: false});
        }
    }

    return (
        <div className="container-fluid">
            <div className="row d-flex justify-content-center mt-4">
                <div className="col-12 ">
                    <div className="card">
                        <div className="card-body">
                            <TableTimeProb></TableTimeProb>
                            {errors.probMasUno &&
                                <span className="text-danger">
                                    Error,la suma de las probabilidades debe ser de 1(Valor actual: {errors.probActual})
                                </span>}
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
                                    <label>Tiempo medio en menos</label>
                                    <input type="number" className="form-control" defaultValue={5} min={0}
                                           onChange={() => {
                                               updateParams({type: 'setTimeMin', value: parseFloat(event.target.value)})
                                           }}
                                    />
                                </div>
                                <div className="col-6 d-flex flex-column text-center">
                                    <label>Tiempo medio en mas</label>
                                    <input type="number" className="form-control" defaultValue={5} min={0}
                                           onChange={() => {
                                               updateParams({type: 'setTimeMax', value: parseFloat(event.target.value)})
                                           }}/>
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
                                    <label>Minutos despues de inicio</label>
                                    <input type="number" className="form-control" defaultValue={15} min={1}
                                           onChange={() => {
                                               updateParams({
                                                   type: 'setTimeInitTC',
                                                   value: parseFloat(event.target.value)
                                               })
                                           }}/>
                                </div>
                                <div className="col-6 d-flex flex-column text-center">
                                    <label>Minutos antes del final</label>
                                    <input type="number" className="form-control" defaultValue={15} min={1}
                                           onChange={() => {
                                               updateParams({
                                                   type: 'setTimeEndTC',
                                                   value: parseFloat(event.target.value)
                                               })
                                           }}/>
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
                                           onChange={() => {
                                               updateParams({
                                                   type: 'setCantTimeSim',
                                                   value: parseFloat(event.target.value)
                                               })
                                           }}/>
                                </div>
                                <div className="col-4 d-flex flex-column text-center">
                                    <label>Hora inicio</label>
                                    <input type="number" className="form-control" defaultValue={50} min={1}
                                           onChange={() => {
                                               updateParams({
                                                   type: 'setInitTimeView',
                                                   value: parseFloat(event.target.value)
                                               })
                                           }}/>
                                </div>
                                <div className="col-4 d-flex flex-column text-center">
                                    <label>Cantidad iteraciones</label>
                                    <input type="number" className="form-control" defaultValue={50} min={0}
                                           value={params.cantSimIterations}
                                           onChange={() => {
                                               if(event.target.value > 1){
                                                   updateParams({
                                                       type: 'setCantSimIterations',
                                                       value: parseFloat(event.target.value)
                                                   })
                                               } else {
                                                   updateParams({
                                                       type: 'setCantSimIterations',
                                                       value: parseFloat(0)
                                               })}
                                           }}/>
                                </div>
                            </div>
                            {errors.horaInicioMax &&
                                <span className="text-danger">
                                    Error, la hora de inicio no puede ser mayor o igual a la cantidad de tiempo
                                </span>}
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