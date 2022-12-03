import React from 'react'
import data from "./data.js"

const Main = () => {
  return (
    <div>
        <div>
            {data.map((item, i)=>{
                return(
                    <div>
                    <div key={i} className="container">
                     
                        <div className='image-wrapper'>
                        <img src={item.imageUrl} alt=""  className='image'/>
                        </div>
                        <div className='text-wrapper'>
                        <div className='location-wrapper'>
                        <span className='location'>{item.location}</span>
                        <a href={item.googleMapLink} className="location-url" >view on google map</a>
                        </div>
                        <h3 className='title'>{item.title}</h3>
                        
                        <div className='date'>{item.startDate} - {item.endDate}</div>
                        
                        <p className='description'>{item.description}</p>
                        </div>
                    </div>
                    <div className='seperator'></div>
                    </div>
            
                )
            })}
        </div>

    </div>
  )
}

export default Main