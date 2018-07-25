import react, {Component} from 'react'
import Header from '../components/header'
import Layout from '../components/layout'
import "../style.css"
import { Container } from 'bloomer';

export default class mainPage extends Component{
    render(){
        return(<Layout>
            <Container>
            <p className ="test" >Welcome</p>
            </Container>
        </Layout>)
    }

}