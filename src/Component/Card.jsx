import React from 'react'
import instagram from '../assets/instagram.png';
import "../Style/card.scss"
const Card = (props) => {
    const USERS = [
        {
          id: "u1",
          name: "Shubham Ankushe",
          image: instagram,
          titel: "This is title",
          comment: "ipsum dolor sit amet consectetur, adipisicing elit. Soluta harum corrupti, eos quis recusandae quas quidem sunt? Officiis, eaque laudantium!"
        },
      ];
    
  return (
    <div className='card-container'>
        <div className="person-intro">
            <div className="person-img">
                <img src={instagram} alt={USERS.name}/>
            </div>
            <div className="person-name">
                <h2>Shubham Ankushe</h2>
                <div className="rating">
                    <span>Stars</span>
                </div>
            </div>
        </div>
        <div className="person-comment">
            <span>This is title</span>
            <p>ipsum dolor sit amet consectetur, adipisicing elit. Soluta harum corrupti, eos quis recusandae quas quidem sunt? Officiis, eaque laudantium! ipsum dolor sit amet consectetur, adipisicing elit. Soluta harum corrupti, eos quis recusandae quas quidem sunt? Officiis, eaque laudantium!sit amet consectetur, adipisicing elit. Soluta harum corrupti, eos quis recusandae quas quidem sunt? Officiis, eaque laudantium! ipsum dolor sit amet consectetur, adipisicing elit. Soluta harum corrupti, eos quis recusandae quas quidem sunt? Officiis, eaque laudantium!</p>
        </div>
    </div>
  )
}

export default Card