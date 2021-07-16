import React,{Component} from 'react'
import Header from '../components/cabezera.js';
import Footer from "../components/footer.js";
import Nav from "../components/nav.js";
import List from "../components/List.js"
import '../assets/Css/list.css'
//estilos
import 'bootstrap/dist/css/bootstrap.min.css';

export default class home extends Component{
    
   render(){

        return(
        <>
            <Header input="True"/>
            <Nav />
            <h1 className="Title">{this.props.type}</h1>
            <List cat={this.props.cat} type={this.props.type}/>
            <Footer />   
        </>
        )
    }

}