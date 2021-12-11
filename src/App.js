import "./App.css";
import { dataEngineer, dataScientist, dataViz, dataBIDev } from "./data.js";
import { TreeGroup } from "./components/TreeGroup";

function App() {
  return (
    <div className="bg">
      <div className="App">
        <div className="scroll">
          <div className="grid">
            <TreeGroup
              id="data-engineer"
              title="Data Engineer"
              data={dataEngineer}
              description="Data Engineer description"
            />
            <TreeGroup
              id="data-scientist"
              title="Data Scientist"
              data={dataScientist}
              description="Data Scientist description"
            />
            <TreeGroup
              id="data-viz"
              title="Data Viz"
              data={dataViz}
              description="Data Viz description"
            />
            <TreeGroup
              id="bi-dev"
              title="BI Developer"
              data={dataBIDev}
              description="BI Developer description"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
