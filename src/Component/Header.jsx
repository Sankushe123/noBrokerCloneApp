import React,{useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import RAicon from '../assets/RAIcon.svg';
import deliveryIcon from '../assets/deliveryIcon.svg';
import {AiOutlineSearch} from 'react-icons/ai';
import money from '../assets/money.png';
import card from '../assets/card.png';
import packer from '../assets/packer.png';
import payslip from '../assets/payslip.png'
import avoidbrokers from '../assets/avoidbrokers.png';
import freelisting from '../assets/freelisting.png';
import rental from '../assets/rental.png';
import shortlist from '../assets/shortlist.png';
import rentalAgreement from '../assets/rental-agreement.png'
import camera from '../assets/camera.svg'
import painting from '../assets/painting.png'
import nobrokerplan from '../assets/nobrokerplan.png'
import newproject from '../assets/newproject.png'
import saleaggrement from '../assets/saleaggrement.png'
import homeloan from '../assets/homeloan.png'
import propertyservices from '../assets/propertyservices.png'
import interior from '../assets/interior.svg'
import nris from '../assets/nris.png'
import Buy from './Buy';
import Rent from './Rent';
import '../Style/MultiSelect.scss';
import Commercial from './Commercial';
import HomeCounter from './HomeCounter';
import homeAppPromotion from '../assets/homeAppPromotion.png';
import '../Style/header.scss'
import Cardbox from './Cardbox';
import py from '../assets/py.png';
import astore from '../assets/astore.svg';
import Footer from './Footer';
import axios from 'axios';
import {BiCaretDown} from 'react-icons/bi'
import {useSelector,useDispatch} from 'react-redux'
import {setArray} from './context/slice/reducer'
const Header = () => { 

    const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState();
    const[opentype , setOpentype] = useState(1);
    const [opencity,setOpencity] = useState(false);
    const[landmark,setLandmark]=useState("")

    const dispatch = useDispatch();

    const[inputdata,setInputdata] = useState({
        inputlandmark:null,
        inputradio:null,
        ptbox: false,
        inputbhktype:[null],
        inputepropertytype:null, 
    })

    const[inputdatarent,setInputdatarent] = useState({
        rentinputlandmark:null,
        rentptbox: false,
        rentinputbhktype:[null],
        rentinputtencenttype:null,
        rentinputradio:null,
        rentinputavilablity:null,
        rentinputroomtype:null
    })

    const[inputcommercial,setInputcommercial] = useState({
        commradio:null,
        commlandmark:null,
        commpropertytype:[null]
    })

    const options = [
        "Pune","Mumbai","Nashik","Nagpur","Satara","Bengalore","Chennei","Delhi"
    ];

    const buyData = { 
        city:selectedOption,
        landmark:inputdata.inputlandmark,
        radio:inputdata.inputradio,
        ptbox: inputdata.ptbox,
        bhktype:inputdata.inputbhktype,
        propertytype:inputdata.inputepropertytype,
    }
    const rentData = {
        city: selectedOption,
        landmark: inputdatarent.rentinputlandmark,
        ptbox: inputdatarent.rentptbox,
        bhktype: inputdatarent.rentinputbhktype,
        tencenttype: inputdatarent.rentinputtencenttype,
        radio: inputdatarent.rentinputradio,
        avilablity: inputdatarent.rentinputavilablity,
        roomtype: inputdatarent.rentinputroomtype
    }
    const commercialData ={
        city:selectedOption,
        radio:inputcommercial.commradio,
        landmark:inputcommercial.commlandmark,
        ropertytype:inputcommercial.commpropertytype
    }
   
    const handlesubmitsearch =()=>{
        if(opentype===1){
            if(selectedOption === null || inputdata.inputlandmark === null)
            {
                alert("Select city and Missing landmark !!!");
            }
            else{
                handleapi(buyData);
            }
            
        }
        else if (opentype===2) {

            if(selectedOption === null || inputdatarent.rentinputlandmark === null)
            {
                alert("Select city and Missing landmark !!!");
            }
            else{
                handleapi(rentData);
            }
            
        }
        else{
            if(selectedOption === null || inputcommercial.commlandmark === null)
            {
                alert("Select city and Missing landmark !!!");
            }
            else{
                handleapi(commercialData);
            }
            
        }
    }
 
    const handlePropertyAd=()=>{
        const isLogin = localStorage.getItem("token")
        if(isLogin){
            navigate("/post");
        }
        else{
            alert('Login Required !!!');
        }
    }

    const handleapi =(requestData) =>{
        
        axios.post('http://localhost:5000/api/searchproperty', requestData).then((resp)=>{   
        var result = resp.data
        console.log(result);
        dispatch(setArray(result));
        navigate('/search');
        }).catch((err)=>{
            console.log(err)
        }) 
    }
   return (
    <>
        <div className="header">
            <div className="container">

                <div className="title-heading">
                
                    <h2>World's Largest NoBrokerage Property Site</h2>
                </div>
              
                {/* {isauth?<p>True</p>:<p>False</p>}
                <input type='text' onChange={()=>dispach(checkIsAuth())}></input> */}
                <div className="agreement-links">
                    <div className="retail-agrement">
                        <img src={RAicon} alt="rental aggrement"/>
                        <span>Rental aggrement</span>
                    </div>
                    <hr />
                    
                    <div className="nextdayDelivery">
                        <img src={deliveryIcon} alt="next day delivery" />
                        <span>Next day delivery</span>
                    </div>
                </div>
              
                <div className="search">
                    <div className="search-link">
                       <div className={opentype === 1 ? 'srchbtn buy-btn active' : 'srchbtn buy-btn'} onClick={()=>setOpentype(1)}>Buy</div>
                       <div className={opentype === 2 ? 'srchbtn rent-btn active':'srchbtn rent-btn'} onClick={()=>setOpentype(2)}>Rent</div>
                       <div className={opentype === 3 ? 'srchbtn com-btn active':'srchbtn com-btn'} onClick={()=>setOpentype(3)}>Commercial</div>
    
                    </div>
                    <div className="search-container">
                        <div className="search-box">
                            <div className="serchcity">
                              
                                <div>
                                    <div className='seinput' onClick={()=>setOpencity(!opencity)}>
                                        <input value={selectedOption} placeholder='Select city' readOnly  />
                                        {opencity ? <BiCaretDown size={"22px"} color='rgb(61,61,61)' style={{marginTop:"8px", transform:"rotate(180deg)"}}/>:
                                            <BiCaretDown size={"22px"} color='rgb(61,61,61)' style={{marginTop:"8px"}}/>
                                        }
                                    </div>
                                    
                                    {opencity && <div className='citydd'>
                                        <ul>
                                            {options.map((option) => <li onClick={()=>{setSelectedOption(option);setOpencity(false)}}>{option}</li>) }
                                        </ul>
                                    </div>}
                                    {console.log("option : ",selectedOption)}
                                </div>
                               
                            </div>
                            <div className="searchinput">
                                <input type="text" name="inputlandmark" id="landmark" placeholder='Enter landmark' value={landmark} 
                                    onChange={(e)=>{
                                        setLandmark(e.target.value)
                                        if(opentype===1){
                                            setInputdata({...inputdata,inputlandmark:e.target.value})
                                            
                                        }else if(opentype===2)
                                        {
                                            setInputdatarent({...inputdatarent,rentinputlandmark:e.target.value})
                                            
                                        }
                                        else{
                                            setInputcommercial({...inputcommercial,commlandmark:e.target.value})
                                        }
                                        }}
                                />
                            </div>
                            <div className="searchsubmit">
                                <button type="submit" onClick={handlesubmitsearch }><AiOutlineSearch className='search-logo' />Search</button>
                            </div>
                        </div> 
                        <div className="sectioncontainer">
                            {opentype === 1 ? <Buy inputdata={inputdata} setInputdata={setInputdata}/> : null}
                            {opentype === 2 ? <Rent inputdatarent={inputdatarent} setInputdatarent={setInputdatarent}/> : null}
                            {opentype === 3 ? <Commercial inputcommercial={inputcommercial} setInputcommercial={setInputcommercial}/> : null}
                        </div>
                        
                    </div>
                    <div className="propertyOwner">
                        <div className="txt">
                            <span>Are you a property owner ?</span>
                        </div>
                        <div className="po-btn">
                            <span onClick={handlePropertyAd}>Post Free Property Ad</span>
                        </div>
                    </div>
                    

                </div>

                <div className="bottom-line">
                    {opentype === 1 ? <div className="bt-txt-1">
                        <img src={money} alt="money"/>
                        <p>Do you know how much <b>loan</b> you can get? Get maximum with noBroker</p>
                        <button onClick={()=>navigate('/search')}>Check Eligiblity</button>
                    </div> : null}
                    {opentype === 2 ? <div className="bt-txt-1">
                        <img src={card} alt="card"/>
                        <p>Pay maintenance and Rent with Credit Card</p>
                        <button>Pay Rent Now</button>
                    </div> : null}
                    {opentype === 3 ? <div className="bt-txt-1">
                        <img src={card} alt="card"/>
                        <p>Earn reward upto <b>₹30,000</b> when you pay rent with <b>Credit Card</b></p>
                        <button>Pay Rent Now</button>
                    </div> : null}
                </div>

                <div className="offers-line">
                    <div className="pack off" >
                        {opentype === 1 ? 
                        <div className="ofbox">
                            <img src={newproject} alt="newproject" />
                            <span>Builder New Project</span>
                        </div>
                        :
                        <div className="ofbox">
                            <img src={packer} alt="packer"/>
                            <span>Packer & Movers</span>
                        </div>
                        }
                    </div>
                    <div className="pay off">
                        {opentype===1 ? <div className="ofbox">
                            <img src={saleaggrement} alt="sale aggrement"/>
                            <span>Sale Aggrement</span>
                        </div>
                        :
                        <div className="ofbox">
                            <img src={payslip} alt="pay" />
                            <span>Pay Rent</span>
                        </div>}
                    </div>
                    <div className="rental off">
                        {opentype===1?<div className="ofbox">
                            <img src={homeloan} alt="Home loan"/>
                            <span>Home Loan</span>
                        </div>
                        :
                        <div className="ofbox">
                            <img src={rental} alt="rental"/>
                            <span>Rental Aggrement</span>
                        </div>}
                    </div>
                    <div className="click off">
                        {opentype===1 ? <div className="ofbox">
                            <img src={propertyservices} alt="property services" />
                            <span>Property Legal Services</span>
                        </div>
                        :
                        <div className="ofbox">
                            <img src={camera} alt="camera"/>
                            <span>Click & Earn</span>
                        </div>}
                    </div>
                    <div className="painting off">
                        {opentype===1 ?<div className="ofbox">
                            <img src={interior} alt="home interior"/>
                            <span>Home Interior</span>
                        </div>
                        :
                        <div className="ofbox">
                            <img src={painting} alt="painting" />
                            <span>Painting and Cleaning</span>
                        </div>}
                    </div>
                    <div className="nri off">
                        <div className="ofbox">
                            <img src={nris} alt="nris"/>
                            <span>NoBroker For NRI'S</span>
                        </div>
                    </div>
                </div>

                <div className="wyUseNoBroker">
                    <h2>Why Use NoBroker</h2>
                    <div className="wy-links">
                        <div className="wy-link">
                            <div className="wy-img">
                                <img src={avoidbrokers} alt="avoid broker"/>
                            </div>
                            <div className="wy-text">
                                <h4>Avoid Brokers</h4>
                                <p>We directly connect you to verified owners to save brokerage</p>
                            </div>
                        </div>
                        <div className="wy-link">
                            <div className="wy-img">
                                <img src={freelisting} alt="free listing"/>
                            </div>
                            <div className="wy-text">
                                <h4>Free Listing</h4>
                                <p>Easy listing process. Also using WhatsApp</p>
                            </div>
                        </div>
                        <div className="wy-link">
                            <div className="wy-img">
                                <img src={shortlist} alt="short list"/>
                            </div>
                            <div className="wy-text">
                                <h4>Shortlist Without Visit</h4>
                                <p>Extensive information make it easy</p>
                            </div>
                        </div>
                        <div className="wy-link">
                            <div className="wy-img">
                                <img src={rentalAgreement} alt="rental agreement"/>
                            </div>
                            <div className="wy-text">
                                <h4>Rental Agreement</h4>
                                <p>Assistance in creating rental aggrement &  paper work.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='enquire'>
                    <div className="enquire-heading">
                        <h2>NoBroker Business Assist Plan For Builders</h2>
                    </div>
                    <div className="enquire-box">
                        <div className="enquire-box-left">
                            <img src={nobrokerplan} alt="nobrokerplan"/>
                        </div>
                        <div className="enquire-box-right">
                            <h4>Get in touch with us to Sell or Rent Your Projects</h4>
                            <div className="enq-btn">
                                <button>Enquire Now</button>
                            </div>
                            <span>For Builder Enquiries: +91 - 9108050400</span>
                        </div>
                    </div>
                </div>
                

                <div className='counter'>
                    <div className="counter-heading">
                        <h2>We Make A Difference</h2>
                    </div>
                    <div className="counterBox">
                       <div className="counterItems">
                            <HomeCounter count={"₹130 Cr+"} listing={"Brokerage saved monthly"}/>
                            <HomeCounter count={"₹30 Lac+"} listing={"Customers Connected Monthly"}/>
                            <HomeCounter count={"₹2 Lac+"} listing={"New Listings Monthly"}/>
                       </div>
                    </div>
                </div>

                
                <div className="testimonials">
                    <div className="testimonials-heading">
                        <h2>Our Customer Loves Us</h2>
                    </div>
                    <div className="testimonials-vid">
                        <iframe width="560" height="320" src="https://www.youtube.com/embed/0ChlgxhXVws" title="NoBroker Reviews - Why our customers love us? #NoBrokerReviews #NoBroker" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div className="testimonials-card-box">
                        <Cardbox/>
                    </div>
                </div>

                <div className="downloadApp">
                    <div className="downloadApp-box">
                        <div className="downloadApp-box-left">
                            <img src={homeAppPromotion} alt="homeAppPromotion"/>
                        </div>
                        <div className="downloadApp-box-right">
                            <h2>Find A New Home On The Go</h2>
                            <h3>Download our app</h3>
                            <h4>Where convenience is at your fingertip</h4>
                            
                            <div className="download-link">
                                <div className="left">
                                    <img src={py} alt="playstore"/>
                                </div>
                                <div className="right">
                                    <img src={astore} alt="astore" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="footer">
                <Footer/>
            </div>
        </div>
    </>
  )
}

export default Header


