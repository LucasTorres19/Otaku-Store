import Header from '../components/header.js';
import React,{Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Button} from  'react-bootstrap';
import {Link} from 'wouter'
import './../assets/scss/app.scss';
import './../assets/Css/login.css';


export default class Login extends Component{

  render(){
     
    return(
        <>
         <Header/>
          <div className="Form-Conteiner">
            <Form>
              <h1 className="Titulo-H1"> Inicia Sesion</h1>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control size="md" type="email" placeholder="Ejemplo50@gmail.com" />
              </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="ContraseñaFalsa123" />
              <Form.Text className="text-muted">
              Olvidaste tu contraseña?
              </Form.Text>
            </Form.Group>
            <Form.Text className="Button-Conteiner">
              <Button variant="dark" type="submit" >
                Iniciar Sesion
              </Button>
            </Form.Text>
            <Form.Text className="text-muted">
            ¿No tenés cuenta aún? 
              <Link to="/register">
                Crear cuenta
              </Link>
              </Form.Text>
            </Form>
          </div> 
        </>
    );
}
}
