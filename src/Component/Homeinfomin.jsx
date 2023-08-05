import React from 'react';
import '../Style/homeinfoin.scss'
const Homeinfomin = (props) => {
  return (
    <div className='home'>
        <div className='homecontainer'>
            <div className="img">
              <span>{props.icon}</span>
            </div>
            <div className="containerinfo">
              <h4>{props.direction}</h4>
              <p>{props.info}</p>
            </div>
        </div>
    </div>
  )
}

export default Homeinfomin