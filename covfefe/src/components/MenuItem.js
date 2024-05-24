import React from 'react'

export default function MenuItem({image, altText, price, item}) {
  return (
    <div className="col-4"> 
      <div className="card" style={{ maxWidth: '18rem'}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={image} className="card-img-top" alt={altText}/>
              <div className="col-md-8">
                <div className ="card-body">
              <h5 className="card-title">{item}</h5>
              <p className ="card-text">{`$${price}`}</p>
            <div className ="card-body">
            </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
