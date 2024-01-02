import React from 'react'

export default function ProjectData({title, description, techStack, link}) {
  return (
    <div className="project-card">
      <div className="proj-card mb-3">
        <div className="proj-card-body">
        <a href={link} target="_blank" rel="noopener noreferrer">
            <h5 className="proj-card-title mb-2 font-weight-bold">{title}</h5>
          </a>
          <p className="proj-card-text mb-3">{description}</p>
          <div className="proj-tech-stack">
            <h6 className="proj-tech-stack-title">Tech Stack</h6>
            <div className="proj-tech-stack-list">
              {techStack.map((tech, index) => (
                <div className="proj-tech-stack-item" key={index}>{tech}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
