import React,{useState} from 'react'
import CreatableSelect from "react-select/creatable";
import '../Style/MultiSelect.scss';

const Buy = ({inputdata,setInputdata}) => {
    const [property,setProperty] = useState('yes');

    const handlechange =(e)=>{
      const checkvalue = e.target.value 
      setProperty(checkvalue);
    }

    const handleCheckboxChange = (checkboxName) => {
      setInputdata((prevState) => ({
        ...prevState,
        [checkboxName]: !prevState[checkboxName]
      }));
    };

    
    
    const options = [
        {value:"1rk" , label:"1 Rk"},
        {value:"2bhk" , label:"2 BHk"},
        {value:"3bhk" , label:"3 BHk"},
        {value:"4bhk" , label:"4 BHk"},
        {value:"4+bhk" , label:"4+ BHk"}
    
    ];

    const option = [
        {value:"under Construction" , label:"Under Construction"},
        {value:"ready" , label:"Ready"},
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
                <div className='fhouse'>
                <input
                  type="radio"
                  name="bhktype"
                  value="yes"
                  checked={property==='yes'}
                  onChange={(e)=>setInputdata({...inputdata,inputradio:"fhouse"})}
                  onClick={handlechange}
                  
                />
                    Full House
                </div>
                <div className='landplot'>
                <input
                  type="radio"
                  name="bhktype"
                  value="no"
                  onChange={(e)=>setInputdata({...inputdata,inputradio:"landplot"})}
                  onClick={handlechange}
                  
                  
                />
                    Land/Plot
                </div>
            </div>
            <div className="buydropdown">
              { property==="yes" && <>     
                  <div className='bhkType'>
                      <CreatableSelect
                          options={options}
                          onChange={(e)=>setInputdata({...inputdata,inputbhktype:e})}
                          // onInputChange={handleInputChange}
                          isMulti
                          styles={colorStyles}
                          placeholder={"BHK Type"}
                          
                      />
                  </div>
                  <div className='propertyType'>
                      <CreatableSelect
                          options={option}
                          onChange={(e)=>setInputdata({...inputdata,inputepropertytype:e})}
                          // onInputChange={handleInputChange}
                          styles={colorStyles}
                          placeholder={"Property Type"}
                      />
                  </div>
                  <div className="project-type">
                      <div className="pt-box">
                          <input 
                          type="checkbox" 
                          value="ptbox" 
                          checked={inputdata.ptbox}  
                          onChange={()=> handleCheckboxChange('ptbox')}/>
                          <label htmlFor="ptType">New Builder Project</label>
                      </div>
                  </div>
              </>}
            </div>
        </div>
    </div>
  )
}

export default Buy

