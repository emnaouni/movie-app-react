import React from 'react';
import Rating from './Rating'
 
const MovieCard= (props)=>{
return(

    
        <div className="box-item">
            <div className='item'>
          <img src={props.infos.img} alt='' />
          <div className="rate" >  <Rating rate={props.infos.count} rateIt={() => {}}/>   </div>
          <h3> {props.infos.title1}</h3>
          </div>
        </div>
      


)
}


export default MovieCard;
