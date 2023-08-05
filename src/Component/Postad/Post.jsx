import React,{useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom';
import './post.scss'
import './postdown.scss'
import NavbarComp from '../NavbarComp'
import {GiLift} from 'react-icons/gi'
import {TbParking} from 'react-icons/tb'
import {FaChair} from 'react-icons/fa'
import {GiPoliceOfficerHead} from 'react-icons/gi'
import {AiOutlineWifi} from 'react-icons/ai'
import {GiKidSlide} from 'react-icons/gi'
import {MdOutlineSchool,MdLocalMall} from 'react-icons/md'
import Uploadimg from './Uploadimg'
import  axios  from 'axios'
const Post = () => {

  const navigate = useNavigate();
  useEffect(() => {
    const isLogin = localStorage.getItem("token")
    if(!isLogin){
        navigate("/");
    }
  })
  

  const apartmentType =[ 
    "Apartment","Independent House/Villa","Gated_community_villa"
];
  const bhkType =[ 
   "1 RK","1 BHK","2 BHK","3 BHK","4 BHK","4 BHK+"
  ];
  const facingType =[ 
    "East","West","North","South","Dont know"
  ];

  const cityType = [
    "Pune","Mumbai","Nashik","nagpur","Satara","Bengalore","Chennei","Delhi"
  ];
  const watersuply = [
    "Corpurate","Boarwell","Both"
  ];
  
  const [cptype,setCptype] = useState('1');


  const [userdata,setUserdata] = useState({
    apartmentType:" ",bhkType:" ", pincode:" ", facingType:" ",newArrayImg:{},cityType:" ",underloan:"",watersuply:" ",builtuparea:" ",address:" ",landmark:" ",propertyAvilableFor:"",exprent:"",sellcost:"",expdeposit:"",rentnego:false,bathroom:"",balcony:"",lift:false,parking:false,furniture:false,security:false,kid_play_area:false,internet:false,school:false,shop:false 
  })
  const currentYear = new Date().getFullYear();
  const yearRange = Array.from({ length: 21 }, (_, index) => currentYear - index);

  const [selectedYear, setSelectedYear] = useState(currentYear);

  const handleYearChange = (event) => {
    setSelectedYear(parseInt(event.target.value));
  };

  let value,name;
  const handelInput=(e)=>{
    name = e.target.name
    value = e.target.value
    setUserdata({...userdata,[name]:value})
  }
  const handleCheckboxChange = (event) => {
    name= event.target.name;
    setUserdata({...userdata,[name]:event.target.checked});
  };
  const handleInputSubmit=()=>{
    console.log(userdata);
    const submitData = {
      apartmentType: userdata.apartmentType,
      bhkType:userdata.bhkType, 
      facingType:userdata.facingType,
      underloan:userdata.underloan,
      city:userdata.cityType,
      watersuply:userdata.watersuply,
      builtuparea:userdata.builtuparea,
      address:userdata.address,
      landmark:userdata.landmark,
      propertyAvilableFor:userdata.propertyAvilableFor,
      exprent:userdata.exprent,
      expdeposit:userdata.expdeposit,
      sellcost:userdata.sellcost,
      rentnego:userdata.rentnego,
      bathroom:userdata.bathroom,
      balcony:userdata.balcony,
      builtyear:selectedYear,
      lift:userdata.lift,
      parking:userdata.parking,
      furniture:userdata.furniture,
      security:userdata.security,
      kid_play_area:userdata.kid_play_area,
      internet:userdata.internet,
      school:userdata.school,
      shop:userdata.shop,
      pincode:userdata.pincode,
      newArrayImg:userdata.newArrayImg,
      account_id:localStorage.getItem('user_id'),
    }
    axios.post("http://localhost:5000/property/ad/create",submitData).then((resp)=>{
      console.log(resp.status);
      console.log("Submit data sucessfully");
    }).catch((err)=>{
      console.log(err);
    });
  }
  return (
    <div className='body'>
        <div className="postcontainer" >
            <div className="property_details">
                <h4>Property Details</h4>
                <div className='pdContainer'>
                  <div className='pd'>
                    <h5>Apartment Type</h5>

                    <div className="type">
                        <select value={userdata.apartmentType} onChange={handelInput} name='apartmentType'>
                            {apartmentType.map(apartmentType =>{
                                return(
                                    <option>{apartmentType}</option>
                                );})
                            }
                        </select>
                    </div>
                  </div>
                  <div className='pd'>
                    <h5>BHK Type</h5>
                   
                    <div className="type">
                        <select value={userdata.bhkType} onChange={handelInput} name='bhkType'>
                            {bhkType.map(bhkType =>{
                                return(
                                    <option >{bhkType}</option>
                                );})
                            }
                        </select>
                    </div>
                  </div>
                  <div className='pd'>
                    <h5>House Facing</h5>
                   
                    <div className="type">
                        <select value={userdata.facingType} onChange={handelInput} name='facingType'>
                            {facingType.map(facingType =>{
                                return(
                                    <option>{facingType}</option>
                                );})
                            }
                        </select>
                    </div>
                  </div>
                  <div className='pd pdex'>
                    <h5>Built Up Area (Sq.ft)</h5>
                    <input type="numeric" name="builtuparea" id="area" autoComplete='off' value={userdata.builtuparea} onChange={handelInput}/>
                  </div>
                </div>
            </div>
            {/* --------------------------------------------- */}
            <div className="Address_details">
              <h4>Locality Details</h4>
             
              <div className='ldContainer'>
                <div className='ld'>
                  <h5>Address</h5>
                  <input type="text" name='address'  value={userdata.address} onChange={handelInput} autoComplete='off'/>
                </div>
                <div className='ld'>
                  <h5>City</h5>
                 
                  <div className="type">
                        <select value={userdata.cityType} onChange={handelInput} name='cityType'>
                            {cityType.map(cityType =>{
                                return(
                                    <option >{cityType}</option>
                                );})
                            }
                        </select>
                    </div>
                </div>
                <div className='ld'>
                  <h5>Landmark/Area</h5>
                  <input type="text" value={userdata.landmark} autoComplete='off' onChange={handelInput} name='landmark'/>
                </div>
                <div className='ld'>
                  <h5>Area Pincode</h5>
                  <input type="numeric" value={userdata.pincode} autoComplete='off' onChange={handelInput} name='pincode'/>
                </div>
              </div>
            </div>
            {/* ------------------------------------------------ */}
            <div className="rentalDetails">
              <h4>Rental Details</h4>
              <div className='rdContainer'>
                <div className='rd1'>
                  <h5>Property available for</h5>
                  <div className='radiobtn'>
                    <div>
                      <input type="radio" name="propertyAvilableFor" id="propertyType" autoComplete='off' value="rent" onChange={handelInput} onClick={()=>setCptype(1)}/>
                      <label htmlFor="">Rent</label><br></br>
                    </div>
                    <div>
                      <input type="radio" name="propertyAvilableFor" id="propertyType" autoComplete='off' value="buy" onChange={handelInput} onClick={()=>setCptype(2)}/>
                      <label htmlFor="">Buy</label><br></br>
                    </div>
                    <div>
                      <input type="radio" name="propertyAvilableFor" id="propertyType" autoComplete='off' value="lease" onChange={handelInput} onClick={()=>setCptype(1)}/>
                      <label htmlFor="">Lease</label><br></br>
                    </div>
                  </div>
                  <div className='rd4'>
                    <input type="checkbox" name="rentnego" id="Rent_Negotiable" autoComplete='off' onChange={handleCheckboxChange}/>
                    <label htmlFor="">Rent Negotiable</label><br></br>
                  </div>
                  <div className='rd5'>
                    <input type="checkbox" name="underloan" id="underloan" autoComplete='off' onChange={handleCheckboxChange}/>
                    <label htmlFor="">Property Under Loan</label><br></br>
                  </div>
                </div>
                {(cptype===1) ? 
                <>
                  <div className='rd2'>
                    <h5>Expected Rent</h5>
                    <div>
                      <span> ₹</span>
                      <input type="text" inputMode='numeric' autoComplete='off' name="exprent" id="cost" value={userdata.exprent} onChange={handelInput}/>
                      <span>/ Month</span>
                    </div>
                  </div>
                  <div className='rd3'>
                    <h5>Expected Deposit</h5>
                    <div>
                      <span> ₹</span>
                      <input type="text" inputMode='numeric' name="expdeposit" autoComplete='off' id="deposit" value={userdata.expdeposit} onChange={handelInput}/>
                    </div>
                  </div>
          
                </>
                :
                <>
                  <div className='rd2'>
                    <h5>Selling Cost</h5>
                    <div>
                      <span> ₹</span>
                      <input type="text" autoComplete='off' inputMode='numeric' name="sellcost" id="sellcost" value={userdata.sellcost} onChange={handelInput}/>
                    </div>
                  </div>
                  <div className=' rdyear'>
                    <h5>Property Build Year <span style={{fontSize:"10px"}}>(under 20 years)</span></h5>
                    <div>
                      <div className='selector'>
                        <select id="yearSelect" value={selectedYear} onChange={handleYearChange}>
                          {yearRange.map((year) => (
                            <option key={year} value={year}>
                              {year}
                            </option>
                          ))}
                        </select>
                      </div>
                      
                    </div>
                  </div>
                </>  
                }
              </div>
            </div>
            {/* ---------------------------------------------------- */}
            <div className='amenities'>
              <h4>Amenitie Details</h4>

              <div className='ameunities-top'>
                <div className='ad'>
                  <h5>Bathrooms</h5>
                  <input type="text" inputMode='numeric' autoComplete='off' name="bathroom" id="bathroom" value={userdata.bathroom} onChange={handelInput}/>
                </div>

                <div className='ad'>
                  <h5>Balcony</h5>
                  <input type="text" inputMode='numeric' autoComplete='off' name="balcony" id="balcony" value={userdata.balcony} onChange={handelInput}/>
                </div>

                <div className='ad'>
                  <h5>Water Supply</h5>
                  
                  <div className="type">
                        <select value={userdata.watersuply} onChange={handelInput} name='watersuply'>
                            {watersuply.map(watersuply =>{
                                return(
                                    <option>{watersuply}</option>
                                );})
                            }
                        </select>
                    </div>
                </div>
              </div>

              <div className='ameunities-bottom'>
                  <div>
                    <input type="checkbox" name="lift" value="lift"  onChange={handleCheckboxChange}/>
                    <label htmlFor=""><GiLift /> Lift</label><br></br>
                  </div>
                  <div>
                    <input type="checkbox" name="parking" value="parking" onChange={handleCheckboxChange}/>
                    <label htmlFor=""><TbParking/> Parking</label><br></br>
                  </div>
                  <div>
                    <input type="checkbox" name="furniture" value="furniture" onChange={handleCheckboxChange}/>
                    <label htmlFor=""><FaChair/> Furniture</label><br></br>
                  </div>
                  <div>
                    <input type="checkbox" name="security" value="Security" onChange={handleCheckboxChange}/>
                    <label htmlFor=""><GiPoliceOfficerHead/> Gate Security</label><br></br>
                  </div>
                  <div>
                    <input type="checkbox" name="kid_play_area" value="Kid's" onChange={handleCheckboxChange}/>
                    <label htmlFor=""><GiKidSlide/> Kid's Play-area</label><br></br>
                  </div>
                  <div>
                    <input type="checkbox" name="internet" value="Internet-Services" onChange={handleCheckboxChange}/>
                    <label htmlFor=""><AiOutlineWifi/> Internet Services</label><br></br>
                  </div>
                  <div>
                    <input type="checkbox" name="school" value="school" onChange={handleCheckboxChange}/>
                    <label htmlFor=""><MdOutlineSchool/> School</label><br></br>
                  </div>
                  <div>
                    <input type="checkbox" name="shop" value="shop" onChange={handleCheckboxChange}/>
                    <label htmlFor=""><MdLocalMall/> Shopping Area</label><br></br>
                  </div>
              </div>
            </div>
            <div className="uploadimg">
              <h4>Upload Property Images</h4>
              <div className='uploadimg-container'>
                <Uploadimg userdata={userdata}  setUserdata={setUserdata}/>
              </div>
            </div>
            <div className="submitbtn">
              <button type="submit" onClick={handleInputSubmit}>Submit</button>
            </div>
        </div>
    </div>
  )
}
export default Post