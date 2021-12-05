import { SkillType } from "beautiful-skill-tree";
import etlIcon from "./pics/etl_bl_w.png";
import prepIcon from "./pics/data preparation_w.png";
import vizIcon from "./pics/data viz_w.png";
import repliIcon from "./pics/data_rep_bl_w.png";
import deployIcon from "./pics/deployment_w.png";
import dwhIcon from "./pics/dwh_bl_w.png";
import linuxIcon from "./pics/linux_w.png";
import programmingIcon from "./pics/programming_w.png";
import cloudIcon from "./pics/cloud_bl_w.png";
import sourceIcon from "./pics/source control_w.png";
import sqlIcon from "./pics/sql_bl_w.png";

export const dataEngineer = [
  {
    id: "ward",
    icon: etlIcon,
    title: "ETL",
    tooltip: "Improves your shield capacity and shield recharge delay.",
    children: [
      {
        id: "suspension",
        icon: dwhIcon,
        title: "Suspension",
        tooltip: "Increases the duration of Phaselock.",
        children: [
          {
            id: "fleet",
            icon: sqlIcon,
            //optional: true,
            title: "Fleet",
            tooltip:
              "Your movement speed increases while your shields are depleted.",
            children: [
              {
                id: "converge",
                icon: prepIcon,
                title: "Converge",
                tooltip:
                  "Your Phaselock ability now also pulls nearby enemies to the original target. This deals a small amount of damage to affected enemies.",
                children: [
                  {
                    id: "quicken",
                    icon: repliIcon,
                    title: "Quicken",
                    tooltip:
                      "Increases the cooldown rate of your phaselock ability.",
                    children: [],
                  },
                ],
              },
              {
                id: "thoughlock",
                icon: vizIcon,
                title: "Thoughtlock",
                tooltip:
                  "Phaselock causes enemies to turn on their friends instead of being locked down. Additionally, Phaselock's duration is increased, but so is it's cooldown. ",
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "accelerate",
    icon: deployIcon,
    title: "Accelerate",
    tooltip: "Increases damage and bullet speed with all weapon types.",
    children: [
      {
        id: "kinetic-reflection",
        icon: linuxIcon,
        title: "Kinetic Reflection",
        tooltip:
          "After killing an enemy, you gain the ability to deflect enemy bullets, sending them flying toward nearby enemies. You take reduced damage from reflective bullets. Kinetic Reflection only works with bullets. This effect lasts for a short time.",
        children: [
          {
            id: "intertia",
            icon: programmingIcon,
            title: "Intertia",
            tooltip:
              "Killing an enemy causes your shields to quickly regenerate and increases your reload speed for a few seconds.",
            children: [
              {
                id: "subsequence",
                icon: cloudIcon,
                title: "Subsequence",
                tooltip:
                  "When an enemy under the effects of your Phaselock dies there is a chance for your Phaselock ability to seek out and affect another target. ",
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
];

export const dataScientist = [
  {
    id: "ward",
    icon: etlIcon,
    title: "ETL",
    tooltip: "Improves your shield capacity and shield recharge delay.",
    children: [
      {
        id: "suspension",
        icon: dwhIcon,
        title: "Suspension",
        tooltip: "Increases the duration of Phaselock.",
        children: [
          {
            id: "fleet",
            icon: sqlIcon,
            //optional: true,
            title: "Fleet",
            tooltip:
              "Your movement speed increases while your shields are depleted.",
            children: [
              {
                id: "converge",
                icon: prepIcon,
                title: "Converge",
                tooltip:
                  "Your Phaselock ability now also pulls nearby enemies to the original target. This deals a small amount of damage to affected enemies.",
                children: [
                  {
                    id: "quicken",
                    icon: repliIcon,
                    title: "Quicken",
                    tooltip:
                      "Increases the cooldown rate of your phaselock ability.",
                    children: [],
                  },
                ],
              },
              {
                id: "thoughlock",
                icon: vizIcon,
                title: "Thoughtlock",
                tooltip:
                  "Phaselock causes enemies to turn on their friends instead of being locked down. Additionally, Phaselock's duration is increased, but so is it's cooldown. ",
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "accelerate",
    icon: deployIcon,
    title: "Accelerate",
    tooltip: "Increases damage and bullet speed with all weapon types.",
    children: [
      {
        id: "kinetic-reflection",
        icon: linuxIcon,
        title: "Kinetic Reflection",
        tooltip:
          "After killing an enemy, you gain the ability to deflect enemy bullets, sending them flying toward nearby enemies. You take reduced damage from reflective bullets. Kinetic Reflection only works with bullets. This effect lasts for a short time.",
        children: [
          {
            id: "intertia",
            icon: programmingIcon,
            title: "Intertia",
            tooltip:
              "Killing an enemy causes your shields to quickly regenerate and increases your reload speed for a few seconds.",
            children: [
              {
                id: "subsequence",
                icon: cloudIcon,
                title: "Subsequence",
                tooltip:
                  "When an enemy under the effects of your Phaselock dies there is a chance for your Phaselock ability to seek out and affect another target. ",
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
];

export const dataViz = [
  {
    id: "ward",
    icon: etlIcon,
    title: "ETL",
    tooltip: "Improves your shield capacity and shield recharge delay.",
    children: [
      {
        id: "suspension",
        icon: dwhIcon,
        title: "Suspension",
        tooltip: "Increases the duration of Phaselock.",
        children: [
          {
            id: "fleet",
            icon: sqlIcon,
            //optional: true,
            title: "Fleet",
            tooltip:
              "Your movement speed increases while your shields are depleted.",
            children: [
              {
                id: "converge",
                icon: prepIcon,
                title: "Converge",
                tooltip:
                  "Your Phaselock ability now also pulls nearby enemies to the original target. This deals a small amount of damage to affected enemies.",
                children: [
                  {
                    id: "quicken",
                    icon: repliIcon,
                    title: "Quicken",
                    tooltip:
                      "Increases the cooldown rate of your phaselock ability.",
                    children: [],
                  },
                ],
              },
              {
                id: "thoughlock",
                icon: vizIcon,
                title: "Thoughtlock",
                tooltip:
                  "Phaselock causes enemies to turn on their friends instead of being locked down. Additionally, Phaselock's duration is increased, but so is it's cooldown. ",
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "accelerate",
    icon: deployIcon,
    title: "Accelerate",
    tooltip: "Increases damage and bullet speed with all weapon types.",
    children: [
      {
        id: "kinetic-reflection",
        icon: linuxIcon,
        title: "Kinetic Reflection",
        tooltip:
          "After killing an enemy, you gain the ability to deflect enemy bullets, sending them flying toward nearby enemies. You take reduced damage from reflective bullets. Kinetic Reflection only works with bullets. This effect lasts for a short time.",
        children: [
          {
            id: "intertia",
            icon: programmingIcon,
            title: "Intertia",
            tooltip:
              "Killing an enemy causes your shields to quickly regenerate and increases your reload speed for a few seconds.",
            children: [
              {
                id: "subsequence",
                icon: cloudIcon,
                title: "Subsequence",
                tooltip:
                  "When an enemy under the effects of your Phaselock dies there is a chance for your Phaselock ability to seek out and affect another target. ",
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
];

export const dataBIDev = [
  {
    id: "ward",
    icon: etlIcon,
    title: "ETL",
    tooltip: "Improves your shield capacity and shield recharge delay.",
    children: [
      {
        id: "suspension",
        icon: dwhIcon,
        title: "Suspension",
        tooltip: "Increases the duration of Phaselock.",
        children: [
          {
            id: "fleet",
            icon: sqlIcon,
            //optional: true,
            title: "Fleet",
            tooltip:
              "Your movement speed increases while your shields are depleted.",
            children: [
              {
                id: "converge",
                icon: prepIcon,
                title: "Converge",
                tooltip:
                  "Your Phaselock ability now also pulls nearby enemies to the original target. This deals a small amount of damage to affected enemies.",
                children: [
                  {
                    id: "quicken",
                    icon: repliIcon,
                    title: "Quicken",
                    tooltip:
                      "Increases the cooldown rate of your phaselock ability.",
                    children: [],
                  },
                ],
              },
              {
                id: "thoughlock",
                icon: vizIcon,
                title: "Thoughtlock",
                tooltip:
                  "Phaselock causes enemies to turn on their friends instead of being locked down. Additionally, Phaselock's duration is increased, but so is it's cooldown. ",
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "accelerate",
    icon: deployIcon,
    title: "Accelerate",
    tooltip: "Increases damage and bullet speed with all weapon types.",
    children: [
      {
        id: "kinetic-reflection",
        icon: linuxIcon,
        title: "Kinetic Reflection",
        tooltip:
          "After killing an enemy, you gain the ability to deflect enemy bullets, sending them flying toward nearby enemies. You take reduced damage from reflective bullets. Kinetic Reflection only works with bullets. This effect lasts for a short time.",
        children: [
          {
            id: "intertia",
            icon: programmingIcon,
            title: "Intertia",
            tooltip:
              "Killing an enemy causes your shields to quickly regenerate and increases your reload speed for a few seconds.",
            children: [
              {
                id: "subsequence",
                icon: cloudIcon,
                title: "Subsequence",
                tooltip:
                  "When an enemy under the effects of your Phaselock dies there is a chance for your Phaselock ability to seek out and affect another target. ",
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
];
