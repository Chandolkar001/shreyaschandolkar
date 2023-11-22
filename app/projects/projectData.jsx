import React from 'react'

export default function ProjectData({title, description, techStack, link}) {
  return (
    <div className="project-card">
      <div className="card mb-3">
        <div className="card-body">
        <a href={link} target="_blank" rel="noopener noreferrer">
            <h5 className="card-title mb-2 font-weight-bold">{title}</h5>
          </a>
          <p className="card-text mb-3">{description}</p>
          <div className="tech-stack">
            <h6 className="tech-stack-title">Tech Stack</h6>
            <div className="tech-stack-list">
              {techStack.map((tech, index) => (
                <div className="tech-stack-item" key={index}>{tech}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
