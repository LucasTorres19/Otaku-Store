import React,{Component} from 'react'
import {Form} from  'react-bootstrap';

export default class cabezera extends Component{


    render(){

        const styles ={

            icon:{
                width:"50px",
                 
            },
            div:{
                width:"100%",
                display:"flex",
                justifyContent:"space-between",
                alignItems:"center",      
            },
            iconhd:{
                width:"30px",
                height:"30px",
                marginRight:"20px",
            },
            
        }

        
        return(

            <React.Fragment>
                <div  style={styles.div} id='header'>
                    <img  style={styles.icon} id='icon' src="/logo_mqm.png" />
                    <div>
                        <Form.Control type="text" placeholder="Buscar Productos" size='lg' />                    
                    </div>
                    <div>
                        <img style={styles.iconhd} src='/cart-plus-solid.svg'></img>
                        <img style={styles.iconhd} src='/user-solid.svg'></img>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}