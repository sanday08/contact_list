import React from 'react'
import Avtar from './Avtar'
import Detail from './Detail'

function Card(props) {
    return (
      <div className="card">
        <div className="top">
          <p className="name">{props.name}</p>
          <Avtar img={props.img}/>
        </div>
       <Detail phone={props.phone} email={props.email}/>
      </div>
    );
  }

export default Card
