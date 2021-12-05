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
import theme from "./theme.js";

//const data = dataEngineer;

function App() {
  return (
    <div className="bg">
      <div className="App">
        <SkillProvider>
          <SkillTreeGroup theme={theme}>
            {({ skillCount }) => (
              <SkillTree
                treeId="first-tree"
                title="Data Engineer"
                data={dataEngineer}
                collapsible
                description="Data engineers work in a variety of settings to build systems that collect, manage, and convert raw data into usable information for data scientists and business analysts to interpret."
              />
            )}
          </SkillTreeGroup>
          <SkillTreeGroup theme={theme}>
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
          <SkillTreeGroup theme={theme}>
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
          <SkillTreeGroup theme={theme}>
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
