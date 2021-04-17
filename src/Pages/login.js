import React,{Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './../assets/scss/app.scss';
import "./../assets/Css/app.css"
//Components
import Header from '../components/cabezera.js';
import Footer from "../components/footer.js";
import Nav from "../components/nav.js";

export default class Login extends Component{

  render(){
    
    return(
        <>
          <Header />
          <Nav />
          <br />
          <br />
          <br />
          <br />
          <br />
          <h1>ACA HAY UN LOGIN</h1>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Footer/>   
        </>
    );
}
}
