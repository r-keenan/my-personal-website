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

export const months = [
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
    listItems: ["Postgres", "Microsoft SQL Server", "MySQL", "MongoDB"],
  },
  {
    name: "Platform Development",
    icon: CogIcon,
    listItems: ["Shopify", "WordPress"],
  },
  {
    name: "Development Tools",
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
      "Azure DevOps (ADO)",
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
    listItems: ["Agile", "Scrum", "SAFe", "Waterfall"],
  },
];

export const social = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ross-k-2123a1201/",
    target: "_blank",
    rel: "noopener noreferrer",
    icon: (props) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
        {...props}
      >
        <path
          fillRule="evenodd"
          d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "Upwork",
    href: "https://www.upwork.com/freelancers/~0136d18441afe1e7e8",
    target: "_blank",
    rel: "noopener noreferrer",
    icon: (props) => (
      <svg
        fill="currentColor"
        width="24"
        height="24"
        viewBox="0 0 50 50"
        {...props}
      >
        <path
          fillRule="evenodd"
          d="M 1 9 A 1.0001 1.0001 0 0 0 0 10 L 0 24.5 C 0 30.832314 5.1676857 36 11.5 36 C 17.222701 36 21.784718 31.707225 22.650391 26.220703 C 23.266946 27.074852 23.852862 27.94719 24.548828 28.728516 C 23.305285 33.997601 21.75435 40.586226 21.003906 43.771484 A 1.0001 1.0001 0 0 0 21.976562 45 L 28.140625 45 A 1.0001 1.0001 0 0 0 29.115234 44.228516 C 29.796783 41.335284 30.661366 37.663644 31.474609 34.212891 C 33.325586 35.182074 35.46699 36 38 36 C 44.607457 36 50 30.607457 50 24 C 50 17.392543 44.607457 12 38 12 C 33.351597 12 29.329494 14.73649 27.349609 18.787109 C 25.250367 15.153046 23.679535 11.321256 23.107422 9.671875 A 1.0001 1.0001 0 0 0 22.162109 9 L 16 9 A 1.0001 1.0001 0 0 0 15 10 L 15 24.5 C 15 26.438477 13.438477 28 11.5 28 C 9.5615232 28 8 26.438477 8 24.5 L 8 10 A 1.0001 1.0001 0 0 0 7 9 L 1 9 z M 2 11 L 6 11 L 6 24.5 C 6 27.523523 8.4764768 30 11.5 30 C 14.523523 30 17 27.523523 17 24.5 L 17 11 L 21.482422 11 C 22.273404 13.215441 23.944949 17.537644 26.566406 21.546875 A 1.0001 1.0001 0 0 0 28.367188 21.269531 C 29.570504 16.954686 33.490696 14 38 14 C 43.522543 14 48 18.477457 48 24 C 48 29.522543 43.522543 34 38 34 C 35.415566 34 33.139372 33.060118 31.306641 31.933594 A 1.0001 1.0001 0 0 0 29.810547 32.556641 C 28.977084 36.092572 28.087065 39.869349 27.349609 43 L 23.240234 43 C 24.068273 39.484692 25.440674 33.656175 26.601562 28.738281 A 1.0001 1.0001 0 0 0 26.359375 27.826172 C 25.067499 26.438388 23.890106 24.834136 22.845703 23.173828 A 1.0001 1.0001 0 0 0 21 23.707031 L 21 24.5 C 21 29.747686 16.747686 34 11.5 34 C 6.2523143 34 2 29.747686 2 24.5 L 2 11 z M 38 18 C 35.267007 18 32.868994 19.854944 32.189453 22.5 C 32.117963 22.778361 31.79793 24.13658 31.296875 26.257812 A 1.0001 1.0001 0 0 0 31.640625 27.265625 C 33.155461 28.493019 35.372083 30 38 30 C 41.299377 30 44 27.299377 44 24 C 44 20.700623 41.299377 18 38 18 z M 38 20 C 40.214623 20 42 21.785377 42 24 C 42 26.214623 40.214623 28 38 28 C 36.36884 28 34.726398 27.035602 33.404297 26.041016 C 33.766735 24.509483 34.108542 23.067781 34.126953 22.996094 C 34.581412 21.22715 36.166993 20 38 20 z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "https://github.com/r-keenan",
    target: "_blank",
    rel: "noopener noreferrer",
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];
