import React,{useState} from 'react'
import '../Style/dropdown.scss'
import { AiOutlineDown } from "react-icons/ai";
const Dropdown = () => {
    const [open , setOpen] = useState(false);
    const [bhktype , setBhktype] = useState();

    const handleDropdown=()=>{
         setOpen(!open);
    };

    const handleClick=(e)=>{
        console.log(e.target.name);
        const type = e.target.name 
        setBhktype(type);
    };
  return (
    <div>
        <div className="d-div">
            <div className="d-container">
                <div className="box1">
                    <div className="txt">{open ? bhktype : "BHK Type..."}</div>
                    <div className="arrow" onClick={handleDropdown}><AiOutlineDown/></div>
                </div>
                {open ? <div className="box2">
                    <div className='item ' onClick={handleClick}>
                        <input type="checkbox" name="1rk" id="1rk"/>
                        <label htmlFor="1rk">1 RK</label>
                    </div>
                    <div className='item' onClick={handleClick}>
                        <input type="checkbox" name="1bhk" id="1bhk"/>
                        <label htmlFor="1bhk">1 BHK</label>
                    </div>
                    <div className='item' onClick={handleClick}>
                        <input type="checkbox" name="2bhk" id="2bhk"/>
                        <label htmlFor="2bhk">2 BHK</label>
                    </div>
                    <div className='item' onClick={handleClick}>
                        <input type="checkbox" name="3bhk" id="3bhk"/>
                        <label htmlFor="3bhk">3 BHK</label>
                    </div>
                    <div className='item' onClick={handleClick}>
                        <input type="checkbox" name="4bhk" id="4bhk"/>
                        <label htmlFor="4bhk">4 BHK</label>
                    </div>
                    <div className='item' onClick={handleClick}>
                        <input type="checkbox" name="4+bhk" id="4+bhk"/>
                        <label htmlFor="4+bhk">4+ BHK</label>
                    </div>
                </div> : null}

            </div>
        </div>
    </div>
  )
}

export default Dropdown