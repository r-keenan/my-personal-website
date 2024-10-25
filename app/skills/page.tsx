import SkillCard from "@/components/SkillCard";
import { Skill } from "@/utils/types/types";
import { skills } from "@config/index";

export default function SkillsPage() {
  return (
    <div>
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
              {skills.map((skill: Skill) => (
                <SkillCard key={skill.name} {...skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
