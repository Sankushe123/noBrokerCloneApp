import React from 'react'
import "../Style/homeCounter.scss"
const HomeCounter = (props) => {
  return (
    <>
    <div className='counter-item'>
        <div className='counter-box'>
            <div className="counter-inner-txt">
                <h2>{props.count}</h2>
            </div>
        </div>
        <div className="counter-txt">
            <h4>{props.listing}</h4>
        </div>
    </div>
    </>
  )
}

export default HomeCounter