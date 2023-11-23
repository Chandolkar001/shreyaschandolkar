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
      <style jsx>{`
        .professional-card {
          margin: 10px;
          width: 200px; 
          height: 20vh;
        }

        .card {
          background-color: #f0f0f0
          border: 1px solid #ddd;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          transition: box-shadow 0.3s ease;
          height: 100%; /* Make sure the card takes full height */
        }

        .card:hover {
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
          cursor: pointer;
        }

        .card-body {
          padding: 15px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;
          margin-top: 0px
          height: 100%; /* Ensure the card body takes full height */
        }

        .list-group-item {
          /* Additional styles for list items if needed */
        }
      `}</style>
    </div>
  );
}
