import React from 'react';
import TableTimeProb from "./TableTimeProb.jsx";

const SimulationParameters = () => {
    return (
        <div>
            <div className="row">
                <div className="col">
                    <TableTimeProb></TableTimeProb>
                </div>
            </div>
            <div className="row">
                <div className="col 6">
                    <label>Tiempo en menos</label>
                    <input/>
                </div>
                <div className="col 6">
                    <label>Tiempo en mas</label>
                    <input/>
                </div>
            </div>
        </div>
    );
};

export default SimulationParameters;