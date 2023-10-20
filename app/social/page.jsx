import about from "@/_data/about";

import React from 'react'

export default function Social() {
  return (
    <div>
    {about.links.map(item =>(
        <div>
            {item.name}
            {item.link}
        </div>
      ))}
    </div>
  )
}
