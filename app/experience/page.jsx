import ExpData from "./expData"
import exp from "@/_data/exp"

export default function Experience() {
  return (
    <div>
      {exp.map((experience, index) => (
        <ExpData
          key={index}
          title={experience.position}
          company={experience.name}
          location={experience.place}
          duration={experience.years}
          description={experience.desc}
        />
      ))}
    </div>
  )
}
