import logo from "./logo.svg";
import "./App.css";
import {
  SkillTreeGroup,
  SkillTree,
  SkillProvider,
  SkillType,
  SkillGroupDataType,
} from "beautiful-skill-tree";
import { dataEngineer, dataScientist, dataViz, dataBIDev } from "./data.js";

//const data = dataEngineer;

function App() {
  return (
    <div className="bg">
      <div className="App">
        <SkillProvider>
          <SkillTreeGroup>
            {({ skillCount }) => (
              <SkillTree
                treeId="first-tree"
                title="Data Engineer"
                data={dataEngineer}
                collapsible
                description="My first skill tree"
              />
            )}
          </SkillTreeGroup>
          <SkillTreeGroup>
            {({ skillCount }) => (
              <SkillTree
                treeId="second-tree"
                title="Data Scientist"
                data={dataScientist}
                collapsible
                description="My first skill tree"
              />
            )}
          </SkillTreeGroup>
          <SkillTreeGroup>
            {({ skillCount }) => (
              <SkillTree
                treeId="third-tree"
                title="Data Vizualization"
                data={dataViz}
                collapsible
                description="My first skill tree"
              />
            )}
          </SkillTreeGroup>
          <SkillTreeGroup>
            {({ skillCount }) => (
              <SkillTree
                treeId="fourth-tree"
                title="Data Vizualization"
                data={dataBIDev}
                collapsible
                description="My first skill tree"
              />
            )}
          </SkillTreeGroup>
        </SkillProvider>
      </div>
    </div>
  );
}

export default App;
