import React from 'react'
import {HiLocationMarker} from 'react-icons/hi'
import '../Style/searchcomponent.scss'
import Filter from './Filter';
import FilterReaultcard from './FilterReaultcard'
import {useSelector,useDispatch} from 'react-redux'
const Searchcomponent = () => {
  
  const items = useSelector((state)=>state.userDetail.user);
 
  return (
    <div>
          <div className="searchContainer">
            <div className="searchcomp1">
                <div className="searchInput">
                  <input type="text" placeholder="Search upto 3 localities of landmark"/>
                  <button>Search</button>
                </div>
                <div className="search-map">
                  <div className="map">
                    <HiLocationMarker size={"16px"} style={{marginRight:"1vh",marginTop:"2px"}}/>
                    <span>Show Map</span>
                  </div>
                </div>
            </div>
            <div className="search-result">
              <div className="leftside">
                <Filter/>
              </div>
              <div class="midside">
                <div>
                  {
                    items.map((item)=>{
                      return <FilterReaultcard data={item}/>
                    })
                  }
                </div>
              </div>
              <div class="rightside">
                  ads
              </div>
            </div>
          </div>
       
    </div>
  )
}

export default Searchcomponent
