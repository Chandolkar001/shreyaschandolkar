import ProjectData from "./projectData"
import projects from "@/_data/project";

export default function Projects() {
  return (
    <div>
{projects.map((proj, index) => (
        <ProjectData
          key={index}
          title={proj.title}
          description={proj.desc}
          techStack={proj.languages}
          link={proj.href}
        />
      ))}
    </div>
  )
}
