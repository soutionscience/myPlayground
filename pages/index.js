import react, {Component} from 'react'
import Header from '../components/header'
import Layout from '../components/layout'
import "../style.css"
import { Container} from 'bloomer';

import HomeCard from '../components/homeCards'
import Certs from '../components/certification'
import Banner from '../components/banner'

export default class mainPage extends Component{
//    rederCards(){
//        return(<div>
//            <HomeCard/>
           
//        </div>)
//    }

    render(){
        return(<Layout>
            <Banner/>
            <Container>
            <p className ="test" >Welcome</p>
            <HomeCard/>
            <Certs/>
            </Container>
        </Layout>)
    }

}