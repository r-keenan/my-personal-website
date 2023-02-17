import { skills } from "@/config/index";

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
            {skills.map((category) => (
              <div key={category.name} className="pt-6">
                <div className="flow-root bg-gray-light rounded-lg px-6 pb-8 h-full">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-blue-light rounded-md shadow-lg">
                        <category.icon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-dark tracking-tight">
                      {category.name}
                    </h3>
                    <ul className="mt-5 text-base text-gray-medium text-left ml-8 list-disc">
                      {category.listItems.map((category) => (
                        <li key={category}>{category}</li>
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
