import React, { useState } from 'react'
import '../Style/filterresultcard.scss'
import doller from '../assets/dollar.png';
import Homeinfomin from './Homeinfomin';
import {AiOutlineCompass} from 'react-icons/ai';
import {RiBuilding4Line} from 'react-icons/ri';
import {GiBathtub} from 'react-icons/gi';
import {CiParking1} from 'react-icons/ci';
import {FiHeart} from 'react-icons/fi'
import {GoReport} from 'react-icons/go'
import Imagecarousel from './Imagecarousel';

const FilterReaultcard = ({data}) => {
    
  return (
    <div className='filterresultcard'>
      <div className="cardContainer">
        <div className="cardTop">
          <h3>{data.bhkType}, Flat For Sale In {data.landmark}</h3>
          <span>{data.address} / {data.landmark} / {data.city} / Maharashtra 411015, India</span>
        </div>
        <div className="cardBottom">
          <div className="cardCost">
            <div className="loanStatus ">
              <img src={doller} alt="doller" />
            </div>
            {!(data.propertyAvilableFor === "lease" || data.propertyAvilableFor === "rent") ?
              <>
                <div className="prize">
                  <h4>₹64 Lacs</h4>
                  <p>₹6,406per sqft</p>
                </div>
                <div className="emi">
                  <h4>₹36,651/month</h4>
                  <p>Estimated EMI</p>
                </div>
              </> 
              : 
              <>
                <div className="prize">
                  <h4>{data.sellcost}</h4>
                  <p>₹{data.sellcost/data.builtuparea}per sqft</p>
                </div>
                <div className="emi">
                  <h4>{data.buildyear}</h4>
                  <p>Estimated EMI</p>
                </div>
              </>}
            <div className="area">
              <h4>{data.builtuparea} sqft</h4>
              <p>BuiltUp</p>
            </div>
          </div>
          <div className="carddesc">
            <div className="cardimg">
              <Imagecarousel imgarr={data.newArrayImg}/>
            </div>
            <div className="cardinfo">
              <div className="homeinfo">
                
                <Homeinfomin icon={<AiOutlineCompass/>} direction={data.facingType} info={"Facing Property"}/>
                <Homeinfomin icon={<RiBuilding4Line/>} direction={data.bhkType} info={"Apartment Type"}/>
                {!data.parking && <Homeinfomin icon={<CiParking1/>} direction={<h4>Car</h4>} info={<p>Parking</p>}/>}
                <Homeinfomin icon={<GiBathtub/>} direction={data.bathroom} info={<p>Bathrooms</p>}/>
                
              </div>
              <div className="homedeal">
                <div className="dealbtn">
                  <button>Get Owner Details</button>
                </div>
                
                <div className="deallike">
                  <FiHeart  className="icon"
                          style={{
                            border:'1px solid grey',
                            width:'50px',
                            padding:'5px',
                            marginTop:'3px',
                            height:'6vh',
                            marginLeft:'10px',
                            borderRadius:'5px'
                          }}
                          size="20px"
                          color="black"
                          />
                </div>
                <div className="dealbookmark">
                  <span><GoReport className="icon"
                          style={{
                            border:'1px solid grey',
                            width:'50px',
                            padding:'5px',
                            marginTop:'3px',
                            height:'6vh',
                            marginLeft:'10px',
                            borderRadius:'5px'
                          }}
                          size="20px"
                          color="black"
                          /></span>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterReaultcard