import React from 'react';
import './Movielist.css';
import MovieCard from './MovieCard';
import Hoc from './Hoc';


class Movielist extends React.Component{

 constructor(props){
super(props)
this.state={
    tabstar:[]

}
 }
 rating=(position)=>{

    this.setState({tabstar:this.state.tabstar.map((el,index)=>position<=index?el=<i class="fas fa-star"></i>:el)});
 }

render(){
    for(let i=0; i< 5; i++){ 
        
        this.state.tabstar.push(<i class="far fa-star" onClick={()=>this.rating(i)}></i>)
        
       }
    
    
    return(
    
    <div className="list">
       {this.props.movies.map(el => <MovieCard infos={el}/>)}
  </div>
    )}
    
}


export default Hoc(Movielist);
