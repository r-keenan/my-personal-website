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

export const API_URL: string =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

export const monthsAbbreviated: string[] = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const monthsFull: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const skills = [
  {
    name: "Front End Development",
    icon: DesktopComputerIcon,
    listItems: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6)",
      "TypeScript",
      "Svelte/Sveltekit",
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
      "Node.js/Express.js",
      "Java",
      "C#/.Net",
      "SQL",
      "Nest.js",
      "PHP",
      "Ruby on Rails",
      "Linux Servers",
      "Python",
    ],
  },
  {
    name: "Data Engineering/Analysis",
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
    listItems: ["Postgres", "Microsoft SQL Server", "MySQL", "MongoDB"],
  },
  {
    name: "CMS Development",
    icon: CogIcon,
    listItems: ["Sanity", "Shopify", "WordPress"],
  },
  {
    name: "Development Tools",
    icon: CodeIcon,
    listItems: [
      "Neovim",
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
      "Basecamp",
      "Kanban",
      "Git",
      "Github",
      "Gitlab",
      "BitBucket",
      "Swagger",
      "Postman",
      "Azure DevOps (ADO)",
    ],
  },
  {
    name: "Cloud Platforms",
    icon: CloudIcon,
    listItems: ["AWS", "Azure", "Digital Ocean", "Vercel"],
  },
  {
    name: "Methodologies",
    icon: BeakerIcon,
    listItems: ["Agile", "Kanban", "Scrum", "SAFe", "Waterfall"],
  },
];
