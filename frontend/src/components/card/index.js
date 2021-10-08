import React from 'react';

export default function Card({ color, heading, count, text }) {
  return (
    <div className={`card text-white bg-${color} mb-3`}>
      <div className="card-header">{heading}</div>
      <div className="card-body">
        <h5 className="card-title">{count}</h5>
        {text && <p>{text}</p>}
      </div>
    </div>
  );
}
