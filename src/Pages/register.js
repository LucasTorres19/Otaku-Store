import React,{Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Button} from  'react-bootstrap';
import {Link} from 'wouter'
import './../assets/scss/app.scss';
import './../assets/Css/register.css'
//Components
import Header from '../components/header.js';


export default class register extends Component{

  constructor(props){
    super(props);
    
    this.state ={
      nombre:"",
      estado:1,
      mail:"",
      genero:"Masculino",
      contraseña:"",
      dir:"",
      telefono: 9113243543

    }
  }

  onSubmit(evt){
    const PROXYURL = "https://gentle-sands-04799.herokuapp.com/";

    evt.preventDefault()
    fetch(PROXYURL + "https://otakuapi.herokuapp.com/api/usuarios",{
      method:'POST',
      headers:{
        'content-type':'application/json',
      },body: JSON.stringify(this.state)
      
    })
    .then(res => res.json())
    .then(res =>{

      if (res.auth){

        alert("usuario Creado.")
      }
    })
  }

  valueToState  = (evt) =>{
  
  const {name,value} = evt.target

  this.setState({
    [name]:value 
  })

  }

  render(){
     
    return(
        <>
         <Header/>
          <div className="Form-Conteiner">
            <Form onSubmit={this.onSubmit.bind(this)}>
              <h1 className="Titulo-H1"> Crear cuenta</h1>
              
              <Form.Group controlId="Name">
                <Form.Label>Nombre y Apellido</Form.Label>
                <Form.Control size="md" type="text" name="nombre" placeholder="Ej: Tomas Canosa"  onChange={event => this.valueToState(event)}/>
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control size="md" name="mail" type="email" placeholder="Ej: pintball004@gmail.com" onChange={event => this.valueToState(event)}/>
              </Form.Group>

              <Form.Group controlId="Telefono">
                <Form.Label>Telefono (opcional)</Form.Label>
                <Form.Control name="telefono" size="md" type="number" placeholder="Ej: 91169968822"/>
              </Form.Group>

              <Form.Group controlId="Dirrecion">
                <Form.Label>Dirrecion (Despues se puede Cambiar.)</Form.Label>
                <Form.Control name="dir" size="md" type="text" placeholder="Ej: Calle Falsa 123" onChange={event => this.valueToState(event)}/>
              </Form.Group>

              <Form.Group controlId="Genero">
                <Form.Label>Genero</Form.Label>
                <Form.Control name="genero" as="select"  onChange={event => this.valueToState(event)}>
                  <option>Masculino</option>
                  <option>Femenino</option>
                  <option>Otro</option>
                </Form.Control>
              </Form.Group>
              
            <Form.Group controlId="formBasicPassword"  >
              <Form.Label>Contraseña</Form.Label>
              <Form.Control name="contraseña" type="password"  onChange={event => this.valueToState(event)}/>
            </Form.Group>

            <Form.Group controlId="formConfirmPassword">
              <Form.Label>Confirmar Contraseña</Form.Label>
              <Form.Control name="contraseña" type="password"/>
              <Form.Text className="text-muted">
              No compartas tu contraseña con Nadie.
              </Form.Text>
            </Form.Group>
            
            <Form.Text className="Button-Conteiner">
              <Button variant="dark" type="submit">
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
