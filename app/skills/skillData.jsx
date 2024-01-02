"use client";
import { BsArrowRightCircleFill } from "react-icons/bs";

export default function SkillDat({title, items}) {
  return (
    <div className="professional-card">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title flex justify-right space-x-4">
          <div className='arrow'><BsArrowRightCircleFill/></div>
            <b>{title}</b>
          </h5>
          <div className="flex justify-center">
          <ul className="list">
          {items.map((item, index) => (
              <li className="list-group-item" key={index}>
                {item.name}
              </li>
            ))}
          </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
