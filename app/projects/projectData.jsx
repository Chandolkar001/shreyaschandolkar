import projects from "@/_data/project";

import React from 'react'

export default function ProjectData() {
  return (
    <>
        <div>
            {projects.map((p)=>(
                <div>
                    {p.title}
                    {p.languages}
                    {p.href}
                    {p.desc}
                </div>
            ))}
        </div>
    </>
  )
}
