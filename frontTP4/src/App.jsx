import {ContextoSimulacionHandler} from "./contexts/ContextoSimulacion.jsx";
import TableTimeProb from "./components/TableTimeProb.jsx";
import TableStateVector from "./components/TableStateVector.jsx";
import Header from "./components/Header.jsx";
import SimulationParameters from "./components/SimulationParameters.jsx";

function App() {
    return (
        <ContextoSimulacionHandler>
            <div className="container-fluid">
                <div className="row header">
                    <div className="col-12">
                        <Header></Header>
                    </div>
                </div>
                <div className="row d-flex justify-content-center body">
                    <div className="col-6 ">
                        <SimulationParameters></SimulationParameters>
                    </div>
                </div>
            </div>
        </ContextoSimulacionHandler>
    )
}

export default App
