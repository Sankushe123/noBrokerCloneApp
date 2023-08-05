import React, { useState } from 'react'
import CreatableSelect from "react-select/creatable";
import '../Style/MultiSelect.scss';

const Commercial = ({inputcommercial,setInputcommercial}) => {
    const[property,setProperty] =  useState(1)
    const handleradio =(e)=>{
      const checkvalue = e.target.value 
      setProperty(checkvalue);
    }
    const options = [
        {value:"Office Space" , label:"Office Space"},
        {value:"Shop" , label:"Shop"},
        {value:"Restorent/Cafe" , label:"Restorent/Cafe"},
        {value:"Showroom" , label:"Showroom"},
        {value:"Other Business" , label:"Other Business"}
    
    ];
    const colorStyles = {
      input:(baseStyles)=>({
          ...baseStyles,
          textAlign:"left"
          
      }),
      placeholder:(baseStyles)=>({
          ...baseStyles,
          textAlign:"left"
      }),
      menu:(baseStyles)=>({
          ...baseStyles,
          textAlign:"left"
      }),
      control: (css) => ({ ...css, textAlign:"left", height:"42px",
      width:"28vh",
      height:"35px",
      outline:"none", }),


    };
  return (
    <div>
        <div className="buy-display">
            <div className="buy-check">
                <div className='fhouse'  style={{marginRight:"20px"}}>
                    <input type="radio" name="type" value="rent"  onClick={handleradio} onChange={()=>setInputcommercial({...inputcommercial,commradio:"rent"})}/>
                    Rent
                </div>
                <div className='fhouse' style={{marginRight:"20px"}}>
                    <input type="radio" name="type" value="buy" onClick={handleradio} onChange={()=>setInputcommercial({...inputcommercial,commradio:"buy"})}/>
                    Buy
                </div>
            </div>  
            <div className="buydropdown" style={{justifyContent:"flex-start"}}>
              <div className='bhkType'>
                  <CreatableSelect
                      options={options}
                      onChange={(e)=>setInputcommercial({...inputcommercial,commpropertytype:e})}
                      // onInputChange={handleInputChange}
                      isMulti
                      styles={colorStyles}
                      placeholder={"BHK Type"}
                  />
              </div>  
            </div> 
        </div>
    </div>
  )
}

export default Commercial