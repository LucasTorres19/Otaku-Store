import React from "react";
import { Spinner } from "react-bootstrap";
import './../assets/Css/spinner.css';

export default function SpinnerCustom(){
    return(
        <div className="conteiner">
            <span className="conteiner-img-spinner">
                <Spinner animation="grow" variant="danger" className="Spinner-img"/>
            </span>
        </div>
    )
}