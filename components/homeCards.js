import react, {Component} from 'react';



import { Container, Column, Columns, Card, CardHeader, CardContent, Image, MediaLeft, MediaContent, Title, Subtitle, Content,
    CardHeaderTitle, CardFooter, CardImage, CardHeaderIcon, Icon, Media } from 'bloomer';

    export default class myCards extends Component{
        render(){
            return(
                <Columns isCentered>
    <Column isSize={{ mobile: 8, default: '1/3'}}>
    <a>
    <Card>
    <CardHeader>
        <CardHeaderTitle>
           My Decetralised Apps
        </CardHeaderTitle>
        <CardHeaderIcon>
            <Icon className="fa fa-angle-down" />
        </CardHeaderIcon>
    </CardHeader>
    <CardImage>
        <Image isRatio='4:2' src='/static/images/dapps2.png' />
    </CardImage>
    <CardContent>
        <Media>
            <MediaLeft>
                <Image isSize='48x48' src='https://via.placeholder.com/96x96' />
            </MediaLeft>
            <MediaContent>
                <Title isSize={4}>DAPPS</Title>
             {/* <Subtitle isSize={6}>@John Wick</Subtitle> */}
            </MediaContent>
        </Media>
        <Content>
            A collection of decentralised apps as a show case of skills working on the ethereum network. 
            <br/>
            <small>Solidity, web3.js, truffle suit</small>
        </Content>
    </CardContent>
</Card>
</a>
    </Column>
    <Column isSize={{ mobile: '1', default: '1/3'}}>
    <Card>
    <CardHeader>
        <CardHeaderTitle>
            Websites
        </CardHeaderTitle>
        <CardHeaderIcon>
            <Icon className="fa fa-angle-down" />
        </CardHeaderIcon>
    </CardHeader>
    <CardImage>
        <Image isRatio='4:2' src='/static/images/website5.png' />
    </CardImage>
    <CardContent>
        <Media>
            <MediaLeft>
                <Image isSize='48x48' src='https://via.placeholder.com/96x96' />
            </MediaLeft>
            <MediaContent>
                <Title isSize={4}>Websites</Title>
                {/* <Subtitle isSize={6}>@John Wick</Subtitle> */}
            </MediaContent>
        </Media>
        <Content>
            Collection of production <br/> 
            ready Fullstack Web development <br/>projects
            <br />
            <small>Express, angular, react, express, mongo, javascript</small>
        </Content>
    </CardContent>
</Card>
    </Column>
    <Column isSize={{ mobile: 8, default: '1/6'}}>
    <Card>
    <CardHeader>
        <CardHeaderTitle>
            Games
        </CardHeaderTitle>
        <CardHeaderIcon>
            <Icon className="fa fa-angle-down" />
        </CardHeaderIcon>
    </CardHeader>
    <CardImage>
        <Image isRatio='4:2' src='/static/images/flappy.png' />
    </CardImage>
    <CardContent>
        <Media>
            <MediaLeft>
                <Image isSize='48x48' src='https://via.placeholder.com/96x96' />
            </MediaLeft>
            <MediaContent>
                <Title isSize={4}>Games</Title>
                {/* <Subtitle isSize={6}>@John Wick</Subtitle> */}
            </MediaContent>
        </Media>
        <Content>
            A collection of fun development projects 
            <br/> mostly games  <br/>
            developed mostly in javascript
            <br/>
            <small>javascript, html, css</small>
        </Content>
    </CardContent>
</Card>
    </Column>
    
</Columns>
            )
        }
    }