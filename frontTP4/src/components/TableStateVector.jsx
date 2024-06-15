import React, {useContext, useEffect, useMemo, useState} from 'react';
import {ContextoSimulacion} from "../contexts/ContextoSimulacion.jsx";
import {getDatosPaginados} from "../scripts/HttpRequests.js";

const TableStateVector = ({calculosSimulacion}) => {
    const [filasPagina, setFilasPagina] = useState([]);

    const pages = Math.ceil(calculosSimulacion.cantidadFilas / 1000);
    let pagesArray = ["Seleccione fila"];
    for (let i = 1; i <= pages; i++) {
        pagesArray.push(i);
    }

    useEffect(() => {
        setFilasPagina(calculosSimulacion.filasPaginadas)
    }, [calculosSimulacion]);

    const getDatos = async (page) => {
        try {
            console.log(page);
            if (page !== "Seleccione fila") {
                const response = await getDatosPaginados(page - 1);
                setFilasPagina(response.filas);
                console.log(response.filas);
            }
        }
        catch (e)
        {console.log(e)}
    }

    return (
        <>
            <div className="row d-flex">
                <div className="col-4 d-flex justify-content-center">
                    <select className="form-select" onChange={(e) => {
                        getDatos(e.target.value)
                    }}>
                        {pagesArray && pagesArray.map((p) => {
                            return (<option value={p} key={p}>{p}</option>)
                        })}
                    </select>
                </div>
                <div className="col-4 d-flex justify-content-center flex-column text-center">
                    <label className="textoTitulo">Promedio permanencia</label>
                    <label className="textoSubTitulo">{calculosSimulacion.promedioPermanencia.toFixed(2)}</label>
                </div>
                <div className="col-4 d-flex justify-content-center flex-column text-center">
                    <label className="textoTitulo">Porcentaje ocupacion</label>
                    <label className="textoSubTitulo">{calculosSimulacion.porcentajeOcupacionServidor.toFixed(2)}</label>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-12 container-fluid justify-content-center table-responsive">

                    {filasPagina &&
                        <table className="table table-hover" >
                            <thead>
                            <tr>
                                <th className="bordeIzquierdo bordeArriba bordeAbajo"></th>
                                <th className="bordeIzquierdo bordeArriba bordeAbajo"></th>
                                <th className="bordeIzquierdo bordeArriba bordeAbajo"></th>
                                <th className="bordeArriba bordeAbajo"></th>
                                <th className="bordeArriba bordeAbajo">
                                    Llegadas
                                </th>
                                <th className="bordeArriba bordeAbajo"></th>
                                <th className="bordeArriba bordeAbajo"></th>
                                <th className="bordeIzquierdo bordeArriba bordeAbajo"></th>
                                <th className="bordeArriba bordeAbajo"></th>
                                <th className="bordeArriba bordeAbajo">
                                    Colas
                                </th>
                                <th className="bordeArriba bordeAbajo"></th>
                                <th className="bordeArriba bordeAbajo"></th>
                                <th className="bordeIzquierdo bordeArriba bordeAbajo"></th>
                                <th className="bordeArriba bordeAbajo"></th>
                                <th className="bordeIzquierdo bordeArriba bordeAbajo"></th>
                                <th className="bordeArriba bordeAbajo">Fin trabajo</th>
                                <th className="bordeArriba bordeAbajo"></th>
                                <th className="bordeArriba bordeAbajo"></th>
                                <th className="bordeIzquierdo bordeArriba bordeAbajo"></th>
                                <th className="bordeArriba bordeAbajo">Servidor</th>
                                <th className="bordeArriba bordeAbajo"></th>
                                <th className="bordeIzquierdo bordeArriba bordeAbajo">Acumuladores</th>
                                <th className="bordeDerecho bordeArriba bordeAbajo"></th>
                            </tr>
                            <tr>
                                <th scope="col" className="bordeIzquierdo bordeAbajo">Evento</th>
                                <th scope="col" className="bordeIzquierdo bordeAbajo">Reloj</th>
                                <th scope="col" className="bordeIzquierdo bordeAbajo">RND llegada</th>
                                <th scope="col" className="bordeAbajo">Tiempo entre llegadas</th>
                                <th scope="col" className="bordeAbajo">Hora proxima llegada</th>
                                <th scope="col" className="bordeAbajo">RND tipo trabajo</th>
                                <th scope="col" className="bordeAbajo">Tipo trabajo</th>
                                <th scope="col" className="bordeIzquierdo bordeAbajo">Cola comun</th>
                                <th scope="col" className="bordeAbajo">Cola Trabajos C</th>
                                <th scope="col" className="bordeAbajo">Equipos en 2do plano</th>
                                <th scope="col" className="bordeAbajo">Lugares disponibles en cola</th>
                                <th scope="col" className="bordeAbajo">Contador de equipos</th>
                                <th scope="col" className="bordeIzquierdo bordeAbajo">Hora cambio trabajo</th>
                                <th scope="col" className="bordeAbajo">Hora reanudacion trabajo</th>
                                <th scope="col" className="bordeIzquierdo bordeAbajo">RND fin trabajo</th>
                                <th scope="col" className="bordeAbajo">Tiempo medio trabajo</th>
                                <th scope="col" className="bordeAbajo">Tiempo de trabajo</th>
                                <th scope="col" className="bordeAbajo"> Hora fin trabajo</th>
                                <th scope="col" className="bordeIzquierdo bordeAbajo">Estado tecnico</th>
                                <th scope="col" className="bordeAbajo">Hora inicio ocupacion</th>
                                <th scope="col" className="bordeAbajo">Hora fin ocupacion</th>
                                <th scope="col" className="bordeIzquierdo bordeAbajo">Tiempo ocupacion</th>
                                <th scope="col" className="bordeDerecho bordeAbajo">Tiempo permanencia equipos</th>
                                {/*{*/}
                                {/*    calculosSimulacion > 0 &&*/}
                                {/*    vectorEstados.filas[vectorEstados.filas.length - 1].equipos.map((equipo, index) => (*/}
                                {/*        <>*/}
                                {/*            <th scope="col" className="bordeIzquierdo bordeArriba bordeAbajo">*/}
                                {/*                Id equipo</th>*/}
                                {/*            <th scope="col" className="bordeAbajo bordeArriba">Tipo trabajo</th>*/}
                                {/*            <th scope="col" className="bordeAbajo bordeArriba">Estado</th>*/}
                                {/*            <th scope="col" className="bordeAbajo bordeArriba">Hora llegada</th>*/}
                                {/*            <th scope="col" className="bordeAbajo bordeArriba">Hora inicio atencion</th>*/}
                                {/*            <th scope="col" className="bordeAbajo bordeArriba">Hora fin atencion estimada</th>*/}
                                {/*            <th scope="col" className="bordeAbajo bordeArriba">Hora salida</th>*/}
                                {/*        </>*/}
                                {/*    ))*/}
                                {/*}*/}
                            </tr>
                            </thead>
                            <tbody>
                            {filasPagina && filasPagina.map((fila, indice) => (
                                <tr key={indice}>
                                    <td className="bordeIzquierdo">{fila.evento}</td>
                                    <td className="bordeIzquierdo">{fila.reloj.toFixed(2)}</td>
                                    <td className="bordeIzquierdo">{fila.llegada.rndLlegada.toFixed(2)}</td>
                                    <td>{fila.llegada.tiempoEntreLlegada.toFixed(2)}</td>
                                    <td>{fila.llegada.horaProximaLlegada.toFixed(2)}</td>
                                    <td>{fila.llegada.rndTipoTrabajo.toFixed(2)}</td>
                                    <td>{fila.llegada.trabajo}</td>
                                    <td className="bordeIzquierdo">{fila.colaVector.colaComun}</td>
                                    <td>{fila.colaVector.colaTrabajoC}</td>
                                    <td>{fila.colaVector.trabajoCSegundoPlano}</td>
                                    <td>{fila.colaVector.lugaresLibres}</td>
                                    <td>{fila.contadorEquipo}</td>
                                    <td className="bordeIzquierdo">{fila.horaCambioTrabajoC.toFixed(2)}</td>
                                    <td>{fila.horaReanudacionTrabajoC.toFixed(2)}</td>
                                    <td className="bordeIzquierdo">{fila.finTrabajo.rndFinTrabajo.toFixed(2)}</td>
                                    <td>{fila.finTrabajo.mediaTiempoAtencion}</td>
                                    <td>{fila.finTrabajo.tiempoAtencion.toFixed(2)}</td>
                                    <td>{fila.finTrabajo.horaFinTrabajo.toFixed(2)}</td>
                                    <td className="bordeIzquierdo">{fila.servidor.estado}</td>
                                    <td>{fila.servidor.horaInicioOcupacion.toFixed(2)}</td>
                                    <td>{fila.servidor.horaFinOcupacion.toFixed(2)}</td>
                                    <td className="bordeIzquierdo">{fila.servidor.tiempoOcupacionAcum.toFixed(2)}</td>
                                    <td className="bordeDerecho">{fila.servidor.tiempoPermanenciaEquipoAcum.toFixed(2)}</td>
                                    {fila.equipos.map((equipo, index) => (
                                        <>
                                            <td className="bordeIzquierdo">{equipo.id_equipo}</td>
                                            <td>{equipo.equipo_estado}</td>
                                            <td>{equipo.estado}</td>
                                            <td>{equipo.hora_llegada.toFixed(2)}</td>
                                            <td>{equipo.hora_Inicio_atencion.toFixed(2)}</td>
                                            <td>{equipo.horaFinAtencionEstimada.toFixed(2)}</td>
                                            <td>{equipo.hora_salida.toFixed(2)}</td>
                                        </>
                                    ))}
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