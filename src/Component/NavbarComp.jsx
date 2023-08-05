import React,{useState,useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom'
import logo from '../assets/logo.png';
import myBooking from '../assets/myBooking.png';
import payrent from '../assets/payrent.png'
import menu from '../assets/menu.png'
import {FaFacebookF,FaUser} from 'react-icons/fa'
import {AiOutlineTwitter } from 'react-icons/ai'
import {AiOutlineGooglePlus} from 'react-icons/ai'

import Registration from './LoginRegistration/Registration/Registration';
const NavbarComp = () => {

    const navigate = useNavigate();
    const [isLoggenin ,setIsLoggedin] = useState(false);
    const [dd,setDd] = useState(false);
    const [openlogin,setOpenlogin] = useState(false);
    const [sidenav,setSidenav] = useState(false);
    const openNav=()=>{
        setSidenav(!sidenav)
    }
    const handledd=()=>{
        setDd(!dd)
    }
    
    useEffect(() => {
        // const isLoggenin = localStorage.getItem('token');
        if ('token' in localStorage) {
            setIsLoggedin(true);
        } else {
            setIsLoggedin(false);
        }
    },)
    
    const handlelogout=()=>{
        localStorage.clear();
        navigate('/')
        setDd(false);
    }

    useEffect(() => {
        setTimeout(() => {
            handlelogout()
        }, 2 * 60 * 60 * 1000);
    })

  return (
    <>
        <div className="Nav">
            <div className='logo'>
                <img src={logo} alt="logo" onClick={()=>navigate('/')}/>
            </div>
            <div className='links'>

                <div className='mybooking link '>
                    <div className='container'>
                        <div className='mb-img'>
                            <img src={myBooking} alt="mybookingImg" />
                        </div>
                        <div className='mb-txt '>
                            <span>My Booking</span>
                        </div>
                    </div>
                </div>

                <div className='payrent link ulink'>
                    <div className='container'>
                        <div className='pr-img'>
                            <img src={payrent} alt="payrentImg" />
                        </div>
                        <hr />
                        <div className='pr-txt'>
                            <span>Pay Rent</span>
                        </div>
                    </div>
                </div>

                <div className='link-txt link'>
                    <span>For Property Owners</span>
                </div>

                {isLoggenin ? 
                    <div className='loginProfile' >
                        <div className="iconcontainer" onClick={handledd}>
                            <FaUser size={"24px"} 
                            style={{
                                width:"6vh",
                                backgroundColor:"#F8F8F8",
                                height:"6vh",
                                border:"1px solid gray",
                                borderRadius:"50%",
                                padding:"1vh",
                            
                            }}
                            className='usericon'
                            
                            color='#cacaca'/>
                        </div>
                        {dd ?<div className="loginddcont">
                            <div className="ddbox">
                                <ul>
                                    <li><Link to="/dashboard" onClick={()=>setDd(false)}>Dashboard</Link></li>
                                    <li><a href="#" onClick={handlelogout}>Log out</a></li>
                                </ul>
                            </div>
                        </div>:null}
                    </div> :
                         <>
                         <div className='registration link' onClick={()=>setOpenlogin(true)}>
                             <span>Sign Up</span>
                         </div>
                         <hr />
                         <div className='login link' onClick={()=>setOpenlogin(true)}>
                             <span>Log In</span>
                         </div> 
                         </>
                    }

                <hr />
                <div className='menu link' onClick={openNav}>
                    <div className='container'>
                        <div className='m-img'>
                            <img src={menu} alt="menuImg" />
                        </div>
                        <div className='m-txt'>
                            <span>Menu</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {sidenav && <div className="sidemenu">
            <div className="snContainer">
                <div>
                    <ul>
                        <li><a href="#"></a>Post Your Property</li>
                        <li><a href="#"></a>Rental Aggrement</li>
                        <li><a href="#"></a>Packers and Movers</li>
                        <li><a href="#"></a>Carrer</li>
                        <li><a href="#"></a>Testimonial</li>
                        <li><a href="#"></a>Privacy Policy</li>
                        <li><a href="#"></a>Terms & Conditions</li>
                        <li><a href="#"></a>Contact Us</li>
                    </ul>
                </div>
                <div className="snemail">
                    <h5>Email</h5>
                    <span>Hello@noBroker.com</span>
                </div>
                <div className="snicon">
                   <div>
                    <FaFacebookF className="sni"/>
                    <AiOutlineTwitter className="sni"/>
                    <AiOutlineGooglePlus className="sni"/>
                   </div>
                </div>
            </div>
        </div>}
        {openlogin && <Registration openlogin={openlogin} setOpenlogin={setOpenlogin}/>}
    </>
  )
}

export default NavbarComp