import SkillDat from "./skillData"
import skills from "@/_data/skill"


export default function Skills() {
  const skillCategories = Object.keys(skills);
  return (
    <div className="card-bg"style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <div className="card-con">{skillCategories.map((category, index) => (
          <SkillDat
            key={index}
            title={category}
            items={skills[category]}
          />
      ))}
    </div>
    </div>

  )
}
