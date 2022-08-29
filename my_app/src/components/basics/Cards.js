import React from 'react'
import './style.css'
import Menu from './Menu'

const Cards = (props) => {
  return (
    <>




      <div className="side">
        <div className="card heading">
          <img className="card-img-top img" src={props.image} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.text}</p>
            <a href="https://www.zomato.com/" className="btn btn-primary">{props.btn}</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cards