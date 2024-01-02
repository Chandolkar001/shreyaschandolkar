import React from 'react';
import { BsArrowRightCircleFill } from "react-icons/bs";

export default function ExpData ({ title, company, location, duration, description, type, href }) {
  return (
<div className="job-card">
      <div className='flex justify-between'>
        <span className='mx-4 mt-2'>
        <div className="job-card-title text-neutral-900 text-xl">{title}</div>
        <h6 className="card-subtitle text-muted">{company}</h6>
        <h6 className='text-sm mb-2 italic'>{location}</h6>
        </span>
        <span>
        <div className="job-card-date">
        {duration}
        </div>
        </span>

      </div>
      <div className="border-b-2 mx-4 border-blue-500 mb-2 flex-grow"></div>

      <div className="card-body">
        <ul className="list-group">
          {description.map((point, index) => (
            <li className="job-items" key={index}>
              <div className='arrow'><BsArrowRightCircleFill/></div>
              <div className='job-content'>
                {point}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

