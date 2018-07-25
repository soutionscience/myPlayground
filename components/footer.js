import react from 'react';
import {Container} from 'bloomer';


export default()=>{
    const footerStyle ={
        position: 'absolute',
        bottom: '10px',
        left: '25%',
        lineHeight: '1.6',
        color: '#222'
       

    }
    return(<div style={footerStyle}>
        <Container>
        <p>Built with React, Solidity, Web3, express, Bulma and some Magic By Rubin Njagi</p>
        </Container>
        </div>)
}