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

const features = [
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

export default function SkillsCard() {
  return (
    <div className="relative pt-24 bg-white pb-20 sm:py-24 lg:pt-32 ">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <h2 className="text-3xl tracking-tight font-extrabold text-gray-dark uppercase sm:text-4xl">
          My Skills
        </h2>
        <p className="mt-5 max-w-prose mx-auto text-xl text-gray-medium">
          I am a Full Stack Developer with some data engineering and analysis
          thrown in as well. Continue reading to find out which technologies
          that I am most experienced with.
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root bg-gray-light rounded-lg px-6 pb-8 h-full">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-blue-light rounded-md shadow-lg">
                        <feature.icon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-dark tracking-tight">
                      {feature.name}
                    </h3>
                    <ul className="mt-5 text-base text-gray-medium text-left ml-8 list-disc">
                      {feature.listItems.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
