import React from 'react';

export default function MenuItem({ image, altText, price, item }) {
  return (
    <div className="col-4 mb-4">
      <div className="card h-100">
        <img src={image} className="card-img-top" alt={altText} />
        <div className="card-body">
          <h5 className="card-title">{item}</h5>
          <p className="card-text">{`$${price}`}</p>
        </div>
      </div>
    </div>
  );
}
