import React from 'react'

const Card = (props) => {
    const {title, description, price, brand, thumbnail, category}=props;

  return (
    <div className='container mt-4 d-flex flex-row flex-wrap'>
        <div className="card m-2" style={{width:"18rem", height:"30rem"}}>
        <img src={thumbnail} className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text overflow-auto" style={{textWrap:"wrap"}}>{description}</p>
        <div className="d-flex justify-content-between flex-row">
             <div> Price: Rs.{price}</div>
            <div> Brand: {brand}</div>
            <div> Category: {category}</div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Card