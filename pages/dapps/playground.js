import react, {Component} from 'react';
import Layout from '../../components/layout'
import {Message, MessageBody, MessageHeader, Delete, Card, Content, Columns, Column, CardHeader, CardHeaderTitle} from 'bloomer'
import { Container, Title} from 'bloomer'
import web3 from '../../ethereum/web3'
import Web3 from 'web3';


export default class Dapps extends Component {
    state ={
        metamask: '',
        message: false,
        errorMessage: ''

    }
    static async getInitialProps() {
        // const w = await web3.eth.getAccounts((err, result)=>{
        //     return result;
        // })
        // console.log("checking web3", w)
        let accounts;
    //    await  web3.eth.getAccounts(function(err, result){
    //         if(err){
    //         return {accounts:err}
    //         }else{
    //             return {accounts: result}
    //         }
    //     })
    return {}
   

    }
    checkMetamask(w){
       
        if(w !== ''){
            return (<Message isColor="success">
            <MessageHeader>
                <p>Metamask</p>
                <Delete />
            </MessageHeader>
            <MessageBody>
             You have metamask installed
            </MessageBody>
        </Message>)
            }
        else{
            return (<Message isColor="danger">
            <MessageHeader>
                <p>Metamask</p>
                <Delete />
            </MessageHeader>
            <MessageBody>
             You are not connected to Metamask. Please install Metamask to experience all the features of this page!!
            </MessageBody>
        </Message>)

        }
  }
//   getMyAccounts(w){
//       //let version;
//       console.log("get accounts",w.eth.getAccounts(function(err, result){
//           return result;
//       }))
//       w.eth.getAccounts(function(err, result){
//         return result;
//     })
//   }
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
       <Content></Content>
   </Card>
   </Column>
   <Column>
   <Card>
   <CardHeader>
       <CardHeaderTitle>
            Version
        </CardHeaderTitle>
       </CardHeader>
       <Content>{this.props.accounts}</Content>
   </Card>
   </Column>
   </Columns>

   
   </div>
           </Card>
           
            
             
              </Container> </Layout>)
        }

    }