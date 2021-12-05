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
    tooltip: {
      content:
        "ETL, which stands for extract, transform, and load, is the process data engineers use to extract data from different sources, transform the data into a  usable and trusted resource, and load that data into the systems end-users can access and use downstream to solve business problems.",
    },
    children: [
      {
        id: "Data Warehouse",
        icon: dwhIcon,
        title: "Data Warehouse",
        tooltip: {
          content:
            "A data warehouse is a large collection of business data used to help an organization make decisions.",
        },
        children: [
          {
            id: "SQL",
            icon: sqlIcon,
            title: "SQL",
            tooltip: {
              content:
                "SQL is a standard language for storing, manipulating and retrieving data in databases.",
            },
            children: [
              {
                id: "Data Preparation",
                icon: prepIcon,
                title: "Data Preparation",
                tooltip: {
                  content:
                    "Data preparation is the process of cleaning and transforming raw data prior to processing and analysis.",
                },
                children: [
                  {
                    id: "Data Replication",
                    icon: repliIcon,
                    title: "Data Replication",
                    tooltip: {
                      content:
                        "Data replication is the process by which data residing on a physical/virtual server(s) or cloud instance (primary instance) is continuously replicated or copied to a secondary server(s) or cloud instance.",
                    },
                    children: [],
                  },
                ],
              },
              {
                id: "thoughlock",
                icon: vizIcon,
                title: "Data Visualization",
                tooltip: {
                  content:
                    "Data visualization is the graphical representation of information and data.",
                },
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
    title: "Deployment automatization",
    tooltip: {
      content:
        "Deployment automation is what enables you to deploy your software to testing and production environments with the push of a button.",
    },
    children: [
      {
        id: "kinetic-reflection",
        icon: linuxIcon,
        title: "Linux",
        tooltip: {
          content:
            "A Linux-based system is a modular Unix-like operating system, deriving much of its basic design from principles established in Unix.",
        },
        children: [
          {
            id: "intertia",
            icon: programmingIcon,
            title: "Programming",
            tooltip: {
              content:
                "Programming is the process of creating a set of instructions that tell a computer how to perform a task.",
            },
            children: [
              {
                id: "subsequence",
                icon: cloudIcon,
                title: "Cloud",
                tooltip: {
                  content:
                    "The cloud is made up of servers in data centers all over the world.",
                },
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
    tooltip: {
      content:
        "ETL, which stands for extract, transform, and load, is the process data engineers use to extract data from different sources, transform the data into a  usable and trusted resource, and load that data into the systems end-users can access and use downstream to solve business problems.",
    },
    children: [
      {
        id: "Data Warehouse",
        icon: dwhIcon,
        title: "Data Warehouse",
        tooltip: {
          content:
            "A data warehouse is a large collection of business data used to help an organization make decisions.",
        },
        children: [
          {
            id: "SQL",
            icon: sqlIcon,
            title: "SQL",
            tooltip: {
              content:
                "SQL is a standard language for storing, manipulating and retrieving data in databases.",
            },
            children: [
              {
                id: "Data Preparation",
                icon: prepIcon,
                title: "Data Preparation",
                tooltip: {
                  content:
                    "Data preparation is the process of cleaning and transforming raw data prior to processing and analysis.",
                },
                children: [
                  {
                    id: "Data Replication",
                    icon: repliIcon,
                    title: "Data Replication",
                    tooltip: {
                      content:
                        "Data replication is the process by which data residing on a physical/virtual server(s) or cloud instance (primary instance) is continuously replicated or copied to a secondary server(s) or cloud instance.",
                    },
                    children: [],
                  },
                ],
              },
              {
                id: "thoughlock",
                icon: vizIcon,
                title: "Data Visualization",
                tooltip: {
                  content:
                    "Data visualization is the graphical representation of information and data.",
                },
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
    title: "Deployment automatization",
    tooltip: {
      content:
        "Deployment automation is what enables you to deploy your software to testing and production environments with the push of a button.",
    },
    children: [
      {
        id: "kinetic-reflection",
        icon: linuxIcon,
        title: "Linux",
        tooltip: {
          content:
            "A Linux-based system is a modular Unix-like operating system, deriving much of its basic design from principles established in Unix.",
        },
        children: [
          {
            id: "intertia",
            icon: programmingIcon,
            title: "Programming",
            tooltip: {
              content:
                "Programming is the process of creating a set of instructions that tell a computer how to perform a task.",
            },
            children: [
              {
                id: "subsequence",
                icon: cloudIcon,
                title: "Cloud",
                tooltip: {
                  content:
                    "The cloud is made up of servers in data centers all over the world.",
                },
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
    tooltip: {
      content:
        "ETL, which stands for extract, transform, and load, is the process data engineers use to extract data from different sources, transform the data into a  usable and trusted resource, and load that data into the systems end-users can access and use downstream to solve business problems.",
    },
    children: [
      {
        id: "Data Warehouse",
        icon: dwhIcon,
        title: "Data Warehouse",
        tooltip: {
          content:
            "A data warehouse is a large collection of business data used to help an organization make decisions.",
        },
        children: [
          {
            id: "SQL",
            icon: sqlIcon,
            //optional: true,
            title: "SQL",
            tooltip: {
              content:
                "SQL is a standard language for storing, manipulating and retrieving data in databases.",
            },
            children: [
              {
                id: "Data Preparation",
                icon: prepIcon,
                title: "Data Preparation",
                tooltip: {
                  content:
                    "Data preparation is the process of cleaning and transforming raw data prior to processing and analysis.",
                },
                children: [
                  {
                    id: "Data Replication",
                    icon: repliIcon,
                    title: "Data Replication",
                    tooltip: {
                      content:
                        "Data replication is the process by which data residing on a physical/virtual server(s) or cloud instance (primary instance) is continuously replicated or copied to a secondary server(s) or cloud instance.",
                    },
                    children: [],
                  },
                ],
              },
              {
                id: "thoughlock",
                icon: vizIcon,
                title: "Data Visualization",
                tooltip: {
                  content:
                    "Data visualization is the graphical representation of information and data.",
                },
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
    title: "Deployment automatization",
    tooltip: {
      content:
        "Deployment automation is what enables you to deploy your software to testing and production environments with the push of a button.",
    },
    children: [
      {
        id: "kinetic-reflection",
        icon: linuxIcon,
        title: "Linux",
        tooltip: {
          content:
            "A Linux-based system is a modular Unix-like operating system, deriving much of its basic design from principles established in Unix.",
        },
        children: [
          {
            id: "intertia",
            icon: programmingIcon,
            title: "Programming",
            tooltip: {
              content:
                "Programming is the process of creating a set of instructions that tell a computer how to perform a task.",
            },
            children: [
              {
                id: "subsequence",
                icon: cloudIcon,
                title: "Cloud",
                tooltip: {
                  content:
                    "The cloud is made up of servers in data centers all over the world.",
                },
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
    tooltip: {
      content:
        "ETL, which stands for extract, transform, and load, is the process data engineers use to extract data from different sources, transform the data into a  usable and trusted resource, and load that data into the systems end-users can access and use downstream to solve business problems.",
    },
    children: [
      {
        id: "Data Warehouse",
        icon: dwhIcon,
        title: "Data Warehouse",
        tooltip: {
          content:
            "A data warehouse is a large collection of business data used to help an organization make decisions.",
        },
        children: [
          {
            id: "SQL",
            icon: sqlIcon,
            //optional: true,
            title: "SQL",
            tooltip: {
              content:
                "SQL is a standard language for storing, manipulating and retrieving data in databases.",
            },
            children: [
              {
                id: "Data Preparation",
                icon: prepIcon,
                title: "Data Preparation",
                tooltip: {
                  content:
                    "Data preparation is the process of cleaning and transforming raw data prior to processing and analysis.",
                },
                children: [
                  {
                    id: "Data Replication",
                    icon: repliIcon,
                    title: "Data Replication",
                    tooltip: {
                      content:
                        "Data replication is the process by which data residing on a physical/virtual server(s) or cloud instance (primary instance) is continuously replicated or copied to a secondary server(s) or cloud instance.",
                    },
                    children: [],
                  },
                ],
              },
              {
                id: "thoughlock",
                icon: vizIcon,
                title: "Data Visualization",
                tooltip: {
                  content:
                    "Data visualization is the graphical representation of information and data.",
                },
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
    title: "Deployment automatization",
    tooltip: {
      content:
        "Deployment automation is what enables you to deploy your software to testing and production environments with the push of a button.",
    },
    children: [
      {
        id: "kinetic-reflection",
        icon: linuxIcon,
        title: "Linux",
        tooltip: {
          content:
            "A Linux-based system is a modular Unix-like operating system, deriving much of its basic design from principles established in Unix.",
        },
        children: [
          {
            id: "intertia",
            icon: programmingIcon,
            title: "Programming",
            tooltip: {
              content:
                "Programming is the process of creating a set of instructions that tell a computer how to perform a task.",
            },
            children: [
              {
                id: "subsequence",
                icon: cloudIcon,
                title: "Cloud",
                tooltip: {
                  content:
                    "The cloud is made up of servers in data centers all over the world.",
                },
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
];
