"use client";
export default function SkillDat({title, items}) {
  return (
    <div className="professional-card">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title"><b>{title}</b></h5>
          <ul className="list-group list-group-flush">
          {items.map((item, index) => (
              <li className="list-group-item" key={index}>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
