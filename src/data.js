import etlIcon from "./pics/etl_bl_w.png";
import prepIcon from "./pics/data preparation_w.png";
import statIcon from "./pics/statistics.png";
import vizIcon from "./pics/analytics.png";
import uiIcon from "./pics/ui.png";
import repliIcon from "./pics/data_rep_bl_w.png";
import deployIcon from "./pics/deployment_w.png";
import dwhIcon from "./pics/dwh_bl_w.png";
import linuxIcon from "./pics/linux_w.png";
import programmingIcon from "./pics/programming_w.png";
import cloudIcon from "./pics/cloud_bl_w.png";
import sqlIcon from "./pics/sql_bl_w.png";
/*
Novice 
Intermediate
Advanced
Expert
Grandmaster
*/
export const dataEngineer = [
  {
    id: "etl",
    icon: etlIcon,
    title: "ETL Novice",
    tooltip: {
      content:
        "ETL, which stands for extract, transform, and load, is the process data engineers use to extract data from different sources, transform the data into a  usable and trusted resource, and load that data into the systems end-users can access and use downstream to solve business problems.",
    },
    children: [
      {
        id: "etl2",
        icon: etlIcon,
        title: "ETL Intermediate",
        tooltip: {
          content:
            "ETL, which stands for extract, transform, and load, is the process data engineers use to extract data from different sources, transform the data into a  usable and trusted resource, and load that data into the systems end-users can access and use downstream to solve business problems.",
        },
        children: [
          {
            id: "etl3",
            icon: etlIcon,
            title: "ETL Advanced",
            tooltip: {
              content:
                "ETL, which stands for extract, transform, and load, is the process data engineers use to extract data from different sources, transform the data into a  usable and trusted resource, and load that data into the systems end-users can access and use downstream to solve business problems.",
            },
            children: [
              {
                id: "etl4",
                icon: etlIcon,
                title: "ETL Expert",
                tooltip: {
                  content:
                    "ETL, which stands for extract, transform, and load, is the process data engineers use to extract data from different sources, transform the data into a  usable and trusted resource, and load that data into the systems end-users can access and use downstream to solve business problems.",
                },
                children: [
                  {
                    id: "etl5",
                    icon: etlIcon,
                    title: "ETL Grandmaster",
                    tooltip: {
                      content:
                        "ETL, which stands for extract, transform, and load, is the process data engineers use to extract data from different sources, transform the data into a  usable and trusted resource, and load that data into the systems end-users can access and use downstream to solve business problems.",
                    },
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "sql",
    icon: sqlIcon,
    title: "SQL Novice",
    tooltip: {
      content:
        "ETL, which stands for extract, transform, and load, is the process data engineers use to extract data from different sources, transform the data into a  usable and trusted resource, and load that data into the systems end-users can access and use downstream to solve business problems.",
    },
    children: [
      {
        id: "sql1",
        icon: sqlIcon,
        title: "SQL Intermediate",
        tooltip: {
          content:
            "A data warehouse is a large collection of business data used to help an organization make decisions.",
        },
        children: [
          {
            id: "sql2",
            icon: sqlIcon,
            title: "SQL Advanced",
            tooltip: {
              content:
                "SQL is a standard language for storing, manipulating and retrieving data in databases.",
            },
            children: [
              {
                id: "sql3",
                icon: sqlIcon,
                title: "SQL Expert",
                tooltip: {
                  content:
                    "Data preparation is the process of cleaning and transforming raw data prior to processing and analysis.",
                },
                children: [
                  {
                    id: "sql4",
                    icon: sqlIcon,
                    title: "SQL Grandmaster",
                    tooltip: {
                      content:
                        "Data replication is the process by which data residing on a physical/virtual server(s) or cloud instance (primary instance) is continuously replicated or copied to a secondary server(s) or cloud instance.",
                    },
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "cloud",
    icon: cloudIcon,
    title: "Cloud Novice",
    tooltip: {
      content:
        "ETL, which stands for extract, transform, and load, is the process data engineers use to extract data from different sources, transform the data into a  usable and trusted resource, and load that data into the systems end-users can access and use downstream to solve business problems.",
    },
    children: [
      {
        id: "cloud2",
        icon: cloudIcon,
        title: "Cloud Intermediate",
        tooltip: {
          content:
            "A data warehouse is a large collection of business data used to help an organization make decisions.",
        },
        children: [
          {
            id: "cloud3",
            icon: cloudIcon,
            title: "Cloud Advanced",
            tooltip: {
              content:
                "SQL is a standard language for storing, manipulating and retrieving data in databases.",
            },
            children: [
              {
                id: "cloud4",
                icon: cloudIcon,
                title: "Cloud Expert",
                tooltip: {
                  content:
                    "Data preparation is the process of cleaning and transforming raw data prior to processing and analysis.",
                },
                children: [
                  {
                    id: "cloud5",
                    icon: cloudIcon,
                    title: "Cloud Grandmaster",
                    tooltip: {
                      content:
                        "Data replication is the process by which data residing on a physical/virtual server(s) or cloud instance (primary instance) is continuously replicated or copied to a secondary server(s) or cloud instance.",
                    },
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "pro",
    icon: programmingIcon,
    title: "Programming Novice",
    tooltip: {
      content:
        "ETL, which stands for extract, transform, and load, is the process data engineers use to extract data from different sources, transform the data into a  usable and trusted resource, and load that data into the systems end-users can access and use downstream to solve business problems.",
    },
    children: [
      {
        id: "pro1",
        icon: programmingIcon,
        title: "Programming Intermediate",
        tooltip: {
          content:
            "A data warehouse is a large collection of business data used to help an organization make decisions.",
        },
        children: [
          {
            id: "pro2",
            icon: programmingIcon,
            title: "Programming Advanced",
            tooltip: {
              content:
                "SQL is a standard language for storing, manipulating and retrieving data in databases.",
            },
            children: [
              {
                id: "pro3",
                icon: programmingIcon,
                title: "Programming Expert",
                tooltip: {
                  content:
                    "Data preparation is the process of cleaning and transforming raw data prior to processing and analysis.",
                },
                children: [
                  {
                    id: "pro4",
                    icon: programmingIcon,
                    title: "Programming Grandmaster",
                    tooltip: {
                      content:
                        "Data replication is the process by which data residing on a physical/virtual server(s) or cloud instance (primary instance) is continuously replicated or copied to a secondary server(s) or cloud instance.",
                    },
                    children: [],
                  },
                ],
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
    id: "viz",
    icon: vizIcon,
    title: "Data Viz Novice",
    tooltip: {
      content:
        "ETL, which stands for extract, transform, and load, is the process data engineers use to extract data from different sources, transform the data into a  usable and trusted resource, and load that data into the systems end-users can access and use downstream to solve business problems.",
    },
    children: [
      {
        id: "viz2",
        icon: vizIcon,
        title: "Data Viz Intermediate",
        tooltip: {
          content:
            "A data warehouse is a large collection of business data used to help an organization make decisions.",
        },
        children: [
          {
            id: "viz3",
            icon: vizIcon,
            title: "Data Viz Advanced",
            tooltip: {
              content:
                "SQL is a standard language for storing, manipulating and retrieving data in databases.",
            },
            children: [
              {
                id: "viz4",
                icon: vizIcon,
                title: "Data Viz Expert",
                tooltip: {
                  content:
                    "Data preparation is the process of cleaning and transforming raw data prior to processing and analysis.",
                },
                children: [
                  {
                    id: "viz5",
                    icon: vizIcon,
                    title: "Data Viz Grandmaster",
                    tooltip: {
                      content:
                        "Data replication is the process by which data residing on a physical/virtual server(s) or cloud instance (primary instance) is continuously replicated or copied to a secondary server(s) or cloud instance.",
                    },
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "stat",
    icon: statIcon,
    title: "Statistics Novice",
    tooltip: {
      content:
        "ETL, which stands for extract, transform, and load, is the process data engineers use to extract data from different sources, transform the data into a  usable and trusted resource, and load that data into the systems end-users can access and use downstream to solve business problems.",
    },
    children: [
      {
        id: "stat1",
        icon: statIcon,
        title: "Statistics Intermediate",
        tooltip: {
          content:
            "A data warehouse is a large collection of business data used to help an organization make decisions.",
        },
        children: [
          {
            id: "stat2",
            icon: statIcon,
            title: "Statistics Advanced",
            tooltip: {
              content:
                "SQL is a standard language for storing, manipulating and retrieving data in databases.",
            },
            children: [
              {
                id: "stat3",
                icon: statIcon,
                title: "Statistics Expert",
                tooltip: {
                  content:
                    "Data preparation is the process of cleaning and transforming raw data prior to processing and analysis.",
                },
                children: [
                  {
                    id: "stat4",
                    icon: statIcon,
                    title: "Statistics Grandmaster",
                    tooltip: {
                      content:
                        "Data replication is the process by which data residing on a physical/virtual server(s) or cloud instance (primary instance) is continuously replicated or copied to a secondary server(s) or cloud instance.",
                    },
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "pro",
    icon: programmingIcon,
    title: "Programming Novice",
    tooltip: {
      content:
        "ETL, which stands for extract, transform, and load, is the process data engineers use to extract data from different sources, transform the data into a  usable and trusted resource, and load that data into the systems end-users can access and use downstream to solve business problems.",
    },
    children: [
      {
        id: "pro1",
        icon: programmingIcon,
        title: "Programming Intermediate",
        tooltip: {
          content:
            "A data warehouse is a large collection of business data used to help an organization make decisions.",
        },
        children: [
          {
            id: "pro2",
            icon: programmingIcon,
            title: "Programming Advanced",
            tooltip: {
              content:
                "SQL is a standard language for storing, manipulating and retrieving data in databases.",
            },
            children: [
              {
                id: "pro3",
                icon: programmingIcon,
                title: "Programming Expert",
                tooltip: {
                  content:
                    "Data preparation is the process of cleaning and transforming raw data prior to processing and analysis.",
                },
                children: [
                  {
                    id: "pro4",
                    icon: programmingIcon,
                    title: "Programming Grandmaster",
                    tooltip: {
                      content:
                        "Data replication is the process by which data residing on a physical/virtual server(s) or cloud instance (primary instance) is continuously replicated or copied to a secondary server(s) or cloud instance.",
                    },
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "prep",
    icon: prepIcon,
    title: "Data Preparation Novice",
    tooltip: {
      content:
        "ETL, which stands for extract, transform, and load, is the process data engineers use to extract data from different sources, transform the data into a  usable and trusted resource, and load that data into the systems end-users can access and use downstream to solve business problems.",
    },
    children: [
      {
        id: "prep2",
        icon: prepIcon,
        title: "Data Preparation Intermediate",
        tooltip: {
          content:
            "A data warehouse is a large collection of business data used to help an organization make decisions.",
        },
        children: [
          {
            id: "prep3",
            icon: prepIcon,
            title: "Data Preparation Advanced",
            tooltip: {
              content:
                "SQL is a standard language for storing, manipulating and retrieving data in databases.",
            },
            children: [
              {
                id: "prep4",
                icon: prepIcon,
                title: "Data Preparation Expert",
                tooltip: {
                  content:
                    "Data preparation is the process of cleaning and transforming raw data prior to processing and analysis.",
                },
                children: [
                  {
                    id: "prep5",
                    icon: prepIcon,
                    title: "Data Preparation Grandmaster",
                    tooltip: {
                      content:
                        "Data replication is the process by which data residing on a physical/virtual server(s) or cloud instance (primary instance) is continuously replicated or copied to a secondary server(s) or cloud instance.",
                    },
                    children: [],
                  },
                ],
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
    id: "etl",
    icon: etlIcon,
    title: "ETL Novice",
    tooltip: {
      content:
        "ETL, which stands for extract, transform, and load, is the process data engineers use to extract data from different sources, transform the data into a  usable and trusted resource, and load that data into the systems end-users can access and use downstream to solve business problems.",
    },
    children: [
      {
        id: "etl2",
        icon: etlIcon,
        title: "ETL Intermediate",
        tooltip: {
          content:
            "A data warehouse is a large collection of business data used to help an organization make decisions.",
        },
        children: [
          {
            id: "etl3",
            icon: etlIcon,
            title: "ETL Advanced",
            tooltip: {
              content:
                "A SQL intermediate can perform subqueries, basic pattern matching, built-in functions, basic query optimizations, B-tree indexes, foreign eys, views, cursors, delete vs. truncate and constraints. She/he can use the cast, coalesce, null, outer join, hacing amd union (all) keywords. Finally she/he has 2+ years of experience with RDBMS, can find duplicate records by key, handle transactions, temporary tables and writes testable code.",
            },
            children: [
              {
                id: "etl4",
                icon: etlIcon,
                title: "ETL Expert",
                tooltip: {
                  content:
                    "Data preparation is the process of cleaning and transforming raw data prior to processing and analysis.",
                },
                children: [
                  {
                    id: "etl5",
                    icon: etlIcon,
                    title: "ETL Grandmaster",
                    tooltip: {
                      content:
                        "Data replication is the process by which data residing on a physical/virtual server(s) or cloud instance (primary instance) is continuously replicated or copied to a secondary server(s) or cloud instance.",
                    },
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "prep",
    icon: prepIcon,
    title: "Data Preparation Novice",
    tooltip: {
      content:
        "ETL, which stands for extract, transform, and load, is the process data engineers use to extract data from different sources, transform the data into a  usable and trusted resource, and load that data into the systems end-users can access and use downstream to solve business problems.",
    },
    children: [
      {
        id: "prep2",
        icon: prepIcon,
        title: "Data Preparation Intermediate",
        tooltip: {
          content:
            "A data warehouse is a large collection of business data used to help an organization make decisions.",
        },
        children: [
          {
            id: "prep3",
            icon: prepIcon,
            title: "Data Preparation Advanced",
            tooltip: {
              content:
                "SQL is a standard language for storing, manipulating and retrieving data in databases.",
            },
            children: [
              {
                id: "prep4",
                icon: prepIcon,
                title: "Data Preparation Expert",
                tooltip: {
                  content:
                    "Data preparation is the process of cleaning and transforming raw data prior to processing and analysis.",
                },
                children: [
                  {
                    id: "prep5",
                    icon: prepIcon,
                    title: "Data Preparation Grandmaster",
                    tooltip: {
                      content:
                        "Data replication is the process by which data residing on a physical/virtual server(s) or cloud instance (primary instance) is continuously replicated or copied to a secondary server(s) or cloud instance.",
                    },
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "stat",
    icon: statIcon,
    title: "Statistics Novice",
    tooltip: {
      content:
        "ETL, which stands for extract, transform, and load, is the process data engineers use to extract data from different sources, transform the data into a  usable and trusted resource, and load that data into the systems end-users can access and use downstream to solve business problems.",
    },
    children: [
      {
        id: "stat1",
        icon: statIcon,
        title: "Statistics Intermediate",
        tooltip: {
          content:
            "A data warehouse is a large collection of business data used to help an organization make decisions.",
        },
        children: [
          {
            id: "stat2",
            icon: statIcon,
            title: "Statistics Advanced",
            tooltip: {
              content:
                "SQL is a standard language for storing, manipulating and retrieving data in databases.",
            },
            children: [
              {
                id: "stat3",
                icon: statIcon,
                title: "Statistics Expert",
                tooltip: {
                  content:
                    "Data preparation is the process of cleaning and transforming raw data prior to processing and analysis.",
                },
                children: [
                  {
                    id: "stat4",
                    icon: statIcon,
                    title: "Statistics Grandmaster",
                    tooltip: {
                      content:
                        "Data replication is the process by which data residing on a physical/virtual server(s) or cloud instance (primary instance) is continuously replicated or copied to a secondary server(s) or cloud instance.",
                    },
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "pro",
    icon: uiIcon,
    title: "UI Novice",
    tooltip: {
      content:
        "ETL, which stands for extract, transform, and load, is the process data engineers use to extract data from different sources, transform the data into a  usable and trusted resource, and load that data into the systems end-users can access and use downstream to solve business problems.",
    },
    children: [
      {
        id: "ui",
        icon: uiIcon,
        title: "UI Intermediate",
        tooltip: {
          content:
            "A data warehouse is a large collection of business data used to help an organization make decisions.",
        },
        children: [
          {
            id: "ui2",
            icon: uiIcon,
            title: "UI Advanced",
            tooltip: {
              content:
                "SQL is a standard language for storing, manipulating and retrieving data in databases.",
            },
            children: [
              {
                id: "ui3",
                icon: uiIcon,
                title: "UI Expert",
                tooltip: {
                  content:
                    "Data preparation is the process of cleaning and transforming raw data prior to processing and analysis.",
                },
                children: [
                  {
                    id: "ui4",
                    icon: uiIcon,
                    title: "UI Grandmaster",
                    tooltip: {
                      content:
                        "Data replication is the process by which data residing on a physical/virtual server(s) or cloud instance (primary instance) is continuously replicated or copied to a secondary server(s) or cloud instance.",
                    },
                    children: [],
                  },
                ],
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
    id: "etl",
    icon: etlIcon,
    title: "ETL Novice",
    tooltip: {
      content:
        "ETL, which stands for extract, transform, and load, is the process data engineers use to extract data from different sources, transform the data into a  usable and trusted resource, and load that data into the systems end-users can access and use downstream to solve business problems.",
    },
    children: [
      {
        id: "etl2",
        icon: etlIcon,
        title: "ETL Intermediate",
        tooltip: {
          content:
            "A data warehouse is a large collection of business data used to help an organization make decisions.",
        },
        children: [
          {
            id: "etl3",
            icon: etlIcon,
            title: "ETL Advanced",
            tooltip: {
              content:
                "A SQL intermediate can perform subqueries, basic pattern matching, built-in functions, basic query optimizations, B-tree indexes, foreign eys, views, cursors, delete vs. truncate and constraints. She/he can use the cast, coalesce, null, outer join, hacing amd union (all) keywords. Finally she/he has 2+ years of experience with RDBMS, can find duplicate records by key, handle transactions, temporary tables and writes testable code.",
            },
            children: [
              {
                id: "etl4",
                icon: etlIcon,
                title: "ETL Expert",
                tooltip: {
                  content:
                    "Data preparation is the process of cleaning and transforming raw data prior to processing and analysis.",
                },
                children: [
                  {
                    id: "etl5",
                    icon: etlIcon,
                    title: "ETL Grandmaster",
                    tooltip: {
                      content:
                        "Data replication is the process by which data residing on a physical/virtual server(s) or cloud instance (primary instance) is continuously replicated or copied to a secondary server(s) or cloud instance.",
                    },
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "dwh",
    icon: dwhIcon,
    title: "DWH Novice",
    tooltip: {
      content:
        "ETL, which stands for extract, transform, and load, is the process data engineers use to extract data from different sources, transform the data into a  usable and trusted resource, and load that data into the systems end-users can access and use downstream to solve business problems.",
    },
    children: [
      {
        id: "dwh1",
        icon: dwhIcon,
        title: "DWH Intermediate",
        tooltip: {
          content:
            "A data warehouse is a large collection of business data used to help an organization make decisions.",
        },
        children: [
          {
            id: "dwh2",
            icon: dwhIcon,
            title: "DWH Advanced",
            tooltip: {
              content:
                "DWH is a standard language for storing, manipulating and retrieving data in databases.",
            },
            children: [
              {
                id: "dwh3",
                icon: dwhIcon,
                title: "DWH Expert",
                tooltip: {
                  content:
                    "Data preparation is the process of cleaning and transforming raw data prior to processing and analysis.",
                },
                children: [
                  {
                    id: "dwh4",
                    icon: dwhIcon,
                    title: "DWH Grandmaster",
                    tooltip: {
                      content:
                        "Data replication is the process by which data residing on a physical/virtual server(s) or cloud instance (primary instance) is continuously replicated or copied to a secondary server(s) or cloud instance.",
                    },
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "cloud",
    icon: cloudIcon,
    title: "Cloud Novice",
    tooltip: {
      content:
        "ETL, which stands for extract, transform, and load, is the process data engineers use to extract data from different sources, transform the data into a  usable and trusted resource, and load that data into the systems end-users can access and use downstream to solve business problems.",
    },
    children: [
      {
        id: "cloud2",
        icon: cloudIcon,
        title: "Cloud Intermediate",
        tooltip: {
          content:
            "A data warehouse is a large collection of business data used to help an organization make decisions.",
        },
        children: [
          {
            id: "cloud3",
            icon: cloudIcon,
            title: "Cloud Advanced",
            tooltip: {
              content:
                "SQL is a standard language for storing, manipulating and retrieving data in databases.",
            },
            children: [
              {
                id: "cloud4",
                icon: cloudIcon,
                title: "Cloud Expert",
                tooltip: {
                  content:
                    "Data preparation is the process of cleaning and transforming raw data prior to processing and analysis.",
                },
                children: [
                  {
                    id: "cloud5",
                    icon: cloudIcon,
                    title: "Cloud Grandmaster",
                    tooltip: {
                      content:
                        "Data replication is the process by which data residing on a physical/virtual server(s) or cloud instance (primary instance) is continuously replicated or copied to a secondary server(s) or cloud instance.",
                    },
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "sql",
    icon: sqlIcon,
    title: "SQL Novice",
    tooltip: {
      content:
        "ETL, which stands for extract, transform, and load, is the process data engineers use to extract data from different sources, transform the data into a  usable and trusted resource, and load that data into the systems end-users can access and use downstream to solve business problems.",
    },
    children: [
      {
        id: "sql1",
        icon: sqlIcon,
        title: "SQL Intermediate",
        tooltip: {
          content:
            "A data warehouse is a large collection of business data used to help an organization make decisions.",
        },
        children: [
          {
            id: "sql2",
            icon: sqlIcon,
            title: "SQL Advanced",
            tooltip: {
              content:
                "SQL is a standard language for storing, manipulating and retrieving data in databases.",
            },
            children: [
              {
                id: "sql3",
                icon: sqlIcon,
                title: "SQL Expert",
                tooltip: {
                  content:
                    "Data preparation is the process of cleaning and transforming raw data prior to processing and analysis.",
                },
                children: [
                  {
                    id: "sql4",
                    icon: sqlIcon,
                    title: "SQL Grandmaster",
                    tooltip: {
                      content:
                        "Data replication is the process by which data residing on a physical/virtual server(s) or cloud instance (primary instance) is continuously replicated or copied to a secondary server(s) or cloud instance.",
                    },
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
