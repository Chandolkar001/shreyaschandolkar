import React from 'react'
import { BsArrowRightCircleFill } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";

export default function ProjectData({title, description, techStack, link}) {
  return (
    <div className="project-card">
      <div className="proj-card mb-3">
        <div className="proj-card-body">
          <div className='flex justify-between'>
            <span>
            <h5 className="proj-card-title mb-2  text-neutral-900 text-xl">{title}</h5>
            </span>
            <span>
            <a href={link} target="_blank" rel="noopener noreferrer">
            <div className='text-black'><FiExternalLink /></div>
          </a>
            </span>
          </div>
          <div className="border-b-2 border-blue-500 mb-2 flex-grow"></div>
          <ul className="list-group mb-6">
          {description.map((point, index) => (
            <li className="job-items" key={index}>
              <div className='arrow'><BsArrowRightCircleFill/></div>
              <div className='job-content'>
                {point}
              </div>
            </li>
          ))}
        </ul><div className="proj-tech-stack">
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
