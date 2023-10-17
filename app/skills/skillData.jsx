import skills from "@/_data/skill"

export default function SkillDat() {
  return (
    <div>
      {skills.frameworks.map(item =>(
        <p>{item.name}</p>
      ))}
    </div>
  )
}
