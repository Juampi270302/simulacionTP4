import React from 'react';

const TableStateVector = () => {
    return (
        <div className="row">
            <div className="col-12 container-fluid justify-content-center">
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th scope="col">Evento</th>
                        <th scope="col">Reloj</th>
                        <th scope="col">RND llegada</th>
                        <th scope="col">Tiempo entre llegadas</th>
                        <th scope="col">Hora proxima llegada</th>
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

                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default TableStateVector;