import react from 'react';
import Head from 'next/head';
import Header from './header';
import Footer from './footer'



export default props=>{
    return(
        <div>
        <Head>
       <script src="https://use.fontawesome.com/releases/v5.0.4/js/all.js"></script>
       {/* <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous"></link> */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css"></link>
        
    </Head>
    <Header/>
    {props.children}
    <Footer/>
</div>
    )

}