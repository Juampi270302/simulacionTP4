import './App.css'
import {ContextoSimulacionHandler} from "./contexts/ContextoSimulacion.jsx";
import TableTimeProb from "./components/TableTimeProb.jsx";
import TableStateVector from "./components/TableStateVector.jsx";
import Header from "./components/Header.jsx";
import SimulationParameters from "./components/SimulationParameters.jsx";

function App() {
    return (
        <ContextoSimulacionHandler>
            <div className="container-fluid">
                <div className="row">
                    <Header></Header>
                </div>
                <div className="row">
                    <SimulationParameters></SimulationParameters>
                </div>
            </div>
        </ContextoSimulacionHandler>
    )
}

export default App
