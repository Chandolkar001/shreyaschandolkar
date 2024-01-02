import React from 'react';
import { BsArrowRightCircleFill } from "react-icons/bs";
import { Box, Heading, Text, Flex, List, ListItem, ListIcon } from '@chakra-ui/react';

export default function ExpData ({ title, company, location, duration, description }) {
  return (
<div className="job-card">
      <div className="card-header text-right mx-4">
        <small>{duration}</small>
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{company}</h6>
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

