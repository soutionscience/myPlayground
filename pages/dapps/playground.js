import react, {Component} from 'react';
import Layout from '../../components/layout'
import {Message, MessageBody, MessageHeader, Delete, 
    Button, Card, Content, Columns, Column, 
    CardHeader, CardHeaderTitle} from 'bloomer'
import { Container, Title} from 'bloomer'
import web3 from '../../ethereum/web3'




export default class Dapps extends Component {
    state ={
        metamask: '',
        message: false,
        errorMessage: '',
        mainAccount: '',
        version: '',
        mainAccountBalance: ''

    }
    // getAccountList = async (web3) =>{
    //    const accounts = await web3.eth.getAccounts()
    //     this.setState({mainAccount: accounts[0]})
    //     console.log(this.state.mainAccount)
    //     return(<div>the hell?</div>)

    //     // const coinbase = await web3.eth.coinbase;
    //     // const balance = await web3.eth.getBalance(accounts[0])
    //     // this.setState({mainAccountBalance: balance})
      

    // }
   
    checkMetamask(w){
       
        if(w !== ''){
            return (<div className='message is-primary'>
            <MessageHeader>
                <p>Metamask</p>
                <Delete />
            </MessageHeader>
            <MessageBody>
             You have metamask installed
            </MessageBody>
        </div>)
            }
        else{
            return (<div className = 'message is-danger'>
            <MessageHeader>
                <p>Metamask</p>
                <Delete />
            </MessageHeader>
            <MessageBody>
             You are not connected to Metamask. Please install Metamask to experience all the features of this page!!
            </MessageBody>
        </div>)

        }
  }

    render() {
       
      
        return ( <Layout>

            <Container>
            <Title isSize = {4}> The playground page </Title>
            {this.checkMetamask(web3)}
           <Card style ={{padding: '8px'}}>
           <Content>
    <h1>Playground</h1>
    <p>We will interact with the blockchain technologies to check balances, unlock accounts, transfer coins  & more</p>
</Content>
   <div style ={{background: 'grey', height: '400px', color: 'white', padding: '8px'}}>
   <h1>Connect</h1>
   <Columns>
   <Column>
   <Card>
       <CardHeader>
       <CardHeaderTitle>
           Accounts
        </CardHeaderTitle>
       </CardHeader>
       <Content>what is in: {this.state.mainAccount}</Content>
   </Card>
   </Column>
   <Column>
   <Card>
   <CardHeader>
       <CardHeaderTitle>
            Version
        </CardHeaderTitle>
       </CardHeader>
       <Content>
          {this.state.mainAccountBalance}
       </Content>
   </Card>
   </Column>
   </Columns>

   
   </div>
           </Card>
           
            
             
              </Container> </Layout>)
        }

    }