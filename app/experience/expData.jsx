import React from 'react';
import { BsArrowRightCircleFill } from "react-icons/bs";

export default function ExpData ({ title, company, location, duration, description, type, href }) {
  return (
<div className="job-card">
      <div className='flex justify-between'>
        <span className='mx-4 mt-2'>
        <div className="job-card-title text-primary-blue text-xl heading-secondary">{title}</div>
        <h6 className="card-subtitle text-blue-gray body-medium">{company}</h6>
        <h6 className='text-sm mb-2 italic text-blue-gray body-text'>{location}</h6>
        </span>
        <span>
        <div className="job-card-date ui-text">
        {duration}
        </div>
        </span>

      </div>
      <div className="border-b-2 mx-4 border-medium-blue mb-2 flex-grow"></div>

      <div className="card-body">
        <ul className="list-group">
          {description.map((point, index) => (
            <li className="job-items" key={index}>
              <div className='arrow'><BsArrowRightCircleFill/></div>
              <div className='job-content text-blue-gray body-text'>
                {point}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

