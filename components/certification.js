import react, {Component} from 'react';
import {Column, Columns, Image, Subtitle, Title} from 'bloomer'




export default class certs extends Component{
    render(){
        
        return( 
            <div style={{paddingBottom: '18px'}}>
            <Title isSize={1}>Certifications</Title>
        <Columns isCentered>
        <Column isSize ='1/4'>
        <Image src="/static/images/node.png"/>
        <Subtitle isSize={5}>Server-side Development with NodeJS</Subtitle>
        <p>The Hong Kong University of Science and Technology</p>
        <a>Read More</a>

        </Column>
        <Column isSize ='1/4'>
        <Image src="/static/images/angular2.png"/>
        <Subtitle tag='h1'>Server-side Development with NodeJS</Subtitle>
        <p>The Hong Kong University of Science and Technology</p>
        <a>Read More</a>
        </Column>
        <Column isSize ='1/4'>
        <Image src="/static/images/html.png"/>
        <Subtitle tag='h1'>Server-side Development with NodeJS</Subtitle>
        <p>The Hong Kong University of Science and Technology</p>
        <a>Read More</a>

        </Column>
        <Column isSize ='1/4'>
        <Image src="/static/images/rails.png"/>
        <Subtitle tag='h1'>Server-side Development with NodeJS</Subtitle>
        <p>The Hong Kong University of Science and Technology</p>
        <a>Read More</a>

        </Column>
        </Columns>
        </div>

        )
    }
}