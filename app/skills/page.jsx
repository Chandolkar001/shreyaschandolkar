import SkillDat from "./skillData"
import skills from "@/_data/skill"


export default function Skills() {
  const skillCategories = Object.keys(skills);
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>      {skillCategories.map((category, index) => (
          <SkillDat
            key={index}
            title={category}
            items={skills[category]}
          />
      ))}
    </div>
  )
}
