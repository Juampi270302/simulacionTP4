import React, {useContext} from 'react';
import {ContextoSimulacion} from "../contexts/ContextoSimulacion.jsx";

const TableTimeProb = () => {
    const {dispatch} = useContext(ContextoSimulacion);
    return (
        <table className="table table-striped table-bordered">
            <thead>
            <tr>
                <th scope="col">Trabajo</th>
                <th scope="col">A</th>
                <th scope="col">B</th>
                <th scope="col">C</th>
                <th scope="col">D</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Probabilidad</td>
                <td>
                    <input type="number" className="form-control" defaultValue={0.3} step={0.01} max={1} min={0}
                    onChange={()=>{dispatch({ type: 'setProbTA', value:parseFloat(event.target.value)})}}/>
                </td>
                <td>
                    <input type="number" className="form-control" defaultValue={0.25} step={0.01} max={1} min={0}
                    onChange={()=>{dispatch({ type: 'setProbTB', value:parseFloat(event.target.value)})}}/>
                </td>
                <td>
                    <input type="number" className="form-control" defaultValue={0.25} step={0.01} max={1} min={0}
                    onChange={()=>{dispatch({ type: 'setProbTC', value:parseFloat(event.target.value)})}}/>
                </td>
                <td>
                    <input type="number" className="form-control" defaultValue={0.2} step={0.01} max={1} min={0}
                    onChange={()=>{dispatch({ type: 'setProbTDn', value:parseFloat(event.target.value)})}}/>
                </td>
            </tr>
            <tr>
                <td>Tiempo</td>
                <td>
                    <input type="number" className="form-control" defaultValue={2} step={1} min={0}
                    onChange={()=>{dispatch({ type: 'setTimeTA', value:parseFloat(event.target.value)})}}/>
                </td>
                <td>
                    <input type="number" className="form-control" defaultValue={1} step={1} min={0}
                    onChange={()=>{dispatch({ type: 'setTimeTB', value:parseFloat(event.target.value)})}}/>
                </td>
                <td>
                    <input type="number" className="form-control" defaultValue={3} step={1} min={0}
                    onChange={()=>{dispatch({ type: 'setTimeTC', value:parseFloat(event.target.value)})}}/>
                </td>
                <td>
                    <input type="number" className="form-control" defaultValue={1} step={1} min={0}
                    onChange={()=>{dispatch({ type: 'setTimeTD', value:parseFloat(event.target.value)})}}/>
                </td>
            </tr>
            </tbody>
        </table>
    );
};

export default TableTimeProb;