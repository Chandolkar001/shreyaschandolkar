import SkillDat from "./skillData"
import skills from "@/_data/skill"


export default function Skills() {
  const skillCategories = Object.keys(skills);
  return (
    <div>
      {skillCategories.map((category, index) => (
          <SkillDat
            key={index}
            title={category}
            items={skills[category]}
          />
      ))}
    </div>
  )
}
