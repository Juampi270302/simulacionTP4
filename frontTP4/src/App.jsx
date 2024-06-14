import {ContextoSimulacion, ContextoSimulacionHandler} from "./contexts/ContextoSimulacion.jsx";
import TableTimeProb from "./components/TableTimeProb.jsx";
import TableStateVector from "./components/TableStateVector.jsx";
import Header from "./components/Header.jsx";
import SimulationParameters from "./components/SimulationParameters.jsx";
import {useContext, useState} from "react";

function App() {
    const [vectorEstados, setvectorEstados] = useState(null);
    return (
        <ContextoSimulacionHandler>
            <div className="container-fluid body">
                <div className="row header">
                    <div className="col-12">
                        <Header></Header>
                    </div>
                </div>
                <div className="row d-flex justify-content-center body">
                    <div className="col-6 ">
                        <SimulationParameters setfilas={setvectorEstados}></SimulationParameters>
                    </div>
                </div>
                <div className="row d-flex justify-content-center body mt-4">
                    <div className="col-12 ">
                        {vectorEstados && <TableStateVector vectorEstados={vectorEstados}></TableStateVector>}
                    </div>
                </div>
            </div>
        </ContextoSimulacionHandler>
    )
}

export default App
