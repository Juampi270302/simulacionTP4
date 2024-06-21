import React, { useState } from 'react'

const RKTable = ({ calculosSimulacion }) => {
    const equipos = calculosSimulacion.datosEquiposRK

    const [equipoSeleccionado, setEquipoSeleccionado] = useState(equipos[0]);

    const e = Math.E
    const h = 0.1

    const calculateRows = () => {
        const rows = [];
        let t = 0;
        let C = 0;
        const CIsZero = equipoSeleccionado.valorC === 0;

        while (C <= equipoSeleccionado.valorC) {

            const k1 = h * (0.1 + Math.pow(e, 0.09 * C));
            const auxk1 = C + k1 / 2
            const k2 = h * (0.1 + Math.pow(e, 0.09 * auxk1));
            const auxk2 = C + k2 / 2
            const k3 = h * (0.1 + Math.pow(e, 0.09 * auxk2));
            const auxk3 = C + k3
            const k4 = h * (0.1 + Math.pow(e, 0.09 * auxk3));
            const Cn = C + (k1 + 2 * k2 + 2 * k3 + k4) / 6;

            rows.push({ t, C, k1, auxk1, k2, auxk2, k3, auxk3, k4, Cn });

            C = Cn;
            t += h;
        }

        if (!CIsZero) {
            const k1 = h * (0.1 + Math.pow(e, 0.09 * C));
            const auxk1 = C + k1 / 2
            const k2 = h * (0.1 + Math.pow(e, 0.09 * auxk1));
            const auxk2 = C + k2 / 2
            const k3 = h * (0.1 + Math.pow(e, 0.09 * auxk2));
            const auxk3 = C + k3
            const k4 = h * (0.1 + Math.pow(e, 0.09 * auxk3));
            const Cn = C + (k1 + 2 * k2 + 2 * k3 + k4) / 6;

            rows.push({ t, C, k1, auxk1, k2, auxk2, k3, auxk3, k4, Cn });
        }

        return rows;
    };

    const rows = calculateRows();

    const handleSelectChange = (event) => {
        const selectedEquipo = equipos.find(
            (equipo) => equipo.idEquipo === parseInt(event.target.value)
        );
        setEquipoSeleccionado(selectedEquipo);
    };

    return (
        <>
            <div className="col-4 d-flex justify-content-center">
                <select onChange={handleSelectChange} className='form-select'>
                    {equipos.map((equipo) => (
                        <option key={equipo.idEquipo} value={equipo.idEquipo}>
                            E{equipo.idEquipo} C={equipo.valorC.toFixed(4)} N={equipo.valorN.toFixed(4)}
                        </option>
                    ))}
                </select>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>h</th>
                        <th>{h}</th>
                    </tr>
                    <tr>
                        <th>C</th>
                        <th>{equipoSeleccionado.valorC.toFixed(4)}</th>
                    </tr>
                    <tr>
                        <th>Ecuación</th>
                        <th>dC/dt = 0,1 + e^(0,09*C)</th>
                    </tr>

                </thead>
            </table>

            <table className='table table-bordered table-hover'>
                <thead>
                    <tr>
                        <th>t</th>
                        <th>C</th>
                        <th>k1</th>
                        <th>C+k1/2</th>
                        <th>k2</th>
                        <th>C+k2/2</th>
                        <th>k3</th>
                        <th>C+k3</th>
                        <th>k4</th>
                        <th>C+1</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, index) => (
                        <tr key={index} className={index === rows.length - 1 ? 'table-dark' : ''}>
                            <td>{row.t.toFixed(2)}</td>
                            <td>{row.C.toFixed(6)}</td>
                            <td>{row.k1.toFixed(6)}</td>
                            <td>{row.auxk1.toFixed(6)}</td>
                            <td>{row.k2.toFixed(6)}</td>
                            <td>{row.auxk2.toFixed(6)}</td>
                            <td>{row.k3.toFixed(6)}</td>
                            <td>{row.auxk3.toFixed(6)}</td>
                            <td>{row.k4.toFixed(6)}</td>
                            <td>{row.Cn.toFixed(6)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default RKTable