import {
  SkillTreeGroup,
  SkillTree,
  SkillProvider,
  SkillType,
  SkillGroupDataType,
} from "beautiful-skill-tree";

import theme from "../theme.js";

export const TreeGroup = ({ id, title, data, description }) => {
  const savedData = {
    ward: {
      optional: false,
      nodeState: "selected",
    },
    "Data Warehouse": {
      optional: false,
      nodeState: "locked",
    },
  };

  const handleSave = (skillCount) => {
    // console.log(skillCount);
  };

  return (
    <div class="cards">
      <SkillProvider>
        <SkillTreeGroup theme={theme}>
          {({ skillCount }) => (
            <SkillTree
              treeId={id}
              title={title}
              data={data}
              collapsible
              handleSave={() => handleSave(skillCount)}
              savedData={savedData}
              description={description}
            />
          )}
        </SkillTreeGroup>
      </SkillProvider>
    </div>
  );
};
