import { skills } from "@/config/index";
import { Skill } from "@/utils/types/types";

export default function SkillsCard(skill: Skill) {
  return (
    <div key={skill.name} className="pt-6">
      <div className="flow-root bg-gray-light rounded-lg px-6 pb-8 h-full">
        <div className="-mt-6">
          <div>
            <span className="inline-flex items-center justify-center p-3 bg-blue-light rounded-md shadow-lg">
              <skill.icon className="h-6 w-6 text-white" aria-hidden="true" />
            </span>
          </div>
          <h3 className="mt-8 text-lg font-medium text-gray-dark tracking-tight">
            {skill.name}
          </h3>
          <ul className="mt-5 text-base text-gray-medium text-left ml-8 list-disc">
            {skill.listItems.map((category) => (
              <li key={category}>{category}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
