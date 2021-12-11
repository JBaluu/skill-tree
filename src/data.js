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
        "An ETL novice has a basic understanding of data, data handling, relational datasets, as well as possesses basic programming skills and has experience with an ETL tool or PL/SQL",
    },
    children: [
      {
        id: "etl2",
        icon: etlIcon,
        title: "ETL Intermediate",
        tooltip: {
          content:
            "An ETL intermediate can design low complexity data flows or medium complexity ones based on a specification. He/she is familiar with all common tool and transformations with an ETL tool, as well as with common built-in methods. He/she has basic SQL knowledge, can handle errors, logging, and parallel execution.",
        },
        children: [
          {
            id: "etl3",
            icon: etlIcon,
            title: "ETL Advanced",
            tooltip: {
              content:
                "An ETL advanced can design medium complexity dataflows or high complexity ones based on a specification. He/she is familiar with 2+ ETL tools and can work around platform specific issues and limitation. He/she can optimize query pushdowns has at least intermediate SQL and scripting skills. He/she can handle SOAP/API calls, ETL frameworks and advanced errors.",
            },
            children: [
              {
                id: "etl4",
                icon: etlIcon,
                title: "ETL Expert",
                tooltip: {
                  content:
                    "An ETL expert can design and develop high complexity data flows, as well as make architecture choices based on anticipated workload. He/she has advanced SQL and expert scripting language knowledge, while also designing ETL frameworks and custom components.",
                },
                children: [
                  {
                    id: "etl5",
                    icon: etlIcon,
                    title: "ETL Grandmaster",
                    tooltip: {
                      content:
                        "Too good",
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
        "A SQL novice knows the basic query structure, aggregates, aliases, and operators. Additionally, she/he can use the DISTINCT, INNER JOIN, LIMIT/TOP and ORDER BY keywords.",
    },
    children: [
      {
        id: "sql1",
        icon: sqlIcon,
        title: "SQL Intermediate",
        tooltip: {
          content:
            "A SQL intermediate can perform subqueries, basic pattern matching, built-in functions, basic query optimizations, B-tree indexes, foreign keys, views, cursors, delete vs. truncate and constraints. She/he can use the CAST, COALESCE, NULL, OUTER JOIN, HAVING and UNION (ALL) keywords. Finally, she/he has 2+ years of experience with RDBMS, can find duplicate records by key, handle transactions, temporary tables and writes testable code.",
        },
        children: [
          {
            id: "sql2",
            icon: sqlIcon,
            title: "SQL Advanced",
            tooltip: {
              content:
                "A SQL advanced knows her/his way around CTEs, advanced query optimizations, compound indexes, partitioning, regular expressions, unique vs foreign key, clustering, sequence, stored procedures, UDFs and the MINUS, INTERSECT keywords. She/he has at least 3 years of experience with RDBMS, intermediate meta-programming skills, and can also use locks, advanced transaction handling, isolation level and triggers.",
            },
            children: [
              {
                id: "sql3",
                icon: sqlIcon,
                title: "SQL Expert",
                tooltip: {
                  content:
                    "A SQL expert can write recursive CTEs, triggers and can make design choices based on anticipated workload. She/he also has at least 4 years of experience with RDBMS, and some experience with MPP or in-memory RDBMS, while also having advanced meta-programming skills.",
                },
                children: [
                  {
                    id: "sql4",
                    icon: sqlIcon,
                    title: "SQL Grandmaster",
                    tooltip: {
                      content:
                        "Too good",
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
        "A cloud novice has at least few months of general experience with a cloud provider (AWS, Azure, Google). He/she understands basic architectural principles, the value proposition of the provider, the use-cases of key services, as well as basic security, compliance, deployment, and operating principles.",
    },
    children: [
      {
        id: "cloud2",
        icon: cloudIcon,
        title: "Cloud Intermediate",
        tooltip: {
          content:
            "A cloud intermediate has at least a year of general experience with a cloud provider (AWS, Azure, Google). He/she understands the providers basic architecture and core services. He/she has hands-on experience in designing, developing, deploying, and maintaining applications, with working knowledge applications that uses notification, workflow, storage, and change managements services.",
        },
        children: [
          {
            id: "cloud3",
            icon: cloudIcon,
            title: "Cloud Advanced",
            tooltip: {
              content:
                "A cloud advanced has at least a few years of experience with a cloud provider (AWS, Azure, Google). He/she understands the providers basic architecture and core services. He/she has hands-on experience from multiple projects in designing, developing, deploying, and maintaining applications, with working knowledge applications that uses notification, workflow, storage, and change managements services.",
            },
            children: [
              {
                id: "cloud4",
                icon: cloudIcon,
                title: "Cloud Expert",
                tooltip: {
                  content:
                    "A cloud expert has multiple years of experience with a cloud provider (AWS, Azure, Google). He/she is someone who can evaluate an organization’s requirements and make architectural recommendations for implementing and deploying applications with the given provider. Additionally, he/she has basic knowledge of multiple providers and their strengths and weaknesses.",
                },
                children: [
                  {
                    id: "cloud5",
                    icon: cloudIcon,
                    title: "Cloud Grandmaster",
                    tooltip: {
                      content:
                        "Too good",
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
        "A (Python) programming novice can define variables and basic data structures. He=she can use conditions, control flows, loop, iterables, functions, built-in methods and can take input from a user or through a file.",
    },
    children: [
      {
        id: "pro1",
        icon: programmingIcon,
        title: "Programming Intermediate",
        tooltip: {
          content:
            "A (Python) programming intermediate understands object-oriented programming, mutability, comprehensions, lambda functions, functional programming paradigms, inheritance, modules, async IO, threading, multiprocessing, algorithms, data structures, environments, and regex.",
        },
        children: [
          {
            id: "pro2",
            icon: programmingIcon,
            title: "Programming Advanced",
            tooltip: {
              content:
                "A (Python) advanced knows most of the following: args and **kwards, generators, decorators, concurrency, parallelism, meta classes, the re package, testing, and Cython.",
            },
            children: [
              {
                id: "pro3",
                icon: programmingIcon,
                title: "Programming Expert",
                tooltip: {
                  content:
                    "A (Python) programming expert has many years of experience with the above-mentioned features and demonstrated excellence in applying them through multiple projects, while also considered the go to person in this area.",
                },
                children: [
                  {
                    id: "pro4",
                    icon: programmingIcon,
                    title: "Programming Grandmaster",
                    tooltip: {
                      content:
                        "Too good",
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
        "A visualization novice can choose from common chart types, create interactions between them, while following a coherent visual style. She/he can participate in reporting discussions and understands the role of data visualization in a reporting workflow. She/he is aware of the fundamentals of a chosen viz/BI tool and can make small changes to dashboards created by others.",
    },
    children: [
      {
        id: "viz2",
        icon: vizIcon,
        title: "Data Viz Intermediate",
        tooltip: {
          content:
            "A visualization intermediate can recommend the most appropriate chart types based on needs and can use preattentive attributes, while also enhancing legibility of existing visualizations and spotting violation of best practices. She/he understands the reporting process and can verbalize process issues. She/he has a comprehensive understanding of at least one viz/BI tool, can translate wireframes and mockups into maintainable dashboards, can use advanced calculations and follows a consistent naming convention.",
        },
        children: [
          {
            id: "viz3",
            icon: vizIcon,
            title: "Data Viz Advanced",
            tooltip: {
              content:
                "A visualization advanced uses color, typography and text that catches the eye with clean design and message. She/he can lead business discussions about visualization wireframes and best practices, while following the lates visualization trends and providing feedback to others. She/he understands the end-to-end reporting process and can document the reporting architecture. She/he has advanced knowledge in at least one viz/BI tool, with knowledge of supporting techniques, optimization, while also having time to hold basic training to others.",
            },
            children: [
              {
                id: "viz4",
                icon: vizIcon,
                title: "Data Viz Expert",
                tooltip: {
                  content:
                    "A visualization expert is proficient in the lates data visualization trends, coaches others for a longer period and maintains guidelines and best practices for the community. She/he designs BI reporting process and makes architectural choices. She/he is up to date in the current BI trends, maintains training materials and holds interactive trainings on advanced topics.",
                },
                children: [
                  {
                    id: "viz5",
                    icon: vizIcon,
                    title: "Data Viz Grandmaster",
                    tooltip: {
                      content:
                        "Too good",
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
        "A statistics novice understands basic statistical concepts.",
    },
    children: [
      {
        id: "stat1",
        icon: statIcon,
        title: "Statistics Intermediate",
        tooltip: {
          content:
            "A statistics intermediate understands basic sampling, probability theory, distributions, and descriptive statistical concepts. She/he can choose from multiple machine learning techniques to apply.",
        },
        children: [
          {
            id: "stat2",
            icon: statIcon,
            title: "Statistics Advanced",
            tooltip: {
              content:
                "A statistics advanced understands complex statistical concepts like Bayesian inference, and Markov chains. She/he has basic knowledge of virtually all models and is confident with the most used ones. She/he has expertise in a certain subfield of statistics like NLP, neural vision etc.",
            },
            children: [
              {
                id: "stat3",
                icon: statIcon,
                title: "Statistics Expert",
                tooltip: {
                  content:
                    "A (Python) programming expert has many years of experience with the above-mentioned features and demonstrated excellence in applying them through multiple projects, while also considered the go to person in this area.",
                },
                children: [
                  {
                    id: "stat4",
                    icon: statIcon,
                    title: "Statistics Grandmaster",
                    tooltip: {
                      content:
                        "Too good",
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
        "A (Python) programming novice can define variables and basic data structures. He=she can use conditions, control flows, loop, iterables, functions, built-in methods and can take input from a user or through a file.",
    },
    children: [
      {
        id: "pro1",
        icon: programmingIcon,
        title: "Programming Intermediate",
        tooltip: {
          content:
            "A (Python) programming intermediate understands object-oriented programming, mutability, comprehensions, lambda functions, functional programming paradigms, inheritance, modules, async IO, threading, multiprocessing, algorithms, data structures, environments, and regex.",
        },
        children: [
          {
            id: "pro2",
            icon: programmingIcon,
            title: "Programming Advanced",
            tooltip: {
              content:
                "A (Python) advanced knows most of the following: args and **kwards, generators, decorators, concurrency, parallelism, meta classes, the re package, testing, and Cython.",
            },
            children: [
              {
                id: "pro3",
                icon: programmingIcon,
                title: "Programming Expert",
                tooltip: {
                  content:
                    "A (Python) programming expert has many years of experience with the above-mentioned features and demonstrated excellence in applying them through multiple projects, while also considered the go to person in this area.",
                },
                children: [
                  {
                    id: "pro4",
                    icon: programmingIcon,
                    title: "Programming Grandmaster",
                    tooltip: {
                      content:
                        "Too good",
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
        "Every Junior employee should understand essential data structures and components. This person is able to clean and transform data at least with manual transformation (by using spreadsheets, or other tools) and understands the usage of simple joins and unions. A novice team member should be able to identify and summary simple issues and limitation of the current data structure to business users or data engineers. Basic SQL or ETL tool knowledge is advantage but not essential.",
    },
    children: [
      {
        id: "prep2",
        icon: prepIcon,
        title: "Data Preparation Intermediate",
        tooltip: {
          content:
            "Someone with intermediate data preparation knowledge should be comfortable in the most common data related terminology and jargons. This person is able to model and define the required output data structure based on the input data and business logic. This person has confident knowledge of the data processing capabilities and limitation of the used data visualization tool (like Tableau) and able to create simple data processes by using one of the market used data preparation tool.",
        },
        children: [
          {
            id: "prep3",
            icon: prepIcon,
            title: "Data Preparation Advanced",
            tooltip: {
              content:
                "This person is not just comfortable in the most common data related jargons and technics but able to use them. An advanced team member can create complex flows if the issue is defined and able to solve common data quality and performance issues. An advanced data prep member should be able to document complex data process if it is required.",
            },
            children: [
              {
                id: "prep4",
                icon: prepIcon,
                title: "Data Preparation Expert",
                tooltip: {
                  content:
                    "The expert is “one step ahead” in data related topic. This person can advise technology in for particular projects, and able to identify issues and limitations in advance. An expert should be able to define data processing framework, rules, and standards for the project. This person applies the relevant technology quality standards (code quality) and creates compact and easy to read and easy to maintain jobs (“clean code”). An expert should be able to support anyone else in the project and should be good in solving complex data anomalies and performance issues.",
                },
                children: [
                  {
                    id: "prep5",
                    icon: prepIcon,
                    title: "Data Preparation Grandmaster",
                    tooltip: {
                      content:
                        "Too good",
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
        "An ETL novice has a basic understanding of data, data handling, relational datasets, as well as possesses basic programming skills and has experience with an ETL tool or PL/SQL",
    },
    children: [
      {
        id: "etl2",
        icon: etlIcon,
        title: "ETL Intermediate",
        tooltip: {
          content:
            "An ETL intermediate can design low complexity data flows or medium complexity ones based on a specification. He/she is familiar with all common tool and transformations with an ETL tool, as well as with common built-in methods. He/she has basic SQL knowledge, can handle errors, logging, and parallel execution.",
        },
        children: [
          {
            id: "etl3",
            icon: etlIcon,
            title: "ETL Advanced",
            tooltip: {
              content:
                "An ETL advanced can design medium complexity dataflows or high complexity ones based on a specification. He/she is familiar with 2+ ETL tools and can work around platform specific issues and limitation. He/she can optimize query pushdowns has at least intermediate SQL and scripting skills. He/she can handle SOAP/API calls, ETL frameworks and advanced errors.",
            },
            children: [
              {
                id: "etl4",
                icon: etlIcon,
                title: "ETL Expert",
                tooltip: {
                  content:
                    "An ETL expert can design and develop high complexity data flows, as well as make architecture choices based on anticipated workload. He/she has advanced SQL and expert scripting language knowledge, while also designing ETL frameworks and custom components.",
                },
                children: [
                  {
                    id: "etl5",
                    icon: etlIcon,
                    title: "ETL Grandmaster",
                    tooltip: {
                      content:
                        "Too good",
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
        "Every Junior employee should understand essential data structures and components. This person is able to clean and transform data at least with manual transformation (by using spreadsheets, or other tools) and understands the usage of simple joins and unions. A novice team member should be able to identify and summary simple issues and limitation of the current data structure to business users or data engineers. Basic SQL or ETL tool knowledge is advantage but not essential.",
    },
    children: [
      {
        id: "prep2",
        icon: prepIcon,
        title: "Data Preparation Intermediate",
        tooltip: {
          content:
            "Someone with intermediate data preparation knowledge should be comfortable in the most common data related terminology and jargons. This person is able to model and define the required output data structure based on the input data and business logic. This person has confident knowledge of the data processing capabilities and limitation of the used data visualization tool (like Tableau) and able to create simple data processes by using one of the market used data preparation tool.",
        },
        children: [
          {
            id: "prep3",
            icon: prepIcon,
            title: "Data Preparation Advanced",
            tooltip: {
              content:
                "This person is not just comfortable in the most common data related jargons and technics but able to use them. An advanced team member can create complex flows if the issue is defined and able to solve common data quality and performance issues. An advanced data prep member should be able to document complex data process if it is required.",
            },
            children: [
              {
                id: "prep4",
                icon: prepIcon,
                title: "Data Preparation Expert",
                tooltip: {
                  content:
                    "The expert is “one step ahead” in data related topic. This person can advise technology in for particular projects, and able to identify issues and limitations in advance. An expert should be able to define data processing framework, rules, and standards for the project. This person applies the relevant technology quality standards (code quality) and creates compact and easy to read and easy to maintain jobs (“clean code”). An expert should be able to support anyone else in the project and should be good in solving complex data anomalies and performance issues.",
                },
                children: [
                  {
                    id: "prep5",
                    icon: prepIcon,
                    title: "Data Preparation Grandmaster",
                    tooltip: {
                      content:
                        "Too good",
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
    id: "viz",
    icon: vizIcon,
    title: "Data Viz Novice",
    tooltip: {
      content:
        "A visualization novice can choose from common chart types, create interactions between them, while following a coherent visual style. She/he can participate in reporting discussions and understands the role of data visualization in a reporting workflow. She/he is aware of the fundamentals of a chosen viz/BI tool and can make small changes to dashboards created by others.",
    },
    children: [
      {
        id: "viz2",
        icon: vizIcon,
        title: "Data Viz Intermediate",
        tooltip: {
          content:
            "A visualization intermediate can recommend the most appropriate chart types based on needs and can use preattentive attributes, while also enhancing legibility of existing visualizations and spotting violation of best practices. She/he understands the reporting process and can verbalize process issues. She/he has a comprehensive understanding of at least one viz/BI tool, can translate wireframes and mockups into maintainable dashboards, can use advanced calculations and follows a consistent naming convention.",
        },
        children: [
          {
            id: "viz3",
            icon: vizIcon,
            title: "Data Viz Advanced",
            tooltip: {
              content:
                "A visualization advanced uses color, typography and text that catches the eye with clean design and message. She/he can lead business discussions about visualization wireframes and best practices, while following the lates visualization trends and providing feedback to others. She/he understands the end-to-end reporting process and can document the reporting architecture. She/he has advanced knowledge in at least one viz/BI tool, with knowledge of supporting techniques, optimization, while also having time to hold basic training to others.",
            },
            children: [
              {
                id: "viz4",
                icon: vizIcon,
                title: "Data Viz Expert",
                tooltip: {
                  content:
                    "A visualization expert is proficient in the lates data visualization trends, coaches others for a longer period and maintains guidelines and best practices for the community. She/he designs BI reporting process and makes architectural choices. She/he is up to date in the current BI trends, maintains training materials and holds interactive trainings on advanced topics.",
                },
                children: [
                  {
                    id: "viz5",
                    icon: vizIcon,
                    title: "Data Viz Grandmaster",
                    tooltip: {
                      content:
                        "Too good",
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
    id: "ui",
    icon: uiIcon,
    title: "UI Novice",
    tooltip: {
      content:
        "A UI novice learn the core practices of UI design wireframes, prototypes, and surveys. She/he knows basic workflows and can assist with design operations of the team.",
    },
    children: [
      {
        id: "ui",
        icon: uiIcon,
        title: "UI Intermediate",
        tooltip: {
          content:
            "A UI intermediate is fluent in the UI processes and design defensible with user research and other tools.",
        },
        children: [
          {
            id: "ui2",
            icon: uiIcon,
            title: "UI Advanced",
            tooltip: {
              content:
                "A UI advanced has mastery of UI processes and toolkits, can design holistic experiences with big picture strategy and uses frameworks and hypothesis-based approach.",
            },
            children: [
              {
                id: "ui3",
                icon: uiIcon,
                title: "UI Expert",
                tooltip: {
                  content:
                    "A UI expert knows everything that and advanced level knows but can also lead client engagements and hold trainings on advanced level topics.",
                },
                children: [
                  {
                    id: "ui4",
                    icon: uiIcon,
                    title: "UI Grandmaster",
                    tooltip: {
                      content:
                        "Too good",
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
        "An ETL novice has a basic understanding of data, data handling, relational datasets, as well as possesses basic programming skills and has experience with an ETL tool or PL/SQL",
    },
    children: [
      {
        id: "etl2",
        icon: etlIcon,
        title: "ETL Intermediate",
        tooltip: {
          content:
            "An ETL intermediate can design low complexity data flows or medium complexity ones based on a specification. He/she is familiar with all common tool and transformations with an ETL tool, as well as with common built-in methods. He/she has basic SQL knowledge, can handle errors, logging, and parallel execution.",
        },
        children: [
          {
            id: "etl3",
            icon: etlIcon,
            title: "ETL Advanced",
            tooltip: {
              content:
                "An ETL advanced can design medium complexity dataflows or high complexity ones based on a specification. He/she is familiar with 2+ ETL tools and can work around platform specific issues and limitation. He/she can optimize query pushdowns has at least intermediate SQL and scripting skills. He/she can handle SOAP/API calls, ETL frameworks and advanced errors.",
            },
            children: [
              {
                id: "etl4",
                icon: etlIcon,
                title: "ETL Expert",
                tooltip: {
                  content:
                    "An ETL expert can design and develop high complexity data flows, as well as make architecture choices based on anticipated workload. He/she has advanced SQL and expert scripting language knowledge, while also designing ETL frameworks and custom components.",
                },
                children: [
                  {
                    id: "etl5",
                    icon: etlIcon,
                    title: "ETL Grandmaster",
                    tooltip: {
                      content:
                        "Too good",
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
        "A DWH novice knows at least one database engine, programming language and DWH concept.",
    },
    children: [
      {
        id: "dwh1",
        icon: dwhIcon,
        title: "DWH Intermediate",
        tooltip: {
          content:
            "A DWH intermediate knows at least two database engine, programming language and DWH concept. She/he also has at least 6 individual skills on her/his overall level, or more individual skills below her/his level.",
        },
        children: [
          {
            id: "dwh2",
            icon: dwhIcon,
            title: "DWH Advanced",
            tooltip: {
              content:
                "A DWH intermediate knows at least four database engine, programming language and DWH concept. She/he also has at least 9 individual skills on her/his overall level, or more individual skills below her/his level.",
            },
            children: [
              {
                id: "dwh3",
                icon: dwhIcon,
                title: "DWH Expert",
                tooltip: {
                  content:
                    "A DWH expert knows at least five database engine, programming language and DWH concept. She/he also has at least 12 individual skills on her/his overall level, or more individual skills below her/his level.",
                },
                children: [
                  {
                    id: "dwh4",
                    icon: dwhIcon,
                    title: "DWH Grandmaster",
                    tooltip: {
                      content:
                        "Too good",
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
        "A cloud novice has at least few months of general experience with a cloud provider (AWS, Azure, Google). He/she understands basic architectural principles, the value proposition of the provider, the use-cases of key services, as well as basic security, compliance, deployment, and operating principles.",
    },
    children: [
      {
        id: "cloud2",
        icon: cloudIcon,
        title: "Cloud Intermediate",
        tooltip: {
          content:
            "A cloud intermediate has at least a year of general experience with a cloud provider (AWS, Azure, Google). He/she understands the providers basic architecture and core services. He/she has hands-on experience in designing, developing, deploying, and maintaining applications, with working knowledge applications that uses notification, workflow, storage, and change managements services.",
        },
        children: [
          {
            id: "cloud3",
            icon: cloudIcon,
            title: "Cloud Advanced",
            tooltip: {
              content:
                "A cloud advanced has at least a few years of experience with a cloud provider (AWS, Azure, Google). He/she understands the providers basic architecture and core services. He/she has hands-on experience from multiple projects in designing, developing, deploying, and maintaining applications, with working knowledge applications that uses notification, workflow, storage, and change managements services.",
            },
            children: [
              {
                id: "cloud4",
                icon: cloudIcon,
                title: "Cloud Expert",
                tooltip: {
                  content:
                    "A cloud expert has multiple years of experience with a cloud provider (AWS, Azure, Google). He/she is someone who can evaluate an organization’s requirements and make architectural recommendations for implementing and deploying applications with the given provider. Additionally, he/she has basic knowledge of multiple providers and their strengths and weaknesses.",
                },
                children: [
                  {
                    id: "cloud5",
                    icon: cloudIcon,
                    title: "Cloud Grandmaster",
                    tooltip: {
                      content:
                        "Too good",
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
        "A SQL novice knows the basic query structure, aggregates, aliases, and operators. Additionally, she/he can use the DISTINCT, INNER JOIN, LIMIT/TOP and ORDER BY keywords.",
    },
    children: [
      {
        id: "sql1",
        icon: sqlIcon,
        title: "SQL Intermediate",
        tooltip: {
          content:
            "A SQL intermediate can perform subqueries, basic pattern matching, built-in functions, basic query optimizations, B-tree indexes, foreign keys, views, cursors, delete vs. truncate and constraints. She/he can use the CAST, COALESCE, NULL, OUTER JOIN, HAVING and UNION (ALL) keywords. Finally, she/he has 2+ years of experience with RDBMS, can find duplicate records by key, handle transactions, temporary tables and writes testable code.",
        },
        children: [
          {
            id: "sql2",
            icon: sqlIcon,
            title: "SQL Advanced",
            tooltip: {
              content:
                "A SQL advanced knows her/his way around CTEs, advanced query optimizations, compound indexes, partitioning, regular expressions, unique vs foreign key, clustering, sequence, stored procedures, UDFs and the MINUS, INTERSECT keywords. She/he has at least 3 years of experience with RDBMS, intermediate meta-programming skills, and can also use locks, advanced transaction handling, isolation level and triggers.",
            },
            children: [
              {
                id: "sql3",
                icon: sqlIcon,
                title: "SQL Expert",
                tooltip: {
                  content:
                    "A SQL expert can write recursive CTEs, triggers and can make design choices based on anticipated workload. She/he also has at least 4 years of experience with RDBMS, and some experience with MPP or in-memory RDBMS, while also having advanced meta-programming skills.",
                },
                children: [
                  {
                    id: "sql4",
                    icon: sqlIcon,
                    title: "SQL Grandmaster",
                    tooltip: {
                      content:
                        "Too good",
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
