import skills from "@/_data/skill"

export default function SkillDat() {
  return (
    <>
    <div>
      {skills.frameworks.map(item =>(
        <p>{item.name}</p>
      ))}
    </div>
    <div>
      {skills.languages.map(item =>(
        <p>{item.name}</p>
      ))}
    </div>
    <div>
      {skills.tools.map(item =>(
        <p>{item.name}</p>
      ))}
    </div>
    <div>
      {skills.misc.map(item =>(
        <p>{item.name}</p>
      ))}
    </div>
    <div>
      {skills.computing_environments.map(item =>(
        <p>{item.name}</p>
      ))}
    </div>
    </>
  )
}
