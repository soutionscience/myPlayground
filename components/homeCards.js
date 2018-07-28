import react, {Component} from 'react';



import { Container, Column, Columns, Card, CardHeader, CardContent, Image, MediaLeft, MediaContent, Title, Subtitle, Content,
    CardHeaderTitle, CardFooter, CardImage, CardHeaderIcon, Icon, Media } from 'bloomer';

    export default class myCards extends Component{
        render(){
            return(
                <Columns isCentered>
    <Column isSize={{ mobile: 8, default: '1/3'}}>
    <Card>
    <CardHeader>
        <CardHeaderTitle>
            Component
        </CardHeaderTitle>
        <CardHeaderIcon>
            <Icon className="fa fa-angle-down" />
        </CardHeaderIcon>
    </CardHeader>
    <CardImage>
        <Image isRatio='4:3' src='https://via.placeholder.com/1280x960' />
    </CardImage>
    <CardContent>
        <Media>
            <MediaLeft>
                <Image isSize='48x48' src='https://via.placeholder.com/96x96' />
            </MediaLeft>
            <MediaContent>
                <Title isSize={4}>John Wick</Title>
                <Subtitle isSize={6}>@John Wick</Subtitle>
            </MediaContent>
        </Media>
        <Content>
            People Keep Asking If I’m Back, And I Haven’t Really Had An Answer, But Now, Yeah, I’m Thinking I’m Back.
            <br/>
            <small>11:09 PM - 30 October 2014</small>
        </Content>
    </CardContent>
</Card>
    </Column>
    <Column isSize={{ mobile: '1', default: '1/3'}}>
    <Card>
    <CardHeader>
        <CardHeaderTitle>
            Component
        </CardHeaderTitle>
        <CardHeaderIcon>
            <Icon className="fa fa-angle-down" />
        </CardHeaderIcon>
    </CardHeader>
    <CardImage>
        <Image isRatio='4:3' src='https://via.placeholder.com/1280x960' />
    </CardImage>
    <CardContent>
        <Media>
            <MediaLeft>
                <Image isSize='48x48' src='https://via.placeholder.com/96x96' />
            </MediaLeft>
            <MediaContent>
                <Title isSize={4}>John Wick</Title>
                <Subtitle isSize={6}>@John Wick</Subtitle>
            </MediaContent>
        </Media>
        <Content>
            People Keep Asking If I’m Back, And I Haven’t Really Had An Answer, But Now, Yeah, I’m Thinking I’m Back.
            <br/>
            <small>11:09 PM - 30 October 2014</small>
        </Content>
    </CardContent>
</Card>
    </Column>
    <Column isSize={{ mobile: 8, default: '1/6'}}>
    <Card>
    <CardHeader>
        <CardHeaderTitle>
            Component
        </CardHeaderTitle>
        <CardHeaderIcon>
            <Icon className="fa fa-angle-down" />
        </CardHeaderIcon>
    </CardHeader>
    <CardImage>
        <Image isRatio='4:3' src='https://via.placeholder.com/1280x960' />
    </CardImage>
    <CardContent>
        <Media>
            <MediaLeft>
                <Image isSize='48x48' src='https://via.placeholder.com/96x96' />
            </MediaLeft>
            <MediaContent>
                <Title isSize={4}>John Wick</Title>
                <Subtitle isSize={6}>@John Wick</Subtitle>
            </MediaContent>
        </Media>
        <Content>
            People Keep Asking If I’m Back, And I Haven’t Really Had An Answer, But Now, Yeah, I’m Thinking I’m Back.
            <br/>
            <small>11:09 PM - 30 October 2014</small>
        </Content>
    </CardContent>
</Card>
    </Column>
    
</Columns>
            )
        }
    }