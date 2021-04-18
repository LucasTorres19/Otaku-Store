import React,{Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Button} from  'react-bootstrap';
import {Link} from 'wouter'
import './../assets/scss/app.scss';
import './../assets/Css/register.css'
//Components
import Header from '../components/cabezera.js';

export default class Login extends Component{

  render(){
     
    return(
        <>
         <Header/>
          <div className="Form-Conteiner">
            <Form>
              <h1 className="Titulo-H1"> Crear cuenta</h1>
              
              <Form.Group controlId="Name">
                <Form.Label>Nombre y Apellido</Form.Label>
                <Form.Control size="md" type="text" placeholder="Ej: Tomas Canosa" />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control size="md" type="email" placeholder="Ej: pintball004@gmail.com" />
              </Form.Group>

              <Form.Group controlId="Telefono">
                <Form.Label>Telefono (opcional)</Form.Label>
                <Form.Control size="md" type="tel" placeholder="Ej: 91169968822" />
              </Form.Group>

              <Form.Group controlId="Dirrecion">
                <Form.Label>Dirrecion (Despues se puede Cambiar.)</Form.Label>
                <Form.Control size="md" type="tel" placeholder="Ej: Calle Falsa 123" />
              </Form.Group>

              <Form.Group controlId="Genero">
                <Form.Label>Genero</Form.Label>
                <Form.Control as="select" defaultValue="Hexagono">
                  <option>Masculino</option>
                  <option>Femenino</option>
                  <option>Hexagono</option>
                  <option>Otro</option>
                </Form.Control>
              </Form.Group>
              
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password"  />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Confirmar Contraseña</Form.Label>
              <Form.Control type="password"  />
              <Form.Text className="text-muted">
              No compartas tu contraseña con Nadie.
              </Form.Text>
            </Form.Group>
            
            <Form.Text className="Button-Conteiner">
              <Button variant="dark" type="submit" >
                Registrarse
              </Button>
            </Form.Text>
            
            <Form.Text className="text-muted">
            ¿Ya tenes Cuenta? 
              <Link to="/login">
                ¡Inicia Sesion!
              </Link>
              </Form.Text>

            </Form>
          </div> 
        </>
    );
}
}
