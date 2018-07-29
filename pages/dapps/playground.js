import react, {Component} from 'react';
import Layout from '../../components/layout'
import {Container, Title} from 'bloomer'


export default class Dapps extends Component{
    render(){
        return(
        <Layout>
          
            <Container>
            <Title isSize={4}>The playground page</Title>
            <p>Ethereum playground</p>
            </Container>
            </Layout>)
    }
    
}