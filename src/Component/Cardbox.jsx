import React from 'react'
import Card from './Card'
import '../Style/cardbox.scss';
import {AiOutlineDoubleLeft } from "react-icons/ai";
const Cardbox = () => {
  return (
    <div className='cardbox-container'>
        
        <div className='cardbox-item'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </div>
  )
}

export default Cardbox