import React, {useContext, useMemo, useState} from 'react';
import {ContextoSimulacion} from "../contexts/ContextoSimulacion.jsx";

const TableStateVector = ({filas}) => {
    const [page, setPage] = useState(1);

    const fpaginas = useMemo(() => {
        const startIdx = (page - 1) * 1000;
        // eslint-disable-next-line react/prop-types
        const endIdx = Math.min(startIdx + 1000, filas.filas.length);
        // eslint-disable-next-line react/prop-types
        return filas.filas.slice(startIdx, endIdx);
    }, [filas, page]);

    const lengthData = filas.filas.length;
    const pages = Math.ceil(lengthData / 1000);
    let pagesArray = [];
    for (let i = 1; i <= pages; i++) {
        pagesArray.push(i);
    }
    return (
        <>
            <div className="row d-flex">
                <div className="col-4 d-flex justify-content-center">
                    <select className="form-select" onChange={(e) => {
                        setPage(e.target.value)
                    }}>
                        {pagesArray && pagesArray.map((p) => {
                            return (<option value={p} key={p}>{p}</option>)
                        })}
                    </select>
                </div>
                <div className="col-4 d-flex justify-content-center flex-column text-center">
                    <label className="textoTitulo">Promedio permanencia</label>
                    <label className="textoSubTitulo">{filas.promedioPermanencia.toFixed(2)}</label>
                </div>
                <div className="col-4 d-flex justify-content-center flex-column text-center">
                    <label className="textoTitulo">Porcentaje ocupacion</label>
                    <label className="textoSubTitulo">{filas.porcentajeOcupacionServidor.toFixed(2)}</label>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-12 container-fluid justify-content-center">

                    {filas &&
                        <table className="table table-striped">
                            <thead>
                            <tr>
                                <th scope="col">Evento</th>
                                <th scope="col">Reloj</th>
                                <th scope="col">RND llegada</th>
                                <th scope="col">Tiempo entre llegadas</th>
                                <th scope="col">Hora proxima llegada</th>
                                <th scope="col">RND tipo trabajo</th>
                                <th scope="col">Tipo trabajo</th>
                                <th scope="col">Cola comun</th>
                                <th scope="col">Cola Trabajos C</th>
                                <th scope="col">Equipos en 2do plano</th>
                                <th scope="col">Lugares disponibles en cola</th>
                                <th scope="col">Contador de equipos</th>
                                <th scope="col">Hora cambio trabajo</th>
                                <th scope="col">Hora reanudacion trabajo</th>
                                <th scope="col">RND fin trabajo</th>
                                <th scope="col">Tiempo medio trabajo</th>
                                <th scope="col">Tiempo de trabajo</th>
                                <th scope="col">Hora fin trabajo</th>
                                <th scope="col">Estado tecnico</th>
                                <th scope="col">Hora inicio ocupacion</th>
                                <th scope="col">Hora fin ocupacion</th>
                                <th scope="col">Tiempo ocupacion</th>
                                <th scope="col">Tiempo permanencia equipos</th>
                            </tr>
                            </thead>
                            <tbody>
                            {fpaginas.map((state, index) => (
                                <tr key={index}>
                                    <td>{state.evento}</td>
                                    <td>{state.reloj.toFixed(2)}</td>
                                    <td>{state.llegada.rndLlegada.toFixed(2)}</td>
                                    <td>{state.llegada.tiempoEntreLlegada.toFixed(2)}</td>
                                    <td>{state.llegada.horaProximaLlegada.toFixed(2)}</td>
                                    <td>{state.llegada.rndTipoTrabajo.toFixed(2)}</td>
                                    <td>{state.llegada.trabajo}</td>
                                    <td>{state.colaVector.colaComun}</td>
                                    <td>{state.colaVector.colaTrabajoC}</td>
                                    <td>{state.colaVector.trabajoCSegundoPlano}</td>
                                    <td>{state.colaVector.lugaresLibres}</td>
                                    <td>{state.contadorEquipo}</td>
                                    <td>{state.horaCambioTrabajoC.toFixed(2)}</td>
                                    <td>{state.horaReanudacionTrabajoC.toFixed(2)}</td>
                                    <td>{state.finTrabajo.rndFinTrabajo.toFixed(2)}</td>
                                    <td>{state.finTrabajo.mediaTiempoAtencion}</td>
                                    <td>{state.finTrabajo.tiempoAtencion.toFixed(2)}</td>
                                    <td>{state.finTrabajo.horaFinTrabajo.toFixed(2)}</td>
                                    <td>{state.servidor.estado}</td>
                                    <td>{state.servidor.horaInicioOcupacion.toFixed(2)}</td>
                                    <td>{state.servidor.horaFinOcupacion.toFixed(2)}</td>
                                    <td>{state.servidor.tiempoOcupacionAcum.toFixed(2)}</td>
                                    <td>{state.servidor.tiempoPermanenciaEquipoAcum.toFixed(2)}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    }
                </div>
            </div>
        </>


    );
};

export default TableStateVector;