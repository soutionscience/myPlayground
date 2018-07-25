import react, {Component} from 'react';
import Head from 'next/head';
import MyNavBar from './navbar';
import { Container } from 'bloomer';

export default class Header extends Component{
    state ={
        brand: ''

    }
    render(){
       
    
        return(
            <div>
    
        
        <MyNavBar/>
       
   
  </div>
        )
    }

}


