import {
  CogIcon,
  DesktopComputerIcon,
  ServerIcon,
  DatabaseIcon,
  TerminalIcon,
  CodeIcon,
  CloudIcon,
  BeakerIcon,
  CursorClickIcon,
} from "@heroicons/react/outline";

export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

export const skills = [
  {
    name: "Front End Development",
    icon: DesktopComputerIcon,
    listItems: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6)",
      "TypeScript",
      "React",
      "Angular",
      "Vue.js",
      "Tailwind CSS",
      "Next.js",
    ],
  },
  {
    name: "Backend Development",
    icon: ServerIcon,
    listItems: [
      "Node.js",
      "Java",
      "C#/.Net",
      "SQL",
      "Express.js",
      "PHP",
      "Ruby on Rails",
      "Linux Servers",
    ],
  },
  {
    name: "Data Engineering",
    icon: ServerIcon,
    listItems: [
      "Web Scrapers (Python)",
      "Extract, Transform, Load (ETL)",
      "Data Cleansing",
      "Data Visualizations",
      "Reporting Software",
    ],
  },
  {
    name: "API/API Integrations",
    icon: TerminalIcon,
    listItems: ["RESTful APIs", "Microservices", "GraphQL APIs"],
  },
  {
    name: "Database Development",
    icon: DatabaseIcon,
    listItems: ["Postgres", "Microsoft SQL Server", "MySQL"],
  },
  {
    name: "Platform Development",
    icon: CogIcon,
    listItems: ["Shopify", "WordPress"],
  },
  {
    name: "IDEs/Text Editors/SQL",
    icon: CodeIcon,
    listItems: [
      "Visual Studio Code",
      "JetBrains Rider",
      "Visual Studio",
      "IntelliJ",
      "Microsoft SQL Server Management Studio",
      "Azure Data Studio",
    ],
  },
  {
    name: "Tools/Applications",
    icon: CursorClickIcon,
    listItems: [
      "Jira",
      "Confluence",
      "Kanban",
      "Git",
      "Github",
      "BitBucket",
      "Swagger",
      "Postman",
    ],
  },
  {
    name: "Cloud Platforms",
    icon: CloudIcon,
    listItems: ["AWS", "Digital Ocean", "Vercel"],
  },
  {
    name: "Methodologies",
    icon: BeakerIcon,
    listItems: ["Agile", "Waterfall"],
  },
];

export const qualifications = [
  {
    name: "Front End Development",
    description:
      "Working with straight HTML5 and CSS3, or a component based framework like React, Vue, or Angular.",
  },
  {
    name: "Backend Development",
    description:
      "Writing server side code to meet project and business requirements.",
  },
  {
    name: "Data Engineering",
    description:
      "Cleaning and transforming data from sources like CSV, Excel, or PDF files. Scripting clean data into the database.",
  },
  {
    name: "API/API Integrations",
    description:
      "Developing APIs or API Integration solutions. Staying up to date on API documentation changes.",
  },
  {
    name: "Database Development",
    description: "Creating and updating tables. Scripting in data when needed.",
  },
  {
    name: "Cloud Providers",
    description:
      "Working with large ecosystems like AWS or smaller ones such as Digital Ocean or Vercel.",
  },
  {
    name: "Programming Methodologies",
    description: "Working primarily in Agile or Waterfall environments.",
  },
  {
    name: "Platform Development",
    description: "Working with new and older Content Management Systems.",
  },
];
