import React from 'react';
import { Box, Heading, Text, Flex, List, ListItem, ListIcon } from '@chakra-ui/react';

export default function ExpData ({ title, company, location, duration, description }) {
  return (
<div className="card">
      <div className="card-header text-right">
        <small>{duration}</small>
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{company}</h6>
        <ul className="list-group">
          {description.map((point, index) => (
            <li className="list-group-item" key={index}>-{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

