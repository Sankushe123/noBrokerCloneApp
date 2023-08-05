import React,{useState} from 'react'
import CreatableSelect from "react-select/creatable";
import '../Style/MultiSelect.scss';

const Rent = ({inputdatarent,setInputdatarent}) => {
    const [property,setProperty] = useState(1);
    
    const open=(e)=>{         
        setProperty(e);
    };
    
    const options = [
        {value:"1rk" , label:"1 Rk"},
        {value:"2bhk" , label:"2 BHk"},
        {value:"3bhk" , label:"3 BHk"},
        {value:"4bhk" , label:"4 BHk"},
        {value:"4+bhk" , label:"4+ BHk"}
    
    ];

    const option = [
        {value:"Immadiate" , label:"Immadiate"},
        {value:"Within 15 Days" , label:"Within 15 Days"},
        {value:"Within 30 Days" , label:"Within 30 Days"},
    ];
    const optiontencent = [
      {value:"Male" , label:"Male"},
      {value:"Female" , label:"Female"},
      {value:"Anyone" , label:"Anyone"},
  ];
  const optionroomtype = [
    {value:"Single Room" , label:"Single Room"},
    {value:"Double Room" , label:"Double Room"},
    {value:"Triple Sharing" , label:"Triple Sharing"}
    
  ]
   
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
            <div className="buy-check" style={{width:"40%"}}>
                <div className='fhouse'style={{marginRight:"20px"}}>
                    <input 
                    type="radio" 
                    name="type" 
                    value="fhouse" 
                    checked={property===1}
                    onChange={(e)=>setInputdatarent({...inputdatarent,rentinputradio:e.target.value})} 
                    onClick={()=>open(1)}/>
                    Full House
                </div>
                <div className='fhouse' style={{marginRight:"20px"}}>
                    <input type="radio" name="type" value="pghostel" onChange={(e)=>setInputdatarent({...inputdatarent,rentinputradio:e.target.value})}  onClick={()=>open(2)}/>
                    PG/Hostel
                </div>
                <div className='fhouse' style={{marginRight:"20px"}}>
                    <input type="radio" name="type" value="flatmets" onChange={(e)=>setInputdatarent({...inputdatarent,rentinputradio:e.target.value})}  onClick={()=>open(2)}/>
                    Flatmets
                </div>
            </div>

            <div className='buydropdown' style={{width:"60%",justifyContent:"flex-start"}}>
                { property === 1 ? 
                <>  
                    <div className='bhkType' style={{marginRight:"20px"}}>
                        <CreatableSelect
                            options={options}
                            onChange={(e)=>setInputdatarent({...inputdatarent,rentinputbhktype:e})}
                            // onInputChange={handleInputChange}
                            isMulti
                            styles={colorStyles}
    
                            placeholder={"BHK Type"}
                        />
                    </div>
                    <div className='propertyType'>
                        <CreatableSelect
                            options={option}
                            onChange={(e)=>setInputdatarent({...inputdatarent,rentinputavilablity:e})}
                            // onInputChange={handleInputChange}
                            styles={colorStyles}
                            placeholder={"Avilablity"}
                        />
                    </div>
                </> 
                : null
                }
                {property === 2 ? 
                    <>
                        <div className='bhkType'>
                            <CreatableSelect
                                options={optiontencent}
                                onChange={(e)=>setInputdatarent({...inputdatarent,rentinputtencenttype:e})}
                                // onInputChange={handleInputChange}
                                styles={colorStyles}
                                placeholder={"Tentant Type"}
                            />
                        </div>
                        <div className='propertyType'>
                            <CreatableSelect
                                options={optionroomtype}
                                onChange={(e)=>setInputdatarent({...inputdatarent,rentinputroomtype:e})}
                                // onInputChange={handleInputChange}
                                styles={colorStyles}
                                placeholder={"Room Type"}
                            />
                        </div>  
                    </>
                :null
                }
            </div>
        </div>
    </div>
  )
}

export default Rent