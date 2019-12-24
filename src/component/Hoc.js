import React from 'react';
import Movielist from './Movielist';
import SpinnerComp from './Spinner';

const Hoc =(Component)=>{
    return props => ( props.isloading ?<SpinnerComp/>: <Component {...props} />);
     
}

export default Hoc;