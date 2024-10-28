import { GitHubIcon, LinkedInIcon } from "@components/SocialIcons";
import { Skill, SocialIcon } from "@/utils/types/types";
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

export const skills: Skill[] = [
  {
    name: "Front End Development",
    icon: DesktopComputerIcon,
    listItems: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6)",
      "TypeScript",
      "Svelte/Sveltekit",
      "Next.js",
      "React",
      "Vue.js",
      "Angular",
      "Tailwind CSS",
    ],
  },
  {
    name: "Backend Development",
    icon: ServerIcon,
    listItems: [
      "C#/.Net",
      "Node.js/Express.js",
      "SQL",
      "Python",
      "Nest.js",
      "Java",
      "PHP",
      "Ruby on Rails",
      "Linux Servers",
    ],
  },
  {
    name: "Object Relational Mappers (ORMs)",
    icon: ServerIcon,
    listItems: ["Entity Framwork Core", "Prisma", "Dapper", "Active Record"],
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
    name: "Database Development & Object Storage",
    icon: DatabaseIcon,
    listItems: [
      "Postgres",
      "Microsoft SQL Server",
      "MySQL",
      "MongoDB",
      "SQLite",
      "Amazon DynamoDB",
      "Azure SQL Database",
      "Azure Blob Storage",
      "Amazon S3",
    ],
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
      "Datagrip",
      "Webstorm",
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
      "GitHub",
      "GitLab",
      "Bitbucket",
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

export const socials: SocialIcon[] = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/r-keenan",
    target: "_blank",
    rel: "noopener noreferrer",
    icon: LinkedInIcon,
  },
  {
    name: "GitHub",
    href: "https://github.com/r-keenan",
    target: "_blank",
    rel: "noopener noreferrer",
    icon: GitHubIcon,
  },
];
