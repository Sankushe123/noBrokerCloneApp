import React,{useState} from 'react';
import ReactSlider from 'react-slider';
import "../Style/filter.scss";
const MIN = 0;
const MAX = 10;
const Filter = () => {
   
    const [values,setValues] = useState([MIN,MAX]);
  return (
    <div>
        <div className="filterContainer">
            <div className="fbooktype">
                <div className="heading">
                    <h2>Filter</h2>
                </div>
               <div className="fbitems">
                    <h3>BHK Type</h3>
                    <div className="fbitem"> 
                        <button>1RK</button>
                        <button>1BHK</button>
                        <button>2BHK</button>
                        <button>3BHK</button>
                        <button>4BHK</button>
                        <button>4BHK+</button>
                    </div>
                    <div className="fbtypecheck">
                        <input type="checkbox" name="newProject" id="newProject" value="newProject"/>
                        <label htmlFor="newProject">  New Builder Projects</label>
                    </div>
               </div>
            </div>
            <div className="prizerange">
                <div className="prizeitem">
                    <h3 className='values'>Price Range : ₹{values[0]} Lacs to ₹{values[1]} Lacs</h3>
                    <div className='prizeSlider'>
                        <ReactSlider className={"slider"}
                            onChange={setValues}
                            value={values}
                            min={MIN}
                            max={MAX}
                        />
                    </div>
                </div>
            </div>
            <div className="propertyStatus">
                <h3>Property Status</h3>
                <div>
                    <input type="radio" name="propertyStatus" id="propertyStatus" />
                    <label htmlFor="UC">Under Construction</label>
                    <input type="radio" name="propertyStatus" id="propertyStatus" />
                    <label htmlFor="ready">Ready</label>
                </div>
            </div>
            <div className='Furnishing'>
                <h3>Furnishing</h3>
                <div>
                    <div>
                        <input type="checkbox" name="furnishings" id="full"/>
                        <label htmlFor="full">Full</label><br/>
                    </div>
                    <div>
                        <input type="checkbox" name="furnishings" id="semi"/>
                        <label htmlFor="semi">Semi</label><br/>
                    </div>
                    <div>
                        <input type="checkbox" name="furnishings" id="un"/>
                        <label htmlFor="un">None</label><br/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Filter