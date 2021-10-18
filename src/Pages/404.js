import React from "react";
import Header from '../components/header.js';
import '../assets/Css/404.css'
export default function notfound (){

    return <>
        <Header/>
        <div className="container-404">
            <h1 className="container-404__h1">404 not found</h1>
            <p className="container-404__p">Como has llegado aqui?</p>
            <img className="container-404__img" alt="logo not found" src="https://i.pinimg.com/originals/8b/d8/c4/8bd8c42fc38edf71fbb2f9d51cf08345.png" />
        </div>
    </>

}