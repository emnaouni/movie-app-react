import React, { Component } from 'react'
import './App.css'
import Movielist from './component/Movielist';
import Header from './component/Header';
import AddModal from './component/AddModel';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      movies: [
        {
          
            img: "https://images-na.ssl-images-amazon.com/images/I/51TfUWh5N9L._AC_SY445_.jpg",
            title1: "inception-2017",
            count: 2,
          },
          {
            img: "https://melhoresfilmesdahistoriaemumano.files.wordpress.com/2015/01/220px-shawshankredemptionmovieposter.jpg",
            title1: "ShawShank redemption-1997",
            count: 3,
          },
      
          {
            img: "https://img8.cdn.cinoche.com/images/d07bfa065dc93a6a53111bbdca8cce33.jpg",
            title1: "Blade runner-2017",
            count :4,
          }
      ],
        newRating: 1,
        newtext:''
      }
    }
    giveRate = x => {
      this.setState({newRating: x})
    }
    giveText = t =>{
      this.setState({newtext: t})
    }
    addNewmovie=(movie)=>{
     this.setState({movies:this.state.movies.concat(movie)})

    }

render(){
  
  return (
    <div className="App">
       <Header rate={this.state.newRating} giveNewRate={rate => this.giveRate(rate)} text={this.state.newtext} giveNewtext={ text=>this.giveText(text)}/>
        <AddModal addMovie={movie=>this.addNewmovie(movie)}/>
        <Movielist movies={this.state.movies.filter(el => el.count >= this.state.newRating && el.title1.toUpperCase().includes(this.state.newtext.toUpperCase().trim()))}/>
 
    </div>
  );}
  
}

export default App;
