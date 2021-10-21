import React ,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Button,Alert} from  'react-bootstrap';
import {Link} from 'wouter'
import './../assets/scss/app.scss';
import './../assets/Css/register.css'
import { Formik, ErrorMessage  } from 'formik';
//Components
import Header from '../components/header.js';


export default function Register() {
const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
function postApi(datos){
    const PROXYURL = "https://gentle-sands-04799.herokuapp.com/";

    fetch(PROXYURL + "https://otakuapi.herokuapp.com/api/usuarios",{
      method:'POST',
      headers:{
        'content-type':'application/json',
      },body: JSON.stringify(datos)
    })
    .then(res => res.json())
    .then(res =>{
      if (res.auth){

        alert("usuario Creado.")
      }
    })
  }

    return(
        <>
         <Header/>
         <Formik

         initialValues={{
					nombre: '',
          mail:'',
          telefono:'',
          dir:'',
          contraseña:'',
          contraseñaConfirm:'',
          genero:'',
          estado:1,
				}}

         validate={(valores)=>{
          let errores ={}
          
          if(!valores.nombre){
						errores.nombre = 'Por favor ingresa un nombre'
					} else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
						errores.nombre = 'El nombre solo puede contener letras y espacios'
					}

          if(!valores.mail){
						errores.mail = 'Por favor ingresa un correo electronico'
					} else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.mail)){
						errores.mail = 'Ingrese un correo valido.'
					}

          if(!valores.telefono){
            errores.telefono = 'Por favor ingrese un telefono'
          }else if(!/^\+[1-9]{1}[0-9]{3,14}$/.test(valores.telefono)){
            errores.telefono= 'Ingrese un telefono valido'
          }

          if(!valores.dir){
            errores.dir ='Por favor ingrese una direccion'
          }

          if(!valores.contraseña){
            errores.contraseña = 'Por favor ingrese una contraseña'
          }else if (valores.contraseña.length < 4){
            errores.contraseña = 'La contraseña tiene que tenes mas de 4 caracteres'
          }

          if(!valores.contraseñaConfirm){
            errores.contraseñaConfirm = 'Por favor vuelva a poner la contraseña'
          }else if(valores.contraseñaConfirm !== valores.contraseña){
            errores.contraseñaConfirm = 'Vuelva a poner la misma contraseña'
          }
          return errores
         }}
         
         onSubmit={(valores, {resetForm}) => {
          postApi(valores)
					resetForm();
          cambiarFormularioEnviado(true);
					setTimeout(() => cambiarFormularioEnviado(false), 5000);

				}}


         >
           {({values, errors, handleSubmit, handleChange, handleBlur})=>(
             <>
             {formularioEnviado && <>
              {window.scrollTo(0, 0)}
              <div className="container-alert">
             <Alert className="alert" variant="success">Cuenta creada con exito</Alert>
             </div>
             </>}
          <div className="Form-Conteiner">
            
            <Form onSubmit={handleSubmit}>
              <h1 className="Titulo-H1"> Crear cuenta</h1>
              
              <Form.Group controlId="Name">
                <Form.Label>Nombre y Apellido</Form.Label>

                <Form.Control 
                size="md" 
                type="text" 
                name="nombre" 
                placeholder="Ej: Tomas Canosa"  
                //onChange={event => this.valueToState(event)}
                onChange={handleChange}
                value={values.nombre}
                onBlur={handleBlur}
                />
                <ErrorMessage name="nombre" component={() => (<div className="error">{errors.nombre}</div>)} />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control 
                size="md" 
                name="mail" 
                type="text" 
                placeholder="Ej: pintball004@gmail.com" 
                //onChange={event => this.valueToState(event)}
                onChange={handleChange}
                value={values.mail}
                onBlur={handleBlur}
                />
                <ErrorMessage name="mail" component={() => (<div className="error">{errors.mail}</div>)} />
              </Form.Group>
              

              <Form.Group controlId="Telefono">
                <Form.Label>Telefono (opcional)</Form.Label>
                <Form.Control 
                name="telefono" 
                size="md" 
                type="text" 
                placeholder="Ej: +5491169968822"
                onChange={handleChange}
                value={values.telefono}
                onBlur={handleBlur}
                />
                <ErrorMessage name="telefono" component={() => (<div className="error">{errors.telefono}</div>)} />
              </Form.Group>

              <Form.Group controlId="Dirrecion">
                <Form.Label>Dirrecion (Despues se puede Cambiar.)</Form.Label>
                <Form.Control 
                name="dir" 
                size="md" 
                type="text" 
                placeholder="Ej: Calle Falsa 123" 
                onChange={handleChange}
                value={values.dir}
                onBlur={handleBlur}
                />
                 <ErrorMessage name="dir" component={() => (<div className="error">{errors.dir}</div>)} />
              </Form.Group>

              <Form.Group controlId="Genero">
                <Form.Label>Genero</Form.Label>
                <Form.Control 
                name="genero" 
                as="select"  
                onChange={handleChange}
                value={values.genero}
                onBlur={handleBlur}
                >
                  <option>Masculino</option>
                  <option>Femenino</option>
                  <option>Otro</option>
                </Form.Control>
              </Form.Group>
              
            <Form.Group controlId="formBasicPassword"  >
              <Form.Label>Contraseña</Form.Label>
              <Form.Control 
              name="contraseña" 
              type="password"  
              onChange={handleChange}
              value={values.contraseña}
              onBlur={handleBlur}
              />
              <ErrorMessage name="contraseña" component={() => (<div className="error">{errors.contraseña}</div>)} />
            </Form.Group>

            <Form.Group controlId="formConfirmPassword">
              <Form.Label>Confirmar Contraseña</Form.Label>
              <Form.Control 
              name="contraseñaConfirm" 
              type="password"
              onChange={handleChange}
              value={values.contraseñaConfirm}
              onBlur={handleBlur}
              />
              <ErrorMessage name="contraseñaConfirm" component={() => (<div className="error">{errors.contraseñaConfirm}</div>)} />
              <Form.Text className="text-muted">
              No compartas tu contraseña con Nadie.
              </Form.Text>
            </Form.Group>
            
            <Form.Text className="Button-Conteiner">
              <Button 
              variant="dark" 
              type="submit"
              >
                Cuenta Creada
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
          )}

          </Formik>
        </>
    );
}

