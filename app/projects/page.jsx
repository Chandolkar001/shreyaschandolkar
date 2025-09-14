import ProjectData from "./projectData"
import projects from "@/_data/project";

export default function Projects() {
  return (
    <div className="px-4 md:px-6">
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
