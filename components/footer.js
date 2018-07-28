import react from 'react';
import {Container} from 'bloomer';


export default()=>{
    const footerStyle ={
        background: '#192431',
        color: 'white',
        left: '25%',
        lineHeight: '1.6',
        height: '200px',
        padding: '16px',
        MarginTop: '8px'
       

    }
    return(<div style={footerStyle}>
        <Container>
        <p>Built with React, Solidity, Web3, express, Bulma and some Magic By Rubin Njagi</p>
        </Container>
        </div>)
}