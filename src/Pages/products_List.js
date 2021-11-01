import React from 'react'
import Header from '../components/header.js';
import Footer from "../components/footer.js";
import Nav from "../components/nav.js";
import List from "./../components/list.js";
import '../assets/Css/list.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Products_List({cat , type , nombre}) {
    
    
    return(

            <>      
            <Header input="True"/>
                <Nav />
                <h1 className="Title">{type !=='null'? type: decodeURI(nombre)}</h1>
                <List cat={cat} type={type} title={ decodeURI(nombre)}/>
                <Footer />       
            </>
            
        
        )
    }


